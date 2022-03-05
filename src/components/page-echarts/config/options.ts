import { EChartsOption } from "echarts";

const barOption: EChartsOption = {
	title: {
		text: "ECharts 入门示例",
		show: false,
	},
	tooltip: {},
	legend: {
		data: ["销量"],
	},
	xAxis: {
		data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
	},
	yAxis: {},
	grid: {
		bottom: 0,
		top: 10,
		left: 0,
		right: 20,
		show: true,
		containLabel: true,
	},
	series: [
		{
			name: "销量",
			type: "bar",
			data: [5, 20, 36, 10, 10, 20],
		},
	],
};
const pieOption: EChartsOption = {
	title: {
		show: false,
	},
	tooltip: {
		trigger: "item",
	},
	legend: {
		orient: "horizontal",
		top: 0,
	},
	grid: {
		bottom: 0,
		top: 0,
		left: 0,
		right: 0,
		show: true,
		containLabel: true,
	},
	series: [
		{
			name: "Access From",
			type: "pie",
			radius: "50%",
			center: ["50%", "60%"],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)",
				},
			},
		},
	],
};

const roseOption: EChartsOption = {
	legend: {
		top: "bottom",
		show: false,
	},
	toolbox: {
		show: false,
		feature: {
			mark: { show: true },
			dataView: { show: true, readOnly: false },
			restore: { show: true },
			saveAsImage: { show: true },
		},
	},
	grid: {
		bottom: 0,
		top: 0,
		left: 0,
		right: 0,
		show: true,
		containLabel: true,
	},
	series: [
		{
			name: "Nightingale Chart",
			type: "pie",
			radius: [10, 100],
			center: ["50%", "50%"],
			roseType: "area",
			itemStyle: {
				borderRadius: 8,
			},
			data: [
				{ value: 40, name: "rose 1" },
				{ value: 38, name: "rose 2" },
				{ value: 32, name: "rose 3" },
				{ value: 30, name: "rose 4" },
				{ value: 28, name: "rose 5" },
				{ value: 26, name: "rose 6" },
				{ value: 22, name: "rose 7" },
				{ value: 18, name: "rose 8" },
			],
		},
	],
};

const lineOption: EChartsOption = {
	xAxis: {
		type: "category",
		boundaryGap: false,
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},
	yAxis: {
		type: "value",
	},
	grid: {
		bottom: 0,
		top: 10,
		left: 0,
		right: 30,
		show: true,
		containLabel: true,
	},
	series: [
		{
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: "line",
			areaStyle: {},
		},
	],
};

const mapOption = {
	tooltip: {
		show: true,
	},
	geo: {
		map: "china",
		show: true,
		// 不能移动
		roam: false,
		zoom: 1.2,
	},
	series: [
		{
			type: "map",
			map: "china",
			geoIndex: 1,
			aspectScale: 0.75, //长宽比
			zoom: 1.2, // 放大1，2被
			showLegendSymbol: true, // 存在legend时显示
			tooltip: {
				formatter: "{b0}",
			},
			label: {
				color: "white",
			},
			roam: false,
			// 地图颜色
			itemStyle: {
				areaColor: "#48C7C0",
				borderColor: "#f0f0f0",
				borderWidth: 1,
			},
			emphasis: {
				label: {
					color: "white",
				},
				itemStyle: {
					areaColor: "#4BBDD6",
				},
			},
			select: {
				label: {
					color: "white",
				},
				itemStyle: {
					areaColor: "#4BBDD6",
				},
			},
			data: [],
		},
		{
			// name: '显示动态点',
			type: "effectScatter",
			coordinateSystem: "geo",
			// 挑选前20个点
			data: "",
			symbolSize: function (val: any) {
				return val[2] / 20;
			},
			showEffectOn: "render",
			rippleEffect: {
				brushType: "stroke",
			},
			emphasis: {
				scale: 1.6,
			},
			label: {
				formatter: "{b}",
				position: "right",
				show: false,
			},
			itemStyle: {
				color: "#f4e925",
				shadowBlur: 10,
				shadowColor: "#333",
			},
			zlevel: 1,
		},
	],
};

export { barOption, pieOption, roseOption, lineOption, mapOption };
