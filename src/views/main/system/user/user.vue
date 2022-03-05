<!-- user -->
<template>
	<div class="user">
		<page-search-vue
			:search-form-config="formItems"
			@search-click="searchClickHandle"
			@reset-click="resetClickHandle"
		></page-search-vue>
		<page-content
			:prop-list="propList"
			pageName="user"
			headerTitle="用户列表"
			ref="pageContentRef"
			@newBtnClick="newClickHandle"
			@editBtnClick="editClickHandle"
		></page-content>
		<page-modal :form-items="formModelComputed" ref="pageModalRef" :page-name="'user'"></page-modal>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 19:38:52
 * @Description: 创建一个user组件
 */
// 从下载的组件中导入函数
import { computed, defineComponent, unref } from "vue";

// 自定义方法引入
import { usePageSearch } from "@/views/main/hooks/usePageSearch";

// 自定义组件引入
import type { IFormItem } from "@/bgui/form";
import { pageSearchVue } from "@/components/page-search";
import { pageContent } from "@/components/page-content";
import type { IPropList } from "@/bgui/table";
import pageModal from "@/components/page-modal";
import { usePageModel } from "../../hooks/usePageModal";
import { useVuex } from "@/hooks";

// pageSearch中的数据
const formItems: IFormItem[] = [
	{
		label: "ID",
		placeholder: "请输入ID",
		rules: [],
		type: "input",
		field: "id",
	},
	{
		label: "用户名",
		placeholder: "请输入用户名",
		rules: [],
		type: "input",
		field: "name",
	},
	{
		label: "真实姓名",
		placeholder: "请输入真实姓名",
		rules: [],
		type: "input",
		field: "realname",
	},
	{
		label: "手机号码",
		placeholder: "请输入手机号码",
		rules: [],
		type: "input",
		field: "cellphone",
	},
	{
		label: "用户状态",
		placeholder: "请选择用户状态",
		rules: [],
		type: "select",
		options: [
			{
				value: "1",
				label: "启用",
			},
			{
				value: "0",
				label: "禁用",
			},
		],
		field: "enable",
	},
	{
		label: "创建时间",
		rules: [],
		type: "datapicker",
		otherOptions: {
			startPlaceholder: "开始时间",
			endPlaceholder: "结束时间",
		},
		field: "createAt",
	},
];
// pageContent中的数据
const propList: IPropList[] = [
	{
		prop: "name",
		label: "用户名",
		minWidth: "150",
	},
	{
		prop: "realname",
		label: "真实姓名",
		minWidth: "100",
	},
	{
		prop: "cellphone",
		label: "手机号码",
		minWidth: "120",
	},
	{
		prop: "enable",
		label: "状态",
		minWidth: "100",
		button: true,
	},
	{
		prop: "roleId",
		label: "权限",
		minWidth: "60",
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
const formModel: IFormItem[] = [
	{
		label: "name",
		placeholder: "请输入用户名",
		field: "name",
		type: "input",
	},
	{
		label: "realname",
		placeholder: "请输入真实姓名",
		field: "realname",
		type: "input",
	},
	{
		label: "password",
		placeholder: "请输入密码",
		field: "password",
		type: "password",
		isHidden: false,
	},
	{
		label: "cellphone",
		placeholder: "请输入电话号码",
		field: "cellphone",
		type: "input",
	},
	{
		label: "roleId",
		placeholder: "请选择角色",
		field: "roleId",
		type: "select",
		options: [],
	},
	{
		label: "departmentId",
		placeholder: "请选择部门",
		field: "departmentId",
		type: "select",
		options: [],
	},
];

export default defineComponent({
	name: "user",
	inheritAttrs: true,
	components: {
		pageSearchVue,
		pageContent,
		pageModal,
	},
	setup() {
		const { pageContentRef, searchClickHandle, resetClickHandle } = usePageSearch();
		const newCallback = () => {
			formModel[2].isHidden = false;
		};
		const editCallback = () => {
			formModel[2].isHidden = true;
		};
		const { pageModalRef, newClickHandle, editClickHandle } = usePageModel(
			newCallback,
			editCallback
		);

		const formModelComputed = computed(() => {
			const { entireDepartment, entireRole } = useVuex("state", [
				"entireDepartment",
				"entireRole",
			]) as any;
			formModel[4].options = unref(entireDepartment).map((item: any) => ({
				label: item.name,
				value: item.id,
			}));
			formModel[5].options = unref(entireRole).map((item: any) => ({
				label: item.name,
				value: item.id,
			}));
			return formModel;
		});

		return {
			formItems,
			propList,
			formModelComputed,
			pageModalRef,
			pageContentRef,
			searchClickHandle,
			resetClickHandle,
			newClickHandle,
			editClickHandle,
		};
	},
});
</script>
<style scoped lang="less">
.user {
}
</style>
