/**
 * react有一个基本的哲学:数据映射到视图
 * vue里面的数据驱动,无论什么途径,本质上都是改变state,state的
 * 改变再映射回视图.
 */
// request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise
import request from "../util/request";
const delay = millisecond => {
  return new Promise(resolve => {
    setTimeout(resolve, millisecond);
  });
};
export default {
  namespace: "puzzlecards",
  state: {
    data: [
      {
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
    counter: 100,
    cardList: []
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
        cardList: state.cardList
      };
    },
    addNewCard1(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.cardList.concat(newCardWithId);
      return {
        data: state.data,
        counter: nextCounter,
        cardList: nextData
      };
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
    /**
     * 一个 generator function 在执行时有两方,一方是 generator 本身,另一方是 generator function
     * 的句柄持有者,而这一般都是框架所持有.
     * 我们姑且称这个句柄为 genStub.
     * 当框架调用genStub.next()时,generator function 会执行到下一个 yield 然后暂停,并把 yield
     * 后面表达式的计算结果返回给框架,同时把程序的执行权交给框架
     * 框架拿到值后做处理,比如就是异步处理,处理结束拿到结果,再次调用 genStub.next()
     * 返回值给 generator function 同时驱动它恢复执行.
     * 当恢复执行时,你可以认为返回的处理结果会整体替换 yield<expression>
     * 然后程序继续执行到下一个 yield.
     *
     * generator function 定义了流程,并在每次 yield 节点上报想做的事情
     * 而异步的真正执行逻辑由 generator function 的句柄持有者代为执行
     */
    someEffect: function*() {},
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      /**
       * 在 config 中配置了反向代理,所以请求的域名,协议,端口改为本地服务器的
       */
      const endPointURL = "http://localhost:7001/cards";

      const puzzle = yield call(request, endPointURL);
      yield put({ type: "addNewCard1", payload: puzzle });

      yield call(delay, 3000);

      const puzzle2 = yield call(request, endPointURL);
      yield put({ type: "addNewCard1", payload: puzzle2 });
    }
  }
};
