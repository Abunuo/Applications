/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(2);




/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var html = __webpack_require__(3);
	var footer = __webpack_require__(4);

	var common = __webpack_require__(5);

	var style = __webpack_require__(6);


	$(document).ready(function(){
		common.renderBody($('body'), html);
		common.append($('.container'), footer);
	    $.ajax({
			/*url: '/api/list.php',*/
			url:'/build/mock/salePhone/phone.json',
		    success: function (res) {
		    	console.log(res)
			    var html = template('list', res);
			    common.innerHTML($('.good-list'), html);
		  	},
		  	error:function(){
		  		console.log('没获取到数据！');
		  	}
		});
		style();
	})










/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<section class=\"container\">	<header>		<div class=\"header-container\">			<span class=\"close\"></span>			<span class=\"logo\"></span>			<p><i>下载爱回收APP</i><br /><i>掌上回收更便捷</i></p>			<span class=\"downLoad\">立即下载</span>		</div>	</header>	<!--go-top-->	<div class=\"go-top\"></div>		<!--header-top-->	<div class=\"header-top\">		<span class=\"search\">搜索您要卖的机器型号</span>		<span class=\"user\" onclick=\'window.location.href=\"login.html\"\'>个人中心</span>	</div>		<!--HOTlIST-->	<div class=\"swiper-container hotList1\">		<div class=\"more\"></div>        <ul class=\"swiper-wrapper\">            <li class=\"swiper-slide\"><span class=\"active\">手机</span></li>            <li class=\"swiper-slide\"><span>平板电脑</span></li>            <li class=\"swiper-slide\"><span>笔记本</span></li>            <li class=\"swiper-slide\"><span>摄影摄像</span></li>            <li class=\"swiper-slide\"><span>智能数码</span></li>            <li class=\"swiper-slide\"><span>家用电器</span></li>        </ul>    </div>	<!--  Main  -->	<div class=\"main-container\">		<section id=\"scrollSec\">			<div id=\"main\">				<!--banner-->				<div class=\"swiper-container banner\">					<div class=\"swiper-wrapper\">						<div class=\"swiper-slide\"><img src=\"../../../build/images/salePhone/6361051887690611871664574439.png\"></div>						<div class=\"swiper-slide\"><img src=\"../../../build/images/salePhone/636108486581608469626689556.png\"></div>						<div class=\"swiper-slide\"><img src=\"../../../build/images/salePhone/636093955041361601935173749.jpg\"></div>						<div class=\"swiper-slide\"><img src=\"../../../build/images/salePhone/636093957204656440423089962.png\"></div>						<div class=\"swiper-slide\"><img src=\"../../../build/images/salePhone/6360939588674796081971403954.png\"></div>						<div class=\"swiper-slide\"><img src=\"../../../build/images/salePhone/6360939659925250601346587906.jpg\"></div>						<div class=\"swiper-slide\"><img src=\"../../../build/images/salePhone/636108486581608469626689556.png\"></div>					</div>					<!-- Add Pagination -->					<div class=\"swiper-pagination banner-pagination\"></div>				</div>				<!--goodShow-->				<div class=\"goodShow\">					<div class=\"showTop\">						<div class=\"left\">							<h2>手机回收</h2>							<p>最高回收价8007元</p>						</div>						<div class=\"right\">							<div class=\"right-top\">								<h3>平板回收</h3>								<p>游戏卡 不必忍</p>							</div>							<div class=\"right-bottom\">								<h3>摄影摄像回收</h3>								<p>告别穷三代</p>							</div>						</div>					</div>					<div class=\"showBottom\">						<div class=\"left\">							<h2>笔记本回收</h2>							<p>最高回收价10097元</p>						</div>						<div class=\"right\">							<div class=\"right-top\">								<h3>智能数码回收</h3>								<p>维修贵 快换新</p>							</div>							<div class=\"right-bottom\">								<h3>家用电器回收</h3>								<p>你收钱 我搬走</p>							</div>						</div>					</div>				</div>				<!--保障-->				<div class=\"server\">					<h2 class=\"title\">爱回收网保证</h2>					<div class=\"swiper-container serList\">						<div class=\"swiper-wrapper\">							<ul class=\"swiper-slide uList1\">								<li>价格公道</li>								<li>服务快捷</li>								<li>隐私保护</li>							</ul>							<ul class=\"swiper-slide uList2\">								<li>世界银行战略投资</li>								<li>京东战略合作伙伴</li>							</ul>						</div>						<!-- Add Pagination -->						<div class=\"swiper-pagination serList-pagination\"></div>					</div>				</div>				<!--热门产品-->				<div class=\"hot-products\">					<h2>热门回收机型</h2>					<div class=\"swiper-container hotList\">						<div class=\"more\"></div>				        <ul class=\"swiper-wrapper\">				            <li class=\"swiper-slide\"><span class=\"active\">手机</span></li>				            <li class=\"swiper-slide\"><span>平板电脑</span></li>				            <li class=\"swiper-slide\"><span>笔记本</span></li>				            <li class=\"swiper-slide\"><span>摄影摄像</span></li>				            <li class=\"swiper-slide\"><span>智能数码</span></li>				            <li class=\"swiper-slide\"><span>家用电器</span></li>				        </ul>				    </div>				    <div class=\"good-list\">				    	<script id=\"list\" type=\"text/html\">			                <ul>			                  	{{each data as value i}}			                 	<li>			            			<span>					            		<img src={{value.img}} alt=\"\">					            		<h3>{{value.name}}</h3>					            		<p>回收最高价 <span>￥<i>{{value.price}}</i></span></p>					            		<i>立即回收</i>			            			</span>			            		</li>			                  	{{/each}}			                </ul>			            </script>			            <!--<ul>			            	<li>			            		<span>				            		<img src=\"../../../build/images/salePhone/image.jpg\" alt=\"\">				            		<h3>苹果 iPhone 6</h3>				            		<p>回收最高价 <span>￥<i>3608</i></span></p>				            		<i>立即回收</i>			            		</span>			            	</li>			            	<li>			            		<span>				            		<img src=\"../../../build/images/salePhone/image.jpg\" alt=\"\">				            		<h3>苹果 iPhone 6</h3>				            		<p>回收最高价 <span>￥<i>3608</i></span></p>				            		<i>立即回收</i>			            		</span>			            	</li>			            	<li>			            		<span>				            		<img src=\"../../../build/images/salePhone/image.jpg\" alt=\"\">				            		<h3>苹果 iPhone 6</h3>				            		<p>回收最高价 <span>￥<i>3608</i></span></p>				            		<i>立即回收</i>			            		</span>			            	</li>			            </ul>-->				    </div>				</div>								<!--评价-->				<div class=\"assess\">					<h2 class=\"title\">用户评价<span><b>24,097,873</b> 用户选择了我们</span></h2>					<div class=\"swiper-container assessList\">						<div class=\"swiper-wrapper assess-wrapper\">							<div class=\"swiper-slide\">								<dl>									<dt></dt>									<dd>										<b>183****7765</b>										<p>评分：<i></i><i></i><i></i><i></i><i></i></p>									</dd>								</dl>								<p class=\"article\">真的很好，旧手机回收价格都能这么高，大赞！！</p>								<p class=\"time\"><span></span>10月07日,12:56在深圳万科店回收了一台</p>							</div>							<div class=\"swiper-slide\">								<dl>									<dt></dt>									<dd>										<b>183****7765</b>										<p>评分：<i></i><i></i><i></i><i></i><i></i></p>									</dd>								</dl>								<p class=\"article\">真的很好，旧手机回收价格都能这么高，大赞！！</p>								<p class=\"time\"><span></span>10月07日,12:56在深圳万科店回收了一台</p>							</div>							<div class=\"swiper-slide\">								<dl>									<dt></dt>									<dd>										<p>183****7765</p>										<p>评分：<i></i><i></i><i></i><i></i><i></i></p>									</dd>								</dl>								<p class=\"article\">真的很好，旧手机回收价格都能这么高，大赞！！</p>								<p class=\"time\"><span></span>10月07日,12:56在深圳万科店回收了一台</p>							</div>						</div>						<!-- Add Pagination -->						<div class=\"swiper-pagination assess-pagination\"></div>					</div>				</div>								<!--footer-->				<footer class=\"footer\">					<nav class=\"nav1\">						<li>首页</li>						<li>|</li>						<li>订单</li>						<li>|</li>						<li>回收车</li>					</nav>					<nav class=\"nav2\">						<li>电脑版</li>						<li>|</li>						<li>在线客服</li>					</nav>					<p>Copyright 2010-2016 上海悦易网络信息技术有的县公司</p>					<p>沪ICP备100043802号-2</p>				</footer>			</div>		</section>	</div>	</section>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<footer class=\"footer\">	<ul>		<li><i></i><b>修手机</b></li>		<li><i></i><b>卖手机</b></li>		<li><i></i><b>买二手</b></li>	</ul></footer>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	  renderBody: function ($el, str) {
	      $el.prepend(str);
	  },
	 innerHTML:function ($el,str) {
	      $el.html(str);
	  }, 
	  append:function ($el,str) {
	      $el.append(str);
	  }
	};

	module.exports = common;



/***/ },
/* 6 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	module.exports = function(){
		//swiper
		var swiper = new Swiper('.banner', {
	        pagination: '.banner-pagination',
	        paginationClickable: true,
	        spaceBetween: 0,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false
	    });
	    var swiper1 = new Swiper('.serList', {
	        pagination: '.serList-pagination',
	        paginationClickable: true,
	        spaceBetween: 0,
	        centeredSlides: true,
	        autoplay: 3500,
	        autoplayDisableOnInteraction: false
	    });
	    var swiper2 = new Swiper('.hotList', {
	    	slidesPerView: 4.8,
	        spaceBetween: 10,
	        freeMode: true
	    });
	    var swiper4 = new Swiper('.assessList', {
	        pagination: '.assess-pagination',
	        paginationClickable: true,
	        spaceBetween: 0,
	        centeredSlides: true,
	        autoplay: 2000,
	        autoplayDisableOnInteraction: false
	    });
	    
	    //页面滚动
	    var myScroll = new IScroll('#scrollSec', {
	    	probeType: 3,
	     	mouseWheel: true,
	     	bounce:false
	  	});
	  	myScroll.refresh(); 
	  	myScroll.on('scroll', function () {
	  		if(this.y<0){
	  			$("header").css('display','none');
	  			$(".header-top").css('background','#fcdb00');
	  			$(".header-top").css('transition','background-color ease-out 0.5s');
	  			$(".header-top").css('top','0');
	  		}else{
	  			$("header").css('display','flex');
	  			$(".header-top").css('background','');
	  			if($("header").css('height') == '0px'){
		  			$(".header-top").css('top','0');
	  			}else{
	  				$(".header-top").css('top','.5rem');
	  			}
	  		}
	  		if(this.y<-697){
	  			$('.hotList').css("display",'none');
	  			$('.hotList1').css('display','block');
	  			$('.go-top').css('display','block');
	  			var swiper3 = new Swiper('.hotList1', {
			    	slidesPerView: 4.8,
			        spaceBetween: 10,
			        freeMode: true
			    });
	  		}else{
	  			$('.hotList1').css("display",'none');
	  			$('.hotList').css('display','block');
	  			$('.go-top').css('display','none');
	  		}
	  		myScroll.refresh(); 
	  	});
	  	
	  	//关闭header
	  	$(".close").on('click',function(){
	  		$("header").css('height',"0");
	  		$("header").css('transition','height ease-out 0.2s');
			$(".header-top").css('transition','background-color ease-out 0.5s');
			$(".header-top").css('top','0');
	  	});
	  	
	  	//回到头部
	  	$('.go-top').on("click",function(){
	  		$('.hotList1').css("display",'none');
	  		$('.go-top').css('display','none');
	  		myScroll.scrollTo(0,-1);
	  	})
	}


/***/ }
/******/ ]);