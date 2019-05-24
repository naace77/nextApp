import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { useInput } from "../../functions/UseInput";
import { useDispatch } from "react-redux";
import { LOG_IN_REQUEST } from "../../reducers/user";
import { useSelector } from "react-redux";
const edocLogin = props => {
  // hooks state
  // const [state명, state변경함수] = useState("default값")
  const [id, setId] = useState("");
  const onChagneId = e => {
    // state변경함수에 넘어오는 parm (e) value 값을 해준다.
    // react에서 render되는 조건은 state가 변경되었을때마다
    setId(e.target.value);
  };

  const password = useInput("");
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    console.log("loginbtn Clicked", id, password.value);
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: id,
        password: password.value
      }
    });
  };

  // 액션
  useEffect(() => {
    // dispatch({
    //   type: LOG_IN,
    //   data: {
    //     nickname: "JW"
    //   }
    // });
  }, []); // 2번째 인자에 아무것도 안들어가면 componentdidmount랑 같다.
  const { logInErrorReason } = useSelector(state => state.me); // 여기서 state 는 전체 state (reducer/index.js - state)
  console.log(logInErrorReason);

  return (
    <div style={{ padding: 20 }}>
      <Form className="login-form" onSubmit={onSubmit}>
        <div>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="ID"
            required
            onChange={onChagneId} // input 은 항상 value랑 onchange가 짝이 되야 한다
            name="id"
            value={id}
          />
        </div>
        <div>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="PASSWORD"
            required
            {...password} // 커스텀 훅을 사용하게되면 이런식으로 간결하게 사용 할 수 있다.
          />
        </div>
        <div>
          {/* <button type="submit" > 로그인 </button> 을 antd 입히면 아래와 같이 htmlType 으로 해줘야한다. */}
          <label>{logInErrorReason}</label>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default edocLogin;
