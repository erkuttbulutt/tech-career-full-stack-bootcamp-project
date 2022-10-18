import { Button, Table, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

function Customers() {
  const [customers, setcustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios.get("https://northwind.vercel.app/api/customers").then((res) => {
      setcustomers(res.data);
    });
  };

  const deleteCustomer = (id) => {
    axios
      .delete(`https://northwind.vercel.app/api/customers/${id}`)
      .then((res) => {
        getCustomers();
      });
  };

  const details = (id) => {};

  let columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <Button
          type="primary-outline"
          danger
          onClick={() => deleteCustomer(id)}
        >
          Delete
        </Button>
      ),
    },
    {
      title: "Details",
      dataIndex: "id",
      render: (id) => <Button onClick={() => details(id)}>Details</Button>,
    },
    {
      title: "Update",
      dataIndex: "id",
      render: () => <Button>Update</Button>,
    },
  ];

  return (
    <>
      <Table bordered={true} dataSource={customers} columns={columns}></Table>
    </>
  );
}

export default Customers;
