export function mapMenusTopermissions(userMenus: any[]) {
	const permissions: string[] = [];
	const _recurseGetPermission = (menus: any[]) => {
		for (const menu of menus) {
			if (menu.type === 1 || menu.type === 2) {
				_recurseGetPermission(menu.children ?? []);
			} else if (menu.type === 3) {
				permissions.push(menu.permission);
			}
		}
	};
	_recurseGetPermission(userMenus);
	return permissions;
}
