import React from 'react';
import GameDetailGiftItem from './GameDetailGiftItem.jsx';

export default class extends React.Component {

    getItemViews(datas, openDialog, openCollarNumberDialog) {
        return _.map(datas, function(item) {
            return (
                <GameDetailGiftItem key={_.uniqueId()} openDialog={openDialog} openCollarNumberDialog={openCollarNumberDialog}/>
            )
        })
    }

    render() {
        let datas = new Array(20);
        let {openDialog, openCollarNumberDialog} = this.props;
        let itemViews = this.getItemViews(datas, openDialog, openCollarNumberDialog);
        return (
            <div className="game-gift game-box">
                <div className="box-header">
                    <h2 className="header-title">游戏礼包</h2>
                </div>
                <div className="box-body">
                    {itemViews}
                </div>
            </div>
        )
    }
}