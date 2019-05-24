webpackHotUpdate("static/development/pages/edocument.js",{

/***/ "./reducers/edocument01.js":
/*!*********************************!*\
  !*** ./reducers/edocument01.js ***!
  \*********************************/
/*! exports provided: initialState, ADD_EDOC_REQUEST, ADD_EDOC_SECCESS, ADD_EDOC_FAILURE, UPDATE_EDOC_REQUEST, UPDATE_EDOC_SECCESS, UPDATE_EDOC_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EDOC_REQUEST", function() { return ADD_EDOC_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EDOC_SECCESS", function() { return ADD_EDOC_SECCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EDOC_FAILURE", function() { return ADD_EDOC_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EDOC_REQUEST", function() { return UPDATE_EDOC_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EDOC_SECCESS", function() { return UPDATE_EDOC_SECCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EDOC_FAILURE", function() { return UPDATE_EDOC_FAILURE; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _globalValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalValue */ "./globalValue/index.js");


var initialState = {
  edoc: null,
  // 전자 결재 리스트
  isLogging: false // 데이터 불러우는 중

}; // 액션 정의
// 결재 리스트 불러오기

var ADD_EDOC_REQUEST = "ADD_EDOC_REQUEST";
var ADD_EDOC_SECCESS = "ADD_EDOC_SECCESS";
var ADD_EDOC_FAILURE = "ADD_EDOC_FAILURE"; // 결재 리스트 업데이트 하기

var UPDATE_EDOC_REQUEST = "UPDATE_EDOC_REQUEST";
var UPDATE_EDOC_SECCESS = "UPDATE_EDOC_SECCESS";
var UPDATE_EDOC_FAILURE = "UPDATE_EDOC_FAILURE";

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_EDOC_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLogging: true
        });
      }

    case ADD_EDOC_SECCESS:
      {
        console.log("matchedData", action.data);
        var matchedData = action.data.map(function (item, index) {
          var test = _globalValue__WEBPACK_IMPORTED_MODULE_1__["LIST_EDEG1CODE"].filter(function (c) {
            return c.value = item.EDEG2Code;
          })[0];
          console.log(test);
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
            EDEG2Code: "인사"
          });
        });
        console.log("matchedData", matchedData);
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLogging: false,
          edoc: matchedData
        });
      }

    case ADD_EDOC_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLogging: false
        });
      }

    default:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=edocument.js.e9bb3b3cd3f475558436.hot-update.js.map