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
/* harmony import */ var _reducers_edocument01__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../reducers/edocument01 */ "./reducers/edocument01.js");


var _jsxFileName = "/Users/linepayroll/Desktop/nextApp/front/pages/edocument/edoc/edoc01.js";





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
}, {
  key: "5",
  name: "Jim Red",
  age: 32,
  address: "London No. 2 Lake Park"
}, {
  key: "6",
  name: "]Jim Red",
  age: 32,
  address: "London No. 2 Lake Park"
}, {
  key: "7",
  name: "Jim Red",
  age: 32,
  address: "London No. 2 Lake Park"
}, {
  key: "8",
  name: "Jim Red",
  age: 32,
  address: "London No. 2 Lake Park"
}];

var edoc01 = function edoc01() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      searchText = _useState2[0],
      setSerchText = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: _reducers_edocument01__WEBPACK_IMPORTED_MODULE_6__["ADD_EDOC_REQUEST"],
      data: {
        nickname: "JW"
      }
    });
  }, []); // 2번째 인자에 아무것도 안들어가면 componentdidmount랑 같다.

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
            lineNumber: 77
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
            lineNumber: 78
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
            lineNumber: 90
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
            lineNumber: 99
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
            lineNumber: 109
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
            lineNumber: 122
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
  var columns = [{
    title: "구분",
    dataIndex: "gubun",
    key: "gubun",
    width: "10%",
    filters: [{
      text: "Joe",
      value: "Joe"
    }, {
      text: "Jim",
      value: "Jim"
    }],
    filteredValue: filteredInfo.name || null,
    onFilter: function onFilter(value, record) {
      return record.name.includes(value);
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "제목",
    dataIndex: "age",
    key: "age",
    width: "50%"
  }, getColumnSearchProps("age")), {
    title: "기안일",
    dataIndex: "address",
    key: "address",
    width: "20%"
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "결재자",
    dataIndex: "address",
    key: "address",
    width: "10%"
  }, getColumnSearchProps("address")), {
    title: "상태",
    dataIndex: "address",
    key: "address",
    width: "10%"
  }]; // return <Table columns={columns} dataSource={data} />;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (edoc01);

/***/ })

})
//# sourceMappingURL=edocument.js.02362f5abbd7fb4f6e94.hot-update.js.map