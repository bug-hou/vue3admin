<template>
	<div class="bar-echart">
		<echarts ref="echartRef" :option="mapOptionData" :data="mapData"></echarts>
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
import { mapOption } from "../config/options";
import { convertData } from "../config/mapData";

const props = defineProps<{
	mapData: any;
}>();
const mapOptionData: any = computed(() => {
	if (mapOption.series) {
		mapOption.series[0].data = convertData(props.mapData) as any;
	}
	return mapOption;
});
</script>
<style scoped lang="less">
.bar-echart {
}
</style>
