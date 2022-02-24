import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import main from "views/main/main.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: main,
		name: "main",
		alias: "/main",
	},
	{
		path: "/login",
		name: "login",
		component: () => import("views/login/login.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
