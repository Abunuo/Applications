import React from 'react';
import GiftItem from './GiftItem.jsx';

export default class extends React.Component {

    getItemViews(datas, openDialog, openCollarNumberDialog) {
        return _.map(datas, function(item) {
           return (
               <GiftItem openDialog={openDialog} key={_.uniqueId()} openCollarNumberDialog={openCollarNumberDialog}/>
           )
        });
    }

    render() {
        let {openDialog, openCollarNumberDialog} = this.props;
        let datas = new Array(20);
        let itemViews = this.getItemViews(datas, openDialog, openCollarNumberDialog);
        return (
            <div className="gift-list">
                {itemViews}
            </div>
        )
    }
}