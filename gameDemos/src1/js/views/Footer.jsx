import React from 'react';
import {Link} from 'react-router';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active:"youxi"
        }
    }
    getClass(name, active) {
        let cls = name;
        if(name == active) {
            cls += ' active';
        }
        return cls;
    }
    handleClick(index) {
        this.setState({
            active: index
        });
    }
    render() {
        let active = this.state.active;
        return (
            <footer className="footer">
                <Link className={"menu "+this.getClass('youxi', active)} to="/game"  onClick={this.handleClick.bind(this, 'youxi')}>
                    <div className="menu-icon">
                        <span className="iconfont icon-youxi"></span>
                        <i></i>
                    </div>
                    <div className="menu-text">游戏</div>
                </Link>
                <Link className={"menu "+this.getClass('libao', active)} to="/giftPack" onClick={this.handleClick.bind(this, 'libao')}>
                    <div className="menu-icon">
                        <span className="iconfont icon-libao"></span>
                        <i></i>
                    </div>
                    <div className="menu-text">礼包</div>
                </Link>
                <a className={"menu "+this.getClass('shequ', active)} href="http://www.baidu.com" onClick={this.handleClick.bind(this, 'shequ')}>
                    <div className="menu-icon">
                        <span className="iconfont icon-shequ"></span>
                        <i></i>
                    </div>
                    <div className="menu-text">社区</div>
                </a>
                <Link className={"menu "+this.getClass('geren', active)} to="/personalCenter" onClick={this.handleClick.bind(this, 'geren')}>
                    <div className="menu-icon">
                        <span className="iconfont icon-hzicongerentouxiang"></span>
                        <i></i>
                    </div>
                    <div className="menu-text">个人</div>
                </Link>
            </footer>
        )

    }
}