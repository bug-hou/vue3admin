import Request from "..";

export interface IAccount {
	name: string;
	password: string;
}

enum ILoginApi {
	AccountLogin = "/login",
	LoginUserInfo = "/users/",
	UserRole = "/role/", // 用法:role/1/menu
}

export function accountLoginRequest(account: IAccount) {
	return Request.post(ILoginApi.AccountLogin, account);
}

export function userInfoResult(id: number) {
	return Request.get(ILoginApi.LoginUserInfo + id);
}

export function requestUserMenusByRoled(id: number) {
	return Request.get(ILoginApi.UserRole + id + "/menu");
}
