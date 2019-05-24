import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

// _app.js 는 모든 곳에 들어가는 곳이기다.
// 리덕스는 모든 곳에서 공유해야 한다 따라서 이곳에서 정의.

import { Provider } from "react-redux"; //중앙통제실 역할
import { createStore, compose, applyMiddleware } from "redux"; //중앙통제실 역할
import reducer from "../reducers";

//npm i next-redux-wrapper
// store를 넣어줄 구현이 안되있기 때문에 next에서 제공해주는 것을 사용
import withRedux from "next-redux-wrapper";
import sagaMiddleware from "../saga/middleware";
import rootSaga from "../saga";

const Line = ({ Component, store }) => {
  return (
    <div>
      <Provider store={store}>
        {/* 이 아래 부터 모든 store를 받는다. */}
        <Head>
          <title>라인페이롤 서비스</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js" />
        </Head>
        <AppLayout>
          <Component />
        </AppLayout>
      </Provider>
    </div>
  );
};

// export default Line;
export default withRedux((initialState, options) => {
  // 여기에다가 스토어 커스터마이징 (기능 추가)
  // 리덕스가 콘솔에 노출되지 않도록 (보안)
  const middlewares = [sagaMiddleware];
  // console.log(process);
  const enhancer =
    process.emitWarning && process.emitWarning.NODE_ENV === "production" //개발일때만 디벨롭툴 사용하도록 (보안)
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          typeof window !== "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  // const store = createStore(reducer, initialState);
  return store;
})(Line); // 고위컴포넌트, 하이오더컴포넌트 - 기존컴포넌트 기능을 확장해줌.
