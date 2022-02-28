import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupStore } from "./store";

import "./assets/css/index.css";

import register from "./global/element-register";

const app = createApp(App);
app.use(router);
app.use(store);
setupStore();
app.use(register);
app.mount("#app");

// console.log(process.env);

/*
process.env中只能包括(BASE_URL,NODE_ENV)vue中定义了
如果要使用自定义的必须在添加前缀VUE_APP来定义变量
process中可以获取到的变量的文件:
.env:任何环境下都可以获取
.env.development:在开发环境下获取
.env.production:在生产环境下获取
.env.test:在测试环境下获取
*/
