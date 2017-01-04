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

	module.exports = __webpack_require__(7);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(8);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var html = __webpack_require__(9);

	var common = __webpack_require__(5);

	$(document).ready(function(){
		common.renderBody($('body'), html);
		
	})


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header>		<a href=\"index.html\"></a>		<h2>登录</h2>	</header>	<section>		<h1>爱回收</h1>		<nav class=\"login\">			<li>				<input type=\"text\" placeholder=\"请输入您的手机号码\"/>			</li>			<li>				<input type=\"text\" placeholder=\"请输入您的密码\"/>			</li>		</nav>	</section>	<footer>		<button onclick=\'window.location.href=\"index.html\"\' href=\'index.html\'>登录</button>	</footer></div>"

/***/ }
/******/ ]);