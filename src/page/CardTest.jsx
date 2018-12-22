import React from "react";
import { Card } from "antd";
class CardTest extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      width: "400px",
      margin: "30px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      border: "1px solid #e8e8e8"
    };
  }
  render() {
    return (
      <div>
        <Card style={this.style} actions={[<a>取消</a>, <a>确定</a>]}>
          <Card.Meta
            avatar={
              <img
                alt=""
                style={{ width: "64px", height: "64px", borderRadius: "32px" }}
                src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
              />
            }
            title="Alipay"
            description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
          />
        </Card>
        {/* 受控组件和非受控组件
          区别在于组建的状态是否可以被外部修改,一个设计得当的组件应该支持受控和非受控两种形式
          即开发者不控制组件的属性时,组建自己管理状态,当开发者控制属性,组件由该属性控制,
          而开发一个复杂的组件更应该注意这点,避免只有部分属性受控,使其变成一个半受控组件

          一个典型的例子就是 tabs 大部分时候开发者不用考虑如何控制 tab 停留在哪个标签页,是非受控的
          但是当开发者通过代码手动控制显示的 tab 的时候,就变成了受控组件
         */}
      </div>
    );
  }
}
export default CardTest;
