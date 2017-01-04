import React from 'react';
import HotGameList from './HotGameList.jsx';
import GameInfoList from './GameInfoList.jsx';
import NewZoneGameList from './NewZoneGameList.jsx';
import ReactSwipe from 'react-swipe';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    getTabClass(idx, activeIndex) {
        let cls = 'game-tab-item';
        if (idx == activeIndex) {
            cls += ' active';
        }
        return cls;
    }

    onTabClick(index) {
        this.refs.swipe.slide(index);
    }

    render() {
        let activeIndex = this.state.activeIndex;
        let _this = this;
        let swipeOptions = {
            continuous: false,
            callback: function(index, elem) {
                _this.setState({
                    activeIndex: index
                });
            }
        };
        return (
            <div className="game-tab-box">
                <div className="game-tab">
                    <ul className="game-tab-container">
                        <li className={this.getTabClass(0, activeIndex)}>
                            <span onClick={this.onTabClick.bind(this, 0)}>热门</span>
                        </li>
                        <li className={this.getTabClass(1, activeIndex)}>
                            <span onClick={this.onTabClick.bind(this, 1)}>新上架</span>
                        </li>
                        <li className={this.getTabClass(2, activeIndex)}>
                            <span onClick={this.onTabClick.bind(this, 2)}>资讯</span>
                        </li>
                        <li className={this.getTabClass(3, activeIndex)}>
                            <span onClick={this.onTabClick.bind(this, 3)}>新开服</span>
                        </li>
                    </ul>
                </div>
                <div className="game-box">
                    <ReactSwipe swipeOptions={swipeOptions} ref="swipe">
                        <div>
                            <HotGameList/>
                        </div>
                        <div>
                            <HotGameList/>
                        </div>
                            <div>
                                <GameInfoList/>
                            </div>
                        <div>
                            <NewZoneGameList/>
                        </div>
                    </ReactSwipe>
                </div>
            </div>
        )
    }

}