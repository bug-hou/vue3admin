export default {
	name: "user",
	path: "/main/system/user",
	component: () => import("views/main/system/user/user.vue"),
	meta: {
		breadcrumb: [{ name: "系统管理" }, { name: "用户管理" }],
	},
};
