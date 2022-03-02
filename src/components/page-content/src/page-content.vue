<!-- page-content -->
<template>
	<div class="content">
		<bg-table
			:data-list="dataList"
			:prop-list="propList"
			:show-index-column="true"
			:show-select-column="true"
			:title="headerTitle"
			:data-count="dataCount"
			@page-count-change="pageCountChangeHandle"
			@current-page-change="currentPageChangeHandle"
		>
			<template #handles>
				<el-button type="primary">创建</el-button>
				<el-button type="primary">删除</el-button>
				<el-button type="primary">导出</el-button>
			</template>
			<template #enable="{ title }">
				<el-button :type="title == 1 ? 'success' : 'danger'">
					{{ title == 1 ? "启用" : "禁用" }}
				</el-button>
			</template>
			<template #createAt="{ title }">
				<span v-format="title"></span>
			</template>
			<template #updateAt="{ title }">
				<span v-format="title"></span>
			</template>
			<template #handle>
				<p style="display: flex; justify-content: center">
					<el-button type="primary" size="small" plain>编辑</el-button>
					<el-button type="warning" size="small">删除</el-button>
				</p>
			</template>
			<template v-for="item in showSlots" :key="item.prop" #[item.prop]="{ title }">
				<slot :name="item.prop" :title="title"></slot>
			</template>
		</bg-table>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-02 10:17:48
 * @Description: 创建一个page-content组件
 */
// 从下载的组件中导入函数
import { defineComponent, PropType, reactive } from "vue";

// 自定义方法引入
import { useStore } from "@/store";
import { useVuex } from "@/hooks";

// 自定义组件引入
import type { IPropList } from "@/bgui/table";
import { bgTable } from "@/bgui/table";

export default defineComponent({
	name: "page-content",
	inheritAttrs: true,
	components: {
		bgTable,
	},
	props: {
		propList: {
			type: Array as PropType<IPropList[]>,
			required: true,
		},
		pageName: {
			type: String,
			required: true,
		},
		headerTitle: {
			type: String,
			default: "",
		},
	},
	setup(props) {
		const store = useStore();
		const pageInfo = reactive({
			currentPage: 0,
			pageCount: 10,
		});

		const defaultSlots = ["enable", "createAt", "updateAt", "handle"];
		const showSlots: IPropList[] = props.propList.filter(
			(item) => !defaultSlots.includes(item.prop)
		);

		const sendPageListData = (query?: any) => {
			store.dispatch("system/getPageList", {
				pageName: props.pageName,
				queryInfo: {
					offset: pageInfo.currentPage,
					size: pageInfo.pageCount,
					...query,
				},
			});
		};

		sendPageListData();

		const { dataList, dataCount } = useVuex(
			"state",
			{ dataList: `${props.pageName}List`, dataCount: `${props.pageName}Count` },
			"system"
		) as any;

		const pageCountChangeHandle = (val: number) => {
			pageInfo.pageCount = val;
			sendPageListData();
		};

		const currentPageChangeHandle = (val: number) => {
			pageInfo.currentPage = val;
			sendPageListData();
		};

		return {
			dataList,
			dataCount,
			showSlots,
			sendPageListData,
			pageCountChangeHandle,
			currentPageChangeHandle,
		};
	},
});
</script>
<style scoped lang="less">
.content {
	margin-top: 20px;
	padding: 10px;
	box-sizing: border-box;
	background: white;
}
</style>
