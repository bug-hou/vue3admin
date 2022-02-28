<template>
	<el-container class="main">
		<el-aside width="200px" class="aside">
			<nav-menu-vue></nav-menu-vue>
		</el-aside>
		<el-container>
			<el-header class="page-header">Header</el-header>
			<el-main class="page-content">Main</el-main>
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
import { defineComponent } from "vue";

import { navMenuVue } from "@/components/nav-menu";
export default defineComponent({
	name: "main",
	components: {
		navMenuVue,
	},
});
</script>
<style scoped lang="less">
.main {
	width: 100%;
	height: 100%;
	.aside {
		background: rgb(211, 220, 230);
	}
	.page-header {
		height: 50px;
		background: white;
	}
	.page-content {
		background: #e9eef3;
	}
}
</style>
