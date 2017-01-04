import React from 'react';
import FollowWeixinDialog from './FollowWexinDialog.jsx';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            followDialog: {
                hide: true
            }
        };
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    openDialog() {
        this.setState({
            followDialog: {
                hide: false
            }
        });
    }

    closeDialog() {
        this.setState({
            followDialog: {
                hide: true
            }
        });
    }

    render() {
        let {followDialog} = this.state;
        let {name, score, iconUrl} = this.props;
        return (
            <div className="personal-header-short">
                <div className="header-container">
                    <div className="header-btn" onClick={this.openDialog}>
                        关注
                    </div>
                    <div className="header-title">
                        <div className="title-container">
                            <div className="title-name">{name ? name : '测试'}</div>
                            <div className="title-score">
                                <span>积分： </span>
                                <span>{score != null ? score : ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-img-container">
                    <img className="header-img" alt={name ? name : ''}/>
                </div>
                <FollowWeixinDialog hide={followDialog.hide} close={this.closeDialog}/>
            </div>
        );
    }

}