<!-- dashboard -->
<template>
	<div class="dashboard">
		<div class="header">
			<card-header :header-title="'商品销售总量'" :start-val="0" :end-val="510173"></card-header>
			<card-header :header-title="'商品总收藏'" :start-val="0" :end-val="87606"></card-header>
			<card-header :header-title="'商品库存量'" :start-val="0" :end-val="867271"></card-header>
			<card-header :header-title="'商品总销售量'" :start-val="0" :end-val="43130820"></card-header>
		</div>
		<div class="content">
			<card-content class="a" :content-title="'商品销售总量'">
				<pie-echart :data="categoryGoodsCount"></pie-echart>
			</card-content>
			<card-content class="b" :content-title="'商品销售总量'">
				<map-echart :mapData="addressGoodsSale" />
			</card-content>
			<card-content class="c" :content-title="'商品销售总量'">
				<rose-echart :data="categoryGoodsCount"></rose-echart>
			</card-content>
			<card-content class="d" :content-title="'商品销售总量'">
				<bar-echart v-bind="categoryGoodsFavor"></bar-echart>
			</card-content>
			<card-content class="e" :content-title="'商品销售总量'">
				<line-echart v-bind="categoryGoodsSale"></line-echart>
			</card-content>
		</div>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 20:00:28
 * @Description: 创建一个dashboard组件
 */
// 从下载的组件中导入函数
import { computed, defineComponent, onMounted, ref } from "vue";

// 自定义方法引入

// 自定义组件引入
import { cardHeader } from "@/components/card-header";
import { cardContent } from "@/components/card-content";
import { useStore } from "@/store";
import { roseEchart, lineEchart, barEchart, pieEchart, mapEchart } from "@/components/page-echarts";

export default defineComponent({
	name: "dashboard",
	inheritAttrs: true,
	components: { cardHeader, cardContent, pieEchart, lineEchart, barEchart, roseEchart, mapEchart },
	setup() {
		const store = useStore();
		// 发送商品类型数据
		const categoryGoodsCount = computed(() =>
			store.state.analysis.categoryGoodsCount.map((item: any) => ({
				name: item.name,
				value: item.goodsCount,
			}))
		);
		const categoryGoodsSale = computed(() => {
			const xLabels: string[] = [];
			const values: any[] = [];
			const categoryGoodsSale = store.state.analysis.categoryGoodsSale;
			for (const item of categoryGoodsSale) {
				xLabels.push(item.name);
				values.push(item.goodsCount);
			}
			xLabels.pop();
			values.pop();
			return {
				xLabels,
				values,
			};
		});
		const categoryGoodsFavor = computed(() => {
			const xLabels: string[] = [];
			const values: any[] = [];
			const categoryGoodsFavor = store.state.analysis.categoryGoodsFavor;
			for (const item of categoryGoodsFavor) {
				xLabels.push(item.name);
				values.push(item.goodsFavor);
			}
			xLabels.pop();
			values.pop();
			return {
				xLabels,
				values,
			};
		});
		const addressGoodsSale = computed(() => {
			return store.state.analysis.addressGoodsSale.map((item: any) => ({
				name: item.address,
				value: item.count,
			}));
		});
		return {
			categoryGoodsCount,
			categoryGoodsSale,
			categoryGoodsFavor,
			addressGoodsSale,
		};
	},
});
</script>
<style scoped lang="less">
.dashboard {
	.header {
		display: flex;
		justify-content: space-around;
		font-size: 18px;
	}
	.content {
		margin-top: 20px;
		display: grid;
		grid-template-areas:
			"a a b b c c"
			"d d d e e e";
		justify-content: space-around;
		grid-template-columns: repeat(6, 16%);
		grid-row-gap: 10px;
		.a {
			grid-area: a;
		}
		.b {
			grid-area: b;
		}
		.c {
			grid-area: c;
		}
		.d {
			grid-area: d;
		}
		.e {
			grid-area: e;
		}
	}
}
@media screen and (max-width: 1000px) {
	.dashboard {
		.header {
			flex-wrap: wrap;
		}
		.content {
			grid-template-areas:
				"a"
				"b"
				"c"
				"d"
				"e";
			grid-template-columns: repeat(1, 90%);
		}
	}
}
</style>
