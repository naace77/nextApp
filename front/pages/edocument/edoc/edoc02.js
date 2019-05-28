import React, { useState, useEffect } from "react";
import { Table, Input, Button, Icon, Tabs } from "antd";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import { LIST_EDEG1CODE } from "../../../globalValue";
const edoc02 = () => {
  const [searchText, setSerchText] = useState("");
  const [filteredInfo, setFilterdInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { edoc, isLogging } = useSelector(state => state.edocument);
  const { me } = useSelector(state => state.me);

  const doc =
    edoc !== null &&
    edoc.filter(
      item =>
        item.EDSTCode === me.SUSTCODE &&
        item.EDEJSeq === item.EJSEQ &&
        (item.EDEG1Code >= 200 && item.EDEG1Code < 300)
    );
  const doc2 =
    edoc !== null &&
    edoc.filter(
      item =>
        item.EJAFTJOINSTCODE === me.SUSTCODE &&
        item.EJSEQ === item.EDEJSeq &&
        item.EJSIGNGUBUN !== 8 &&
        (item.EDEG1Code >= 200 && item.EDEG1Code < 300)
    );
  const doc3 =
    edoc !== null &&
    edoc.filter(
      item =>
        item.EJAFTJOINSTCODE === me.SUSTCODE &&
        item.EJSEQ === item.EDEJSeq &&
        (item.EDEG1Code >= 200 &&
          item.EDEG1Code < 300 &&
          item.EJSIGNGUBUN === 8)
    );

  var searchInput = null;
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
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
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
  const TabPane = Tabs.TabPane;
  return isLogging ? null : (
    <Tabs type="card">
      <TabPane tab="내 업무함" key="1">
        <Table columns={columns} dataSource={doc} onChange={handleChange} />
      </TabPane>
      <TabPane tab="받은 업무" key="2">
        <Table columns={columns2} dataSource={doc2} />
      </TabPane>
      <TabPane tab="처리 완료" key="3">
        <Table columns={columns3} dataSource={doc3} />
      </TabPane>
    </Tabs>
  );
  // return <div />;
};

export default edoc02;
