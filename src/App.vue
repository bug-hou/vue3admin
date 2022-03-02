<template>
	<el-config-provider :locale="zhCn">
		<div class="app scroll">
			<router-view />
		</div>
	</el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import {} from "vue";
</script>

<style lang="less" scope>
.app {
	width: 100%;
	height: 100%;
	overflow: auto;
}
</style>
