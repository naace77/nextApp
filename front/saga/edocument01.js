import { all, fork, takeLatest, put, call } from "redux-saga/effects";
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
  console.log("getEDOC", data);
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
    yield put({
      type: ADD_EDOC_FAILURE,
      data: e.responce.data
    });
  }
}
function* watchAddEDoc() {
  yield takeLatest(ADD_EDOC_REQUEST, addEDoc);
}
export default function* edocSaga() {
  yield all([fork(watchAddEDoc)]);
}
