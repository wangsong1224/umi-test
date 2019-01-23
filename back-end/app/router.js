"use strict";

/**
 * @param {Egg.Application} app - egg application
 * Router:主要描述请求 URL 和具体承担执行动作的 Controller 之间的对应关系,框架约定了
 * app/router.js文件用于统一所有路由规则.
 * 通过统一的配置,我们可以避免路由规则逻辑散落在多个地方,从而出现未知的冲突,集中在一起我们可以
 * 更方便的来查看全局的路由规则.
 *
 * RESTful 风格的 URL 定义
 * RESTful:
 * api 设计规范,用于 web 数据接口设计.核心思想就是客户端发出的数据操作指令都是 动词+宾语 的结构.
 * 比如 GET/articles ,动词就是常用的 HTTP 方法:
 * POST:新建(Create)
 * GET:读取(Read)
 * PUT:更新(Update)
 * PATCH:更新,通常是部分更新
 * DELETE:删除(Delete)
 * URL 除了第一级,其他级别都用查询字符串表达.  合称为 CRUD.
 * 比如,想查询已经发布的文章 /articles?published=true 好于 /articles/published
 *
 * 每次请求,服务器必须响应,包括 HTTP 状态码和数据
 * http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html
 * 状态码,分为五类:
 * 1xx:相关信息
 * 2xx:操作成功
 * 3xx:重定向
 * 4xx:客户端错误
 * 5xx:服务器错误
 *
 * api 返回的数据格式不应该是纯文本,应该是个 JSON 对象,服务器回应的 HTTP 头 Content-Type
 * 应为 application/json.
 *
 */
module.exports = app => {
  const { router, controller } = app;
  // 针对单个路由使用中间件 对大于1k 的相应体进行压缩处理
  const gzip = app.middleware.gzip({
    threshold: 1024
  });
  // home 是文件名,index 是具体的方法
  // 路由名称 URL路径 中间件(可以有多个 用,相连) Controller(可写为'home.index'这种简写形式)
  router.get("home", "/cards", gzip, controller.cards.getCards);
};
