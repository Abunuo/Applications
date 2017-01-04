import React from 'react';
import GameZoneItem from '../../common/GameZoneItem.jsx';

export default class extends React.Component {

    getItemViews(datas)  {
        return _.map(datas, function(item) {
            return (
                <GameZoneItem key={_.uniqueId()}/>
            );
        });
    }

    render() {
        let datas = new Array(20);
        let itemViews = this.getItemViews(datas);
        return (
            <div className="game-new-zone-container">
                {itemViews}
            </div>
        )
    }
}