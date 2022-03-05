import * as echarts from "echarts";
import { EChartsOption } from "echarts";
import chinaMapData from "@/assets/china.json";

echarts.registerMap("china", chinaMapData);

export function useEcharts(el: HTMLElement) {
	const echartInstance = echarts.init(el);
	const setOption = (option: EChartsOption) => {
		echartInstance.setOption(option);
	};
	const resize = () => {
		echartInstance.resize();
	};

	window.addEventListener("resize", resize);
	return {
		setOption,
		resize,
	};
}
