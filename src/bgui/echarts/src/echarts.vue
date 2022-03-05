<template>
	<div class="echarts">
		<div :style="[{ width: width }, { height: heigth }]" ref="echartRef"></div>
	</div>
</template>

<script lang="ts" setup>
/*
 * @Author: bughou
 * @Date: 2022-03-05 11:26:25
 * @Description: 创建一个echarts组件
 */
// 从下载的组件中导入函数
import { ref, withDefaults, defineProps, onMounted, defineExpose, nextTick, watch } from "vue";
import { useEcharts } from "@/hooks";
import type { EChartsOption } from "echarts";

// 定义props
const props = withDefaults(
	defineProps<{
		width?: string;
		heigth?: string;
		option: EChartsOption;
		data?: any;
	}>(),
	{
		width: "100%",
		heigth: "300px",
		data: {},
	}
);
const echartRef = ref<HTMLElement>();
onMounted(() => {
	const { resize, setOption } = useEcharts(echartRef.value!);
	watch(
		() => props.data,
		() => {
			setOption(props.option);
		},
		{ deep: true }
	);
	setOption(props.option);

	window.addEventListener("resize", () => {
		resize();
	});
});
</script>
<style scoped lang="less">
.echarts {
}
</style>
