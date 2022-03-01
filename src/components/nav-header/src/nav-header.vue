<!-- nav-header -->
<template>
	<div class="nav-header">
		<p :class="['iconfont', showIcon]" @click="changeIconHandle"></p>
		<el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
			<template v-for="item in $route.meta.breadcrumb as any" :key="item.name"
				><el-breadcrumb-item :to="{ path: item?.path }">{{
					item.name
				}}</el-breadcrumb-item></template
			>
		</el-breadcrumb>
		<div class="notify">
			<user-info-vue></user-info-vue>
		</div>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 15:52:21
 * @Description: 创建一个nav-header组件
 */
type IIcon = "icon-zhankai" | "icon-zhankai-copy";
// 从下载的组件中导入函数
import { defineComponent, PropType, reactive, ref } from "vue";

// 自定义方法引入
import { IBreadcrumb } from "../type/type";

// 自定义组件引入
import userInfoVue from "./user-info.vue";
import { ArrowRight } from "@element-plus/icons-vue";
export default defineComponent({
	name: "nav-header",
	inheritAttrs: true,
	emits: ["collapse"],
	components: {
		userInfoVue,
	},
	setup(_, { emit }) {
		const showIcon = ref<IIcon>("icon-zhankai");
		const changeIconHandle = () => {
			if (showIcon.value === "icon-zhankai") {
				showIcon.value = "icon-zhankai-copy";
				emit("collapse", true);
			} else {
				showIcon.value = "icon-zhankai";
				emit("collapse", false);
			}
		};
		return { ArrowRight, showIcon, changeIconHandle };
	},
});
</script>
<style scoped lang="less">
.nav-header {
	height: 100%;
	display: flex;
	align-items: center;
	position: relative;
	p.iconfont {
		font-size: 20px;
		margin-right: 20px;
	}
	.notify {
		position: absolute;
		right: 10px;
	}
}
</style>
