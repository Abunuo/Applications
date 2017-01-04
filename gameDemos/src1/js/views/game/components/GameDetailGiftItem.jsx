import React from 'react';
import Progress from '../../common/Progress.jsx';

export default class extends React.Component {

    constructor(props) {
        super(props);
        // this.openMoreDialog = this.openMoreDialog.bind(this);
        this.openCollarNumber = this.openCollarNumber.bind(this);
        this.getGiftIntroduction = this.getGiftIntroduction.bind(this);
    }

    openMoreDialog(content) {
        this.props.openDialog(content);
    }
    openCollarNumber() {
        let content, header, explain;
        content = '1597156489';
        header = '优森提示';
        explain = '*使用说明：进入游戏—点击用户头像—点击界面下方的【系统设置】—点击界面中的【输入兑换码】—在输入框内输入兑换码，确认后直接发送到背包中\n*请在3小时内激活\n*每个账号只能使用一次';
        this.props.openCollarNumberDialog(content,header,explain);
    }
    getGiftIntroduction(content) {
        const MAX_LENGTH = 20;
        let view;
        if(content.length > MAX_LENGTH) {
            let _content = content.substring(0, MAX_LENGTH);
            view = (
                <div>
                    <span>{_content}</span>
                    <a className="btn-more" href="javascript:void(0)" onClick={this.openMoreDialog.bind(this, content)}>{'更多>>'}</a>
                </div>
            )
        } else {
            view = (
                <div>
                    {content}
                </div>
            )
        }
        return view;
    }
    render() {
        let giftName = '口袋购物重阳节礼包',
            content = '钻石*100 武器之书*1 自动攻击*1,钻石*100 武器之书*1 自动攻击*1',
            giftNumLeft = 1524,
            giftNumTotal = 2000,
            percent = giftNumLeft / giftNumTotal,
            giftIntroduction = this.getGiftIntroduction(content);
        return (
            <div className="game-detail-gift-item">
                <div className="gift-info">
                    <div className="gift-name">{giftName}</div>
                    <div className="gift-introduction">
                        {giftIntroduction}
                    </div>
                    <div className="gift-percent">
                        <Progress value={percent}/>
                    </div>
                    <div className="gift-num">
                        <span>礼包剩余：</span>
                        <span>{giftNumLeft}</span>
                        <span>个</span>
                    </div>
                </div>
                <a className="gift-btn"  onClick={this.openCollarNumber}>领号</a>
            </div>
        )
    }

}