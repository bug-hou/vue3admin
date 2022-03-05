import { Module } from "vuex";

import { IRootState } from "@/store/type";
import { ISystemState } from "./type";

import {
	getPageListData,
	deletePageData,
	createPageData,
	editPageData,
} from "@/service/system/system";

const mapPageUrl = {
	user: "/users/",
	role: "/role/",
	menu: "/menu/",
	department: "/department/",
	goods: "/goods/",
};

const systemModule: Module<ISystemState, IRootState> = {
	namespaced: true,
	state: {
		userCount: 0,
		userList: [],
		roleCount: 0,
		roleList: [],
		departmentCount: 0,
		departmentList: [],
		menuCount: 0,
		menuList: [],
		goodsCount: 0,
		goodsList: [],
	},
	actions: {
		async getPageList({ commit }, payload: any) {
			const pageListData = await getPageListData(
				mapPageUrl[payload.pageName] + "list",
				payload.queryInfo
			);
			const { list, totalCount } = pageListData.data.data;
			commit(`change${payload.pageName[0].toUpperCase() + payload.pageName.slice(1)}List`, list);
			commit(
				`change${payload.pageName[0].toUpperCase() + payload.pageName.slice(1)}Count`,
				totalCount
			);
		},
		async deletePageData({ dispatch }, payload: any) {
			const { id, pageName, queryInfo } = payload;
			console.log(`${mapPageUrl[pageName]}${id}`);
			await deletePageData(`${mapPageUrl[pageName]}${id}`);
			dispatch("getPageList", { pageName, queryInfo });
		},
		async createPageDataAction({ dispatch }, payload: any) {
			console.log(payload);
			const { pageName, queryInfo } = payload;
			await createPageData(mapPageUrl[pageName].slice(0, -1), queryInfo);
			// 请求最新的数据
			await dispatch("getPageList", { pageName, queryInfo: { offset: 0, size: 10 } });
		},
		async editPageDataAction({ dispatch }, payload) {
			const { pageName, queryInfo, id } = payload;
			console.log(id);
			await editPageData(mapPageUrl[pageName] + id, queryInfo);
			// 请求最新的数据
			await dispatch("getPageList", { pageName, queryInfo: { offset: 0, size: 10 } });
		},
	},
	mutations: {
		changeUserList(state, payload: any[]) {
			state.userList = payload;
		},
		changeUserCount(state, payload: number) {
			state.userCount = payload;
		},
		changeMenuList(state, payload: any[]) {
			state.menuList = payload;
		},
		changeMenuCount(state, payload: number) {
			state.menuCount = 4;
		},
		changeDepartmentList(state, payload: any[]) {
			state.departmentList = payload;
		},
		changeDepartmentCount(state, payload: number) {
			state.departmentCount = payload;
		},
		changeRoleList(state, payload: any[]) {
			state.roleList = payload;
		},
		changeRoleCount(state, payload: number) {
			state.roleCount = payload;
		},
		changeGoodsList(state, payload: any[]) {
			state.goodsList = payload;
		},
		changeGoodsCount(state, payload: number) {
			state.goodsCount = payload;
		},
	},
};

export default systemModule;
