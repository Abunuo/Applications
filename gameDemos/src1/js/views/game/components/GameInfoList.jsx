import React from 'react';
import GameInfoItem from './GameInfoItem.jsx';

export default class extends React.Component {

    getItemViews(datas) {
        return _.map(datas, function(item) {
            return <GameInfoItem key={_.uniqueId()}/>
        });
    }

    render() {
        let datas = new Array(20);
        let itemViews = this.getItemViews(datas);
        return (
            <div className="game-info-container">
                {itemViews}
            </div>
        )
    }
}