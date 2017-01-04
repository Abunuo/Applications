import React from 'react';
import history from '../../history.jsx';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.gotoGameDetail = this.gotoGameDetail.bind(this);
    }

    gotoGameDetail() {
        history.push('/game/1');
    }

    gotoGameEnter(event) {
        event.stopPropagation();
    }

    render() {
        return (
            <table className="hot-game-item" onClick={this.gotoGameDetail}>
                <tbody>
                    <tr>
                        <td>
                            <img className="item-icon"/>
                        </td>
                        <td className="item-info">
                            <div className="item-title">
                                <div className="title-text">悟空传</div>
                                <div className="title-label label-hot">热门</div>
                                <div className="title-label label-jingpin">精品</div>
                            </div>
                            <div className="item-introduction">翻江倒海，天地失色。</div>
                        </td>
                        <td className="item-btn-zone">
                            <a className="enter-btn" href="http://www.baidu.com" onClick={this.gotoGameEnter}>进入</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}