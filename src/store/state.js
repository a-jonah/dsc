const state = {
    Categorylists: [],
    CategoryGoodsLists: [],
    SwipeBannerLists: [],
    CategoryImg: '',
    CategoryListsGoods: [],
    GoodsDetail: {},
    Carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    serchLists: localStorage["serchLists"] ? JSON.parse(localStorage["serchLists"]) : [],
    searchData: []
}

export default state