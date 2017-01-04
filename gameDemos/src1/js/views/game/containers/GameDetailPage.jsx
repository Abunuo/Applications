import React from 'react';
import GameDetailScreenshotBox from '../components/GameDetailScreenshotBox.jsx';
import GameDetailDescriptionBox from '../components/GameDetailDescriptionBox.jsx';
import GameDetailGiftBox from '../components/GameDetailGiftBox.jsx';
import GiftMoreDialog from "../../giftPack/components/GiftMoreDialog.jsx";
import CollarNumberDialog from "../../giftPack/components/CollarNumberDialog.jsx";

export default class extends React.Component {
    componentWillMount(){
        document.title = '雪球游戏-游戏详情';
    }
    constructor(props) {
        super(props);
        this.state = {
            moreDialog: {
                hide: true,
                content: ''
            },
            collarNumberDialog: {
                hide: true,
                content: '',
                header: '',
                explain: ''
            }
        };
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.openCollarNumberDialog = this.openCollarNumberDialog.bind(this);
        this.closeCollarNumberDialog = this.closeCollarNumberDialog.bind(this);
    }
    openDialog(content) {
        this.setState({
            moreDialog: {
                hide: false,
                content: content
            }
        });
    }

    closeDialog() {
        this.setState({
            moreDialog: {
                hide: true,
                content: ''
            }
        });
    }
    openCollarNumberDialog(content,header,explain) {
        this.setState({
            collarNumberDialog: {
                hide: false,
                content: content,
                header:header,
                explain:explain
            }
        });
    }
    closeCollarNumberDialog() {
        this.setState({
            collarNumberDialog: {
                hide: true,
                content: '',
                header: '',
                explain: ''
            }
        });
    }
    render() {
        let {gameIconUrl, gameName, gameIntroduction, gameEnterUrl, gameImageList, gameDescription, gameGiftList} = this.props;
        let {moreDialog, collarNumberDialog} = this.state;
        gameIconUrl = '';
        gameName = '三国大富翁';
        gameIntroduction = '一句话概括游戏的简介，最多这么多字，万一字太多就来两行吧';
        gameEnterUrl = '';
        gameImageList = [];
        gameDescription = '测试';
        return (
            <div className="game-detail">
                <div className="game-header">
                    <img className="game-icon"/>
                    <div className="game-info">
                        <h1 className="game-name">{gameName}</h1>
                        <div className="game-introduction">{gameIntroduction}</div>
                    </div>
                    <a className="game-btn">开始</a>
                </div>
                <GameDetailScreenshotBox/>
                <GameDetailDescriptionBox/>
                <GameDetailGiftBox openDialog={this.openDialog} openCollarNumberDialog={this.openCollarNumberDialog}/>
                <GiftMoreDialog hide={moreDialog.hide} close={this.closeDialog}>
                    {moreDialog.content}
                </GiftMoreDialog>
                <CollarNumberDialog hide={collarNumberDialog.hide} close={this.closeCollarNumberDialog} header={collarNumberDialog.header} explain={collarNumberDialog.explain}>
                    {collarNumberDialog.content}
                </CollarNumberDialog>
            </div>
        )
    }
}