import React from 'react';
import GiftList from './GiftList.jsx';
import GameTodayList from './GameTodayList.jsx'
import GameNextWeekList from './GameNextWeekList.jsx';
import ReactSwipe from 'react-swipe';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    getTabClass(idx, activeIndex) {
        let cls = 'gift-tab-item';
        if(idx == activeIndex) {
            cls += ' active';
        }
        return cls;
    }

    onTabClick(index) {
        this.refs.swipe.slide(index);
    }

    render() {
        let {openDialog, openCollarNumberDialog} = this.props;
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
            <div className="gift-tab-box">
                <div className="gift-tab">
                    <ul className="gift-tab-container">
                        <li className={this.getTabClass(0, activeIndex)}>
                            <span onClick={this.onTabClick.bind(this, 0)}>礼包列表</span>
                        </li>
                        <li className={this.getTabClass(1, activeIndex)}>
                            <span onClick={this.onTabClick.bind(this, 1)}>今日开服</span>
                        </li>
                        <li className={this.getTabClass(2, activeIndex)}>
                            <span onClick={this.onTabClick.bind(this, 2)}>未来一周</span>
                        </li>
                    </ul>
                </div>
                <div className="game-box">
                    <ReactSwipe swipeOptions={swipeOptions} ref="swipe">
                        <div>
                            <GiftList openDialog={openDialog} openCollarNumberDialog={openCollarNumberDialog}/>
                        </div>
                        <div>
                            <GameTodayList/>
                        </div>
                        <div>
                            <GameNextWeekList/>
                        </div>
                    </ReactSwipe>
                </div>
            </div>
        )
    }
}