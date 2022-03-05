<!-- page-content -->
<template>
	<div class="content">
		<bg-table
			:data-list="dataList"
			:prop-list="propList"
			:show-index-column="showIndexColumn"
			:show-select-column="showSelectColumn"
			:title="headerTitle"
			:data-count="dataCount"
			@page-count-change="pageCountChangeHandle"
			@current-page-change="currentPageChangeHandle"
			v-bind="childrenProps"
			:show-footer="showFooter"
		>
			<template #handles>
				<el-button type="primary" v-if="isCreate" @click="creatClickHandle">创建</el-button>
				<el-button type="primary" v-if="isDelete">删除</el-button>
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
			<template #handle="{ row }">
				<p style="display: flex; justify-content: center">
					<el-button type="primary" size="small" plain v-if="isUpdate" @click="editClickHandle(row)"
						>编辑</el-button
					>
					<el-button type="warning" size="small" v-if="isDelete" @click="deleteHandle(row)"
						>删除</el-button
					>
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
import { usePermission } from "@/views/main/hooks/usePermission";

// 自定义组件引入
import type { IPropList } from "@/bgui/table";
import { bgTable } from "@/bgui/table";

export default defineComponent({
	name: "page-content",
	inheritAttrs: true,
	components: {
		bgTable,
	},
	emits: ["newBtnClick", "editBtnClick"],
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
		showIndexColumn: {
			type: Boolean,
			default: true,
		},
		showSelectColumn: {
			type: Boolean,
			default: true,
		},
		childrenProps: {
			type: Object,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
	},
	setup(props, { emit }) {
		const store = useStore();
		// 权限获取
		const isCreate = usePermission(props.pageName, "create");
		const isUpdate = usePermission(props.pageName, "update");
		const isDelete = usePermission(props.pageName, "delete");
		const isQuery = usePermission(props.pageName, "query");

		const pageInfo = reactive({
			currentPage: 1,
			pageCount: 10,
		});

		const defaultSlots = ["enable", "createAt", "updateAt", "handle"];
		const showSlots: IPropList[] = props.propList.filter(
			(item) => !defaultSlots.includes(item.prop)
		);

		const sendPageListData = (query?: any) => {
			if (!isQuery) return;
			store.dispatch("system/getPageList", {
				pageName: props.pageName,
				queryInfo: {
					offset: (pageInfo.currentPage - 1) * 10,
					size: pageInfo.pageCount,
					...query,
				},
			});
		};

		sendPageListData();

		const { dataList, dataCount = 4 } = useVuex(
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

		// 删除操作
		const deleteHandle = (row: any) => {
			store.dispatch("system/deletePageData", {
				id: row.id,
				pageName: props.pageName,
				queryInfo: {
					offset: (pageInfo.currentPage - 1) * 10,
					size: pageInfo.pageCount,
				},
			});
		};

		// 新增操作
		const creatClickHandle = () => {
			emit("newBtnClick");
		};

		// 编辑操作
		const editClickHandle = (row: any) => {
			emit("editBtnClick", row);
		};

		return {
			dataList,
			dataCount,
			showSlots,
			isCreate,
			isUpdate,
			isDelete,
			sendPageListData,
			pageCountChangeHandle,
			currentPageChangeHandle,
			deleteHandle,
			creatClickHandle,
			editClickHandle,
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
