import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Customers() {
  const [customers, setcustomers] = useState([]);
  const navigate = useNavigate();

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

  const details = (id) => {
    navigate(`/customers/${id}`);
  };

  const update = (id) => {
    navigate(`/customerUpdate/${id}`);
  };

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
        <Button type="primary" danger onClick={() => deleteCustomer(id)}>
          Delete
        </Button>
      ),
    },
    {
      title: "Details",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => details(id)} type="primary">
          Details
        </Button>
      ),
    },
    {
      title: "Update",
      dataIndex: "id",
      render: (id) => (
        <Button type="primary" onClick={() => update(id)}>
          Update
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table bordered={true} dataSource={customers} columns={columns}></Table>
    </>
  );
}

export default Customers;
