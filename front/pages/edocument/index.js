import React from "react";
import Login from "./edocLogin";
import EdocMain from "./edocMain";
import { useSelector } from "react-redux";
// import edocMain from "./edocMain";
// 컴포넌트를 import 할땐 항상 대문자 부터 이다.

// 유저 정보에 의해 폼이 바뀌는 것
// 이후 리덕스와 연결하여 state 중앙통제실을 만들어서 사용한다.

const Main = () => {
  const { me, isLoggedIn } = useSelector(state => state.me); // 여기서 state 는 전체 state (reducer/index.js - state)
  // console.log("? ", me, isLoggedIn);
  return <div>{isLoggedIn ? <EdocMain /> : <Login />}</div>;
};

export default Main;
