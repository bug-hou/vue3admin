const dashboard = () => import("@/views/main/analysis/dashboard/dashboard.vue");
export default {
	path: "/main/analysis/dashboard",
	name: "dashboard",
	component: dashboard,
	children: [],
	meta: {
		breadcrumb: [{ name: "系统总览" }, { name: "商品统计" }],
	},
};
