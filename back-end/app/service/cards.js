"use strict";
/**
 * 在 web 应用中 MySQL 是最常见,最好的关系型数据库之一.
 * 框架提供了 egg-mysql 来访问 MySQL 数据库.
 */
const Service = require("egg").Service;
class CardsService extends Service {
  async getCards() {
    let dataList = [
      {
        id: new Date(),
        setup: "去腾讯应聘产品策划的实习工作，笔试、面试有哪些建议?",
        punchline: "没有"
      },
      {
        id: new Date(),
        setup: "世界上最好的语言是什么?",
        punchline: "PHP"
      },
      {
        id: new Date(),
        setup: "如何看待 Deno?",
        punchline: "别更新了,老子学不动了!"
      },
      {
        id: new Date(),
        setup: "为什么中国人这么喜欢拍古装片？",
        punchline: "科幻片面临的最大问题是，在未来时空还要不要党的领导？"
      },
      {
        id: new Date(),
        setup: "什么叫暖男？",
        punchline: "云备胎。"
      },
      {
        id: new Date(),
        setup: "怎么看待女朋友的蓝颜？",
        punchline: "蓝颜蓝颜，加点黄色就绿了。"
      }
    ];
    let random = Number.parseInt(Math.random() * 5);
    return dataList[random];
  }
}
module.exports = CardsService;
