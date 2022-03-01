import { Module } from "vuex";

import { IRootState } from "@/store/type";
import { ISystemState } from "./type";

import { getPageListData } from "@/service/system/system";

const systemModule: Module<ISystemState, IRootState> = {
	namespaced: true,
	state: {
		userCount: 0,
		userList: [],
	},
	actions: {
		async getPageList({ commit }, payload: any) {
			const pageListData = await getPageListData(payload.pageUrl, payload.queryInfo);
			const { list, totalCount } = pageListData.data.data;
			console.log(pageListData);
			commit("changeUserList", list);
			commit("changeUserCount", totalCount);
		},
	},
	mutations: {
		changeUserList(state, payload: any[]) {
			state.userList = payload;
		},
		changeUserCount(state, payload: number) {
			state.userCount = payload;
		},
	},
};

export default systemModule;
