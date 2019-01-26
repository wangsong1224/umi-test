import React, { Component } from "react";
import { Card, Button } from "antd";
/**
 * 在组件中使用单一状态管理的作用 dva
 * 1. 实际开发中 数据一般通过 HTTP 请求获取
 * 2. 希望把数据逻辑 和 视图逻辑分开管理在不同的模块中,关注分离使得代码更健壮,同时易于调试
 * 3. 数据共享
 *
 * DVA 就是来实现这个的
 * 1. 将状态提升到 dva model 中,我们把数据从页面中抽离出来
 * 2. 通过 effect 优雅的处理数据生成过程中的副作用,副作用中最常见的就是异步逻辑
 * 3. dva model 中的数据可以注入给任意组件
 * 4. dva 允许吧数据逻辑再次拆分(页面常常就是分隔的方式),以 namespace 区分,
 * 不同 namespace 之间的 state 是可以互相访问的
 *
 * 数据的源头是 广义的state:它可以是 react 组件树中各级组件的 state，
 * 也可以是 react 组件树外部由其他 js 数据结构表示的 state，
 * 而 dva 管理的就是 react 组件树之外的 state: Redux
 * 归根结底, props 是用来传导数据的, state 是数据改变的源泉
 */
export default class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: "Did you hear about the two silk worms in a race?",
          punchline: "It ended in a tie."
        },
        {
          id: 2,
          setup: "What hanppens to a frog's car when it breaks down?",
          punchline: "It gets toad away"
        }
      ]
    };
    this.counter = 4;
  }
  /**
   * 属性初始化器
   */
  addNewCard = () => {
    this.setState(prevState => {
      const prevCardList = prevState.cardList;
      this.counter += 1;
      const card = {
        id: this.counter,
        setup: "Who is the next?",
        punchline: "Nobody"
      };
      return {
        cardList: prevCardList.concat(card)
      };
    });
  };
  render() {
    return (
      <div>
        {/* 循环 */}
        {this.state.cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q:{card.setup}</div>
              <div>
                <strong>A:{card.punchline}</strong>
              </div>
            </Card>
          );
        })}
        <Button onClick={this.addNewCard}>点击添加一条记录</Button>
      </div>
    );
  }
}
