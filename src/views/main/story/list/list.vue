<!-- list -->
<template>
	<div class="list"></div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 20:01:54
 * @Description: 创建一个list组件
 */
// 从下载的组件中导入函数
import { defineComponent } from "vue";

// 自定义方法引入

// 自定义组件引入
export default defineComponent({
	name: "list",
	inheritAttrs: true,
	setup() {
		return {};
	},
});
</script>
<style scoped lang="less">
.list {
}
</style>
