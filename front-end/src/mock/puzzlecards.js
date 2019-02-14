/**
 * 我们在 config.js 文件中设置了代理,所有的 HTTP 请求都可以先到达本地开发服务器,再被转发
 * 实际开发中,后端的服务器不一定马上就能使用,所以本地服务器需要另外一个能力:模拟数据
 * 设置代理是 mock 的前提
 *
 * 一个 ajax 请求发送到本地服务器后,我们可以设置:如果请求满足某个规则,则不转发这个请求,
 * 而是直接返回一个 mock 的结果给浏览器.
 * 实际开发中,我们常常先和服务端的同学商定 HTTP 请求的接口接受什么参数,返回什么结果,
 * 然后先用 mock 数据来模拟,等待服务端接口写好了,接触 mock 用真实数据联调
 *
 *
 */

const random_jokes = [
  {
    setup: "What is the object oriented way to get wealthy ?",
    punchline: "Inheritance"
  },
  {
    setup: "To understand what recursion is...",
    punchline: "You must first understand what recursion is"
  },
  {
    setup: "What do you call a factory that sells passable products?",
    punchline: "A satisfactory"
  }
];

let random_joke_call_count = 0;

export default {
  "get /dev/random_joke": function(req, res) {
    const responseObj =
      random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000);
  }
};
