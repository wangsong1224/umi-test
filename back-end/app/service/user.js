"use strick";
/**
 * Service:基类
 * 简单来说,Service 就是在复杂业务场景下用于做业务逻辑封装的一个抽象层,提供抽象层有以下几个好处:
 * 1. 保持 Controller 中的逻辑更加简洁
 * 2. 保持业务逻辑的独立性,抽象出来的 Service 可以被多个 Controller 重复调用
 * 3. 将逻辑和展现分离,更容易编写测试用例.
 *
 * 使用场景
 * 1. 复杂数据的处理,比如要展现的信息需要从数据库获取,还要经过一定的规则计算才能返回用户显示
 * 或者计算完成后,更新到数据库.
 * 2. 第三方服务的调用,比如 GitHub 信息获取等
 *
 * 属性
 * 每一次用户请求,框架都会实例化对应的 Service 实例,由于它继承自 egg.Service ,所以有以下属性:
 * 1. this.ctx:当前请求的上下文 Context 对象的实例,可以拿到处理当前请求的各种便捷属性和方法
 * 比如:
 *  1.1 this.ctx.curl发起网络调用
 *  1.2 this.ctx.service.otherService 调用其他 Service
 *  1.3 this.ctx.db发起数据库调用等,db 可能是其他插件提前挂载到 app上的模块
 * 2. this.app:当前应用 Application 对象实例,可以拿到全局对象和方法
 * 3. this.service:应用定义的 Service,可以访问到其他业务层,等价于 this.ctx.service
 * 4. this.config:应用运行时的配置项
 * 5. this.logger:logger 对象,有四个方法(debug,info,warn,error),通过这个 logger 对象记录的
 * 日志,在日志前面会加上打印该日志的文件路径,以便快速定位日志打印位置å
 */
const Service = require("egg").Service;
class UserService extends Service {
  async login(reqParams) {
    this.logger.debug("aaaa");
    const currentUserInfo = await this.app.mysql.get("mysql.user_test", {
      user_name: reqParams.userName
    });
    if (currentUserInfo && reqParams.password == currentUserInfo.password) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = UserService;
