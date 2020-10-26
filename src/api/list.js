import ajax from "./ajax"

const Base_URL = "http://localhost:3000/api"

export const CategoryListsGoods = (params) => ajax(Base_URL + "/v1/category/goodslist/", params)