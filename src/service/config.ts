interface IConfig {
	BASE_URL: string;
	TIMEOUT: number;
}

const configInfo: IConfig = {
	BASE_URL: "",
	TIMEOUT: 0,
};

if (process.env.NODE_ENV === "development") {
	configInfo.BASE_URL = "http://152.136.185.210:5000";
	configInfo.TIMEOUT = 5000;
} else if (process.env.NODE_ENV === "production") {
	configInfo.BASE_URL = "http://www.production.com";
	configInfo.TIMEOUT = 5000;
}

export default configInfo;
