import React from 'react';
import ReactSwipe from 'react-swipe';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    getImageSet(datas, activeIndex) {
        return _.map(datas, function(item, index) {
            item = {};
            let display = index == activeIndex ? 'block' : 'none';
            let key = item.url ? item.url : _.uniqueId();
            return (
                <img src={item.url} key={key} style={{display: display}} className="carousel-img-item" title={index}/>
            )
        })
    }

    getSwitcherItemViews(datas, activeIndex) {
        return _.map(datas, function(item, index) {
            let itemClass = 'carousel-switcher-item' + (index === activeIndex ? ' active' : '');
            return (
                <li key={_.uniqueId()}>
                    <i className={itemClass}></i>
                </li>
            )
        })
    }

    render() {
        let {datas} = this.props;
        let {activeIndex} = this.state;
        datas = new Array(3);
        let imageSetView = this.getImageSet(datas, activeIndex);
        let _this = this;
        let swipeOptions = {
            callback(index, elem) {
                _this.setState({
                    activeIndex: index
                });
            }
        };
        let switcherViews = this.getSwitcherItemViews(datas, activeIndex);
        return (
            <div className="switcher-container">
                <ReactSwipe swipeOptions={swipeOptions}>
                    {imageSetView}
                </ReactSwipe>
                <ul className="switcher-zone">{switcherViews}</ul>
            </div>
        )
    }
}