<!-- menu -->
<template>
	<div class="menus">
		<page-search-vue :search-form-config="formItems"></page-search-vue>
		<page-content
			:header-title="'菜单列表'"
			page-name="menu"
			:prop-list="propList"
			:show-index-column="false"
			:show-select-column="false"
			:children-props="childrenProps"
			:show-footer="false"
		></page-content>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 19:52:56
 * @Description: 创建一个menu组件
 */
// 从下载的组件中导入函数
import { defineComponent } from "vue";

// 自定义方法引入

// 自定义组件引入
import { pageContent } from "@/components/page-content";
import type { IFormItem } from "@/bgui/form";
import { pageSearchVue } from "@/components/page-search";
import type { IPropList } from "@/bgui/table";

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
		field: "password",
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
		label: "角色名称",
		minWidth: "120",
	},
	{
		prop: "type",
		label: "类型",
		minWidth: "100",
	},
	{
		prop: "url",
		label: "菜单url",
		minWidth: "150",
	},
	{
		prop: "icon",
		label: "菜单icon",
		minWidth: "100",
	},
	{
		prop: "permission",
		label: "权限列表",
		minWidth: "160",
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

// 二级菜单显示
const childrenProps = {
	rowKey: "id",
	treeProp: {
		children: "children",
	},
};

export default defineComponent({
	name: "menus",
	inheritAttrs: true,
	components: {
		pageContent,
		pageSearchVue,
	},
	setup() {
		return {
			propList,
			formItems,
			childrenProps,
		};
	},
});
</script>
<style scoped lang="less">
.menus {
}
</style>
