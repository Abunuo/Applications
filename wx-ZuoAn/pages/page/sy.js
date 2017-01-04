
Page({
  	data: {
		current:0,
	    listStyle:[
	    	{url:'/images/list-style1.jpg',name:'欧式风格',date:'16年02月14日'},
	    	{url:'/images/list-style2.jpg',name:'日式风格',date:'16年03月15日'},
	    	{url:'/images/list-style3.jpg',name:'韩式风格',date:'16年07月07日'}
	    ],
	    indicatorDots: true,
		autoplay: true,
		interval: 2000,
		duration: 1000,
		imgName:'水晶之恋',
		timer:''
	},

	onReady:function(){
	// 页面渲染完成
	},
	onShow:function(){
	// 页面显示
	},
	onHide:function(){
	// 页面隐藏
	},
	switchSlider: function (event) {
	    this.setData({
	      current: event.target.dataset.index
	    })
	},

    changeSlider: function (event) {
        this.setData({
          current: event.detail.current
        });
    }
 })
