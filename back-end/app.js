"use strick";
/**
 * Application 是全局应用对象,在一个应用中只会实例化一个,继承自 Koa.Application
 * 可以在上面挂载一些全局的方法和对象,可以轻松地在插件或者应用中扩展 Application 对象.
 *
 * 启动其定义:
 * 在应用启动期间进行一些初始化工作,等初始化完成后应用才可以启动成功并对外提供服务.
 * 框架提供了统一的入口文件(app.js)进行启动过程自定义,这个文件返回一个 Boot 类,
 * 我们可以通过定义 Boot 类中的生命周期方法来执行启动应用过程中的初始化工作.
 *
 * 生命周期如下:
 * 1. configWillLoad: 配置文件即将加载,这是最后动态修改配置的时机
 * 2. configDidLoad: 配置文件加载完成
 * 3. didLoad: 文件加载完成
 * 4. willReady: 插件启动完毕
 * 5. didReady: worker 准备就绪
 * 6. serverDidReady: 应用启动完成
 * 7. beforeClose: 应用即将关闭
 * 在自定义生命周期函数中不建议做太耗时的操作,框架会有启动时的超时检测.
 */

module.exports = app => {
  /**
   * server:该事件一个 worker 进程只会触发一次,在 HTTP 服务完成启动后,会将 HTTP server 通过
   * 这个事件暴露出来给开发者.
   */
  app.once("server", server => {
    //websockts
  });

  /**
   * error:运行时有任何异常被 onerror 插件捕获后,都会触发 error 事件,将错误对象和关联的上下文
   * 暴露给开发者,可以进行自定义的日志记录上报等处理
   */
  app.on("error", (err, ctx) => {
    // report error
  });

  /**
   * request 和 response:应用收到请求和响应请求时,分别会触发 request 和 response 事件
   * 将当前请求上下文暴露出来,开发者可以监听这两个事件来进行日志记录.
   */
  app.on("request", ctx => {
    /**
     * Context :是个请求级别的对象,继承自 Koa.Context 在每一次收到用户请求时,框架会实例化一个
     * Context 对象,这个对象上封装了这次用户请求的信息,并提供了一些便捷的方法来获取请求参数或者
     * 设置响应信息.框架会将所有的 Service 挂载到 Context 实例上,一些插件也会将一些其他的方法
     * 或者对象挂载到它上面.
     */
    // 记录收到的请求
  });
  app.on("response", ctx => {
    // ctx.starttime 开始时间由框架记录
    const used = Date.now() - ctx.starttime;
  });

  /**
   * Application对象几乎在编写应用的任何地方都能获取到
   * 几乎所有被框架 Loader 加载的文件（Controller，Service，Schedule 等），
   * 都可以 export 一个函数，这个函数会被 Loader 调用，并使用 app 作为参数：
   * 下面的例子是暴露出去一个新的属性 myStr,可以在其他的文件访问到
   */
  app.myStr = "Hello World";
};
