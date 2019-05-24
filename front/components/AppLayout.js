import React from "react";
import Link from "next/link";
import { Menu, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";
const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.me); // 여기서 state 는 전체 state (reducer/index.js - state)
  const dispatch = useDispatch();

  const onLogOut = e => {
    e.preventDefault();
    dispatch({
      type: LOG_OUT_REQUEST
    });
  };
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key={"ntc"}>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={"edoc"}>
          <Link href="/edocument" as="/edoc">
            <a>전자문서</a>
          </Link>
        </Menu.Item>
        {isLoggedIn && <button onClick={onLogOut}>LOG OUT</button>}
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
