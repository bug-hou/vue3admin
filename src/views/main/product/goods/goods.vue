<!-- goods -->
<template>
	<div class="goods">
		<page-search-vue :search-form-config="formItems"></page-search-vue>
		<page-content header-title="商品列表" :page-name="'goods'" :prop-list="propList">
			<template #imgUrl="{ title }">
				<el-image
					:src="title"
					style="width: 60px; height: 60px"
					:preview-src-list="[title]"
					preview-teleported
					hide-on-click-modal
				></el-image>
			</template>
			<template #oldPrice="{ title }">
				<p>￥{{ title }}</p>
			</template>
			<template #newPrice="{ title }">
				<p>￥{{ title }}</p>
			</template>
		</page-content>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 20:01:26
 * @Description: 创建一个goods组件
 */
// 从下载的组件中导入函数
import { defineComponent } from "vue";

// 自定义方法引入

// 自定义组件引入
import { pageSearchVue } from "@/components/page-search";
import type { IFormItem } from "@/bgui/form";
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
		label: "商品名称",
		minWidth: "100",
	},
	{
		prop: "oldPrice",
		label: "原价格",
		minWidth: "70",
	},
	{
		prop: "newPrice",
		label: "现价格",
		minWidth: "70",
	},
	{
		prop: "imgUrl",
		label: "商品图片",
		minWidth: "100",
	},
	{
		prop: "enable",
		label: "状态",
		minWidth: "100",
		button: true,
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
	name: "goods",
	inheritAttrs: true,
	components: { pageSearchVue, pageContent },
	setup() {
		return {
			formItems,
			propList,
		};
	},
});
</script>
<style scoped lang="less">
.goods {
}
</style>
