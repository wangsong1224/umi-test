import React, { Component } from "react";
import style from "./Login.less";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { LoginApi } from "../../services";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        LoginApi.login(values)
          .then(res => {
            console.log("success");
            console.log(res);
          })
          .catch(e => {
            console.log("error");
            console.error(e);
          });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={style.login}>
        <Form.Item>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "请输入用户名!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25" }} />}
              placeholder="用户名"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: false
          })(<Checkbox>记住密码</Checkbox>)}
        </Form.Item>
        <Button type="primary" htmlType="submit">
          登 录
        </Button>
        <div className={style.otherFunc}>
          <a href="">忘记密码</a>
          <a href="" className={style.register}>
            立即注册
          </a>
        </div>
      </Form>
    );
  }
}
/**
 * Form.create(表单名)(组件名) 作用是创建一个高阶组件,为页面组件提供表单所需要的内容(this.props.form)
 * 表单组件通过 Form 和 Form.Item 配合使用
 * 其中每个 From.Item 都是一个表单域
 * getFieldDecorator 是用将包裹的组件与表单进行双向绑定使用
 * 这样我们可以设置表单是否为必填项(required:true) 或者进行类型检查(type:url)
 */
Login = Form.create({ name: "login_form" })(Login);
export default Login;
