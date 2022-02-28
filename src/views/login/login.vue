<template>
	<div class="login">
		<login-panel-vue></login-panel-vue>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-22 20:27:20
 * @Description: 创建一个login组件
 */
// 从下载的组件中导入函数
import { defineComponent } from "vue";
import loginPanelVue from "./cpns/login-panel.vue";
export default defineComponent({
	name: "login",
	components: {
		loginPanelVue,
	},
});
</script>
<style scoped lang="less">
.login {
	width: 100%;
	height: 100%;
	background: url(~@/assets/login.png);
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
