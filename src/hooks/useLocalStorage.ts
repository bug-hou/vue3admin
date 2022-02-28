export const useLocalStorage = (key: string, value?: any) => {
	if (value) {
		// const saveValueHandle = (newValue: any) => {
		localStorage.setItem(key, JSON.stringify(value));
		// };
		// if (isProxy(value) || isRef(value)) {
		// 	watch(value, saveValueHandle);
		// } else {
		// 	watch(() => value, saveValueHandle);
		// }
	} else {
		return JSON.parse(localStorage.getItem(key) ?? '""');
	}
};

export const useClearStorage = () => {
	window.localStorage.clear();
};
