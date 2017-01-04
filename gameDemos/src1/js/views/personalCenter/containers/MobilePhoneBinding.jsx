import React from 'react';

export default class extends React.Component {
    componentWillMount(){
        document.title = '绑定手机号';
    }
    constructor(props) {
        super(props);
        this.state = {
            password:{
                sign:'password',
                imgSrc: '/images/eye-close.png'
            },
            validate:{
                fir:true,
                liked:true,
                text:'点击获取',
                style:'',
                count:60
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.getVerificationCode = this.getVerificationCode.bind(this);
    }
    handleClick() {
        let sign = this.state.password.sign;
        if(sign=='password'){
            this.setState({
                password:{
                    imgSrc : '/images/eye-open.png',
                    sign: 'text'
                }
            });
        }else {
            this.setState({
                password:{
                    imgSrc : '/images/eye-close.png',
                    sign: 'password'
                }
            });
        }
    }
    getVerificationCode() {
        let validate = this.state.validate,
            fir = validate.fir,
            liked = validate.liked;
        if(fir){
            validate.fir = false;
            this.setState({
                validate: validate
            });
        }
        if(liked){
            let _this = this;
            validate.liked = false;
            _this.timer = setInterval(function () {
                var count = _this.state.validate.count;
                count -= 1;
                validate.count = count;
                validate.text =count + 's';
                validate.style = 'clicked';
                if (count < 1) {
                    window.clearInterval(_this.timer);
                    validate.liked = true;
                    validate.text = '重新发送';
                    validate.style = '';
                    count = 60;
                    validate.count = count;
                    _this.setState({
                        validate: validate
                    });
                }
                _this.setState({
                    validate:validate
                });
            }, 1000);
        }
    }
    render() {
        return (
            <div className="phonebinding">
                <div className="row">
                    <div className="title">手机号</div>
                    <div className="content"><input type="text" placeholder="请输入您的手机号"/></div>
                </div>
                <div className="row">
                    <div className="title">密码</div>
                    <div className="content"><input type={this.state.password.sign} placeholder="6-16位字母/数字" id="password"/>
                        <div className="eye" onClick={this.handleClick}><img src={this.state.password.imgSrc} alt=""/></div>
                    </div>
                </div>
                <div className="row">
                    <div className="title">确认密码</div>
                    <div className="content"><input type="password" placeholder="请再次输入密码"/>
                    </div>
                </div>
                <div className="row2">
                    <div className="title">验证码</div>
                    <div className="content"><input type="text" placeholder="请输入验证码"/>
                        <div className={'clickbutton ' + this.state.validate.style} onClick={this.getVerificationCode}>{this.state.validate.text}</div>
                    </div>
                </div>
                <div className="binding">
                    确认绑定
                </div>
            </div>
        )
    }
}