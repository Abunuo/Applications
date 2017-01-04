import React from 'react';
import Headers from '../components/Headers.jsx';
import MyGames from '../components/MyGames.jsx';

export default class extends React.Component {
    componentWillMount(){
        document.title = '雪球游戏-游戏中心';
    }
    render() {
        return (
            <div className="personal-games">
                <Headers/>
                <MyGames/>
            </div>
        )
    }
}