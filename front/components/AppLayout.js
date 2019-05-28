import React, { useEffect } from "react";
import Link from "next/link";
import { Menu, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST, LOAD_USER_REQUEST } from "../reducers/user";
const AppLayout = ({ children }) => {
  const { isLoggedIn, me } = useSelector(state => state.me); // 여기서 state 는 전체 state (reducer/index.js - state)
  const dispatch = useDispatch();

  const onLogOut = e => {
    e.preventDefault();
    dispatch({
      type: LOG_OUT_REQUEST
    });
  };

  //쿠키로 로그인여부 판단하여 유저정보 가져오기
  // redux, saga, backend /user 부분 참고
  // 최상위 루트에서 하는 이유는 매번 로드 될때마다 로그인 여부를 판단하여야 하기 때문이다.
  // 보안 및 세션만료 체크 가능
  // 서버쪽에선 매번 디비에 붙어야 하는 부담을 덜기 위해 캐싱처리 과정이 필요함 - 이후 진행
  // useEffect(() => {
  //   if (!me) {
  //     console.log("dispatch !!");
  //     dispatch({
  //       type: LOAD_USER_REQUEST
  //     });
  //   }
  // }, [me]);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key={"ntc"}>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={"edoc"}>
          <Link href="/edocument">
            <a>전자문서</a>
          </Link>
        </Menu.Item>
        {isLoggedIn && <Button onClick={onLogOut}>LOG OUT</Button>}
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
