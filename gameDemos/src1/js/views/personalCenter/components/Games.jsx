import React from 'react';

export default class extends React.Component {
    getItemViews(datas) {
        return _.map(datas, function (item) {
            let name = item.name ? item.name : '',
                icon = item.icon ? item.icon : '',
                link = item.link ? item.link : '',
                lastTime = item.lastTime ? item.lastTime : '';
            return (

                <div className="games-item" key={_.uniqueId()}>
                    <a href={link}>
                        <div className="games-icon"><img src={icon} alt={name}/></div>
                        <div className="games-info">
                            <div className="game-name">
                                {name}
                            </div>
                            <div className="last-login">
                                上次登录时间：{lastTime}
                            </div>
                        </div>
                    </a>
                </div>
            )
        })
    }

    render() {
        let datas = [
            {name: '悟空传', icon: '', lastTime: '2015.12.23 16:25', link: ''},
            {name: '悟空传', icon: '', lastTime: '2015.12.23 16:25', link: ''},
            {name: '悟空传', icon: '', lastTime: '2015.12.23 16:25', link: ''},
            {name: '悟空传', icon: '', lastTime: '2015.12.23 16:25', link: ''},
            {name: '悟空传', icon: '', lastTime: '2015.12.23 16:25', link: ''},
            {name: '悟空传', icon: '', lastTime: '2015.12.23 16:25', link: ''},
            {name: '悟空传', icon: '', lastTime: '2015.12.23 16:25', link: ''},
            {name: '悟空传', icon: '', lastTime: '2015.12.23 16:25', link: ''}
        ];
        let itemViews = this.getItemViews(datas);
        return (
            <div className="games">
                {itemViews}
            </div>
        )
    }
}