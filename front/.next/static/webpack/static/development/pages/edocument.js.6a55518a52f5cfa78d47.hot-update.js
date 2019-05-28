webpackHotUpdate("static/development/pages/edocument.js",{

/***/ "./pages/edocument/edoc/edoc01.js":
/*!****************************************!*\
  !*** ./pages/edocument/edoc/edoc01.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-highlight-words */ "./node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _globalValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalValue */ "./globalValue/index.js");
/* harmony import */ var _editor_edit01__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../editor/edit01 */ "./pages/edocument/editor/edit01.js");












var edoc01 = function edoc01() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      searchText = _useState2[0],
      setSerchText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      filteredInfo = _useState4[0],
      setFilterdInfo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      sortedInfo = _useState6[0],
      setSortedInfo = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      clickedItem = _useState8[0],
      setClickedItem = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
      editVisible = _useState10[0],
      setEditVisible = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("N"),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
      editGubun = _useState12[0],
      setEditGubun = _useState12[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.edocument;
  }),
      edoc = _useSelector.edoc,
      isLogging = _useSelector.isLogging;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.me;
  }),
      me = _useSelector2.me; // 데이터 리덕스에서 가져와서 나누기


  var doc = edoc !== null && edoc.filter(function (item) {
    return (item.EDSTCode === me.SUSTCODE || item.EJBEFJOINSTCODE === me.SUSTCODE) && item.ERSTCODE !== me.SUSTCODE && item.EDEJSeq === item.EJSEQ && item.EDEG1Code >= 100 && item.EDEG1Code < 200;
  });
  var doc2 = edoc !== null && edoc.filter(function (item) {
    return item.EJAFTJOINSTCODE === me.SUSTCODE && item.EJSEQ === item.EDEJSeq && (item.EJSIGNGUBUN === 1 || item.EJSIGNGUBUN === 4) && item.EDEG1Code >= 100 && item.EDEG1Code < 200;
  });
  var doc3 = edoc !== null && edoc.filter(function (item) {
    return item.EJAFTJOINSTCODE === me.SUSTCODE && item.EJSEQ === item.EDEJSeq && item.EJSIGNGUBUN !== 1 && item.EJSIGNGUBUN !== 4 && item.EDEG1Code >= 100 && item.EDEG1Code < 200;
  });
  var searchInput = null; // 검색기능

  var getColumnSearchProps = function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: function filterDropdown(_ref) {
        var setSelectedKeys = _ref.setSelectedKeys,
            selectedKeys = _ref.selectedKeys,
            confirm = _ref.confirm,
            clearFilters = _ref.clearFilters;
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: {
            padding: 8
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
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
          }
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          onClick: function onClick() {
            return handleSearch(selectedKeys, confirm);
          },
          icon: "search",
          size: "small",
          style: {
            width: 90,
            marginRight: 8
          }
        }, "Search"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          onClick: function onClick() {
            return handleReset(clearFilters);
          },
          size: "small",
          style: {
            width: 90
          }
        }, "Reset"));
      },
      filterIcon: function filterIcon(filtered) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
          type: "search",
          style: {
            color: filtered ? "#1890ff" : undefined
          }
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
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_highlight_words__WEBPACK_IMPORTED_MODULE_7___default.a, {
          highlightStyle: {
            backgroundColor: "#ffc069",
            padding: 0
          },
          searchWords: [searchText],
          autoEscape: true,
          textToHighlight: text.toString()
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
  }; // 필터 기능


  var handleChange = function handleChange(pagination, filters, sorter) {
    // console.log("Various parameters", pagination, filters, sorter);
    setFilterdInfo(filters);
    setSortedInfo(sorter); // this.setState({
    //   filteredInfo: filters,
    //   sortedInfo: sorter
    // });
  };

  var filtedEdeg1code = _globalValue__WEBPACK_IMPORTED_MODULE_9__["LIST_EDEG1CODE"].map(function (item, index) {
    return {
      text: item.name,
      value: item.name
    };
  });
  var columns = [{
    title: "구분",
    dataIndex: "EDEG1Name",
    key: "EDEG1Name",
    width: "10%",
    filters: filtedEdeg1code.filter(function (item) {
      return item.text === "인사" || item.text === "업무" || item.text === "총무";
    }),
    filteredValue: filteredInfo.EDEG1Name || null,
    onFilter: function onFilter(value, record) {
      // console.log(record, value, record.EDEG1Name.includes(value));
      return record.EDEG1Name.includes(value);
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    title: "제목",
    dataIndex: "EDTitle",
    key: "EDTitle",
    width: "50%"
  }, getColumnSearchProps("EDTitle")), {
    title: "기안일",
    dataIndex: "EDDateTime",
    key: "EDDateTime",
    width: "20%",
    sorter: function sorter(a, b) {
      return new Date(a.EDDateTime) - new Date(b.EDDateTime);
    },
    sortOrder: sortedInfo.columnKey === "EDDateTime" && sortedInfo.order
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    title: "결재자",
    dataIndex: "EJAFTJOINSTNAME",
    key: "EJAFTJOINSTNAME",
    width: "10%"
  }, getColumnSearchProps("EJAFTJOINSTNAME")), {
    title: "상태",
    dataIndex: "EJSIGNNAME",
    key: "EJSIGNNAME",
    width: "10%"
  }];
  var columns2 = [{
    title: "구분",
    dataIndex: "EDEG1Name",
    key: "EDEG1Name",
    width: "10%",
    filters: filtedEdeg1code.filter(function (item) {
      return item.text === "인사" || item.text === "업무" || item.text === "총무";
    }),
    filteredValue: filteredInfo.EDEG1Name || null,
    onFilter: function onFilter(value, record) {
      // console.log(record, value, record.EDEG1Name.includes(value));
      return record.EDEG1Name.includes(value);
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    title: "제목",
    dataIndex: "EDTitle",
    key: "EDTitle",
    width: "50%"
  }, getColumnSearchProps("EDTitle")), {
    title: "기안일",
    dataIndex: "EDDateTime",
    key: "EDDateTime",
    width: "20%",
    sorter: function sorter(a, b) {
      return new Date(a.EDDateTime) - new Date(b.EDDateTime);
    },
    sortOrder: sortedInfo.columnKey === "EDDateTime" && sortedInfo.order
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    title: "기안자",
    dataIndex: "EJBEFJOINSTNAME",
    key: "EJBEFJOINSTNAME",
    width: "10%"
  }, getColumnSearchProps("EJBEFJOINSTNAME")), {
    title: "상태",
    dataIndex: "EJSIGNNAME",
    key: "EJSIGNNAME",
    width: "10%"
  }];
  var columns3 = [{
    title: "구분",
    dataIndex: "EDEG1Name",
    key: "EDEG1Name",
    width: "10%",
    filters: filtedEdeg1code.filter(function (item) {
      return item.text === "인사" || item.text === "업무" || item.text === "총무";
    }),
    filteredValue: filteredInfo.EDEG1Name || null,
    onFilter: function onFilter(value, record) {
      // console.log(record, value, record.EDEG1Name.includes(value));
      return record.EDEG1Name.includes(value);
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    title: "제목",
    dataIndex: "EDTitle",
    key: "EDTitle",
    width: "50%"
  }, getColumnSearchProps("EDTitle")), {
    title: "기안일",
    dataIndex: "EDDateTime",
    key: "EDDateTime",
    width: "20%",
    sorter: function sorter(a, b) {
      return new Date(a.EDDateTime) - new Date(b.EDDateTime);
    },
    sortOrder: sortedInfo.columnKey === "EDDateTime" && sortedInfo.order
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    title: "기안자",
    dataIndex: "EDSTNAME",
    key: "EDSTNAME",
    width: "10%"
  }, getColumnSearchProps("EDSTNAME")), {
    title: "상태",
    dataIndex: "EJSIGNNAME",
    key: "EJSIGNNAME",
    width: "10%"
  }];

  var itemClicked =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(record, index) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("itemClicked", record, index);
              _context.next = 3;
              return setClickedItem(record);

            case 3:
              _context.next = 5;
              return setEditGubun("U");

            case 5:
              _context.next = 7;
              return setEditVisible(true);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function itemClicked(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var TabPane = antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"].TabPane;
  console.log("edoc @!!", edoc);
  return isLogging && edoc === null ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    type: "card"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabPane, {
    tab: "\uB0B4 \uACB0\uC7AC\uD568",
    key: "1"
  }, editVisible ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_editor_edit01__WEBPACK_IMPORTED_MODULE_10__["default"], {
    clickedItem: clickedItem,
    setEditVisible: setEditVisible,
    gubun: editGubun,
    me: me
  }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    columns: columns,
    dataSource: doc,
    onChange: handleChange,
    onRow: function onRow(record, rowIndex) {
      return {
        onClick: function onClick() {
          return itemClicked(record, rowIndex);
        }
      };
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabPane, {
    tab: "\uC5C5\uBB34 \uC694\uCCAD",
    key: "2"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    columns: columns2,
    dataSource: doc2
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabPane, {
    tab: "\uC804\uC790 \uBB38\uC11C\uD568",
    key: "3"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    columns: columns3,
    dataSource: doc3
  }))); // return <div />;
};

/* harmony default export */ __webpack_exports__["default"] = (edoc01);

/***/ })

})
//# sourceMappingURL=edocument.js.6a55518a52f5cfa78d47.hot-update.js.map