import React from 'react';

export default class extends React.Component {

    getItemViews(datas) {
        return _.map(datas, function(item) {
            let name = item.name ? item.name : '';
            return (
                <td key={_.uniqueId()}>
                    <div className="recent-game-item">
                        <img className="game-icon">
                        </img>
                        <div className="game-name" title={name}>{name}</div>
                    </div>
                </td>
            )
        })
    }

    render() {
        let datas = [{
            name: '小小战争'
        }, {
            name: '小小战争'
        }, {
            name: '小小战争'
        }, {
            name: '小小战争'
        }, {
            name: '小小战争'
        }, {
            name: '小小战争'
        }, {
            name: '小小战争'
        }, {
            name: '小小战争'
        }, {
            name: '小小战争'
        }, {
            name: '小小战争'
        }];
        let itemViews = this.getItemViews(datas);
        return (
            <div className="recent-game">
                <div className="header">
                    <div className="header-title">最近在玩</div>
                </div>
                <div className="content">
                    <table className="recent-game-zone">
                        <tbody>
                            <tr>
                                {itemViews}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}