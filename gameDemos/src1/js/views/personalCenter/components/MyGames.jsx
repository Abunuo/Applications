import React from 'react';
import Games from './Games.jsx';

export default class extends React.Component {

    render() {
        return (
            <div className="mygames">
                <h1>我的游戏</h1>
                <Games/>
            </div>
        )
    }
}