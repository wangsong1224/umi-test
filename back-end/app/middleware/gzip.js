"use strick";
/**
 * egg的中间件模型和 koa 是一样的,都是基于洋葱圈模型.
 * 每次我们编写了一个中间件,就相当于在洋葱圈外面包了一层.
 * 
 * 配置:
 * 一般来说中间件会有自己的配置.在框架中,一个完整的中间件是包含了配置处理的.我们约定一个中间件是一个
 * 放置在 middleware 目录下的单独文件,需要 exports 一个普通的函数,接受两个参数:
 * 1. options:中间件的配置项,框架会将 app.config[${middlwwareName}] 传递进来
 * 2. app:当前应用 Application 实例.
 * 
 * 使用组件:
 * 中间件编写完成后,还要手动挂载.支持以下的方式:
 * 1. 在应用中使用中间件
 * 可以完全通过配置来加载自定义的中间件,并决定他们的顺序.
 */
const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = options => {
  return async function gzip(ctx, next) {
    // next要传入,不能用 this.next
    await next()

    // 后续中间件执行完成后将相应体转换成 gzip
    let body = ctx.body;
    if (!body) return;

    // 支持 options.threshold
    if (options.threshold && ctx.length < options.threshold) return;
    if (isJSON(body)) body = JSON.stringify(body);

    // 设置 gzip body,修正响应头
    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Contend-Encoding', 'gzip');
  }

}