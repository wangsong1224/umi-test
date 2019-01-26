"use strict";
/**
 * Config:应用开发遵循配置和代码分离的原则,将一些需要硬编码的业务配置都放到配置文件中,同时
 * 配置文件支持各种不同的运行环境使用不同的配置.
 *
 * 可以自动合并应用,插件,框架的配置,(按顺序覆盖) 可以根据环境维护不同的配置,合并后的配置可以
 * 通过 app.config获取
 *
 * 常见的方案:
 * 1. 使用平台管理配置,应用构建时将当前环境的配置放入包内,启动时指定该配置.但应用就无法一次构建多次部署,
 * 而且本地开发环境想使用配置会变得很麻烦.
 * 2. 使用平台管理配置,在启动时将当前环境的配置通过环境变量传入,这是比较优雅的方式,但框架对运维的要求
 * 会比较高,需要部署平台支持,同时开发环境也有相同痛点.
 * 3. 使用代码管理配置,在代码中添加多个环境配置,在启动时传入当前环境的参数即可.但无法全局配置,必须修改
 * 代码.(egg 选择了这种)
 *
 * config.default.js为默认的配置文件,所有环境都会加载这个配置文件,一般也会作为开发环境的默认配置文件.
 * 当指定 env 时会同时加载对应的配置文件,并覆盖默认配置文件的同名配置.
 * 如 prod 环境会加载 config.prod.js 和 config.default.js,config.prod.js会覆盖
 * config.default.js的同名配置.
 * 加载顺序,后加载的覆盖前面的
 * -> 插件 config.default.js
 * -> 框架 config.default.js
 * -> 应用 config.default.js
 * -> 插件 config.prod.js
 * -> 框架 config.prod.js
 * -> 应用 config.prod.js
 *
 * 所有框架,插件和应用级别的配置都可以通过 Config 对象获取到.
 * app.config 获取
 * 或者 this.config获取
 *
 */
module.exports = appInfo => {
  /**
   * appInfo:
   * pkg :package.json
   * name:应用名,同 pkg.name
   * baseDir:应用代码目录
   * HOME:用户目录,如 admin 账户为/home/admin
   * root:应用根目录,只有在 local 和 unittest 环境下为 baseDir，其他都为 HOME
   */
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1547614157453_6283";

  // 配置需要的中间件,数组顺序即为中间件的加载顺序
  config.middleware = ["gzip"];
  // 配置 gzip 中间件的配置
  config.gzip = {
    /**
     * enable match ignore 是通用配置,无论应用层中间件还是框架自带中间件
     */
    enable: false, //是否默认开启
    match: "/static", // 只针对/static 前缀开头的 URL 开启,也可以是正则或者函数(详情见中间件)
    ignore: "", //
    thireshold: 1024
  };

  // 跨域
  config.cors = {
    origin: "*",
    allowmethods: "GET,POST,PUT,HEAD,DELETE,PATCH"
  };

  // 数据库
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     //host
  //     host: "mysql.com",
  //     // 端口号
  //     port: "3306",
  //     // 用户名
  //     user: "",
  //     // 密码
  //     password: "",
  //     //数据库名
  //     database: ""
  //   },
  //   // 是否加载到 app 上,默认开启
  //   app: true,
  //   // 是否加载到 agent 上,默认关闭
  //   agent: false
  // };

  return config;
};
