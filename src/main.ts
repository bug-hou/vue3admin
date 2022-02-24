import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import register from "./global/element-register";
// import { ElButton } from "element-plus/lib/components";
// import "element-plus/theme-chalk/base.css";
// import "element-plus/theme-chalk/el-button.css";


const app = createApp(App);
app.use(router);
app.use(store);
app.use(register);
app.mount("#app");

console.log(app.config.globalProperties.BASE_URL)
