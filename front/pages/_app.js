import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga"; //넥스트용 리덕스 사가
// _app.js 는 모든 곳에 들어가는 곳이기다.
// 리덕스는 모든 곳에서 공유해야 한다 따라서 이곳에서 정의.
import { createStore, compose, applyMiddleware } from "redux"; //중앙통제실 역할
import { Provider } from "react-redux"; //중앙통제실 역할
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import { LOAD_USER_REQUEST } from "../reducers/user";
import axios from "axios";
//npm i next-redux-wrapper
// store를 넣어줄 구현이 안되있기 때문에 next에서 제공해주는 것을 사용
import rootSaga from "../saga";

const Line = ({ Component, store, pageProps }) => {
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
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </div>
  );
};
// 서버 사이드 랜더링을 위함 (강의 59)
Line.getInitialProps = async context => {
  console.log("getInit");
  // next 에서 내려주는 context
  const { ctx, Component } = context; // context 안에 ctx
  let pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : ""; //서버사이드랜더링에서 서버에 쿠키 보내기 위해 작업
  if (ctx.isServer && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  if (!state.me.me) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST
    });
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
// export default Line;
const configureStore = (initialState, options) => {
  // 여기에다가 스토어 커스터마이징 (기능 추가)
  // 리덕스가 콘솔에 노출되지 않도록 (보안)
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    store => next => action => {
      console.log("sagaAction ", action);
      next(action);
    }
  ];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(Line)); //withReduxSaga가 내부에서 필요로 한다. - 넥스트에서 서버사이드 랜더링 하기위해서

// const store = createStore(reducer, initialState);
// 고위컴포넌트, 하이오더컴포넌트 - 기존컴포넌트 기능을 확장해줌.
