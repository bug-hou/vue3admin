import Request from "../index";
enum AnalysisApi {
	categoryGoodsCount = "/goods/category/count",
	categoryGoodsSale = "/goods/category/sale",
	categoryGoodsFavor = "/goods/category/favor",
	addressGoodsSale = "/goods/address/sale",
}

export function getCategoryGoodsCount() {
	return Request.get(AnalysisApi.categoryGoodsCount);
}

export function getCategoryGoodsSale() {
	return Request.get(AnalysisApi.categoryGoodsSale);
}
export function getCategoryGoodsFavor() {
	return Request.get(AnalysisApi.categoryGoodsFavor);
}
export function getAddressGoodsSale() {
	return Request.get(AnalysisApi.addressGoodsSale);
}
