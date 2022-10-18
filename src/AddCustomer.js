import { Button, Col, Form, Input, Row ,message} from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const navigate = useNavigate();
  const addCustomer = (values) => {
    axios
      .post("https://northwind.vercel.app/api/customers", values)
      .then((res) => {
        console.log("res", res.data);
      });
    navigate("/customers");
    message.success("Added")
  };
  return (
    <div>
      <Form layout="vertical" onFinish={addCustomer}>
        <Row>
          <Col span={16}>
            <Form.Item
              label="ID"
              name="id"
              rules={[
                { required: true, message: "Please input your id!" },
                { max: 6 },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                { required: true, message: "Please input your Company Name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Contact Name"
              name="contactName"
              rules={[
                { required: true, message: "Please input your Contact Name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Contact Title"
              name="contactTitle"
              rules={[
                { required: true, message: "Please input your Contact Title!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Add Customer
        </Button>
      </Form>
    </div>
  );
}

export default AddCustomer;
