import { all, call } from "redux-saga/effects";
import user from "./user";
import edoc from "./edocument01";

export default function* rootSaga() {
  yield all([call(user), call(edoc)]);
}
