import { useState } from "react";

// custom hook 사용하기
// 위와 같이 각각의 state 마다 핸들러를 만들어줄 경우 코드가 많아짐과 관리가 힘들어진다.
// 아래와같이 input에 관련된 커스텀을 만들고 사용하면
// const onChagePw 등의 단순 input 함수는 재사용 할수 있다.
export const useInput = initValue => {
  const [value, setter] = useState(initValue);
  const onChange = e => {
    setter(e.target.value);
  };
  return { value, onChange };
};
