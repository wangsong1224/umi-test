const { Controller } = require("egg");
class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      code: 0,
      body: {
        data
      }
    };
  }

  error(msg) {
    this.ctx.body = {
      code: 1,
      body: {
        msg
      }
    };
  }
}
module.exports = BaseController;
