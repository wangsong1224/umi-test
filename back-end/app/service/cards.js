"use strict";
/**
 * 在 web 应用中 MySQL 是最常见,最好的关系型数据库之一.
 * 框架提供了 egg-mysql 来访问 MySQL 数据库.
 */
const Service = require("egg").Service;
class CardsService extends Service {
  async getCards() {
    return "hello";
  }
}
module.exports = CardsService;
