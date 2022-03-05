<!-- role -->
<template>
	<div class="role">
		<page-search-vue
			:search-form-config="formItems"
			@search-click="searchClickHandle"
			@reset-click="resetClickHandle"
		/>
		<page-content
			:prop-list="propList"
			page-name="role"
			header-title="权限列表"
			ref="pageContentRef"
			@newBtnClick="newClickHandle"
			@editBtnClick="editClickHandle"
		></page-content>
		<page-modal
			:page-name="'role'"
			:form-items="formModals"
			ref="pageModalRef"
			:otherInfo="otherInfo"
		>
			<el-tree
				ref="elTreeRef"
				:data="entireMenu"
				show-checkbox
				node-key="id"
				:props="{ children: 'children', label: 'name' }"
				@check="checkHandle"
			/>
		</page-modal>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 19:39:11
 * @Description: 创建一个role组件
 */
// 从下载的组件中导入函数
import { defineComponent, nextTick, ref } from "vue";

// 自定义方法引入
import { usePageModel } from "../../hooks/usePageModal";
import { usePageSearch } from "../../hooks/usePageSearch";
import { useVuex } from "@/hooks";
import { getMenuLeafKeys } from "@/utils/mapMenu";

// 自定义组件引入
import type { IFormItem } from "@/bgui/form";
import type { IPropList } from "@/bgui/table";

import { pageSearchVue } from "@/components/page-search";
import { pageContent } from "@/components/page-content";
import pageModal from "@/components/page-modal";
import { ElTree } from "element-plus";

// pageSearch中的数据
const formItems: IFormItem[] = [
	{
		label: "角色名称",
		placeholder: "请输入角色名称",
		rules: [],
		type: "input",
		field: "name",
	},
	{
		label: "角色介绍",
		placeholder: "请输入权限介绍",
		rules: [],
		type: "input",
		field: "intro",
	},
	{
		label: "创建时间",
		otherOptions: {
			startPlaceholder: "开始时间",
			endPlaceholder: "结束时间",
		},
		rules: [],
		type: "datapicker",
		field: "data",
	},
];
// pageContent中的数据
const propList: IPropList[] = [
	{
		prop: "name",
		label: "角色名",
		minWidth: "150",
	},
	{
		prop: "intro",
		label: "权限简绍",
		minWidth: "150",
	},
	{
		prop: "createAt",
		label: "创建时间",
		minWidth: "200",
	},
	{
		prop: "updateAt",
		label: "更新时间",
		minWidth: "200",
	},
	{
		prop: "handle",
		label: "操作",
		minWidth: "120",
	},
];
// pageModal中的数据
const formModals: IFormItem[] = [
	{
		label: "角色名称",
		placeholder: "请输入角色名称",
		rules: [],
		type: "input",
		field: "name",
	},
	{
		label: "角色介绍",
		placeholder: "请输入权限介绍",
		rules: [],
		type: "input",
		field: "intro",
	},
];

export default defineComponent({
	name: "role",
	inheritAttrs: true,
	components: {
		pageContent,
		pageSearchVue,
		pageModal,
	},
	setup() {
		const otherInfo = ref({});
		const elTreeRef = ref<InstanceType<typeof ElTree>>();

		const editCb = (row: any) => {
			const keys = getMenuLeafKeys(row.menuList);
			nextTick(() => {
				console.log(elTreeRef.value);
				elTreeRef.value?.setCheckedKeys(keys);
			});
		};

		const { newClickHandle, editClickHandle, pageModalRef } = usePageModel(undefined, editCb);

		const { pageContentRef, searchClickHandle, resetClickHandle } = usePageSearch();

		const { entireMenu } = useVuex("state", ["entireMenu"]) as any;

		const checkHandle = (data1: any, data2: any) => {
			const checkedKeys = data2.checkedKeys;
			const halfCheckedKeys = data2.halfCheckedKeys;
			const menuList = [...checkedKeys, ...halfCheckedKeys];
			otherInfo.value = { menuList };
		};
		return {
			formItems,
			propList,
			formModals,
			pageModalRef,
			elTreeRef,
			pageContentRef,
			entireMenu,
			otherInfo,
			searchClickHandle,
			resetClickHandle,
			newClickHandle,
			editClickHandle,
			checkHandle,
		};
	},
});
</script>
<style scoped lang="less">
.role {
}
</style>
