import { actionChannel } from "redux-saga/effects";

//user 정보를 담고있는 스토어, 초기값
export const initialState = {
  isLoggedIn: false, // 로그인여부
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  logInErrorReason: "",
  me: null
};

export const LOG_IN = "LOG_IN"; // 액션의 이름
export const LOG_OUT = "LOG_OUT";

// 비동기 요청 3종 세트
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        // 다음 state 변경
        ...state,
        isLoggingIn: true,
        logInErrorReason: ""
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
        isLoggingIn: false,
        logInErrorReason: ""
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        me: null,
        isLoggingIn: false,
        logInErrorReason: action.data
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        // 다음 state 변경
        ...state,
        isLoggingOut: true
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
        isLoggingOut: false
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        me: null,
        isLoggingOut: false
      };
    }
    case LOAD_USER_REQUEST: {
      return {
        // 다음 state 변경
        ...state
      };
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        me: action.data,
        isLoggedIn: true
      };
    }
    case LOAD_USER_FAILURE: {
      return {
        ...state,
        logInErrorReason: action.data
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
// 리액트와 연결전에 미리 이런 작업을 해두어야 한다.

export default reducer;
