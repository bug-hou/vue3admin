const overview = () => import("@/views/main/analysis/overview/overview.vue");
export default {
	path: "/main/analysis/overview",
	name: "overview",
	component: overview,
	children: [],
	meta: {
		breadcrumb: [{ name: "系统总览" }, { name: "核心技术" }],
	},
};
