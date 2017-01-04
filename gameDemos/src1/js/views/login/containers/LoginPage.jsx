import React from 'react';

export default class extends React.Component {
    componentWillMount(){
        document.title = '登录';
    }
    render() {
        return (
            <div>
                <div className="login-header">
                    <img className="login-icon"/>
                </div>
                <div className="login-form">
                    <div className="form-item">
                    </div>
                    <div className="form-item">
                    </div>
                    <div className="form-errors">
                        <div className="form-error">
                        </div>
                    </div>
                    <div className="login-btn">
                    </div>
                </div>
                <div className="register-info">
                    <Link to="/register">没有账号，去注册？</Link>
                </div>
                <div className="login-thirdparty">
                    <div className="login-thirdparty-title"></div>
                    <div className="login-thirdparty-btn">
                        <img className="btn-thirdparty btn-qq"></img>
                        <img className="btn-thirdparty btn-weixin"></img>
                        <img className="btn-thirdparty btn-weibo"></img>
                    </div>
                </div>
            </div>
        )
    }

}