
var app = getApp()
Page({
   data:{
    	userInfo: {},
    	info:'我爱左岸婚纱摄影'
   },
   onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
	  	if(userInfo.gender == 0){
	  		userInfo.gender = '未知'
	  	}else if(userInfo.gender == 1){
	  		userInfo.gender = '女'
	  	}else{
	  		userInfo.gender = '男'
	  	}
      that.setData({
        userInfo:userInfo
      })
    })
  }
});