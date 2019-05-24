import { LIST_EDEG1CODE, LIST_EJSIGNGUBUN } from "../globalValue";

export const initialState = {
  edoc: null, // 전자 결재 리스트
  isLogging: false // 데이터 불러우는 중
};

// 액션 정의
// 결재 리스트 불러오기
export const ADD_EDOC_REQUEST = "ADD_EDOC_REQUEST";
export const ADD_EDOC_SECCESS = "ADD_EDOC_SECCESS";
export const ADD_EDOC_FAILURE = "ADD_EDOC_FAILURE";

// 결재 리스트 업데이트 하기
export const UPDATE_EDOC_REQUEST = "UPDATE_EDOC_REQUEST";
export const UPDATE_EDOC_SECCESS = "UPDATE_EDOC_SECCESS";
export const UPDATE_EDOC_FAILURE = "UPDATE_EDOC_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EDOC_REQUEST: {
      return {
        ...state,
        isLogging: true
      };
    }
    case ADD_EDOC_SECCESS: {
      console.log("matchedData", action.data);
      var matchedData = action.data.map((item, index) => {
        // var test = ;
        return {
          ...item,
          EDEG1Name: LIST_EDEG1CODE.filter(c => c.value === item.EDEG1Code)[0]
            .name,
          EJSIGNNAME: LIST_EJSIGNGUBUN.filter(
            c => c.value === item.EJSIGNGUBUN
          )[0].name
        };
      });
      // console.log("matchedData", matchedData);
      return {
        ...state,
        isLogging: false,
        edoc: matchedData
      };
    }
    case ADD_EDOC_FAILURE: {
      return {
        ...state,
        isLogging: false
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
