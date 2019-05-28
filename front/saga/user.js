import {
  all,
  fork,
  takeLatest,
  put,
  call,
  takeEvery
} from "redux-saga/effects";
import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST
} from "../reducers/user";
import { ADD_EDOC_REQUEST } from "../reducers/edocument01";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

function loadUserAPI(data) {
  console.log("loadUserAPI");
  // 서버에 쿠키보내서 로그인 여부 확인
  // 서버사이드 랜더링에서는 이부분을 수정해야함
  return axios.get("/user/", {
    withCredentials: true // 쿠키를 받기 위함. 서버쪽도 설정해야함 - index.js
    // 클라이언트가 요청보낼땐 브라우저가 쿠키 동봉. 서버사이드는 브라우저가 없음
  });
}
function* loadUser(action) {
  var result = "";
  try {
    result = yield call(loadUserAPI, action.data);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data[0]
    });
    yield put({
      type: ADD_EDOC_REQUEST,
      data: {
        stcode: result.data[0].SUSTCODE,
        scdbname: result.data[0].SCDBNAME,
        schostip: result.data[0].SCHOSTIP
      }
    });
  } catch (e) {
    yield put({
      type: LOAD_USER_FAILURE,
      data: e.response.data
    });
  }
}
function* watchLoadUser() {
  console.log("watchLoadUser");
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function logoutAPI() {
  return axios.post(
    "/user/logout",
    {},
    {
      withCredentials: true
    }
  );
}
function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    });
  }
}
function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

// import axios from "axios";
// ------------------------------------------------------ //
function loginAPI(data) {
  console.log("loginAPI", data);
  // 서버에 요청을 보내는 부분
  return axios.post("/user/login", data, {
    withCredentials: true // 쿠키를 받기 위함. 서버쪽도 설정해야함 - index.js
  });
}
function* login(action) {
  var result = "";
  try {
    result = yield call(loginAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
      data: result.data
    });
    yield put({
      type: ADD_EDOC_REQUEST,
      data: {
        stcode: result.data.SUSTCODE,
        scdbname: result.data.SCDBNAME,
        schostip: result.data.SCHOSTIP
      }
    });
  } catch (e) {
    // console.log("loginERRER", e.response.data);
    yield put({
      type: LOG_IN_FAILURE,
      data: e.response.data
    });
  }
}
function* watchLogin() {
  // takeLatest가 LOG_IN 액션이 dispatch 되길 기다려서
  // dispatch될 때 login 제너레이터를 호출 한다.
  yield takeEvery(LOG_IN_REQUEST, login);
}
// 세가지 가 세트 !! //
// ------------------------------------------------------ //

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchLoadUser)]);
}
// call = 동기요청, fork = 비동기요청
