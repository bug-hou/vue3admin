import { createStore, Store, useStore as vuexStore } from "vuex";

import login from "./login/login";
import system from "./main/system/system";
import analysis from "./main/analysis/dashboard";

import { getPageListData } from "@/service/system/system";

import { IRootState, IStoreType } from "./type";

const store = createStore<IRootState>({
	state: {
		entireDepartment: [],
		entireRole: [],
		entireMenu: [],
	},
	mutations: {
		changeEntireDepartment(state, payload: any) {
			state.entireDepartment = payload;
		},
		changeEntireRole(state, payload: any) {
			state.entireRole = payload;
		},
		changeEntireMenu(state, payload: any) {
			state.entireMenu = payload;
		},
	},
	actions: {
		async getInitialDataAction({ commit }) {
			const departmentData = await getPageListData("/department/list", {
				offset: 0,
				size: 100,
			});
			const { list: departmentList } = departmentData.data.data as any;
			const roleData = await getPageListData("/role/list", { offset: 0, size: 100 });
			const { list: roleList } = roleData.data.data as any;
			const menuData = await getPageListData("/menu/list", { offset: 0, size: 100 });
			const { list: menuList } = menuData.data.data;
			commit("changeEntireDepartment", departmentList);
			commit("changeEntireRole", roleList);
			commit("changeEntireMenu", menuList);
		},
	},
	getters: {},
	modules: {
		login,
		system,
		analysis,
	},
});

export function setupStore() {
	store.commit("login/loadingLocalStorage");
	store.dispatch("getInitialDataAction");
	store.dispatch("analysis/getAnalysisDataAction");
}

export function useStore(): Store<IStoreType> {
	return vuexStore();
}

export default store;
