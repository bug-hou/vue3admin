<!-- not-found -->
<template>
	<div class="not-found">
		<h2>{{ $route.params.pathMatch }}</h2>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 20:09:20
 * @Description: 创建一个not-found组件
 */
// 从下载的组件中导入函数
import { defineComponent } from "vue";

// 自定义方法引入

// 自定义组件引入
export default defineComponent({
	name: "not-found",
	inheritAttrs: true,
	setup() {
		return {};
	},
});
</script>
<style scoped lang="less">
.not-found {
}
</style>
