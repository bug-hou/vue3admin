import { Module } from "vuex";

import { IRootState } from "@/store/type";
import { ISystemState } from "./type";

import { getPageListData } from "@/service/system/system";

const mapPageUrl = {
	user: "/users/list",
	role: "/role/list",
	menu: "/menu/list",
	department: "/department/list",
	goods: "/goods/list",
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
			const pageListData = await getPageListData(mapPageUrl[payload.pageName], payload.queryInfo);
			const { list, totalCount } = pageListData.data.data;
			commit(`change${payload.pageName[0].toUpperCase() + payload.pageName.slice(1)}List`, list);
			commit(
				`change${payload.pageName[0].toUpperCase() + payload.pageName.slice(1)}Count`,
				totalCount
			);
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
			state.menuCount = payload;
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
