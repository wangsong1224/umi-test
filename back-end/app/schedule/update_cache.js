"use strick";
/**
 * Subscription:
 * 订阅模型是一种比较常见的开发模式,譬如消息中间件的消费者或者调度任务.
 * 虽然我们通过框架开发的 HTTP Server 是请求响应模型的，但是仍然还会有许多场景需要执行一些定时任务，例如：
 * 1. 定时上报应用状态
 * 2. 定时从远程接口更新本地缓存
 * 3. 定时进行文件切割,临时文件删除
 * 
 * 所有的定时任务都统一存放在 app/schedule目录下,每一个文件都是一个独立的定时任务,可以配置定时任务
 * 的属性和要执行的方法.
 */

// 更新远程数据到内存缓存的定时任务
const Subscription = require('egg').Subscription;
class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的时间间隔等配置
  static get schedule() {
    return {
      interval: '1m', // 1分钟时间间隔
      type: 'all' // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const res = await this.ctx.curl('http://www.api.com/cache', {
      dataType: 'json'
    });
    this.ctx.app.cache = res.data;
  }

}
module.exports = UpdateCache;