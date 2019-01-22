'use strict';
/**
 * Controller:框架本身提供了 Controller 基类,推荐所有的都继承于该基类.
 * Controller 负责解析用户的输入,处理后返回相应的结果.
 * 例如:
 * 1. 在 RESTful 接口中,Controller 接受用户的参数,从数据库中查找内容返回给用户或者将用户的请求
 * 更新到数据库中
 * 2. 在 HTML 页面请求中,Controller 根据用户访问不同的 URL,渲染不同的模板得到 HTML 返回给用户
 * 3. 在代理服务器中,Controller 将用户的请求转发到其他服务器上,并将其他服务器的处理结果返回给用户
 * 
 * 推荐 Controller 层主要对用户的请求参数进行处理(校验,转换),然后调用对应的 service 方法处理业务,
 * 得到业务结果后封装并返回,Controller 层基本上是业务开发中唯一和 HTTP 协议打交道的地方:
 * 1. 获取用户通过 HTTP 传递过来的请求参数
 * 2. 校验,组装参数
 * 3. 调用 Service 进行业务处理,必要时处理转换 Service 的返回结果,让它适应用户的需求
 * 4. 通过 HTTP 将结果响应给用户
 * 
 * 这个基类有以下的属性:
 * 1. ctx 当前请求的 Context 实例
 * 2. app 应用的 Application 实例
 * 3. config 应用的配置
 * 4. service 应用所有的 service
 * 5. logger 为当前 controller 封装的 logger 对象
 */
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async create() {
    const {
      ctx,
      service
    } = this;
    const createRule = {
      title: {
        type: 'string'
      },
      content: {
        type: 'string'
      }
    };
    // 校验参数
    ctx.validate(createRule);
    // 组装参数
    const author = ctx.session.userId;
    const req = Object.assign(ctx.request.body, {
      author
    });
    // 调用 Service 进行业务处理
    const res = await service.post.create(req);
    // 设置响应内容和响应状态码
    ctx.body = {
      id: res.id
    };
    ctx.status = 201;
  }
}

module.exports = HomeController;