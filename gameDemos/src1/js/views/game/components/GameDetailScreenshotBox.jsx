import React from 'react';

export default class extends React.Component {

    getItemViews(datas) {
        return _.map(datas, function(item) {
            return (
                <img className="game-screenshot-item" key={_.uniqueId()}/>
            )
        });
    }

    render() {
        let datas = new Array(5);
        let itemViews = this.getItemViews(datas);
        return (
            <div className="game-screenshot game-box">
                <div className="box-header">
                    <h2 className="header-title">游戏截图</h2>
                </div>
                <div className="box-body">
                    <div className="game-screenshot-list">
                        <div>
                            <div className="game-screenshot-container">
                                {itemViews}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}