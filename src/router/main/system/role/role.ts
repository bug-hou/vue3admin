export default {
	name: "role",
	path: "/main/system/role",
	component: () => import("views/main/system/role/role.vue"),
	meta: {
		breadcrumb: [{ name: "系统管理" }, { name: "角色管理" }],
	},
};
