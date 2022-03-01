const goods = () => import("@/views/main/product/goods/goods.vue");
export default {
	path: "/main/product/goods",
	name: "goods",
	component: goods,
	children: [],
	meta: {
		breadcrumb: [{ name: "商品中心" }, { name: "商品信息" }],
	},
};
