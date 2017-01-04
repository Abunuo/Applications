var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../Store/ListStore');

AppDispatcher.register(function(action){
  switch(action.actionType){
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    case 'REMOVE_ITEM':
      ListStore.removeItemHandle(action.text);
      ListStore.emitChange();
      break;
    default:
      console.log("没找到对应的事件方法！");
      break;
  }
})

module.exports = AppDispatcher;
