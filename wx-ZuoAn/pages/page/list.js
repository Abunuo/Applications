Page({
	data:{
		imgList:[
	      '/images/aa1.jpg',
	      '/images/aa2.jpg',
	      '/images/aa3.jpg',
	      '/images/aa4.jpg',
	      '/images/aa5.jpg'
	    ],
	    imgNames:[
	    	'水晶之恋',
	    	'宠物套系A',
	    	'永爱套系B',
	    	'宠物套系A',
	    	'永爱套系B'
	    ],
	    list:[
	    	{url:'/images/list1.jpg',name:'星光灿烂',description:'星光灿烂 ：   左岸摄影超值团购8999元 原价36999元 拍摄规划和造型 内景地点：左岸摄影天鹅城堡18大实景...'},
	    	{url:'/images/list2.jpg',name:'雕刻时光',description:'雕刻时光 左岸摄影超值团购6999元 原价29999元 拍摄规划和造型 内景地点：左岸摄影天鹅城堡18大实景...'},
	    	{url:'/images/list3.jpg',name:'恒爱套系B',description:'- 订单即送新娘大礼包，统统都有，超值完美出嫁礼 大礼1：全程小秘书一对一贴心服务。 大礼2：内景...'},
	    	{url:'/images/list4.jpg',name:'恒爱套系A',description:'恒爱套系A 左岸摄影超值团购4699元 原价18999元 拍摄规划和造型 内景地点：左岸摄影天鹅城堡18大实景...'},
	    	{url:'/images/list5.jpg',name:'宠物套系A',description:'- 订单即送新娘大礼包，统统都有，超值完美出嫁礼 大礼1：全程小秘书一对一贴心服务。 大礼2：内景...'},
	    	{url:'/images/list6.jpg',name:'宠物套系B',description:'- 订单即送新娘大礼包，统统都有，超值完美出嫁礼 大礼1：全程小秘书一对一贴心服务。 大礼2：内景...'},
	    	{url:'/images/list7.jpg',name:'永爱套系A',description:'- 订单即送新娘大礼包，统统都有，超值完美出嫁礼 大礼1：全程小秘书一对一贴心服务。 大礼2：内景...'},
	    	{url:'/images/list8.jpg',name:'永爱套系B',description:'左岸摄影3000新娘大礼包 　- 订单即送新娘豪华大礼包，统统都有，超值完美出嫁礼大礼...'}
	    ],
	    indicatorDots: true,
		autoplay: true,
		interval: 2000,
		duration: 1000,
		imgName:'水晶之恋',
		timer:''
	},
    
    onLoad:function(options){
	// 页面初始化 options为页面跳转所带来的参数
	  var count = 0;
	  var that = this;
	  this.data.timer = setInterval(function(){
		  that.setData({
			imgName:that.data.imgNames[count]
		  })
		  if((count+1) >4){
			  count = 0;
		  }else{
			count++;
		  }
		  //console.log(count);
	  },2000)
	},
	onUnload:function(){
	// 页面关闭
		clearInterval(this.data.timer)
	}
});