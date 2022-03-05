<template>
	<div class="pie-echart">
		<echarts ref="echartRef" :option="options" :data="data"></echarts>
	</div>
</template>

<script lang="ts" setup>
/*
 * @Author: bughou
 * @Date: 2022-03-05 16:08:30
 * @Description: 创建一个pie-echart组件
 */
// 从下载的组件中导入函数
import { ref, defineProps, onMounted, computed, watch } from "vue";
import { echarts } from "@/bgui/echarts";
import { pieOption } from "../config/options";

const props = defineProps<{
	data: any;
}>();

const echartRef = ref<InstanceType<typeof echarts>>();
const options = computed(() => {
	if (pieOption.series) {
		pieOption.series[0].data = props.data;
	}
	return pieOption;
});
</script>
<style scoped lang="less">
.pie-echart {
}
</style>
