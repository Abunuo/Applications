import React from 'react';
import {Link} from 'react-router';

export default class extends React.Component {

    render() {
        return (
            <div className="myphone myinfo">
                <Link to="/personalCenter/phone">
                    <div className="title">手机号</div>
                    <div className="assistor"><img src="/images/assistor.png" alt=""/></div>
                    <div className="binding">去绑定</div>
                </Link>
            </div>
        )
    }
}