import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCustomer() {
  const [detail, setdetail] = useState({});
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/customers/${id}`)
      .then((res) => setdetail(res.data));
  }, []);

  const update = (values) => {
    axios
      .put(`https://northwind.vercel.app/api/customers/${id}`, values)
      .then((res) => {
        console.log("update: ", res.data);
      });
    navigate("/customers");
  };

  return (
    <div>
      <Form layout="vertical" onFinish={update}>
        <Row>
          <Col span={16}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                { required: true, message: "Please input your Company Name!" },
              ]}
            >
              <Input placeholder={detail.companyName} />
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
              <Input placeholder={detail.contactName} />
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
              <Input placeholder={detail.contactTitle} />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update Customer
        </Button>
      </Form>
    </div>
  );
}

export default UpdateCustomer;
