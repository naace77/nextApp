webpackHotUpdate("static/development/pages/edocument.js",{

/***/ "./pages/edocument/edoc/edoc01.js":
/*!****************************************!*\
  !*** ./pages/edocument/edoc/edoc01.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-highlight-words */ "./node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _globalValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globalValue */ "./globalValue/index.js");


var _jsxFileName = "/Users/linepayroll/Desktop/nextApp/front/pages/edocument/edoc/edoc01.js";






var edoc01 = function edoc01() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      searchText = _useState2[0],
      setSerchText = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.edocument;
  }),
      edoc = _useSelector.edoc;

  var doc = edoc.filter(function (item) {
    return item.EDEG1Code >= 100 && item.EDEG1Code < 200;
  });
  var searchInput = null;

  var getColumnSearchProps = function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: function filterDropdown(_ref) {
        var setSelectedKeys = _ref.setSelectedKeys,
            selectedKeys = _ref.selectedKeys,
            confirm = _ref.confirm,
            clearFilters = _ref.clearFilters;
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            padding: 8
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
          ref: function ref(node) {
            searchInput = node;
          },
          placeholder: "Search ".concat(dataIndex),
          value: selectedKeys[0],
          onChange: function onChange(e) {
            return setSelectedKeys(e.target.value ? [e.target.value] : []);
          },
          onPressEnter: function onPressEnter() {
            return handleSearch(selectedKeys, confirm);
          },
          style: {
            width: 188,
            marginBottom: 8,
            display: "block"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "primary",
          onClick: function onClick() {
            return handleSearch(selectedKeys, confirm);
          },
          icon: "search",
          size: "small",
          style: {
            width: 90,
            marginRight: 8
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "Search"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          onClick: function onClick() {
            return handleReset(clearFilters);
          },
          size: "small",
          style: {
            width: 90
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Reset"));
      },
      filterIcon: function filterIcon(filtered) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          type: "search",
          style: {
            color: filtered ? "#1890ff" : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        });
      },
      onFilter: function onFilter(value, record) {
        return record[dataIndex].toString().toLowerCase().includes(value.toLowerCase());
      },
      onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
        if (visible) {
          setTimeout(function () {
            return searchInput.select();
          });
        }
      },
      render: function render(text) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_highlight_words__WEBPACK_IMPORTED_MODULE_4___default.a, {
          highlightStyle: {
            backgroundColor: "#ffc069",
            padding: 0
          },
          searchWords: [searchText],
          autoEscape: true,
          textToHighlight: text.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        });
      }
    };
  };

  var handleSearch = function handleSearch(selectedKeys, confirm) {
    confirm();
    setSerchText(selectedKeys[0]);
  };

  var handleReset = function handleReset(clearFilters) {
    clearFilters();
    setSerchText("");
  };

  var filteredInfo = filteredInfo || {};
  var filtedEdeg1code = _globalValue__WEBPACK_IMPORTED_MODULE_6__["LIST_EDEG1CODE"].map(function (item, index) {
    return {
      text: item.name,
      value: item.value
    };
  });
  var columns = [{
    title: "구분",
    dataIndex: "EDEG2Code",
    key: "EDEG2Code",
    width: "10%",
    filters: filtedEdeg1code.filter(function (item) {
      return item.value === 100 || item.value === 101 || item.value === 102;
    }),
    filteredValue: filteredInfo.name || null,
    onFilter: function onFilter(value, record) {
      return record.name.includes(value);
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "제목",
    dataIndex: "EDTitle",
    key: "EDTitle",
    width: "50%"
  }, getColumnSearchProps("EDTitle")), {
    title: "기안일",
    dataIndex: "EDDateTime",
    key: "EDDateTime",
    width: "20%"
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "결재자",
    dataIndex: "EJAFTJOINSTNAME",
    key: "EJAFTJOINSTNAME",
    width: "10%"
  }, getColumnSearchProps("address")), {
    title: "상태",
    dataIndex: "EJSIGNGUBUN",
    key: "EJSIGNGUBUN",
    width: "10%"
  }];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    columns: columns,
    dataSource: doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }); // return <div />;
};

/* harmony default export */ __webpack_exports__["default"] = (edoc01);

/***/ })

})
//# sourceMappingURL=edocument.js.cea1cc5f334b8da67645.hot-update.js.map