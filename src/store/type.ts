import { ILoginState } from "./login/type";

export interface IRootState {}

export interface IRootWidthModule {
	login: ILoginState;
}

export type IStoreType = IRootState & IRootWidthModule;
