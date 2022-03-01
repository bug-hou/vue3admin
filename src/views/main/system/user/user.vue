<!-- user -->
<template>
	<div class="user">
		<page-search-vue :search-form-config="formItems"></page-search-vue>
		<div class="content">
			<bg-table :data-list="userList" :prop-list="propList">
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
			</bg-table>
		</div>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 19:38:52
 * @Description: 创建一个user组件
 */
// 从下载的组件中导入函数
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
// 自定义方法引入
import { useVuex } from "@/hooks";

// 自定义组件引入
import type { IFormItem } from "@/bgui/form";
import { pageSearchVue } from "@/components/page-search";
import { bgTable } from "@/bgui/table";
import type { IPropList } from "@/bgui/table";

const formItems: IFormItem[] = [
	{
		label: "ID",
		placeholder: "请输入ID",
		rules: [],
		type: "input",
		field: "id",
	},
	{
		label: "密码",
		placeholder: "请输入密码",
		rules: [],
		type: "input",
		field: "password",
	},
	{
		label: "用户名",
		placeholder: "请输入用户名",
		rules: [],
		type: "input",
		field: "name",
	},
	{
		label: "喜欢的运动",
		placeholder: "请选择运动",
		rules: [],
		type: "select",
		options: [
			{
				label: "篮球",
				value: "篮球",
			},
			{
				label: "篮球",
				value: "篮球",
			},
		],
		field: "sport",
	},
	{
		label: "创建时间",
		rules: [],
		type: "datapicker",
		otherOptions: {
			startPlaceholder: "开始时间",
			endPlaceholder: "结束时间",
		},
		field: "createTime",
	},
];

export default defineComponent({
	name: "user",
	inheritAttrs: true,
	components: {
		pageSearchVue,
		bgTable,
	},
	setup() {
		const store = useStore();

		store.dispatch("system/getPageList", {
			pageUrl: "/users/list",
			queryInfo: {
				offset: 0,
				size: 10,
			},
		});

		const { userList, userCount } = useVuex("state", ["userList", "userCount"], "system") as any;

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
				minWidth: "100",
			},
			{
				prop: "createAt",
				label: "创建时间",
				minWidth: "250",
			},
			{
				prop: "updateAt",
				label: "更新时间",
				minWidth: "250",
			},
		];
		return {
			formItems,
			// ...stores,
			userList,
			userCount,
			propList,
		};
	},
});
</script>
<style scoped lang="less">
.user {
	.content {
		margin-top: 20px;
		padding: 10px;
		box-sizing: border-box;
		background: white;
	}
}
</style>
