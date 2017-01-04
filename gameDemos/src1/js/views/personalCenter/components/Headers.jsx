import React from 'react';
import {Link} from 'react-router';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sign:false,
            imgSrc: '/images/qd.png'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let sign = this.state.sign;
        if(!sign){
            this.setState({
                imgSrc : '/images/yqd.png',
                sign: !sign
            });
        }
    }

    render() {
        return (
            <div className="headers">
                <div className="header-img">
                    <Link to="/personalCenter/info"><img src="/images/touxiang.png" alt=""/></Link>
                </div>
                <div className="myname">
                    水子灵
                </div>
                <div className="myinformation">
                    <span className="myid">ID：189****8484</span>
                    <span className="myintegral">积分：108</span>
                </div>
                <div className="sign" onClick={this.handleClick}><img src={this.state.imgSrc} alt=""/></div>
            </div>
        )
    }
}