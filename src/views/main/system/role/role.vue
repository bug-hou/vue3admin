<!-- role -->
<template>
	<div class="role">
		<page-search-vue :search-form-config="formItems" />
		<page-content :prop-list="propList" page-name="role" header-title="权限列表"></page-content>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 19:39:11
 * @Description: 创建一个role组件
 */
// 从下载的组件中导入函数
import { defineComponent } from "vue";

// 自定义方法引入

// 自定义组件引入
import type { IFormItem } from "@/bgui/form";
import type { IPropList } from "@/bgui/table";

import { pageSearchVue } from "@/components/page-search";
import { pageContent } from "@/components/page-content";

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

export default defineComponent({
	name: "role",
	inheritAttrs: true,
	components: {
		pageContent,
		pageSearchVue,
	},
	setup() {
		return {
			formItems,
			propList,
		};
	},
});
</script>
<style scoped lang="less">
.role {
}
</style>
