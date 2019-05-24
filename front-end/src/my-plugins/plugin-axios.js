import Axios from "axios";
import _ from "lodash";
// 默认配置
Axios.defaults.baseURL = "http://localhost:7001";

// 拦截请求
Axios.interceptors.request.use(config => {
  return config;
});

// 拦截响应
Axios.interceptors.response.use(res => {
  let code = _.get(res, "data.code");
  let body = _.get(res, "data.body");
  if (code === 0) {
    return body;
  } else {
    throw new Error("error");
  }
});

export default Axios;
