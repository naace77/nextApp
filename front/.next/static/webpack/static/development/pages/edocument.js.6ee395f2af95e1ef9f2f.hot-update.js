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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "/Users/linepayroll/Desktop/nextApp/front/pages/edocument/edoc/edoc01.js";



 // const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park"
//   },
//   {
//     key: "2",
//     name: "Joe Black",
//     age: 42,
//     address: "London No. 1 Lake Park"
//   },
//   {
//     key: "3",
//     name: "Jim Green",
//     age: 32,
//     address: "Sidney No. 1 Lake Park"
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park"
//   },
//   {
//     key: "5",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park"
//   },
//   {
//     key: "6",
//     name: "]Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park"
//   },
//   {
//     key: "7",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park"
//   },
//   {
//     key: "8",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park"
//   }
// ];

var edoc01 = function edoc01() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      searchText = _useState2[0],
      setSerchText = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.edocument;
  }),
      edoc = _useSelector.edoc;

  var doc = edoc.filter(function (item) {
    return item.EDEG1Code >= 100 && item.EDEG1Code < 200;
  });
  console.log(doc);
  var filteredInfo = filteredInfo || {};
  var columns = [{
    title: "구분",
    dataIndex: "EDEG2Code",
    key: "EDEG2Code",
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
  }, {
    title: "제목",
    dataIndex: "EDTitle",
    key: "EDTitle",
    width: "50%" // ...getColumnSearchProps("EDTitle")

  }, {
    title: "기안일",
    dataIndex: "EDDateTime",
    key: "EDDateTime",
    width: "20%"
  }, {
    title: "결재자",
    dataIndex: "EJAFTJOINSTNAME",
    key: "EJAFTJOINSTNAME",
    width: "10%" // ...getColumnSearchProps("address")

  }, {
    title: "상태",
    dataIndex: "EJSIGNGUBUN",
    key: "EJSIGNGUBUN",
    width: "10%"
  }];
  var searchInput = null;

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
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
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
            lineNumber: 110
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
            lineNumber: 122
          },
          __self: this
        }, "Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return handleReset(clearFilters);
          },
          size: "small",
          style: {
            width: 90
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, "Reset"));
      },
      filterIcon: function filterIcon(filtered) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "search",
          style: {
            color: filtered ? "#1890ff" : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highlight_words__WEBPACK_IMPORTED_MODULE_3___default.a, {
          highlightStyle: {
            backgroundColor: "#ffc069",
            padding: 0
          },
          searchWords: [searchText],
          autoEscape: true,
          textToHighlight: text.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    columns: columns,
    dataSource: doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }); // return <div />;
};

/* harmony default export */ __webpack_exports__["default"] = (edoc01);

/***/ })

})
//# sourceMappingURL=edocument.js.6ee395f2af95e1ef9f2f.hot-update.js.map