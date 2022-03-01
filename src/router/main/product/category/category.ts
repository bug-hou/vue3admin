const category = () => import("@/views/main/product/category/category.vue");
export default {
	path: "/main/product/category",
	name: "category",
	component: category,
	children: [],
	meta: {
		breadcrumb: [{ name: "商品中心" }, { name: "商品类别" }],
	},
};
