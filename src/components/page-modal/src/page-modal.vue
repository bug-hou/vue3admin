<!-- page-modal -->
<template>
	<div class="page-modal" style="position: fixed; z-index: 100">
		<el-dialog v-model="dialogVisible" title="新建用户" width="30%" center destroy-on-close>
			<bg-form :form-items="formItems" :count="1" v-model="formData"></bg-form>
			<slot></slot>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancelHandle">取消</el-button>
					<el-button type="primary" @click="successHandle">确定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-03 11:22:49
 * @Description: 创建一个page-modal组件
 */
// 从下载的组件中导入函数
import type { IFormItem } from "@/bgui/form";
import { defineComponent, PropType, ref } from "vue";

// 自定义方法引入

// 自定义组件引入
import bgForm from "@/bgui/form";
import { useStore } from "@/store";

export default defineComponent({
	name: "page-modal",
	inheritAttrs: true,
	components: { bgForm },
	props: {
		formItems: {
			type: Array as PropType<IFormItem[]>,
			required: true,
		},
		pageName: {
			required: true,
			type: String,
		},
		otherInfo: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props) {
		const dialogVisible = ref(false);
		const store = useStore();

		const rowData = ref([]);

		// 动态添加绑定ref的属性
		let obj = {};
		props.formItems.map((item) => item.field).forEach((item) => (obj[item] = ""));

		const formData = ref(obj);

		const setFormValue = (row: any) => {
			rowData.value = row;
			for (const key in formData.value) {
				formData.value[key] = row[key] ?? "";
			}
		};

		const cancelHandle = () => {
			dialogVisible.value = false;
		};
		const successHandle = () => {
			if (rowData.value.length === 0) {
				store.dispatch("system/createPageDataAction", {
					pageName: props.pageName,
					queryInfo: { ...formData.value, ...props.otherInfo },
				});
			} else {
				store.dispatch("system/editPageDataAction", {
					pageName: props.pageName,
					queryInfo: {
						...formData.value,
						...props.otherInfo,
					},
					id: rowData.value["id"],
				});
			}
			dialogVisible.value = false;
		};
		return { dialogVisible, formData, setFormValue, cancelHandle, successHandle };
	},
});
</script>
<style scoped lang="less">
.page-modal {
}
</style>
