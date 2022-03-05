import { RouteRecordRaw } from "vue-router";

let firstMenu: any = null;

export function mapRoutes(menus: any[]): RouteRecordRaw[] {
	const routes: RouteRecordRaw[] = [];
	// 获取到所有的动态路由对象
	const allRoutes: RouteRecordRaw[] = [];
	const routeFiles = require.context("../router/main", true, /\.ts/);
	routeFiles.keys().forEach((key) => {
		const route = require("../router/main" + key.slice(1));
		allRoutes.push(route.default);
	});

	const _recurseGetRoute = function (menus: any[]) {
		for (const menu of menus) {
			if (menu.type === 2) {
				const route = allRoutes.find((route) => route.path === menu.url);
				if (route) routes.push(route);
				if (!firstMenu) {
					firstMenu = route;
				}
			} else {
				_recurseGetRoute(menu.children);
			}
		}
	};
	_recurseGetRoute(menus);

	return routes;
}

export function getMenuLeafKeys(menus: any[]) {
	const resultKeys = [];
	const _recurseLefKeys = (menus: any): any => {
		const abc: any[] = [];
		menus.forEach((item: any) => {
			if (item.children) {
				resultKeys.push(..._recurseLefKeys(item.children));
			} else {
				abc.push(item.id);
			}
		});
		return abc;
	};
	resultKeys.push(..._recurseLefKeys(menus));
	return resultKeys;
}

export { firstMenu };
