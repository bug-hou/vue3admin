<template>
	<div id="nav">
		<el-button>Default</el-button>
		<el-button type="primary">Primary</el-button>
		<el-button type="success">Success</el-button>
		<el-button type="info">Info</el-button>
		<el-button type="warning">Warning</el-button>
		<el-button type="danger">Danger</el-button>
		<el-button>中文</el-button>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Card name</span>
					<el-button class="button" type="text">Operation button</el-button>
				</div>
			</template>
			<div v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</div>
		</el-card>
	</div>
	<router-view />
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
</script>

<style lang="less" scope>
.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.text {
	font-size: 14px;
}

.item {
	margin-bottom: 18px;
}

.box-card {
	width: 480px;
}
</style>
