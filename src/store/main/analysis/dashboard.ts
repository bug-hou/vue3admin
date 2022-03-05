import { Module } from "vuex";

import {
	getAddressGoodsSale,
	getCategoryGoodsCount,
	getCategoryGoodsFavor,
	getCategoryGoodsSale,
} from "@/service/analysis/analysis";

import type { IAnalysisState } from "./type";
import type { IRootState } from "../../type";

const analysis: Module<IAnalysisState, IRootState> = {
	namespaced: true,
	state: {
		categoryGoodsCount: [],
		categoryGoodsFavor: [],
		categoryGoodsSale: [],
		addressGoodsSale: [],
	},
	actions: {
		async getAnalysisDataAction({ commit }, payload: any) {
			const addressData = await getAddressGoodsSale();
			commit("changeAddressGoodsSale", addressData.data.data);
			const categoryGoodsSale = await getCategoryGoodsSale();
			commit("changeCategoryGoodsSale", categoryGoodsSale.data.data);
			const categoryGoodsFavor = await getCategoryGoodsFavor();
			commit("changeCategoryGoodsFavor", categoryGoodsFavor.data.data);
			const categoryGoodsCount = await getCategoryGoodsCount();
			commit("changeCategoryGoodsCount", categoryGoodsCount.data.data);
		},
	},
	mutations: {
		changeAddressGoodsSale(state, payload: any) {
			state.addressGoodsSale = payload;
		},
		changeCategoryGoodsSale(state, payload: any) {
			state.categoryGoodsSale = payload;
		},
		changeCategoryGoodsFavor(state, payload: any) {
			state.categoryGoodsFavor = payload;
		},
		changeCategoryGoodsCount(state, payload: any) {
			state.categoryGoodsCount = payload;
		},
	},
};

export default analysis;
