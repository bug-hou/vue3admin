import Request from "..";

export function getPageListData(url: string, queryInfo: any) {
	return Request.post(url, queryInfo);
}

export function deletePageData(url: string) {
	return Request.delete(url);
}

export function createPageData(url: string, newData: any) {
	return Request.post(url, newData);
}

export function editPageData(url: string, newData: any) {
	return Request.patch(url, newData);
}
