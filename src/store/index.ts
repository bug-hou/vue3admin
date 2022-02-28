import { createStore, Store, useStore as vuexStore } from "vuex";

import login from "./login/login";

import { IRootState, IStoreType } from "./type";

const store = createStore<IRootState>({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		login,
	},
});

export function setupStore() {
	store.commit("login/loadingLocalStorage");
}

export function useStore(): Store<IStoreType> {
	return vuexStore();
}

export default store;
