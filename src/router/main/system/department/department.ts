export default {
	name: "department",
	path: "/main/system/department",
	component: () => import("views/main/system/department/department.vue"),
	meta: {
		breadcrumb: [{ name: "系统管理" }, { name: "部门管理" }],
	},
};
