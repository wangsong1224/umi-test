# myApp

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org

### 目录结构

1. router 用于配置 URL 路由规则
2. controller 用于解析用户的输入,处理后返回相应的结果
3. service 用于编写业务逻辑层
4. middleware 用于编写中间件
5. public 用于放置静态资源
6. extend 用于框架的扩展
7. config 用于编写配置文件
8. plugin 用于配置需要加载的插件
9. test 用于单元测试
10. app.js 在启动期间的初始化工作,返回一个 Boot 类,可通过 Boot 类中的生命周期方法进行初始化
11. agent.js [点我](https://eggjs.org/zh-cn/core/cluster-and-ipc.html#agent-%E6%9C%BA%E5%88%B6)
12. schedule 用于定时任务
13. view 用于放置模板文件
14. model 用于放置领域类型
