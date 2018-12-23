// https://dvajs.com/guide/concepts.html
// https://dvajs.com/guide/fig-show.html
export default {
  // model 的命名空间,只能用字符串,一个大型应用可能包含多个 model, 通过 namespace 区分
  namespace: 'todoList',
  // 当前 model 状态的初始值,表示当前状态
  state: [],
  /**
   * 用于处理异步操作(例如与服务端交互)和业务逻辑,也是由 action 触发,但是不可以修改 state
   * 要通过触发 action 调用 reducer 实现对 state 的间接操作
   */
  // 
  effects: {
    * query({
      _
    }, {
      put,
      call
    }) {
      const rsp = yield call(queryTodoListFromServer)
      const todoList = rsp.data;
      yield put({
        type: 'save',
        payload: todoList
      })
    }
  },
  /**
   * 用于处理同步操作,可以修改 state, 由 action 触发 reducer 是一个纯函数
   * 接受当前的 state 以及一个数据体( payload)作为入参,返回一个新的 state
   */
  reducers: {
    save(state, {
      payload: todoList
    }) {
      return [...state, todoList]
    }
  }
  /**
   * action :是 reducer 及 effects 的触发器,一般是一个对象,形如{ type:'add',payload:todo}
   * 通过 type 属性可以匹配到某个具体的 reducer 或者 effects,payload 属性是数据体,用于
   * 传给 reducer 或 effects
   */
}