import React from 'react';

export default class extends React.Component {

    getGameTimeView(gameTime, gameUrl) {
        let isStarted = true,
            result;
        if(!isStarted) {
            result = (
                <td className="game-time-zone">{gameTime}</td>
            )
        } else {
            result = (
                <td className="game-time-zone">
                    <div>
                        <div className="game-time-start-info">
                            <span>已开服</span>
                            <span>10小时</span>
                        </div>
                        <div className="game-time-btn">
                            <a href={gameUrl} className="btn-start">进入</a>
                        </div>
                    </div>
                </td>

            )
        }
        return result;
    }

    render() {
        let gameName = '口袋妖怪',
            zoneName = 'S960 星辰之巅',
            gameTime = '2016-11-22 21:00:00',
            gameUrl = '';
        let gameTimeView = this.getGameTimeView(gameTime, gameUrl);
        return (
            <table className="game-zone-item">
                <tbody>
                    <tr>
                        <td className="game-icon-zone">
                            <img className="game-icon"/>
                        </td>
                        <td className="game-info-zone">
                            <div>
                                <div className="game-name">{gameName}</div>
                                <div className="zone-name">{zoneName}</div>
                            </div>
                        </td>
                        {gameTimeView}
                    </tr>
                </tbody>
            </table>
        )

    }

}