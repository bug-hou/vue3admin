<!-- loginAccount -->
<template>
	<el-form :model="account" :rules="rules" label-width="80px" ref="formRef">
		<el-form-item label="手机号" prop="phone">
			<el-input v-model="account.phone"></el-input>
		</el-form-item>
		<el-form-item label="验证码" prop="verify">
			<div class="verify">
				<el-input v-model="account.verify"></el-input>
				<el-button class="button" :disabled="verify.disabled" type="primary" @click="send">{{
					verify.name
				}}</el-button>
			</div>
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
import { useLogin } from "../hooks/useLogin";
import { useStore } from "vuex";

// 自定义组件引入
export default defineComponent({
	name: "loginAccount",
	inheritAttrs: true,
	setup() {
		const account = reactive({
			phone: "",
			verify: "",
		});

		const verify = reactive({
			name: "发送",
			disabled: false,
		});

		const store = useStore();

		const { formRef, loginAction } = useLogin();

		const send = () => {
			console.log(account.phone);
			let count = 60;
			verify.name = count.toString() + "秒";
			verify.disabled = true;
			var timer = setInterval(() => {
				if (count === 0) {
					clearInterval(timer);
					verify.disabled = false;
					verify.name = "发送";
				} else {
					verify.name = (count--).toString() + "秒";
				}
			}, 1000);
		};

		const loginPhoneAction = () => {
			loginAction(() => {
				store.dispatch("login/phoneLoginAction", account);
			});
		};

		return { account, rules, verify, formRef, send, loginPhoneAction };
	},
});
</script>
<style scoped lang="less">
.verify {
	display: flex;
	.button {
		margin-left: 10px;
		width: 70px;
	}
}
</style>
