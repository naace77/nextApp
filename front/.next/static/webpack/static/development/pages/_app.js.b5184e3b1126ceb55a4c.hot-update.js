webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _saga_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../saga/middleware */ "./saga/middleware.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../saga */ "./saga/index.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-redux-saga */ "./node_modules/next-redux-saga/dist/next-redux-saga.es.js");




 // _app.js 는 모든 곳에 들어가는 곳이기다.
// 리덕스는 모든 곳에서 공유해야 한다 따라서 이곳에서 정의.

 //중앙통제실 역할

 //중앙통제실 역할



 //npm i next-redux-wrapper
// store를 넣어줄 구현이 안되있기 때문에 next에서 제공해주는 것을 사용




 //넥스트용 리덕스 사가

var Line = function Line(_ref) {
  var Component = _ref.Component,
      store = _ref.store,
      pageProps = _ref.pageProps;
  console.log("pageProps", pageProps);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, "\uB77C\uC778\uD398\uC774\uB864 \uC11C\uBE44\uC2A4"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, pageProps))));
}; // 서버 사이드 랜더링을 위함 (강의 59)


Line.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var ctx, Component, pageProps, state, cookie;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // next 에서 내려주는 context
            ctx = context.ctx, Component = context.Component; // context 안에 ctx

            pageProps = {};
            state = ctx.store.getState();
            cookie = ctx.isServer ? ctx.req.headers.cookie : ""; //서버사이드랜더링에서 서버에 쿠키 보내기 위해 작업

            if (ctx.isServer && cookie) {
              axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.headers.Cookie = cookie;
            } // console.log("line", state);


            if (state.me.me === null) {
              // console.log("linestateme", state.me.me);
              ctx.store.dispatch({
                type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_REQUEST"]
              });
            }

            if (!Component.getInitialProps) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return Component.getInitialProps(ctx);

          case 9:
            pageProps = _context.sent;

          case 10:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(); // export default Line;


var configureStore = function configureStore(initialState, options) {
  // 여기에다가 스토어 커스터마이징 (기능 추가)
  // 리덕스가 콘솔에 노출되지 않도록 (보안)
  var middlewares = [_saga_middleware__WEBPACK_IMPORTED_MODULE_11__["default"]];
  var enhancer = process.emitWarning && process.emitWarning.NODE_ENV === "production" //개발일때만 디벨롭툴 사용하도록 (보안)
  ? Object(redux__WEBPACK_IMPORTED_MODULE_6__["compose"])(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"].apply(void 0, middlewares)) : Object(redux__WEBPACK_IMPORTED_MODULE_6__["compose"])(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"].apply(void 0, middlewares), typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["default"], initialState, enhancer);
  store.sagaTask = _saga_middleware__WEBPACK_IMPORTED_MODULE_11__["default"].run(_saga__WEBPACK_IMPORTED_MODULE_12__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__["default"])(configureStore)(Object(next_redux_saga__WEBPACK_IMPORTED_MODULE_13__["default"])(Line))); //withReduxSaga가 내부에서 필요로 한다. - 넥스트에서 서버사이드 랜더링 하기위해서
// const store = createStore(reducer, initialState);
// 고위컴포넌트, 하이오더컴포넌트 - 기존컴포넌트 기능을 확장해줌.
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=_app.js.b5184e3b1126ceb55a4c.hot-update.js.map