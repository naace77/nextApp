webpackHotUpdate("static/development/pages/edocument.js",{

/***/ "./pages/edocument/edoc/edoc01.js":
/*!****************************************!*\
  !*** ./pages/edocument/edoc/edoc01.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight-words */ "./node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/linepayroll/Desktop/nextApp/front/pages/edocument/edoc/edoc01.js";




var data = [{
  key: "1",
  name: "John Brown",
  age: 32,
  address: "New York No. 1 Lake Park"
}, {
  key: "2",
  name: "Joe Black",
  age: 42,
  address: "London No. 1 Lake Park"
}, {
  key: "3",
  name: "Jim Green",
  age: 32,
  address: "Sidney No. 1 Lake Park"
}, {
  key: "4",
  name: "Jim Red",
  age: 32,
  address: "London No. 2 Lake Park"
}];

var edoc01 = function edoc01() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      searchText = _useState2[0],
      setSerchText = _useState2[1];

  var getColumnSearchProps = function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: function filterDropdown(_ref) {
        var setSelectedKeys = _ref.setSelectedKeys,
            selectedKeys = _ref.selectedKeys,
            confirm = _ref.confirm,
            clearFilters = _ref.clearFilters;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            padding: 8
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          ref: function ref(node) {
            _this.searchInput = node;
          },
          placeholder: "Search ".concat(dataIndex),
          value: selectedKeys[0],
          onChange: function onChange(e) {
            return setSelectedKeys(e.target.value ? [e.target.value] : []);
          },
          onPressEnter: function onPressEnter() {
            return _this.handleSearch(selectedKeys, confirm);
          },
          style: {
            width: 188,
            marginBottom: 8,
            display: "block"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          onClick: function onClick() {
            return _this.handleSearch(selectedKeys, confirm);
          },
          icon: "search",
          size: "small",
          style: {
            width: 90,
            marginRight: 8
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return _this.handleReset(clearFilters);
          },
          size: "small",
          style: {
            width: 90
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "Reset"));
      }
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\uC804\uC790 \uACB0\uC7AC");
};

/* harmony default export */ __webpack_exports__["default"] = (edoc01);

/***/ })

})
//# sourceMappingURL=edocument.js.884a023a63ba4b33ed66.hot-update.js.map