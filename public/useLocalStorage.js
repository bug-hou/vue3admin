import { watch, isRef, isProxy } from "vue";

export const useLocalStorage = (key, value) => {
	if (value) {
		const saveValueHandle = (newValue) => {
			localStorage.setItem(JSON.stringify(key), JSON.stringify(newValue));
		};
		if (isProxy(value) || isRef(value)) {
			watch(value, saveValueHandle);
		} else {
			watch(() => value, saveValueHandle);
		}
	} else {
		return localStorage.getItem(JSON.stringify(key));
	}
};
