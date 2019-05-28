webpackHotUpdate("static/development/pages/edocument.js",{

/***/ "./pages/edocument/index.js":
/*!**********************************!*\
  !*** ./pages/edocument/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edocLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edocLogin */ "./pages/edocument/edocLogin.js");
/* harmony import */ var _edocMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edocMain */ "./pages/edocument/edocMain.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/linepayroll/Desktop/nextApp/front/pages/edocument/index.js";



 // import edocMain from "./edocMain";
// 컴포넌트를 import 할땐 항상 대문자 부터 이다.
// 유저 정보에 의해 폼이 바뀌는 것
// 이후 리덕스와 연결하여 state 중앙통제실을 만들어서 사용한다.

var Main = function Main() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.me;
  }),
      me = _useSelector.me,
      isLoggedIn = _useSelector.isLoggedIn; // 여기서 state 는 전체 state (reducer/index.js - state)
  // console.log("? ", me, isLoggedIn);


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, isLoggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_edocMain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_edocLogin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=edocument.js.32b25ae7bb94bc5059a4.hot-update.js.map