import React from 'react';
import PersonalShortHeader from '../../common/PersonalShortHeader.jsx';
import ImageSwitcher from "../components/ImageSwitcher.jsx";
import RecentGameList from '../components/RecentGameList.jsx';
import GameTabBox from '../components/GameTabBox.jsx';

export default class extends React.Component {
    componentWillMount(){
        document.title = '雪球游戏-游戏中心';
    }
    constructor(props) {
        super(props);
        this.handleRefresh = this.handleRefresh.bind(this);
    }

    handleRefresh() {
        console.log(1);
    }

    render() {
        return (
            <div>
                <PersonalShortHeader/>
                <ImageSwitcher/>
                <RecentGameList/>
                <div className="game-zone-separator"></div>
                <GameTabBox/>
            </div>
        )
    }

}