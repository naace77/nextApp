import {
  all,
  fork,
  takeLatest,
  put,
  call,
  takeEvery
} from "redux-saga/effects";
import {
  ADD_EDOC_REQUEST,
  ADD_EDOC_SECCESS,
  ADD_EDOC_FAILURE,
  UPDATE_EDOC_REQUEST,
  UPDATE_EDOC_SECCESS,
  UPDATE_EDOC_FAILURE
} from "../reducers/edocument01";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

function addEDocAPI(data) {
  return axios.post("/edoc/getEdoc", data);
}
function* addEDoc(action) {
  try {
    var result = yield call(addEDocAPI, action.data);
    yield put({
      type: ADD_EDOC_SECCESS,
      data: result.data
    });
  } catch (e) {
    console.log("err", e);
    yield put({
      type: ADD_EDOC_FAILURE,
      data: e.responce.data
    });
  }
}
function* watchAddEDoc() {
  yield takeEvery(ADD_EDOC_REQUEST, addEDoc);
}
export default function* edocSaga() {
  yield all([fork(watchAddEDoc)]);
}
