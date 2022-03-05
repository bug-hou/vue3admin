<template>
	<div class="bar-echart">
		<echarts ref="echartRef" :option="options" :data="values"></echarts>
	</div>
</template>

<script lang="ts" setup>
/*
 * @Author: bughou
 * @Date: 2022-03-05 16:08:30
 * @Description: 创建一个bar-echart组件
 */
// 从下载的组件中导入函数
import { ref, defineProps, onMounted, computed, watch } from "vue";
import { echarts } from "@/bgui/echarts";
import { barOption } from "../config/options";

const props = defineProps<{
	values: any;
	xLabels: any;
}>();

const echartRef = ref<InstanceType<typeof echarts>>();
const options = computed(() => {
	barOption.xAxis = {
		...barOption.xAxis,
		data: props.xLabels,
	} as any;
	if (barOption.series) {
		barOption.series[0].data = props.values;
	}
	return barOption;
});
</script>
<style scoped lang="less">
.bar-echart {
}
</style>
