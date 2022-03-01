import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import main from "views/main/main.vue";
import { useLocalStorage } from "@/hooks";
import { firstMenu } from "@/utils/mapMenu";

const routes: Array<RouteRecordRaw> = [
	{
		path: "",
		redirect: "/main",
	},
	{
		path: "/main",
		component: main,
		name: "main",
		children: [],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("views/login/login.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		component: () => import("views/not-found/not-found.vue"),
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
		if (to.path === "/main") {
			console.log(firstMenu);
			return firstMenu.path;
		}
	}
});

export default router;
