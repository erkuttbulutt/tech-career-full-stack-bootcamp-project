import { useState } from "react";
import { Button, Form, Input,  } from "antd";
import "antd/dist/antd.css";
import MainPage from "./MainPage";
import Customers from "./Customers";

function App() {
  const [userLoginStatus, setuserLoginStatus] = useState(false);

  const onFinish = (values) => {
    if ((values.username === "erkut") & (values.password === "123")) {
      setuserLoginStatus(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const form = (
    <div
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  return <div>{userLoginStatus ? <MainPage /> : form}</div>;
}

export default App;
