const mutations = {
    CategorylistsFn(state, data) {
        state.Categorylists = data
    },

    CategoryGoodsFn(state, data) {
        state.CategoryGoodsLists = data
    },
    SwipeBannerFn(state, data) {
        state.SwipeBannerLists = data
    },
    CategoryListsGoodsFn(state, data) {
        state.CategoryListsGoods = data
    },
    GoodsDetailFn(state, data) {
        state.GoodsDetail = data
    },
    CartsFn(state, data) {

        if (data) {

            state.Carts.push(data)
        }
        localStorage["carts"] = JSON.stringify(state.Carts)
    },
    AddCart(state, data) {
        state.Carts[data].value++
            localStorage["carts"] = JSON.stringify(state.Carts)
    },
    LessenCart(state, data) {
        state.Carts[data].value--
            if (state.Carts[data].value <= 1) {
                state.Carts[data].value = 1
            }
        localStorage["carts"] = JSON.stringify(state.Carts)
    },
    DeleCart(state, data) {
        state.Carts.splice(data, 1)
        localStorage["carts"] = JSON.stringify(state.Carts)
    },
    InputCart(state, data) {
        if (state.Carts[data].value <= 0) {
            state.Carts[data].value = 1
        } else {
            let num = state.Carts[data].value + ''
            if (num.indexOf("0") == 0) {
                num = num.substr(1)
            }
            state.Carts[data].value = num
        }
        localStorage["carts"] = JSON.stringify(state.Carts)
    },
    selectFn(state, data) {
        state.Carts[data].isSelect = !state.Carts[data].isSelect
        localStorage["carts"] = JSON.stringify(state.Carts)
    },
    selectAllFn(state, data) {
        state.Carts.forEach((item) => {
            item.isSelect = !data
        })
        localStorage["carts"] = JSON.stringify(state.Carts)
    },
    searchFn(state, data) {
        state.serchLists.push(data)
        localStorage["serchLists"] = JSON.stringify(state.serchLists)
    },
    searchData(state, data) {
        state.searchData = data
    },
}

export default mutations