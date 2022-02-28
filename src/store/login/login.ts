import { Module } from "vuex";
import {
  accountLoginRequest,
  userInfoResult,
  requestUserMenusByRoled,
} from "@/service/login/login";
import type { IAccount } from "@/service/login/login";
import { useLocalStorage } from "@/hooks";
import router from "@/router";
import { mapRoutes } from "@/utils/mapMenu";

import { ILoginState } from "./type";
import { IRootState } from "../type";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: "",
    userInfo: {},
    menus: {},
  },
  actions: {
    async accountLoginAction({ commit, state }, payload: IAccount) {
      // 登录请求，获取到token和id
      const result = await accountLoginRequest(payload);
      const { id, token } = result.data.data;
      useLocalStorage("token", token);
      commit("changeToken", token);
      // 用户数据请求，获取到用户信息
      const info = await userInfoResult(id);
      commit("saveUserInfo", info.data.data);
      useLocalStorage("userInfo", info.data.data);
      // 获取到用户权限对应的菜单
      const menus = await requestUserMenusByRoled(info.data.data.role.id);
      commit("saveRoleMenus", menus.data.data);
      useLocalStorage("menus", menus.data.data);
      // 跳转到首页
      router.push({
        path: "/main",
      });
    },
    async phoneLoginAction({ commit }, payload: any) {
      commit("saveUserInfo", payload.phone);
    },
  },
  mutations: {
    changeToken(state, payload: any) {
      state.token = payload;
    },
    saveUserInfo(state, payload: any) {
      state.userInfo = payload;
    },
    saveRoleMenus(state, payload: any) {
      state.menus = payload;
      // 隐射路由(通过menu来隐射出要显示的路由)
      const routes = mapRoutes(payload);
      // 挂载到router中
      routes.forEach(item => {
        router.addRoute("main", item);
      })
    },
    loadingLocalStorage(state, payload) {
      state.token = useLocalStorage("token");
      state.menus = useLocalStorage("menus");
      state.userInfo = useLocalStorage("userInfo");
    },
  },
};

export default loginModule;
