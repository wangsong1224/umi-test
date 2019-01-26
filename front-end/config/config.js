// https://umijs.org/zh/guide/getting-started.html#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87
// umi 是一个可插拔的企业级 react 应用框架,很多功能都是通过插件实现
// umi-plugin-react 集成了常用的一些进阶功能
/**
 * 服务端三层结构
 * 1. controller 层负责与用户直接打交道,渲染页面 提供接口等,侧重于展示型逻辑
 * 2. service 层负责处理业务逻辑,供 controller 层调用
 * 3. data access 负责与数据源对接,进行纯粹的数据读写,供 service 层调用
 *
 * 前端代码结构需要进行同样的分层:
 * 1. page负责与用户直接打交道:渲染页面,接受用户的操作输入,侧重于展示性交互逻辑
 * 2. model 负责处理业务逻辑,为 page 做数据 状态的读写 变换 暂存等
 * 3. service 负责与 HTTP 接口对接,进行纯粹的数据读写
 */
export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        // 插件的配置选项
        // 引入组件库 antd,并实现按需编译 (TODO 这个很厉害啊)
        antd: true,
        // model 是前端分层中承上启下,负责管理数据(状态) 业界主流的状态管理类库有 redux,mobx
        // 本项目中 DVA 框架承担这个角色
        /** */
        dva: true
      }
    ]
  ],
  /**
   * 在 umi 中,默认使用的是约定式的路由,在 page 下面的 js 文件都会按照文件名映射到一个路由,
   * /helloworld的路径对应的是 HelloWorld.jsx
   * 在本文件中增加 routes 的配置,即可使用配置式路由
   */
  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        {
          path: "helloworld",
          component: "./HelloWorld.jsx"
        },
        {
          path: "card",
          component: "./CardTest.jsx"
        },
        {
          path: "cards",
          component: "./CardsWithoutModel.jsx"
        },
        {
          path: "puzzlecards",
          component: "./puzzlecards.jsx"
        }
      ]
    },
    {
      path: "/card",
      component: "./CardTest.jsx"
    }
  ],
  proxy: {
    /**
     * 去往本地服务器 localhost:8000的 ajax 调用中,如果是以/dev 开头的,
     * 那么就转发到远端https://08ad1pao69.execute-api.us-east-1.amazonaws.com服务器当中
     * /dev 也会保留在转发地址中
     *
     * 比如
     * /dev/random_joke 就会被转发到
     * https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke
     */
    "/dev": {
      target: "https://08ad1pao69.execute-api.us-east-1.amazonaws.com",
      changeOrigin: true
    }
  }
};
