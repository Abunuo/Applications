//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls:[
      '/images/login-pic1.png',
      '/images/login-pic2.png',
      '/images/login-pic3.png'
    ],
    navlist:[
        '首页',
        '商品',
        '个人中心',
        '门店介绍',
        '商户介绍',
        '会员服务',
        '预约服务',
        '意见反馈',
        '关于'
    ],
    navimgList:[
      '/images/sy.png',
      '/images/list.png',
      '/images/mine.png',
      '/images/shop.png',
      '/images/shop1.png',
      '/images/vip.png',
      '/images/order.png',
      '/images/idea.png',
      '/images/about.png'
    ],
    link:[
      '/pages/page/sy',
      '/pages/page/list',
      '/pages/page/mine',
      '/pages/page/shop',

      '/pages/page/shop',
      '/pages/page/vip',
      '/pages/page/order',
      // '/pages/page/shop1',
      //'/pages/page/vip',
     // '/pages/page/order',
      '/pages/page/idea',
      '/pages/page/about'
    ],
	  indicatorDots: false,
		autoplay: false,
		interval: 0,
		duration: 200,
    hidden:true
  },
  //事件处理函数
  bindViewTap:function(){
    this.setData({
      hidden: false
    })
  },
  bindLink:function(event){
      //console.log(event.currentTarget.dataset.index);
      wx.navigateTo({
        url: event.currentTarget.dataset.index
      })
  }
})
