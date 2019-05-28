webpackHotUpdate("static/development/pages/edocument.js",{

/***/ "./pages/edocument/index.js":
/*!**********************************!*\
  !*** ./pages/edocument/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edocLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edocLogin */ "./pages/edocument/edocLogin.js");
/* harmony import */ var _edocMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edocMain */ "./pages/edocument/edocMain.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");






 // import edocMain from "./edocMain";
// 컴포넌트를 import 할땐 항상 대문자 부터 이다.
// 유저 정보에 의해 폼이 바뀌는 것
// 이후 리덕스와 연결하여 state 중앙통제실을 만들어서 사용한다.

var Main = function Main() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.me;
  }),
      me = _useSelector.me,
      isLoggedIn = _useSelector.isLoggedIn; // 여기서 state 는 전체 state (reducer/index.js - state)


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, isLoggedIn ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_edocMain__WEBPACK_IMPORTED_MODULE_4__["default"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_edocLogin__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

Main.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=edocument.js.98ce89ea352e8b193a41.hot-update.js.map