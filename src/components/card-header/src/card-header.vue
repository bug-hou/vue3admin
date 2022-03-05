<!-- card-header -->
<template>
	<div class="card">
		<span>{{ headerTitle }}:</span>
		<h2 ref="cardRef"></h2>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-05 10:18:48
 * @Description: 创建一个card-header组件
 */
// 从下载的组件中导入函数
import { defineComponent, onMounted, ref } from "vue";
import { CountUp } from "countup.js";

// 自定义方法引入

// 自定义组件引入
export default defineComponent({
	name: "card-header",
	inheritAttrs: true,
	props: {
		headerTitle: {
			required: true,
			type: String,
		},
		endVal: {
			type: Number,
			required: true,
		},
		startVal: {
			type: Number,
			required: true,
		},
	},
	setup(props) {
		const cardRef = ref<HTMLElement>();
		onMounted(() => {
			const count = new CountUp(cardRef.value!, props.endVal, { startVal: props.startVal });
			count.start();
		});
		return {
			cardRef,
		};
	},
});
</script>
<style scoped lang="less">
.card {
	background: white;
	display: flex;
	width: 240px;
	margin-bottom: 20px;
	height: 70px;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	h2 {
		color: #2ebf91;
	}
}
</style>
