<!-- loginAccount -->
<template>
	<el-form :model="account" :rules="rules" label-width="60px" ref="formRef">
		<el-form-item label="账号" prop="name">
			<el-input v-model="account.name"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input v-model="account.password" type="password" show-password></el-input>
		</el-form-item>
	</el-form>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-27 16:03:32
 * @Description: 创建一个loginAccount组件
 */
// 从下载的组件中导入函数
import { defineComponent, reactive } from "vue";

// 自定义方法引入
import { rules } from "../config/index";
import { useLocalStorage } from "../../../hooks/index";
import { useStore } from "vuex";
import { useLogin } from "../hooks/useLogin";

// 自定义组件引入
export default defineComponent({
	name: "loginAccount",
	inheritAttrs: true,
	setup() {
		// 从缓存中获取到账号和密码
		const account = reactive({
			name: useLocalStorage("name") ?? "",
			password: useLocalStorage("password") ?? "",
		});

		const store = useStore();

		const { formRef, loginAction } = useLogin();

		const loginAccountAction = (isKeepPassword: boolean) => {
			loginAction(() => {
				// 判断是否记住密码
				if (isKeepPassword) {
					useLocalStorage("name", account.name);
					useLocalStorage("password", account.password);
				} else {
					useLocalStorage("name", "");
					useLocalStorage("password", "");
				}
				// 发送登录请求
				store.dispatch("login/accountLoginAction", {
					name: account.name,
					password: account.password,
				});
			});
		};

		return { account, rules, formRef, loginAccountAction };
	},
});
</script>
<style scoped lang="less"></style>
