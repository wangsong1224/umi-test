import Axios from "../my-plugins/plugin-axios";
export default {
  login(info) {
    return Axios.post("/login", info);
  }
};
