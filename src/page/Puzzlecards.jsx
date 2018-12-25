/**
 * 子组件的state可以上提,(state hoisting)状态提升,由父组件来管理
 * 1.子组件间接回调到父组件的serState的方法来改变父组件的state
 * 2.新的state通过props的形式把state再次被子组件获悉
 *
 * 而dva可以把把state上提到所有React组件之上,过程是相似的:
 * 1.页面通过调用dispatch函数来驱动dva model state的改变
 * 2.改变后的dva model state 通过connect方法注入页面
 *
 * 所谓注入本质上是控制反转的一种实现,这种思想在许多的语言框架中都有体现,
 * 最著名的是基于java的spring,组件不在负责管理数据,组件只是通过connect
 * 向dva声明所需的数据
 *
 * 我们删除了组件本身的state,同时添加了@connect(mapStateToProps)
 * connect是连接dva和React两个平行世界的关键
 * 1.connect让组件获取到两样东西:model中的数据 驱动model改变的方法
 * 2.connect本质上只是一个JavaScript函数,通过@装饰器语法使用,放置在组件定义的上方
 * 3.参数:第一个最常用 习惯叫做mapStateToProps,通过这个函数,就能实现吧dva model的state注入给组件
 *
 * 传入的state包含了所有namespace下的state
 */

import React, { Component } from "react";
import { Card, Button } from "antd";
import { connect } from "dva";

const namespace = "puzzlecards";

const mapStateToProps = state => {
  const cardList = state[namespace];
  return {
    cardList
  };
};

/**
 * 给组件注入方法,this.props.onClickAdd就是被注入的方法
 * 一定要写成回调函数中调用注入的函数的形式
 * type要带上命名空间
 * payload中包含了传进来的参数
 * dispatch函数就是喝dva model打交道的唯一途径,接受一个概念上为
 * action的入参,唯一强制要求包含的是type字段,string类型
 *
 * dva model 中可以定义一个叫做 reducers 的成员用来响应 action
 * 并修改 state。每一个 reducer 都是一个 function，action 派发后，
 * 通过 action.type 被唯一地匹配到，随后执行函数体逻辑，
 * 返回值被 dva 使用作为新的 state。state 的改变
 * 随后会被 connect 注入到组件中，触发视图改变。
 * reducer应该是一个纯函数,它的返回值作为新的state,返回值必须
 * 是一个新的构造对象
 *
 * reducer 和 setState很像,都要返回一个新的构造对象,
 * 但是reducer的返回值会 整个取代(replace)老的state,
 * 而setState中回调函数的返回值是融合(merge)到老的state中
 *
 *
 */
const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: newCard => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard
      };
      dispatch(action);
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class PuzzleCards extends Component {
  render() {
    return (
      <div>
        {this.props.cardList.data.map(card => {
          return (
            <Card key={card.id}>
              <div>Q: {card.setup}</div>
              <div>
                <strong>A: {card.punchline}</strong>
              </div>
            </Card>
          );
        })}
        <div>
          <Button
            onClick={() =>
              this.props.onClickAdd({
                setup:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                punchline: "here we use dva"
              })
            }
          >
            添加卡片
          </Button>
        </div>
      </div>
    );
  }
}
