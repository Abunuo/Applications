var Button = require('./Button');
var React = require('react');
var Store = require('../Store/ListStore');
var Action = require('../Action/ButtonAction');

var Main = React.createClass({
  // 初始化this.state
  getInitialState: function(){
    return {
      item: Store.getAll()
    }
  },

  //事件绑定监听
  componentDidMount: function(){
    Store.addChangeListener(this.getState);
  },

  //注销事件绑定
  componentWillUnmount: function(){
    Store.removeChangeListener(this.getState);
  },

  //监听事件方法，动态获取this.state
  getState: function(){
    this.setState({
      item: Store.getAll()
    })
  },

  //Dom事件，处理View操作
  addNewItem: function(txt){
    Action.addNewItem(txt);
  },

  //删除Item
  removeItem: function(event){
    // console.log(event.target.value);
    Action.removeItem(event.target.value);
  },

  render:function(){
    return (
      <Button
        item={this.state.item}
        onClick = {this.addNewItem}
        onRemove = {this.removeItem}
      />
    )
  }

})

module.exports = Main;
