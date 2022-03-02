<!-- page-search -->
<template>
	<div class="page-search">
		<bg-form :form-items="searchFormConfig" v-model="formData" ref="formRef">
			<template #header> <h2>高级检索</h2> </template>
			<template #footer>
				<div class="buttons">
					<el-button type="success" @click="resetHandle">
						<p class="iconfont icon-reset">重置</p>
					</el-button>
					<el-button type="primary" @click="searchHandle">
						<p class="iconfont icon-sousuo">搜索</p>
					</el-button>
				</div>
			</template>
		</bg-form>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-01 15:10:03
 * @Description: 创建一个page-search组件
 */
// 从下载的组件中导入函数
import { defineComponent, PropType, ref } from "vue";

// 自定义方法引入

// 自定义组件引入
import bgForm from "@/bgui/form";
import type { IFormItem } from "@/bgui/form";
export default defineComponent({
	name: "page-search",
	inheritAttrs: true,
	emits: ["searchClick", "resetClick"],
	components: {
		bgForm,
	},
	props: {
		searchFormConfig: {
			type: Array as PropType<IFormItem[]>,
			required: true,
		},
	},
	setup(props, { emit }) {
		// 动态添加绑定ref的属性
		var obj = {};
		props.searchFormConfig.map((item) => item.field).forEach((item) => (obj[item] = ""));

		const formData = ref(obj);

		const formRef = ref<InstanceType<typeof bgForm>>();

		const resetHandle = () => {
			for (const key in formData.value) {
				formData.value[key] = "";
			}
			emit("resetClick");
		};

		const searchHandle = () => {
			emit("searchClick", formData.value);
		};
		return {
			formData,
			formRef,
			resetHandle,
			searchHandle,
		};
	},
});
</script>
<style scoped lang="less">
.page-search {
	h2 {
		font-size: 25px;
		color: #2ebf91;
		text-align: center;
		margin-bottom: 20px;
	}
	.buttons {
		display: flex;
		justify-content: end;
		padding-right: 30px;
		padding-bottom: 10px;
	}
	.iconfont {
		&::before {
			margin-right: 3px;
		}
	}
}
</style>
