"use strick";
/**
 * 所有的扩展都写在 extend 文件夹中,egg 会解析 extend 文件夹中文件名,比如要扩展 helper,代码
 * 要写在 app/extend/helper.js中.
 * 
 * 自定义的 helper 方法,可以通过框架扩展的形式自定义 helper 方法
 * Helper自身是一个类,和 Controller 基类一样的属性,也会在每次请求时进行实例化,
 * 因此 Helper 上的所有函数也能获取到当前请求相关的上下文信息.
 * 
 */
module.exports = {
  formatUser(user) {
    return only(user, ['name', 'phone']);
  }
};