export default {
	name: "menu",
	path: "/main/system/menu",
	component: () => import("views/main/system/menu/menu.vue"),
	meta: {
		breadcrumb: [{ name: "系统管理" }, { name: "菜单管理" }],
	},
};
