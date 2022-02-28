import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface IBgRequestInterceptor extends AxiosRequestConfig {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
	requestInterceptorCatch?: (err: any) => any;
	responseInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
	responseInterceptorCatch?: (err: any) => any;
}
type IKey = string | number;
interface IData {
	[key: string]: any;
}

class BgRequest {
	instance: AxiosInstance;
	constructor(config?: IBgRequestInterceptor) {
		this.instance = axios.create(config);
		this.instance.interceptors.request.use(
			config?.requestInterceptor,
			config?.requestInterceptorCatch
		);
		this.instance.interceptors.response.use(
			config?.requestInterceptor,
			config?.requestInterceptorCatch
		);
	}
	async request(config: IBgRequestInterceptor) {
		if (config.requestInterceptor) {
			config = config.requestInterceptor(config);
		}
		const res = await this.instance.request(config);
		if (config.responseInterceptor) {
			return config.responseInterceptor(res);
		} else {
			return res;
		}
	}
	options(url: string, config?: IBgRequestInterceptor) {
		return this.request(
			Object.assign(config ?? {}, {
				method: "OPTIONS",
				url,
			})
		);
	}
	head(url: string, config?: IBgRequestInterceptor) {
		return this.request(
			Object.assign(config ?? {}, {
				method: "HEAD",
				url,
			})
		);
	}
	delete(url: string, config?: IBgRequestInterceptor) {
		return this.request(
			Object.assign(config ?? {}, {
				method: "DELETE",
				url,
			})
		);
	}
	get(url: string, config?: IBgRequestInterceptor) {
		return this.request(
			Object.assign(config ?? {}, {
				method: "GET",
				url,
			})
		);
	}
	post(url: string, data?: IData, config?: IBgRequestInterceptor) {
		return this.request(
			Object.assign(config ?? {}, {
				method: "POST",
				url,
				data: data ?? {},
			})
		);
	}
	put(url: string, data?: IData, config?: IBgRequestInterceptor) {
		return this.request(
			Object.assign(config ?? {}, {
				method: "PUT",
				url,
				data: data ?? {},
			})
		);
	}
	patch(url: string, data?: IData, config?: IBgRequestInterceptor) {
		return this.request(
			Object.assign(config ?? {}, {
				method: "PATCH",
				url,
				data: data ?? {},
			})
		);
	}
}

// ["GET", "OPTIONS", "HEAD", "DELETE"].forEach((item) => {
//   BgRequest.prototype[item.toLowerCase()] = (url: string, config?: IBgRequestInterceptor) => {
//     return BgRequest.prototype.request(Object.assign(config ?? {}, { method: item, url }));
//   };
// });

// ["POST", "PUT", "PATCH"].forEach((item) => {
//   BgRequest.prototype[item.toLowerCase()] = (
//     url: string,
//     data?: IData,
//     config?: IBgRequestInterceptor
//   ) => {
//     return BgRequest.prototype.request(
//       Object.assign(config ?? {}, { method: item, url, data: data ?? {} })
//     );
//   };
// });
export default BgRequest;
