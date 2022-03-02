<!-- bgTable -->
<template>
	<div class="bgTable">
		<div class="header">
			<slot name="header">
				<h2>{{ title }}</h2>
				<div>
					<slot name="handles"></slot>
				</div>
			</slot>
		</div>
		<el-table :data="dataList" border @selection-change="selectionChangeHandle">
			<el-table-column
				v-if="showSelectColumn"
				type="selection"
				align="center"
				width="50"
			></el-table-column>
			<el-table-column
				v-if="showIndexColumn"
				type="index"
				label="序号"
				align="center"
				width="60"
			></el-table-column>
			<template v-for="item in propList" :key="item.id">
				<el-table-column
					:prop="item.prop"
					:label="item.label"
					:min-width="item.minWidth"
					align="center"
					show-overflow-tooltip
				>
					<template #default="{ row }">
						<slot :name="item.prop" :title="row[item.prop]">
							<span>{{ row[item.prop] }}</span>
						</slot>
					</template>
				</el-table-column>
			</template>
		</el-table>
		<div class="footer">
			<slot name="footer">
				<el-pagination
					v-model:currentPage="currentPage4"
					v-model:page-size="pageSize4"
					:page-sizes="[10, 20, 30]"
					:small="small"
					:disabled="disabled"
					:background="background"
					layout="total, sizes, prev, pager, next, jumper"
					:total="dataCount"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				>
				</el-pagination>
			</slot>
		</div>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-01 19:44:42
 * @Description: 创建一个bgTable组件
 */
// 从下载的组件中导入函数
import { defineComponent, PropType, ref } from "vue";

// 自定义方法引入
import type { IPropList } from "../type/type";

// 自定义组件引入
export default defineComponent({
	name: "bgTable",
	inheritAttrs: true,
	emits: ["selectionChange", "pageCountChange", "currentPageChange"],
	props: {
		propList: {
			required: true,
			type: Array as PropType<IPropList[]>,
		},
		dataList: {
			required: true,
			type: Array,
		},
		showIndexColumn: {
			default: false,
			type: Boolean,
		},
		showSelectColumn: {
			default: false,
			type: Boolean,
		},
		title: {
			default: "",
			type: String,
		},
		dataCount: {
			type: Number,
			required: true,
		},
	},
	setup(_, { emit }) {
		const pageSize4 = ref(10);
		const small = ref(false);
		const background = ref(false);
		const disabled = ref(false);
		const currentPage4 = ref(1);
		const selectionChangeHandle = (value: any) => {
			emit("selectionChange", value);
		};
		const handleSizeChange = (val: number) => {
			emit("pageCountChange", val);
		};
		const handleCurrentChange = (val: number) => {
			emit("currentPageChange", val);
		};
		return {
			pageSize4,
			small,
			background,
			disabled,
			currentPage4,
			selectionChangeHandle,
			handleSizeChange,
			handleCurrentChange,
		};
	},
});
</script>
<style scoped lang="less">
.bgTable {
	.header {
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		height: 40px;
		h2 {
			font-size: 22px;
			line-height: 40px;
		}
	}
	.footer {
		display: flex;
		flex-direction: row-reverse;
		padding-top: 10px;
	}
}
</style>
