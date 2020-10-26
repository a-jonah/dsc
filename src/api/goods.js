import ajax from "./ajax"

const Base_URL = "http://localhost:3000/api"

export const GoodsDetail = (params) => ajax(Base_URL + "/v1/category/goodsdetail", params)