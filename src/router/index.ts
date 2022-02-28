import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import main from "views/main/main.vue";
import { useLocalStorage } from "@/hooks";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/main",
		component: main,
		name: "main",
	},
	{
		path: "/",
		name: "login",
		component: () => import("views/login/login.vue"),
		alias: "/login",
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});
router.beforeEach((to, from) => {
	if (to.path !== "/login") {
		const token = useLocalStorage("token");
		if (!token) {
			return "/login";
		}
	}
});

export default router;
