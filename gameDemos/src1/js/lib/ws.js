const urls = {
    signIn: '/auth/sign_in',
    forbidden: '/errors/403',
    internalServerError: '/errors/500',
    notFound: '/errors/404'
};

const ResponseCode = {
    SUCCESS: 0,
    VALIDATION_ERROR: 100005
};


function Response(code, msg, data) {
    this.code = code != null ? code : null;
    this.msg = msg != null ? msg : null;
    this.data = data != null ? data : null;
}

/**
 *
 * @param promise 异步请求结果的Promise对象
 * @param customHandler 自定义处理函数(response, actions) => Boolean
 * @param actions redux Action
 */
export async function handleResponse(response, customHandler, actions) {
    // promise is required, customHandler and actions are optional.
    if(arguments.length == 2 && typeof arguments[1] !== 'function') {
        actions = arguments[1];
    } else if(arguments.length === 3 && typeof arguments[1] !== 'function') {
        actions = arguments[1];
        if(typeof arguments[2] === 'function') {
            customHandler = arguments[2];
        }
    }
    // start to process response info
    let isHandled = false,
        code = response.code,
        msg = response.msg,
        rt = null;
    if(typeof customHandler === 'function') {
        isHandled = customHandler(response, actions);
    }
    if(!isHandled) {
        // 如果尚未处理,则进入通用处理逻辑
        if(code == 0) {
            rt = response.data;
        } else if(code >= 400 && code <= 499) {
            switch (code) {
                case 401 :
                    window.location.href = urls.signIn;
                    break;
                case 403 :
                    window.location.href = urls.forbidden;
                    break;
                default:
                    window.location.href = urls.notFound;
                    break;
            }
        } else if(code >= 500 && code <= 599) {
            window.location.href = urls.internalServerError;
        } else if(msg != null) {
            if(actions && actions.utilAction && typeof actions.utilAction.showToast === 'function') {
                actions.utilAction.showToast(msg);
            } else {
                alert(msg);
            }
        }
    }
    return rt;
}

function parseQueryParams(data) {
    let queryStr = "";
    if(data) {
        queryStr += "?";
        for(let p in data) {
            if(data[p] != null) {
                queryStr += encodeURIComponent(p) + "=" + encodeURIComponent(data[p]) + "&";
            }
        }
    }
    queryStr = queryStr.slice(0, queryStr.length - 1);
    return queryStr;
}

async function commonHandler(options) {
    let result = null;
    try {
        let response = await fetch(options.url, options);
        let data;
        if(response.ok) {
            data = await response.json();
            result = data;
        } else {
            data = await response.text();
            result = new Response(response.status, data);
        }

    } catch (error) {
        console.log(error);
    }
    return result;
}

async function wsGet(options) {
    options.method = "GET";
    options.credentials = "include";
    options.headers = _.assign({
        "Content-Type": "application/json"
    }, options.headers);
    if(options.data) {
        options.url = options.url + parseQueryParams(options.data);
    }
    return await commonHandler(options);
}

async function wsPost(options) {
    options.method = "POST";
    options.credentials = "include";
    options.headers = _.assign({
        "Content-Type": "application/json"
    }, options.headers);
    if(options.data) {
        options.body = JSON.stringify(options.data);
    }
    return await commonHandler(options);
}

async function wsDelete(options) {
    options.method = "DELETE";
    options.credentials = "include";
    options.headers = _.assign({
        "Content-Type": "application/json"
    }, options.headers);
    return await commonHandler(options);
}

export async function ws(method, options) {
    let result;
    method = method ? method.toUpperCase() : "";
    switch (method) {
        case "GET":
            result = await wsGet(options);
            break;
        case "POST":
            result = await wsPost(options);
            break;
        case "DELETE":
            result = await wsDelete(options);
            break;
        default:
            result = null;
    }
    if(result) {
        if(options.handler && options.actions) {
            result = await handleResponse(result, options.handler, options.actions);
        } else if(options.handler) {
            result = await handleResponse(result, options.handler);
        } else if(options.actions) {
            result = await handleResponse(result, options.actions);
        } else {
            result = await handleResponse(result);
        }
    }
    return result;
}
