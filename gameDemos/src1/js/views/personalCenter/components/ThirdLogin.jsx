import React from 'react';

export default class extends React.Component {

    render() {
        return (
            <div className="thirdlogin myinfo">
                <div className="title">第三方登录</div>
                <div className="assistor"><img src="/images/assistor.png" alt=""/></div>
                <div className="loginchoose">
                    <img src="/images/qq2.png" alt=""/>
                    <img src="/images/wx1.png" alt=""/>
                    <img src="/images/wb2.png" alt=""/>
                </div>
            </div>
        )
    }
}