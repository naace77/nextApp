import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};
const edit01 = props => {
  const [detailData, setDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // console.log(props);
    var parm = {
      SCDBName: props.me.SCDBNAME,
      SCHostIp: props.me.SCHOSTIP,
      STCode: props.me.SUSTCODE,
      edoc: props.clickedItem
    };
    axios.post("/edoc/getEdoc/detail", parm).then(response => {
      // console.log(response);
      setDetailData(response.data);
      // setEfile(response.data.efile);
      // setEref(response.data.eref);
      setIsLoading(false);
    });
  }, []);

  const { setEditVisible, gubun } = props;
  const inputDisabled = gubun === "N" ? false : true;

  const edoc = detailData && detailData.edoc; //edocument
  const efile = detailData && detailData.efile; // efile
  const eref = detailData && detailData.eref; //ereference

  const firstEdoc = edoc && edoc.filter(item => item.EJSeq === 0)[0];
  const signUpEdoc = edoc && edoc.filter(item => item.EJSeq !== 0);

  // console.log("signUpEdoc", signUpEdoc);
  return (
    <div>
      {!isLoading && (
        <Form {...formItemLayout}>
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 13 },
              sm: { span: 24, offset: 20 }
            }}
          >
            {gubun !== "N" ? (
              <Button onClick={() => setEditVisible(false)}> 닫기</Button>
            ) : (
              <div>
                {" "}
                <Button onClick={() => setEditVisible(false)}> 취소</Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => setEditVisible(false)}
                >
                  저장
                </Button>
              </div>
            )}
          </Form.Item>
          <label style={{ fontSize: 30 }}>내용</label>
          <Form.Item label="제목">
            <Input
              disabled={inputDisabled}
              defaultValue={firstEdoc && firstEdoc.EDTitle}
            />
          </Form.Item>

          <Form.Item label="기안자">
            <Input
              disabled={inputDisabled}
              defaultValue={firstEdoc && firstEdoc.EDSTNAME}
            />
          </Form.Item>

          <Form.Item label="업무">
            <Input
              disabled={inputDisabled}
              defaultValue={firstEdoc && firstEdoc.EDEG1Code}
            />
          </Form.Item>
          {firstEdoc && firstEdoc.EDEG1Code === 100 && (
            <div>
              <Form.Item label="항목">
                <Input
                  disabled={inputDisabled}
                  defaultValue={firstEdoc && firstEdoc.EDEG2Code}
                />
              </Form.Item>
              {firstEdoc.EDEG2Code === 1 && (
                <div>
                  <Form.Item label="요청일">
                    <Input
                      disabled={inputDisabled}
                      defaultValue={
                        firstEdoc && firstEdoc.EDTimeStamp1.split(" ")[0]
                      }
                    />
                  </Form.Item>
                  <Form.Item label="요청구분">
                    <Input
                      disabled={inputDisabled}
                      defaultValue={firstEdoc && firstEdoc.EDString1}
                    />
                  </Form.Item>
                  {firstEdoc.EDString1 === "00" && (
                    <Form.Item label="시간">
                      <Input
                        disabled={inputDisabled}
                        defaultValue={
                          firstEdoc && `(출근) ${firstEdoc.EDString2}`
                        }
                      />
                    </Form.Item>
                  )}
                  {firstEdoc.EDString1 === "01" && (
                    <Form.Item label="시간">
                      <Input
                        disabled={inputDisabled}
                        defaultValue={
                          firstEdoc && `(퇴근) ${firstEdoc.EDString3}`
                        }
                      />
                    </Form.Item>
                  )}
                  {firstEdoc.EDString1 === "02" && (
                    <Form.Item label="시간">
                      <Input
                        disabled={inputDisabled}
                        defaultValue={
                          firstEdoc &&
                          `(출근) ${firstEdoc.EDString2} (퇴근) ${
                            firstEdoc.EDString3
                          }`
                        }
                      />
                    </Form.Item>
                  )}
                </div>
              )}
              {firstEdoc.EDEG2Code === 2 && (
                <div>
                  <Form.Item label="시작일">
                    <Input
                      disabled={inputDisabled}
                      defaultValue={
                        firstEdoc && firstEdoc.EDTimeStamp1.split(" ")[0]
                      }
                    />
                  </Form.Item>
                  <Form.Item label="종료일">
                    <Input
                      disabled={inputDisabled}
                      defaultValue={
                        firstEdoc && firstEdoc.EDTimeStamp2.split(" ")[0]
                      }
                    />
                  </Form.Item>
                  <Form.Item label="반차적용">
                    <Input
                      disabled={inputDisabled}
                      defaultValue={firstEdoc && firstEdoc.EDString1}
                    />
                  </Form.Item>
                </div>
              )}

              {firstEdoc.EDEG2Code === 3 && (
                <div>
                  <Form.Item label="신청일">
                    <Input
                      disabled={inputDisabled}
                      defaultValue={
                        firstEdoc && firstEdoc.EDTimeStamp1.split(" ")[0]
                      }
                    />
                  </Form.Item>
                  <Form.Item label="신청 시간">
                    <Input
                      disabled={inputDisabled}
                      defaultValue={
                        firstEdoc &&
                        `${firstEdoc.EDString1} ~ ${firstEdoc.EDString2}`
                      }
                    />
                  </Form.Item>
                </div>
              )}
            </div>
          )}
          <Form.Item label="기안일">
            <Input
              disabled={inputDisabled}
              defaultValue={firstEdoc && firstEdoc.EDDateTime}
            />
          </Form.Item>

          <Form.Item label="문서 번호">
            <Input
              disabled={inputDisabled}
              defaultValue={firstEdoc && firstEdoc.EDNumber}
            />
          </Form.Item>

          <Form.Item label="내용">
            <Input.TextArea
              rows={5}
              disabled={inputDisabled}
              defaultValue={firstEdoc && firstEdoc.EDText}
            />
          </Form.Item>

          <Form.Item label="비고">
            <Input
              disabled={inputDisabled}
              defaultValue={firstEdoc && firstEdoc.EDBigo}
            />
          </Form.Item>
          {signUpEdoc.map((item, index) => {
            return item.EJSignGubun !== 5 ? (
              <div key={index}>
                <label style={{ fontSize: 30 }}>결재</label>
                <Form.Item label={`결재자 ${index + 1}`}>
                  <Input
                    disabled={inputDisabled}
                    defaultValue={item.EJBEFJOINSTNAME}
                  />
                </Form.Item>

                <Form.Item label="결재자 의견">
                  <Input disabled={inputDisabled} defaultValue={item.EJText} />
                </Form.Item>
              </div>
            ) : (
              <div key={index}>
                <label style={{ fontSize: 30 }}>결재자</label>
                <Form.Item label={`결재자`}>
                  <Input
                    disabled={inputDisabled}
                    defaultValue={item.EJBEFJOINSTNAME}
                  />
                </Form.Item>

                <Form.Item label="결재자 의견">
                  <Input disabled={inputDisabled} defaultValue={item.EJText} />
                </Form.Item>
              </div>
            );
          })}
        </Form>
      )}
    </div>
  );
};

export default edit01;
