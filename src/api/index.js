import ajax from "./ajax"

const Base_URL = "http://localhost:3000/api"

export const SwipeBanner = () => ajax(Base_URL + "/v1/index/swipe")

export const Categorylists = () => ajax(Base_URL + "/v1/category")

export const CategoryGoods = (id) => ajax(Base_URL + "/v1/category/categorylist/" + id)