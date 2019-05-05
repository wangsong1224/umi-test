import { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import router from "umi/router";
import ProHeader from "../components/ProHeader";
// 从 layout 中获取同名的变量
const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu;
import Axios from "../my-plugins/plugin-axios";
class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.sidebarList = [
      {
        name: "dashboard",
        label: "仪表盘",
        icon: "dashboard",
        children: [
          { name: "analyze", label: "分析页" },
          { name: "monitor", label: "监控页" },
          { name: "workspace", label: "工作台" }
        ]
      },
      {
        name: "form",
        label: "表单页",
        icon: "form",
        children: [
          { name: "basicForm", label: "基础表单" },
          { name: "stepedForm", label: "分步表单" },
          { name: "proForm", label: "高级表单" }
        ]
      },
      {
        name: "list",
        label: "列表页",
        icon: "ordered-list",
        children: [
          { name: "searchTable", label: "查询表格" },
          { name: "standradList", label: "标准列表" },
          { name: "cardList", label: "卡片列表" },
          { name: "searchList", label: "搜索列表" }
        ]
      },
      {
        name: "details",
        label: "详情页",
        icon: "info-circle",
        children: [{ name: "basicDetails", label: "基础详情页" }]
      },
      {
        name: "result",
        label: "结果页",
        icon: "read",
        children: [
          { name: "success", label: "成功页" },
          { name: "failure", label: "失败页" }
        ]
      },
      {
        name: "person",
        label: "个人页",
        icon: "user",
        children: [
          { name: "personalCenter", label: "个人中心" },
          { name: "personalSetting", label: "个人设置" }
        ]
      }
    ];
  }

  // 点击菜单项,跳转路由
  handleMenuClick = e => {
    console.log(e);
    router.push(e.key);
  };

  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh", color: "white" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              maigin: "16px"
            }}
          />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={this.handleMenuClick}
          >
            {this.sidebarList.map(menu => {
              return (
                <SubMenu
                  key={menu.name}
                  title={
                    <span>
                      <Icon type={menu.icon} />
                      {menu.label}
                    </span>
                  }
                >
                  {menu.children.map(item => {
                    return <Menu.Item key={item.name}>{item.label}</Menu.Item>;
                  })}
                </SubMenu>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            <ProHeader />
          </Header>
          <Content>
            <div style={{ padding: 24, background: "#fff", minHeight: 900 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
