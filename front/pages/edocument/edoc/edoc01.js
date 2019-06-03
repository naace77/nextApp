import React, { useState, useCallback } from "react";
import { Table, Input, Button, Icon, Tabs } from "antd";
import Link from "next/link";
import Highlighter from "react-highlight-words";
import { useSelector, useDispatch } from "react-redux";
import { LIST_EDEG1CODE } from "../../../globalValue";
import Edit01 from "../editor/edit01";
import { LOAD_USER_REQUEST } from "../../../reducers/user";
const edoc01 = () => {
  const [searchText, setSerchText] = useState("");
  const [filteredInfo, setFilterdInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [clickedItem, setClickedItem] = useState({});
  const [editVisible, setEditVisible] = useState(false);
  const [editGubun, setEditGubun] = useState("N");
  const { edoc, isLogging } = useSelector(state => state.edocument);
  const { me } = useSelector(state => state.me);
  // 데이터 리덕스에서 가져와서 나누기
  const doc =
    edoc !== null &&
    edoc.filter(
      item =>
        (item.EDSTCode === me.SUSTCODE ||
          item.EJBEFJOINSTCODE === me.SUSTCODE) &&
        item.ERSTCODE !== me.SUSTCODE &&
        item.EDEJSeq === item.EJSEQ &&
        (item.EDEG1Code >= 100 && item.EDEG1Code < 200)
    );
  const doc2 =
    edoc !== null &&
    edoc.filter(
      item =>
        item.EJAFTJOINSTCODE === me.SUSTCODE &&
        item.EJSEQ === item.EDEJSeq &&
        (item.EJSIGNGUBUN === 1 || item.EJSIGNGUBUN === 4) &&
        (item.EDEG1Code >= 100 && item.EDEG1Code < 200)
    );
  const doc3 =
    edoc !== null &&
    edoc.filter(
      item =>
        item.EJAFTJOINSTCODE === me.SUSTCODE &&
        item.EJSEQ === item.EDEJSeq &&
        item.EJSIGNGUBUN !== 1 &&
        item.EJSIGNGUBUN !== 4 &&
        (item.EDEG1Code >= 100 && item.EDEG1Code < 200)
    );

  var searchInput = null;

  // 검색기능
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  });
  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSerchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSerchText("");
  };

  // 필터 기능
  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setFilterdInfo(filters);
    setSortedInfo(sorter);
    // this.setState({
    //   filteredInfo: filters,
    //   sortedInfo: sorter
    // });
  };
  const filtedEdeg1code = LIST_EDEG1CODE.map((item, index) => {
    return {
      text: item.name,
      value: item.name
    };
  });

  const columns = [
    {
      title: "구분",
      dataIndex: "EDEG1Name",
      key: "EDEG1Name",
      width: "10%",
      filters: filtedEdeg1code.filter(
        item =>
          item.text === "인사" || item.text === "업무" || item.text === "총무"
      ),
      filteredValue: filteredInfo.EDEG1Name || null,
      onFilter: (value, record) => {
        // console.log(record, value, record.EDEG1Name.includes(value));
        return record.EDEG1Name.includes(value);
      }
    },
    {
      title: "제목",
      dataIndex: "EDTitle",
      key: "EDTitle",
      width: "50%",
      ...getColumnSearchProps("EDTitle")
    },
    {
      title: "기안일",
      dataIndex: "EDDateTime",
      key: "EDDateTime",
      width: "20%",
      sorter: (a, b) => new Date(a.EDDateTime) - new Date(b.EDDateTime),
      sortOrder: sortedInfo.columnKey === "EDDateTime" && sortedInfo.order
    },
    {
      title: "결재자",
      dataIndex: "EJAFTJOINSTNAME",
      key: "EJAFTJOINSTNAME",
      width: "10%",
      ...getColumnSearchProps("EJAFTJOINSTNAME")
    },
    {
      title: "상태",
      dataIndex: "EJSIGNNAME",
      key: "EJSIGNNAME",
      width: "10%"
    }
  ];
  const columns2 = [
    {
      title: "구분",
      dataIndex: "EDEG1Name",
      key: "EDEG1Name",
      width: "10%",
      filters: filtedEdeg1code.filter(
        item =>
          item.text === "인사" || item.text === "업무" || item.text === "총무"
      ),
      filteredValue: filteredInfo.EDEG1Name || null,
      onFilter: (value, record) => {
        // console.log(record, value, record.EDEG1Name.includes(value));
        return record.EDEG1Name.includes(value);
      }
    },
    {
      title: "제목",
      dataIndex: "EDTitle",
      key: "EDTitle",
      width: "50%",
      ...getColumnSearchProps("EDTitle")
    },
    {
      title: "기안일",
      dataIndex: "EDDateTime",
      key: "EDDateTime",
      width: "20%",
      sorter: (a, b) => new Date(a.EDDateTime) - new Date(b.EDDateTime),
      sortOrder: sortedInfo.columnKey === "EDDateTime" && sortedInfo.order
    },
    {
      title: "기안자",
      dataIndex: "EJBEFJOINSTNAME",
      key: "EJBEFJOINSTNAME",
      width: "10%",
      ...getColumnSearchProps("EJBEFJOINSTNAME")
    },
    {
      title: "상태",
      dataIndex: "EJSIGNNAME",
      key: "EJSIGNNAME",
      width: "10%"
    }
  ];
  const columns3 = [
    {
      title: "구분",
      dataIndex: "EDEG1Name",
      key: "EDEG1Name",
      width: "10%",
      filters: filtedEdeg1code.filter(
        item =>
          item.text === "인사" || item.text === "업무" || item.text === "총무"
      ),
      filteredValue: filteredInfo.EDEG1Name || null,
      onFilter: (value, record) => {
        // console.log(record, value, record.EDEG1Name.includes(value));
        return record.EDEG1Name.includes(value);
      }
    },
    {
      title: "제목",
      dataIndex: "EDTitle",
      key: "EDTitle",
      width: "50%",
      ...getColumnSearchProps("EDTitle")
    },
    {
      title: "기안일",
      dataIndex: "EDDateTime",
      key: "EDDateTime",
      width: "20%",
      sorter: (a, b) => new Date(a.EDDateTime) - new Date(b.EDDateTime),
      sortOrder: sortedInfo.columnKey === "EDDateTime" && sortedInfo.order
    },
    {
      title: "기안자",
      dataIndex: "EDSTNAME",
      key: "EDSTNAME",
      width: "10%",
      ...getColumnSearchProps("EDSTNAME")
    },
    {
      title: "상태",
      dataIndex: "EJSIGNNAME",
      key: "EJSIGNNAME",
      width: "10%"
    }
  ];
  // const dispatch = useDispatch();
  const itemClicked = async (record, index) => {
    console.log("itemClicked", record, index);
    await setClickedItem(record);
    await setEditGubun("U"); // UPDATE
    await setEditVisible(true);
    // dispatch({
    //   type: LOAD_USER_REQUEST
    // });
  };
  const TabPane = Tabs.TabPane;
  return isLogging || edoc === null ? null : (
    <Tabs type="card">
      <TabPane tab="내 결재함" key="1">
        {editVisible ? (
          <Edit01
            clickedItem={clickedItem}
            setEditVisible={setEditVisible}
            gubun={editGubun}
            me={me}
          />
        ) : (
          <Table
            columns={columns}
            dataSource={doc}
            onChange={handleChange}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => itemClicked(record, rowIndex)
              };
            }}
          />
        )}
      </TabPane>
      <TabPane tab="업무 요청" key="2">
        <Table columns={columns2} dataSource={doc2} />
      </TabPane>
      <TabPane tab="전자 문서함" key="3">
        <Table columns={columns3} dataSource={doc3} />
      </TabPane>
    </Tabs>
  );
  // return <div />;
};

export default edoc01;
