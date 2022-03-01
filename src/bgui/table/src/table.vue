<!-- bgTable -->
<template>
	<el-table :data="dataList" border>
		<template v-for="item in propList" :key="item.id">
			<el-table-column
				:prop="item.prop"
				:label="item.label"
				:min-width="item.minWidth"
				align="center"
			>
				<template #default="{ row }">
					<slot :name="item.prop" :title="row[item.prop]">
						<span>{{ row[item.prop] }}</span>
					</slot>
				</template>
			</el-table-column>
		</template>
	</el-table>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-01 19:44:42
 * @Description: 创建一个bgTable组件
 */
// 从下载的组件中导入函数
import { defineComponent, PropType } from "vue";

// 自定义方法引入
import type { IPropList } from "../type/type";

// 自定义组件引入
export default defineComponent({
	name: "bgTable",
	inheritAttrs: true,
	props: {
		propList: {
			required: true,
			type: Array as PropType<IPropList[]>,
		},
		dataList: {
			required: true,
			type: Array,
		},
	},
	setup() {
		return {};
	},
});
</script>
<style scoped lang="less">
.bgTable {
}
</style>
