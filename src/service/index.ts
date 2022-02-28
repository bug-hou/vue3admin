import { BgRequest } from "@/hooks";

import configInfo from "./config";
import { useLocalStorage } from "@/hooks/index";

const Request = new BgRequest({
	baseURL: configInfo.BASE_URL,
	timeout: configInfo.TIMEOUT,
	requestInterceptor(config) {
		config.headers!.Authorization = `Bearer ${useLocalStorage("token")}`;
		return config;
	},
});

export default Request;
