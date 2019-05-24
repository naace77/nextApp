import React, { useState, useEffect } from "react";
import { Table, Input, Button, Icon, Tabs } from "antd";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import { LIST_EDEG1CODE } from "../../../globalValue";
const edoc01 = () => {
  const [searchText, setSerchText] = useState("");
  const { edoc, isLogging } = useSelector(state => state.edocument);
  const { me } = useSelector(state => state.me);
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
  const filteredInfo = filteredInfo || {};
  const filtedEdeg1code = LIST_EDEG1CODE.map((item, index) => {
    return {
      text: item.name,
      value: item.value
    };
  });
  const columns = [
    {
      title: "구분",
      dataIndex: "EDEG1Name",
      key: "EDEG1Name",
      width: "10%",
      filters: filtedEdeg1code.filter(
        item => item.value === 100 || item.value === 101 || item.value === 102
      ),
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value)
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
      width: "20%"
    },
    {
      title: "결재자",
      dataIndex: "EJAFTJOINSTNAME",
      key: "EJAFTJOINSTNAME",
      width: "10%",
      ...getColumnSearchProps("address")
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
        item => item.value === 100 || item.value === 101 || item.value === 102
      ),
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value)
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
      width: "20%"
    },
    {
      title: "기안자",
      dataIndex: "EJAFTJOINSTNAME",
      key: "EJAFTJOINSTNAME",
      width: "10%",
      ...getColumnSearchProps("address")
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
        item => item.value === 100 || item.value === 101 || item.value === 102
      ),
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value)
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
      width: "20%"
    },
    {
      title: "결재자",
      dataIndex: "EJAFTJOINSTNAME",
      key: "EJAFTJOINSTNAME",
      width: "10%",
      ...getColumnSearchProps("address")
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
      <TabPane tab="내 결재함" key="1">
        <Table columns={columns} dataSource={doc} />
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
