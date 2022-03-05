import { ref } from "vue";
import pageModal from "@/components/page-modal";

export function usePageModel(newCb?: () => void, editCb?: (item?: any) => void) {
	const pageModalRef = ref<InstanceType<typeof pageModal>>();
	const newClickHandle = () => {
		pageModalRef.value!.dialogVisible = true;
		newCb && newCb();
		pageModalRef.value?.setFormValue([]);
	};
	const editClickHandle = (row: any) => {
		pageModalRef.value!.dialogVisible = true;
		editCb && editCb(row);
		pageModalRef.value?.setFormValue(row);
	};
	return {
		pageModalRef,
		newClickHandle,
		editClickHandle,
	};
}
