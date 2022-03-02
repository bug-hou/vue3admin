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
		></page-content>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 19:38:52
 * @Description: 创建一个user组件
 */
// 从下载的组件中导入函数
import { defineComponent, isProxy, ref, watch } from "vue";

// 自定义方法引入
import { usePageSearch } from "@/views/main/hooks/usePageSearch";

// 自定义组件引入
import type { IFormItem } from "@/bgui/form";
import { pageSearchVue } from "@/components/page-search";
import { pageContent } from "@/components/page-content";
import type { IPropList } from "@/bgui/table";

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

export default defineComponent({
	name: "user",
	inheritAttrs: true,
	components: {
		pageSearchVue,
		pageContent,
	},
	setup() {
		const { pageContentRef, searchClickHandle, resetClickHandle } = usePageSearch();
		return {
			formItems,
			propList,
			pageContentRef,
			searchClickHandle,
			resetClickHandle,
		};
	},
});
</script>
<style scoped lang="less">
.user {
}
</style>
