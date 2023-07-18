import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";



function LoginForm() {


  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      className="col d-flex justify-content-center align-items-center"
      style={{ border: "2px solid red" }}
    >
      <div className="row d-flex justify-content-center align-items-center p-3">
        <h3>User Login</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item className="row">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button col-12"
              href="/section/upload"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
