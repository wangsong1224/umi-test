import Axios from "axios";

// 默认配置
Axios.defaults.baseURL = "http://localhost:7001";

// 拦截请求
Axios.interceptors.request.use(config => {
  return config;
});

// 拦截响应
Axios.interceptors.response.use(config => {
  return config;
});

export default Axios;
