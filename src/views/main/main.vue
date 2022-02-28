<template>
	<el-container class="main">
		<el-aside :width="isCollapse ? '60px' : '200px'" class="aside scroll">
			<nav-menu-vue :is-collapse="isCollapse"></nav-menu-vue>
		</el-aside>
		<el-container>
			<el-header class="page-header">
				<nav-header-vue @collapse="collapseHandle"></nav-header-vue>
			</el-header>
			<el-main class="page-content">
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-22 20:26:58
 * @Description: 创建一个main组件
 */
// 从下载的组件中导入函数
import { defineComponent, ref } from "vue";

import { navMenuVue } from "@/components/nav-menu";
import { navHeaderVue } from "@/components/nav-header";
export default defineComponent({
	name: "main",
	components: {
		navMenuVue,
		navHeaderVue,
	},
	setup() {
		const isCollapse = ref(false);
		const collapseHandle = (payload: boolean) => {
			isCollapse.value = payload;
		};
		return {
			isCollapse,
			collapseHandle,
		};
	},
});
</script>
<style scoped lang="less">
.main {
	width: 100%;
	height: 100%;
	.aside {
		background: rgb(211, 220, 230);
		transition: width 0.5s;
	}
	.page-header {
		height: 40px;
		background: white;
	}
	.page-content {
		background: #e9eef3;
	}
}
</style>
