/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/A.js":
/*!**********************!*\
  !*** ./src/api/A.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from a   nodemon\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL0EuanM/ZDU1YiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLEdBQUcsRUFBQztFQUMzQkEsR0FBRyxDQUFDQyxJQUFJLEdBQUM7SUFDTCxTQUFTLEVBQUM7RUFDZCxDQUFDO0FBQ0wsQ0FBQyIsImZpbGUiOiIuL3NyYy9hcGkvQS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCl7XHJcbiAgICBjdHguYm9keT17XHJcbiAgICAgICAgXCJtZXNzYWdlXCI6XCJoZWxsbyBmcm9tIGEgICBub2RlbW9uXCJcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/A.js\n");

/***/ }),

/***/ "./src/api/B.js":
/*!**********************!*\
  !*** ./src/api/B.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from b\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL0IuanM/MzFiZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLEdBQUcsRUFBQztFQUMzQkEsR0FBRyxDQUFDQyxJQUFJLEdBQUM7SUFDTCxTQUFTLEVBQUM7RUFDZCxDQUFDO0FBQ0wsQ0FBQyIsImZpbGUiOiIuL3NyYy9hcGkvQi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCl7XHJcbiAgICBjdHguYm9keT17XHJcbiAgICAgICAgXCJtZXNzYWdlXCI6XCJoZWxsbyBmcm9tIGJcIlxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/B.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const koa = __webpack_require__(/*! koa */ \"koa\");\nconst app = new koa();\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\nconst router = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconsole.log(\"=====启动成功\");\napp.use(helmet());\nconsole.log(__dirname);\napp.use(statics(path.join(__dirname, '../public')));\napp.use(router());\napp.listen(8000);\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJrb2EiLCJyZXF1aXJlIiwiYXBwIiwiaGVsbWV0Iiwicm91dGVyIiwic3RhdGljcyIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwidXNlIiwiX19kaXJuYW1lIiwiam9pbiIsImxpc3RlbiJdLCJtYXBwaW5ncyI6IkFBQUEsdURBQU1BLEdBQUcsR0FBQ0MsbUJBQU8sQ0FBQyxnQkFBSyxDQUFDO0FBQ3hCLE1BQU1DLEdBQUcsR0FBQyxJQUFJRixHQUFHLEVBQUU7QUFDbkIsTUFBTUcsTUFBTSxHQUFDRixtQkFBTyxDQUFDLDhCQUFZLENBQUM7QUFDbEMsTUFBTUcsTUFBTSxHQUFDSCxtQkFBTyxDQUFDLCtDQUFpQixDQUFDO0FBQ3ZDLE1BQU1JLE9BQU8sR0FBQ0osbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBQ25DLE1BQU1LLElBQUksR0FBQ0wsbUJBQU8sQ0FBQyxrQkFBTSxDQUFDO0FBQzFCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7QUFDeEJOLEdBQUcsQ0FBQ08sR0FBRyxDQUFDTixNQUFNLEVBQUUsQ0FBQztBQUNqQkksT0FBTyxDQUFDQyxHQUFHLENBQUNFLFNBQVMsQ0FBQztBQUN0QlIsR0FBRyxDQUFDTyxHQUFHLENBQUNKLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDSyxJQUFJLENBQUNELFNBQVMsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ2xEUixHQUFHLENBQUNPLEdBQUcsQ0FBQ0wsTUFBTSxFQUFFLENBQUM7QUFDakJGLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLElBQUksQ0FBQyxDIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga29hPXJlcXVpcmUoJ2tvYScpXHJcbmNvbnN0IGFwcD1uZXcga29hKClcclxuY29uc3QgaGVsbWV0PXJlcXVpcmUoJ2tvYS1oZWxtZXQnKVxyXG5jb25zdCByb3V0ZXI9cmVxdWlyZSgnLi9yb3V0ZXMvcm91dGVzJylcclxuY29uc3Qgc3RhdGljcz1yZXF1aXJlKCdrb2Etc3RhdGljJylcclxuY29uc3QgcGF0aD1yZXF1aXJlKCdwYXRoJylcclxuY29uc29sZS5sb2coXCI9PT09PeWQr+WKqOaIkOWKn1wiKVxyXG5hcHAudXNlKGhlbG1ldCgpKVxyXG5jb25zb2xlLmxvZyhfX2Rpcm5hbWUpXHJcbmFwcC51c2Uoc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCcuLi9wdWJsaWMnKSkpXHJcbmFwcC51c2Uocm91dGVyKCkpXHJcbmFwcC5saXN0ZW4oODAwMClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/arouter.js":
/*!*******************************!*\
  !*** ./src/routes/arouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst router = new Router();\nconst a = __webpack_require__(/*! ../api/A */ \"./src/api/A.js\");\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Fyb3V0ZXIuanM/OGUxZSJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwicm91dGVyIiwiYSIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBRWxDLE1BQU1DLE1BQU0sR0FBQyxJQUFJRixNQUFNLEVBQUU7QUFFekIsTUFBTUcsQ0FBQyxHQUFDRixtQkFBTyxDQUFDLGdDQUFVLENBQUM7QUFFM0JDLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLElBQUksRUFBQ0QsQ0FBQyxDQUFDO0FBRWxCRSxNQUFNLENBQUNDLE9BQU8sR0FBQ0osTUFBTSIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvYXJvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlcj1yZXF1aXJlKCdrb2Etcm91dGVyJylcclxuXHJcbmNvbnN0IHJvdXRlcj1uZXcgUm91dGVyKClcclxuXHJcbmNvbnN0IGE9cmVxdWlyZSgnLi4vYXBpL0EnKVxyXG5cclxucm91dGVyLmdldCgnL2EnLGEpXHJcblxyXG5tb2R1bGUuZXhwb3J0cz1yb3V0ZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/arouter.js\n");

/***/ }),

/***/ "./src/routes/brouter.js":
/*!*******************************!*\
  !*** ./src/routes/brouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst router = new Router();\nconst b = __webpack_require__(/*! ../api/B */ \"./src/api/B.js\");\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Jyb3V0ZXIuanM/YmFjYSJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwicm91dGVyIiwiYiIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBRWxDLE1BQU1DLE1BQU0sR0FBQyxJQUFJRixNQUFNLEVBQUU7QUFFekIsTUFBTUcsQ0FBQyxHQUFDRixtQkFBTyxDQUFDLGdDQUFVLENBQUM7QUFFM0JDLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLElBQUksRUFBQ0QsQ0FBQyxDQUFDO0FBRWxCRSxNQUFNLENBQUNDLE9BQU8sR0FBQ0osTUFBTSIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvYnJvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlcj1yZXF1aXJlKCdrb2Etcm91dGVyJylcclxuXHJcbmNvbnN0IHJvdXRlcj1uZXcgUm91dGVyKClcclxuXHJcbmNvbnN0IGI9cmVxdWlyZSgnLi4vYXBpL0InKVxyXG5cclxucm91dGVyLmdldCgnL2InLGIpXHJcblxyXG5tb2R1bGUuZXhwb3J0cz1yb3V0ZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/brouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\nconst aroutes = __webpack_require__(/*! ./arouter */ \"./src/routes/arouter.js\");\nconst brouter = __webpack_require__(/*! ./brouter */ \"./src/routes/brouter.js\");\nmodule.exports = combineRoutes(aroutes, brouter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXMiLCJyZXF1aXJlIiwiYXJvdXRlcyIsImJyb3V0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxhQUFhLEdBQUNDLG1CQUFPLENBQUMsZ0RBQXFCLENBQUM7QUFHbEQsTUFBTUMsT0FBTyxHQUFDRCxtQkFBTyxDQUFDLDBDQUFXLENBQUM7QUFDbEMsTUFBTUUsT0FBTyxHQUFDRixtQkFBTyxDQUFDLDBDQUFXLENBQUM7QUFFbENHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFDTCxhQUFhLENBQ3hCRSxPQUFPLEVBQ1BDLE9BQU8sQ0FDViIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcm91dGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29tYmluZVJvdXRlcz1yZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJylcclxuXHJcblxyXG5jb25zdCBhcm91dGVzPXJlcXVpcmUoJy4vYXJvdXRlcicpXHJcbmNvbnN0IGJyb3V0ZXI9cmVxdWlyZSgnLi9icm91dGVyJylcclxuXHJcbm1vZHVsZS5leHBvcnRzPWNvbWJpbmVSb3V0ZXMoXHJcbiAgICBhcm91dGVzLFxyXG4gICAgYnJvdXRlclxyXG4pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });