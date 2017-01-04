var React = require('react');

var style = {
  li:{
    color:'red',
    fontSize: 50
  },
  btn:{
    width:50,
    height:50,
    textAlign:'center'
  }
}

module.exports =  React.createClass({
  //获取列表
  getInitialState: function(){
    // console.log(this.init());
    return {
      itemList: []
    }
  },

  componentWillReceiveProps: function(){
    // console.log(this.props.item.length);
    var props = this.props;
    this.setState({
      itemList: props.item.map(function(listItem,i){
        return <li style={style.li} key={i}><button style={style.btn} value={i} onClick={props.onRemove}>X</button>{listItem}</li>
      })
    })
  },

  //提交数据
  submit: function(event){
    // console.log(event.keyCode);
    if(event.keyCode == '13'){
      // console.log(this.refs.txt.value);
      this.props.onClick(this.refs.txt.value);
      this.refs.txt.value = "";
    }
  },

  render: function(){
    return (
      <div>
        <input type="text" ref = "txt" onKeyUp={this.submit}/>
        <label>按回车提交</label>
        <br />
        {/* <button ref="btn" onClick={this.submit}>Add NewItem</button> */}
        <br />
        <ul>
          {this.state.itemList}
        </ul>
      </div>
    )
  }
})
