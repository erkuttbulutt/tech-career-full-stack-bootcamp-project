import { Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import Customers from "./Customers";
import DetailCustomer from "./DetailCustomer";
import UpdateCustomer from "./UpdateCustomer";

function MainPage() {
  const items = [
    { label: <Link to="/customers">Customers</Link>, key: "1" },
    { label: <Link to="/addCustomer">Add Customer</Link>, key: "2" },
  ];
  return (
    <div>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Header>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100%" }}
          ></div>
          <Routes>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/customers/:id" element={<DetailCustomer />}></Route>
            <Route path="/addCustomer" element={<AddCustomer />}></Route>
            <Route
              path="/customerUpdate/:id"
              element={<UpdateCustomer />}
            ></Route>
          </Routes>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default MainPage;
