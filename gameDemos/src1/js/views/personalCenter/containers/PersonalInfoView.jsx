import React from 'react';
import MyPortrait from '../components/MyPortrait.jsx';
import MyNickname from '../components/MyNickname.jsx';
import MyPhone from '../components/MyPhone.jsx';
import ThirdLogin from '../components/ThirdLogin.jsx';
import Exit from '../components/Exit.jsx';

export default class extends React.Component {
    componentWillMount(){
        document.title = '个人信息';
    }
    render() {
        return (
            <div className="personal-info">
                <MyPortrait/>
                <MyNickname/>
                <MyPhone/>
                <ThirdLogin/>
                <Exit/>
            </div>
        )
    }
}