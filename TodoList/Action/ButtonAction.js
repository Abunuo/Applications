var AppDispatcher = require('../Dispatcher/AppDispatcher');

var ButtonAction = {

  //Action列表
  addNewItem: function(text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

  removeItem: function(index) {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_ITEM',
      text: index
    })
  }

}

module.exports = ButtonAction;
