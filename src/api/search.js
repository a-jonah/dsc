import ajax from "./ajax"

const Base_URL = "http://39.101.210.136:3000/api/v1/search"

export const searchlist = (params) => ajax(Base_URL, params)