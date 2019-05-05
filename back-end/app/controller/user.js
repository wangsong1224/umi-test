const Controller = require("../core/base_controller");
/**
 * controller层负责解析用户的输入,处理后返回相应的结果
 * 对用户的请求参数进行处理(校验,转换),然后调用对应的 service 方法处理业务
 * 1. 获取用户通过 HTTP 传递过来的请求参数
 * 2. 校验,组装参数
 * 3. 调用 service 进行业务处理,必要时处理转换 service 的返回结果,让它适应用户的需求
 * 4. 通过 HTTP 将结果响应给用户
 */
class UserController extends Controller {
  async login(info) {
    let reqParams = info.request.body;
    this.ctx.validate(
      {
        userName: { type: "string" },
        password: { type: "string" },
        remember: { type: "boolean" }
      },
      reqParams
    );
    let result = await this.service.user.login(reqParams);
    if (result) {
      this.success("登录成功");
    } else {
      this.error("登录失败");
    }
  }
}
module.exports = UserController;
