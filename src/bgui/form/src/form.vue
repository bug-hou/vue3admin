<!-- bgForm -->
<template>
	<div class="bgForm">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<el-form :label-width="labelWidth" class="forms" :style="{ ['--count']: count }">
			<template v-for="(item, index) in formItems" :key="index">
				<el-form-item :label="item.label" :rules="item.rules">
					<template v-if="item.type === 'input'">
						<el-input :placeholder="item.placeholder" v-model="formData[item.field]"></el-input>
					</template>
					<template v-else-if="item.type === 'select'">
						<el-select
							v-model="formData[item.field]"
							:placeholder="item.placeholder"
							style="width: 100%"
						>
							<el-option
								v-for="option in item.options"
								:key="option.label"
								:value="option.value"
								:label="option.label"
							></el-option>
						</el-select>
					</template>
					<template v-else-if="item.type === 'datapicker'">
						<el-date-picker
							v-model="formData[item.field]"
							style="width: 100%"
							type="daterange"
							range-separator="To"
							:startPlaceholder="item.otherOptions?.startPlaceholder"
							:endPlaceholder="item.otherOptions?.endPlaceholder"
						>
						</el-date-picker>
					</template>
					<template v-else>
						<el-input
							type="password"
							:placeholder="item.placeholder"
							v-model="formData[item.field]"
						></el-input>
					</template>
				</el-form-item>
			</template>
		</el-form>
		<div class="footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-01 09:39:52
 * @Description: 创建一个bgForm组件
 */
// 从下载的组件中导入函数
import { defineComponent, PropType, ref, watch } from "vue";

// 自定义方法引入
import { IFormItem } from "../type/type";

// 自定义组件引入
export default defineComponent({
	name: "bgForm",
	inheritAttrs: true,
	emits: ["update:modelValue"],
	props: {
		formItems: {
			type: Array as PropType<IFormItem[]>,
			default: () => [],
		},
		count: {
			type: Number,
			default: 3,
		},
		labelWidth: {
			default: "100px",
			type: String,
		},
		modelValue: {
			required: true,
			type: Object,
		},
	},
	setup(props, { emit }) {
		const formData = ref({ ...props.modelValue });

		const resetHandle = () => {
			for (const key in formData.value) {
				formData.value[key] = "";
			}
		};

		watch(
			formData,
			(newValue) => {
				emit("update:modelValue", newValue);
			},
			{
				deep: true,
			}
		);
		return {
			formData,
			resetHandle,
		};
	},
});
</script>
<style scoped lang="less">
.bgForm {
	background: white;
	padding-top: 20px;
	.forms {
		display: grid;
		grid-template-columns: repeat(var(--count), 30%);
		justify-content: space-evenly;
		align-items: center;
	}
}
@media screen and (max-width: 800px) {
	.bgForm {
		.forms {
			grid-template-columns: repeat(1, 80%);
		}
	}
}
@media screen and (max-width: 1200px) {
	.bgForm {
		.forms {
			grid-template-columns: repeat(2, 40%);
		}
	}
}
</style>
