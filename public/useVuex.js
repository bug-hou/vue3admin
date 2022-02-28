import {
	mapActions,
	mapGetters,
	mapMutations,
	mapState,
	useStore,
	createNamespacedHelpers,
} from "vuex";
import { computed } from "vue";

function dataHandle(fns) {
	const store = useStore();
	var stores = {};
	Object.keys(fns).forEach((key) => {
		stores[key] = computed(fns[key].bind({ $store: store }));
	});
	return stores;
}

export const useVuex = (type, names, modelName) => {
	let fns;
	let stores;
	switch (type) {
		case "state":
			if (typeof modelName === "string") {
				fns = createNamespacedHelpers(modelName).mapState(names);
			} else {
				fns = mapState(names);
			}
			stores = dataHandle(fns);
			break;
		case "getters":
			if (typeof modelName === "string") {
				fns = createNamespacedHelpers(modelName).mapGetters(names);
			} else {
				fns = mapGetters(names);
			}
			stores = dataHandle(fns);
			break;
		case "mutations":
			if (typeof modelName === "string") {
				stores = createNamespacedHelpers(modelName).mapMutations(names);
			} else {
				stores = mapMutations(names);
			}
			break;
		case "actives":
			if (typeof modelName === "string") {
				stores = createNamespacedHelpers(modelName).mapActions(names);
			} else {
				stores = mapActions(names);
			}
			break;
	}
	return stores;
};
