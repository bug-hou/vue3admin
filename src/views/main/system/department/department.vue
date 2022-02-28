<!-- department -->
<template>
	<div class="department"></div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 19:53:13
 * @Description: 创建一个department组件
 */
// 从下载的组件中导入函数
import { defineComponent } from "vue";

// 自定义方法引入

// 自定义组件引入
export default defineComponent({
	name: "department",
	inheritAttrs: true,
	setup() {
		return {};
	},
});
</script>
<style scoped lang="less">
.department {
}
</style>
