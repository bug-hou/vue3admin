import { ILoginState } from "./login/type";
import { ISystemState } from "./main/system/type";
import { IAnalysisState } from "./main/analysis/type";

export interface IRootState {
	entireDepartment: any[];
	entireRole: any[];
	entireMenu: any[];
}

export interface IRootWithModule {
	login: ILoginState;
	system: ISystemState;
	analysis: IAnalysisState;
}

export type IStoreType = IRootState & IRootWithModule;
