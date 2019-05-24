import { combineReducers } from "redux"; // 리덕스에서 제공하는 하나로 묶는 함수
import me from "./user";
import edocument from "./edocument01";

const rootReducer = combineReducers({
  me,
  edocument
});

export default rootReducer;
