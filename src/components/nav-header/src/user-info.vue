<!-- user-info -->
<template>
	<el-dropdown>
		<div class="avator">
			<p class="user">
				<el-avatar
					:size="30"
					shape="square"
					src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
				></el-avatar>
				<span>{{ name }}</span>
			</p>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="exitHandle"> 退出登录 </el-dropdown-item>
				<el-dropdown-item> 用户信息 </el-dropdown-item>
				<el-dropdown-item> 系统管理 </el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts">
/*
 * @Author: bughou
 * @Date: 2022-03-01 08:17:54
 * @Description: 创建一个user-info组件
 */
// 从下载的组件中导入函数
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";

// 自定义方法引入
import { useDeleteStorage } from "@/hooks";
// 自定义组件引入
import { useStore } from "@/store";
export default defineComponent({
	name: "user-info",
	inheritAttrs: true,
	setup() {
		const store = useStore();
		const router = useRouter();
		const name = computed(() => store.state.login.userInfo.name);

		const exitHandle = () => {
			useDeleteStorage("token");
			router.push("/main");
		};

		return {
			name,
			exitHandle,
		};
	},
});
</script>
<style scoped lang="less">
.avator {
	cursor: pointer;
	.user {
		display: flex;
		align-items: center;
		font-size: 16px;
		span {
			margin-left: 5px;
		}
	}
}
</style>
