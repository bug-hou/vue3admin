<!-- nav-menu -->
<template>
	<div class="nav-menu">
		<p class="logo iconfont icon-houtai9">
			<span v-show="!isCollapse">BGadmin</span>
		</p>
		<el-menu
			class="menu scroll"
			default-active="2"
			:collapse="isCollapse"
			@open="handleOpen"
			@close="handleClose"
			:unique-opened="false"
		>
			<template v-for="(item, index) in menus" :key="item.id">
				<template v-if="item.type === 1">
					<el-sub-menu :index="index + 1 + ''">
						<template #title>
							<i class="iconfont" v-icon="item.icon"></i>
							<span>{{ item.name }}</span>
						</template>
						<template v-for="(subItem, ind) in item.children" :key="subItem.id">
							<el-menu-item :index="index + 1 + '' + (ind + 1)">
								<span>{{ subItem.name }}</span>
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
				<template v-else>
					<el-menu-item :index="index + 1 + ''">
						<span>{{ item.name }}</span>
					</el-menu-item>
				</template>
			</template>
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
export default defineComponent({
	name: "nav-menu",
	inheritAttrs: true,
	props: {
		isCollapse: {
			defualt: false,
			type: Boolean,
		},
	},
	directives: {
		icon: {
			mounted(el, { value }) {
				if (typeof value === "string") {
					const icon = "icon-" + value.split("-").pop();
					el.classList.add(icon);
				}
			},
		},
	},
	setup() {
		const store = useStore();
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
		cursor: pointer;
		span {
			margin-left: 15px;
			color: #555;
		}
	}
	.menu {
		background: rgb(211, 220, 230);
		width: 100%;
		border: none;
		.iconfont {
			padding-right: 10px;
			font-size: 18px;
		}
	}
}
</style>
