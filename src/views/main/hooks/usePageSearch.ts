import { ref } from "vue";
import { pageContent } from "@/components/page-content";

export const usePageSearch = function () {
	const pageContentRef = ref<InstanceType<typeof pageContent>>();
	const resetClickHandle = () => {
		pageContentRef.value?.sendPageListData();
	};
	const searchClickHandle = (value: any) => {
		pageContentRef.value?.sendPageListData(value);
	};
	return {
		pageContentRef,
		resetClickHandle,
		searchClickHandle,
	};
};
