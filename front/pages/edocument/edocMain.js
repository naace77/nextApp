import React, { useEffect, useState } from "react";
import { Layout, Menu, Icon } from "antd";
import Edoc1 from "./edoc/edoc01";
import Edoc2 from "./edoc/edoc02";
import Edoc3 from "./edoc/edoc03";
import { useDispatch, useSelector } from "react-redux";
import { ADD_EDOC_REQUEST } from "../../reducers/edocument01";

const { Header, Content, Footer, Sider } = Layout;

const edocMain = () => {
  const [selectedPage, setSelectedPage] = useState("1");
  const { me } = useSelector(state => state.me); // 여기서 state 는 전체 state (reducer/index.js - state)
  // console.log(me);
  // redux에 전자문서를 붙여준다
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("useEffect");
    // dispatch({
    //   type: ADD_EDOC_REQUEST,
    //   data: {
    //     stcode: me.SUSTCODE,
    //     scdbname: me.SCDBNAME,
    //     schostip: me.SCHOSTIP
    //   }
    // });
  }, []);

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedPage]}
          onClick={item => setSelectedPage(item.key)}
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">전자결재</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">업무요청</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">전자문서</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">공지사항</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {selectedPage === "1" && <Edoc1 />}
            {selectedPage === "2" && <Edoc2 />}
            {selectedPage === "3" && <Edoc3 />}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>급여박사 그룹웨어</Footer>
      </Layout>
    </Layout>
  );
};

export default edocMain;
