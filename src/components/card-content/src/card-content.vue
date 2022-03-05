<!-- card-content -->
<template>
	<el-card class="card-content">
		<template #header>
			<div class="card-header">
				<p>{{ contentTitle }}</p>
			</div>
		</template>
		<slot></slot>
	</el-card>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-05 10:29:38
 * @Description: 创建一个card-content组件
 */
// 从下载的组件中导入函数
import { defineComponent } from "vue";

// 自定义方法引入

// 自定义组件引入
export default defineComponent({
	name: "card-content",
	inheritAttrs: true,
	props: {
		contentTitle: {
			type: String,
			required: true,
		},
	},
	setup() {
		return {};
	},
});
</script>
<style scoped lang="less">
.card-content {
	background: white;
	padding: 5px;
	.card-header {
		font-size: 16px;
		font-weight: bold;
	}
}
</style>
