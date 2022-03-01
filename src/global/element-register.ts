import {
	ElButton,
	ElTabPane,
	ElTabs,
	ElIcon,
	ElForm,
	ElFormItem,
	ElInput,
	ElCheckbox,
	ElLink,
	ElContainer,
	ElAside,
	ElHeader,
	ElMain,
	ElMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElSubMenu,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElAvatar,
	ElSelect,
	ElOption,
	ElDatePicker,
	ElTable,
	ElTableColumn,
} from "element-plus/lib/components";
import { App } from "vue";
import "element-plus/theme-chalk/base.css";

const components = [
	ElButton,
	ElTabPane,
	ElTabs,
	ElIcon,
	ElInput,
	ElForm,
	ElFormItem,
	ElCheckbox,
	ElLink,
	ElAside,
	ElHeader,
	ElMain,
	ElContainer,
	ElMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElSubMenu,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElAvatar,
	ElSelect,
	ElOption,
	ElDatePicker,
	ElTable,
	ElTableColumn,
];

export default (app: App) => {
	components.forEach((item) => {
		const name = item.name.split("").reduce((pre, next, index) => {
			if (index === 0) {
				return "e";
			}
			if (next.charCodeAt(0) >= 65 && next.charCodeAt(0) <= 90) {
				return pre + "-" + next.toLowerCase();
			} else {
				return pre + next;
			}
		}, "");
		require("element-plus/theme-chalk/" + name + ".css");
		app.component(item.name, item);
	});
};
