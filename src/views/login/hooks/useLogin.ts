import { ElForm } from "element-plus";
import { ref } from "vue";

export const useLogin = () => {
	const formRef = ref<InstanceType<typeof ElForm>>();
	const loginAction = (cb: () => void) => {
		formRef.value?.validate((valid) => {
			if (valid) {
				cb();
			}
		});
	};
	return {
		formRef,
		loginAction,
	};
};
