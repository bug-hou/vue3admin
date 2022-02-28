<!-- nav-menu -->
<template>
	<div class="nav-menu">
		<p class="logo iconfont icon-houtai9">
			<span>BGadmin</span>
		</p>
		<el-menu
			class="menu"
			default-active="2"
			:collapse="isCollapse"
			@open="handleOpen"
			@close="handleClose"
		>
			<el-sub-menu index="1">
				<template #title>
					<el-icon><location /></el-icon>
					<span>Navigator One</span>
				</template>
				<el-menu-item-group title="Group One">
					<el-menu-item index="1-1">item one</el-menu-item>
					<el-menu-item index="1-2">item one</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Group Two">
					<el-menu-item index="1-3">item three</el-menu-item>
				</el-menu-item-group>
				<el-sub-menu index="1-4">
					<template #title>item four</template>
					<el-menu-item index="1-4-1">item one</el-menu-item>
				</el-sub-menu>
			</el-sub-menu>
		</el-menu>
	</div>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-02-28 14:28:57
 * @Description: 创建一个nav-menu组件
 */
// 从下载的组件中导入函数
import { defineComponent, ref, computed } from "vue";

// 自定义方法引入
import { useStore } from "@/store";

// 自定义组件引入
import { Location } from "@element-plus/icons-vue";
export default defineComponent({
	name: "nav-menu",
	inheritAttrs: true,
	components: {
		Location,
	},
	setup() {
		const store = useStore();
		const isCollapse = ref(false);
		const handleOpen = (key: string, keyPath: string[]) => {
			console.log(key, keyPath);
		};
		const handleClose = (key: string, keyPath: string[]) => {
			console.log(key, keyPath);
		};

		const menus = computed(() => {
			return store.state.login.menus;
		});
		return {
			isCollapse,
			menus,
			handleOpen,
			handleClose,
		};
	},
});
</script>
<style scoped lang="less">
.nav-menu {
	.logo {
		width: 100%;
		text-align: center;
		font-size: 20px;
		height: 30px;
		line-height: 30px;
		color: #2ebf91;
		span {
			margin-left: 15px;
			color: #555;
		}
	}
	.menu {
		background: rgb(211, 220, 230);
	}
}
</style>
