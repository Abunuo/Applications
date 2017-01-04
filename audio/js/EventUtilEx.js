/**
 * Created by Administrator on 2016/8/11.（8）
 */
var EventUtil = {

    //获取事件
    getEvent:function(event){
        return event || window.event;
    },
    //获取目标源
    getTarget:function(event){
        return event.target || event.srcElement;
    },
    //获取非行内样式
    getStyle:function(Dom,strName){
        if(Dom.currentStyle){
            return parseInt(Dom.currentStyle[strName]);
        }else {
            return parseInt(window.getComputedStyle(Dom,false)[strName]);
        }
    },
    //获取滚动条高度
    getScrollTop:function(){
    	return document.documentElement.scrollTop||document.body.scrollTop;
    },
    //获取屏幕宽度
    getScreenWidth:function(){
    	return document.documentElement.clientWidth||document.body.clientWidth;
    },
    //获取屏幕高度
    getScreenHeight:function(){
    	return document.documentElement.clientHeight||document.body.clientHeight;
    },
   /* //-----获取浏览器窗口的宽度----------
    getWindowsWidth:function(){
        return  document.documentElement.clientWidth||document.body.clientWidth;
    },*/
    /*获得键盘值*/
    getCharCode:function(event){
        if(typeof event.charCode == 'number'){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    },
    
    //获取随机颜色(rgb方式或#方式)
    getRandomColor:function() {
        var str="000000"+Math.floor(Math.random()*0x1000000).toString(16);
        return "#"+str.substr(-6);
    },
    /*getRandomColor:function(){
		   return "rgb("+Math.floor(Math.random()*256)+","
				+Math.floor(Math.random()*256)+","
				+Math.floor(Math.random()*256)+")";
	},*/
    //阻止冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    },
    //阻止默认事件行为
    preventDefault:function(event){
       if(event.preventDefault){
           event.preventDefault(event);
       }  else{
           event.returnValue = false;
       }
       return false;
    },
    //Ajax封装
    doAjax: function(url,method,callback,fe){
		if(!method){
			method = "get";
		}
		var xhr;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					callback(xhr.responseText);
				}else{
					if(fe){
						fe();
					}
			    }
			}
		}
		xhr.open(method,url,true);
		xhr.send();
	},
    
    
    
    //获取鼠标点击事件
    /**
     * 返回鼠标按键键值
     * @param  {[Object]} event [当前鼠标事件]
     * @return {[number]}       [0:左键、1：滑轮键、3：右键]
     * 老版本的IE并没有遵守W3C的规范，它的button属性含义如下
     *1鼠标左键 2鼠标右键 3左右同时按 4滚轮 5左键加滚轮 6右键加滚轮 7三个同时

     */
    getButton: function(event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:return 0;break;
                case 2:
                case 6:return 2;break;
                default:return 1;break;
            }
            /*if (event.button == 0 || event.button == 1 || event.button == 3 || event.button == 5 || event.button == 7) {
                return 0;
            } else if (event.button == 2 || event.button == 6) {
                return 2;
            } else {
                return 1;
            }*/
        }
    },
    //监听事件（最好用监听事件，少直接绑定事件）优点：不会被覆盖，同时执行
    addEventListener:function(element,type,func){
        if(element.addEventListener){
            element.addEventListener(type,func,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,func);
        }else{
            element["on"+type]=func;
        }
    },
    //移除监听事件
    removeEventListener:function(element,type,func){
        if(element.removeEventListener){
            element.removeEventListener(type,func,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type);
        }else{
            element["on"+type]=null;
        }
    },
    
    /*滑轮*/
    getWheelDelta:function(event){
        if(event.wheelDelta){
            return (client.engine.opera&&client.engine.opera<9.5?-event.wheelDelta:event.wheelDelta);
        }else{
            return -event.detail*40;
        }
    },
    /*IE8及以前的浏览器的event不支持pageY属性*/
    getPageY:function(event){
        if(event.pageY === undefined){
            //scrollTop属性严格模式属于<body>节点对象，混杂模式属于<html>节点对象
            return event.clientY+(document.body.scrollTop||document.documentElement.scrollTop);
        }else{
            return event.pageY;
        }
    },
    /*IE8及以前的浏览器的event不支持pageX属性*/
    getPageX:function(event){
        if(event.pageX === undefined){
            //scrollLeft属性严格模式属于<body>节点对象，混杂模式属于<html>节点对象
            return event.clientX+(document.body.scrollLeft||document.documentElement.scrollLeft);
        }else{
            return event.pageX;
        }
    },



    //Cookie 封装（cookie的存储与获取、修改【覆盖】、删除）
    setCookie:function(name,value,timer){
        var date = new Date();
        date.setDate(date.getDate()+timer);
        document.cookie = encodeURIComponent(name)+"="+encodeURIComponent(value)+";expires="+date;
    },
    getCookieValue:function (name) {
        var cookieValue = "";
        var strCookie = document.cookie;
        var arrCookie = strCookie.split("; ");
        for(var i = 0; i < arrCookie.length; i++){
            var arrItem = arrCookie[i].split("=");
            if (arrItem[0] == name){
                cookieValue = arrItem[1];
            }
        }
        return decodeURIComponent(cookieValue);
    },
    getCookieKeyValue:function(name) {
        var keyValue =[];
        var strCookie = document.cookie;
        var arrCookie = strCookie.split("; ");
        for(var i = 0; i < arrCookie.length; i++){
            var arrItem = arrCookie[i].split("=");
            if (arrItem[0] == encodeURIComponent(name)){
                cookieValue[0] = decodeURIComponent(arrItem[0]);
                cookieValue[1] = decodeURIComponent(arrItem[1]);
            }
        }
        return keyValue;
    },
    removeCookie:function(name){
        EventUtil.setCookie(name,"",-1);
    },


    //兼容IE的className
    byClassName: function (className) {
        var elementList = [];
        var tagList = document.getElementsByTagName("*");
        for (var i = 0; i < tagList.length; i++) {
            var classNameCurr = tagList[i].getAttribute("class");//" c1  c11   c3  c1"    ['c1','']
            if(classNameCurr != ""){
                var arrClass = classNameCurr.split(" ");
                for (var j = 0; j < arrClass.length; j++) {
                    if (arrClass[j] == className) {
                        elementList.push(tagList[i]);
                        break;
                    }
                }
            }
        }
        return elementList;
    }


}































