<!-- nav-header -->
<template>
	<div class="nav-header">
		<p :class="['iconfont', showIcon]" @click="changeIconHandle"></p>
		<el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
			<el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
			<el-breadcrumb-item>promotion management</el-breadcrumb-item>
			<el-breadcrumb-item>promotion list</el-breadcrumb-item>
			<el-breadcrumb-item>promotion detail</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 15:52:21
 * @Description: 创建一个nav-header组件
 */
type IIcon = "icon-zhankai" | "icon-zhankai-copy";
// 从下载的组件中导入函数
import { defineComponent, ref } from "vue";

// 自定义方法引入

// 自定义组件引入
import { ArrowRight } from "@element-plus/icons-vue";
export default defineComponent({
	name: "nav-header",
	inheritAttrs: true,
	emits: ["collapse"],
	setup(_, { emit }) {
		const showIcon = ref<IIcon>("icon-zhankai");
		const changeIconHandle = () => {
			if (showIcon.value === "icon-zhankai") {
				showIcon.value = "icon-zhankai-copy";
				emit("collapse", true);
			} else {
				showIcon.value = "icon-zhankai";
				emit("collapse", false);
			}
		};
		return { ArrowRight, showIcon, changeIconHandle };
	},
});
</script>
<style scoped lang="less">
.nav-header {
	height: 100%;
	display: flex;
	align-items: center;
	p.iconfont {
		font-size: 20px;
		margin-right: 20px;
	}
}
</style>
