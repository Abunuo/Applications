import React from 'react';
import HotGameItem from './HotGameItem.jsx';

export default class extends React.Component {

    getItemViews(datas) {
        return _.map(datas, function(item) {
            return (
                <HotGameItem key={_.uniqueId()}/>
            )
        })
    }

    render() {
        let hide = this.props.hide;
        let datas = new Array(20);
        let itemViews = this.getItemViews(datas);
        let containerClass = 'game-container';
        return (
            <div className="game-container">
                {itemViews}
            </div>
        )
    }
}