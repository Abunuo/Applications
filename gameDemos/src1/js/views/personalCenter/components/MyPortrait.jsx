import React from 'react';

export default class extends React.Component {

    render() {
        return (
            <div className="myportrait myinfo">
                <div className="title">头像</div>
                <div className="assistor"><img src="/images/assistor.png" alt=""/></div>
                <div className="head-img"><img src="/images/touxiang.png" alt=""/></div>
            </div>
        )
    }
}