import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Button, Checkbox, Form, Input, Layout, Menu } from "antd";
import "antd/dist/antd.css";

import { Content, Footer, Header } from "antd/lib/layout/layout";
import Customers from "./Customers";
import LoginPage from "./LoginPage";

function App() {
  const items = [
    { label: <Link to="/">Home</Link>, key: "1" },
    {
      label: <Link to="/login">Customers</Link>,
      key: "2",
    },
    
  ];
  return (
    <>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: "20px" }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Routes>
              <Route
                path="/login"
                element={
                  <LoginPage>
                    <Customers />
                  </LoginPage>
                }
              ></Route>
            </Routes>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
}

export default App;
