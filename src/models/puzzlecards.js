/**
 * react有一个基本的哲学:数据映射到视图
 * vue里面的数据驱动,无论什么途径,本质上都是改变state,state的
 * 改变再映射回视图.
 */
export default {
  namespace: "puzzlecards",
  state: {
    data: [{
        id: 1,
        setup: "Did you hear about the two silk worms in a race?",
        punchline: "It ended in a tie"
      },
      {
        id: 2,
        setup: "What happens to a frog's car when it breaks down?",
        punchline: "It gets toad away"
      }
    ],
    counter: 100
  },
  reducers: {
    addNewCard(state, {
      payload: newCard
    }) {
      const nextCounter = state.counter + 1
      const newCardWithId = { ...newCard,
        id: nextCounter
      }
      const nextData = state.data.concat(newCardWithId)
      return {
        data: nextData,
        counter: nextCounter
      }
    }
  },
  /**
   * 如果说model namespace connect dispatch action reducer 这些都是dva的基石
   * 那么dva的精髓就体现在effect.
   * 实际开发中，计算新的state常常需要异步操作,比如异步网络请求数据
   * 但是reducer是个纯函数,不能在里面写这些逻辑,effect就是专门处理这些具有副作用
   * 的执行单元.
   * 局部上是个generrator 函数,宏观上effect是一层中间件
   * 中间件是一种程序架构和分布式系统架构上的思想
   *" Middleware is some code you can put between the framework receiving a request,
    and the framework generating a response. "

    修改前的demoaction被dispatch之后能直接到达reducer,为了保证reducer的纯粹性,同时
    又能处理副作用,要打破这种直接性,effect充当了这么一个中间层,当action被dispatch之后,
    会先到达effect处理副作用,然后该effect最终会促使新的action发送出去,这个新的action
    可能会被其他的effect捕获继续处理,也可能被reducer捕获并结束,无论如何,逻辑处理的终点都是reducer

    action.type的构造是 namespace/reducer 名称 
    事实上action.type 也可以是 namespace 名称 + / + effect 名称
    对于视图层来说,并不会感知effect和reducer的区别,视图层只是通过action描述想要做什么
    至于action是被reducer处理还是effect处理,视图层不感知,也不应该关心
    这样我们就做到了数据逻辑和视图逻辑的分离处理

    
   */
  effects: {
    'someEffect': function* () {}
  }
};