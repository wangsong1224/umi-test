"use strict";
/**
 * 插件
 * 中间件,插件,应用之间是什么关系?
 *
 * 使用插件的原因,在使用 koa 中间件的过程中出现了下面的问题:
 * 1. 中间件加载其实是有先后顺序的,但是中间件自身无法管理这种顺序,只能交给使用者.这很不友好,一旦顺序不对
 * 结果可能天壤之别
 * 2. 中间件的定位是拦截用户请求,并在它前后做一些处理,例如:鉴权,安全检查,访问日志等等.但实际情况是,
 * 有些功能是和请求无关的,例如:定时任务,消息订阅,后台逻辑等等
 * 3. 有些功能包含非常复杂的初始化逻辑,需要在应用启动的时候完成,这显然不适合放到中间件中去实现.
 * 综上所述,我们需要一套更加强大的机制,来管理 编排那些相对独立的业务逻辑.
 *
 * 中间件 插件 应用的关系:
 * 一个插件其实就是个 迷你的应用,和应用几乎一样:
 * 1. 它包含了 Service 中间件 配置 框架扩展等等
 * 2. 它没有独立的 Router 和 Controller
 * 3. 它没有 plugin.js,只能声明跟其他插件的依赖,而不能决定其他的插件开启与否
 *
 * 关系是:
 * 1. 应用可以直接引入 Koa 的中间件
 * 2. 插件本身可以包含中间件
 * 3. 多个插件可以包装为一个上层框架
 *
 */
// had enabled by egg
// exports.static = true;

// 参数校验
exports.validate = {
  enable: true,
  package: "egg-validate"
};

// 使用 mysql 插件
exports.mysql = {
  enable: true,
  package: "egg-mysql"
};

// cors 解决跨域
exports.cors = {
  enable: true,
  package: "egg-cors"
};

// 参数校验
exports.validate = {
  enable: true,
  package: "egg-validate"
};
