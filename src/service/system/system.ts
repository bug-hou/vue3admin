import Request from "..";

export function getPageListData(url: string, queryInfo: any) {
	return Request.post(url, queryInfo);
}
