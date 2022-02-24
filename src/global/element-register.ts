import { ElButton, ElCard } from "element-plus/lib/components";
import { App } from "vue";
import "element-plus/theme-chalk/base.css";

const components = [ElButton, ElCard];

export default (app: App) => {
	components.forEach((item) => {
		const name = "el-" + item.name.slice(2).toLowerCase();
		require("element-plus/theme-chalk/" + name + ".css");
		app.component(item.name, item);
	});
};
