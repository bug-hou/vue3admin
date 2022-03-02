import { Day } from "@/hooks";
import { App } from "vue";

export default function (app: App) {
	app.directive("format", {
		mounted(el, { value, arg = "YYYY-MM-DD hh:mm:ss" }) {
			const date = new Day(value);
			el.textContent = date.format(arg);
		},
	});
}
