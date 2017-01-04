var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({},EventEmitter.prototype,{
  //store属性
  item: [],

  //获取store的item等属性
  getAll: function(){
    // console.log(this.item);
    return this.item;
  },

  //Dom事件调用的方法
  addNewItemHandler: function(text){
    // console.log(text);
    this.item.push(text);
    // console.log(this.item);
  },

  //删除列表项
  removeItemHandle: function(index) {
    this.item.splice(index,1);
  },

  //触发事件方法
  emitChange: function(){
    this.emit('Add');
  },

  //添加监听事件
  addChangeListener: function(cb){
    this.on('Add',cb);
  },

  //移出监听事件
  removeChangeListener: function(){
    this.removeListener('Add',cb);
  }


})

module.exports = ListStore;
