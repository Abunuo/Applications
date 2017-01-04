import React from 'react';

export default class extends React.Component {

    render() {
        let {iconUrl, name} = this.props;
        return (
            <div className="recent-game-item">
                <img className="item-icon" src={iconUrl}/>
                <div className="item-name">{name}</div>
            </div>
        )
    }

}