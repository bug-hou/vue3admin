<template>
	<div class="login-panel">
		<h1 class="title">后台管理系统</h1>
		<el-tabs type="border-card" class="contain" stretch v-model="currentTab">
			<el-tab-pane name="account">
				<template #label>
					<p class="iconfont icon-zhanghao">账号登录</p>
				</template>
				<login-account-vue ref="accountRef"></login-account-vue>
			</el-tab-pane>
			<el-tab-pane name="phone">
				<template #label>
					<p class="iconfont icon-shouji">手机登录</p>
				</template>
				<login-phone-vue ref="phoneRef"></login-phone-vue>
			</el-tab-pane>
		</el-tabs>
		<div class="account-control">
			<el-checkbox class="check" v-model="isKeepPassword">记住密码</el-checkbox>
			<el-link type="primary">忘记密码</el-link>
		</div>
		<el-button class="login-button" type="primary" @click="loginClickHandle">立即登录</el-button>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-24 09:33:49
 * @Description: 创建一个login-panel组件
 */
// 从下载的组件中导入函数
import { defineComponent, ref } from "vue";
import loginAccountVue from "./login-account.vue";
import loginPhoneVue from "./login-phone.vue";
export default defineComponent({
	name: "login-panel",
	components: {
		loginAccountVue,
		loginPhoneVue,
	},
	setup() {
		// 是否记住密码
		const isKeepPassword = ref(true);

		const currentTab = ref<"account" | "phone">("account");

		const accountRef = ref<InstanceType<typeof loginAccountVue>>();
		const phoneRef = ref<InstanceType<typeof loginPhoneVue>>();

		const loginClickHandle = () => {
			if (currentTab.value === "account") {
				accountRef.value?.loginAccountAction(isKeepPassword.value);
			} else {
				phoneRef.value?.loginPhoneAction();
			}
		};

		return {
			isKeepPassword,
			accountRef,
			phoneRef,
			currentTab,
			loginClickHandle,
		};
	},
});
</script>
<style scoped lang="less">
.login-panel {
	margin-top: -10px;
	.title {
		padding-bottom: 10px;
		font-size: 24px;
		color: white;
		text-align: center;
		font-weight: bold;
	}
	.contain {
		width: 320px;
	}
	.account-control {
		display: flex;
		justify-content: space-between;
		.check {
			color: black;
		}
	}
	.login-button {
		width: 320px;
	}
}
</style>
