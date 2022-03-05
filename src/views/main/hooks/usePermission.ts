import { useStore } from "@/store";

export function usePermission(pageNmae: string, handleName: string) {
	const store = useStore();
	const permissions = store.state.login.permissions;
	const verifyPermission = `system:${pageNmae}:${handleName}`;
	return !!permissions.find((item) => item.indexOf(verifyPermission));
}
