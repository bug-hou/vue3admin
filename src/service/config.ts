interface IConfig {
  BASE_URL: string,
  TIMEOUT: number,
}

let configInfo: IConfig = {
  BASE_URL: "",
  TIMEOUT: 0
}

if (process.env.NODE_ENV === "development") {
  configInfo.BASE_URL = "http://www.development.com";
  configInfo.TIMEOUT = 5000;
} else if (process.env.NODE_ENV === "production") {
  configInfo.BASE_URL = "http://www.production.com";
  configInfo.TIMEOUT = 5000;
}

export default configInfo;
