import { SwipeBanner, Categorylists, CategoryGoods } from "@/api/index"
import { CategoryListsGoods } from "@/api/list"
import { GoodsDetail } from "@/api/goods"
import { searchlist } from "@/api/search"
import state from "./state"

const actions = {
    async SwipeBannerFn(context) {
        let result = await SwipeBanner()
        context.commit("SwipeBannerFn", result.data.data)
    },
    async CategorylistsFn(context) {
        let result = await Categorylists()
        context.commit("CategorylistsFn", result.data.data)
    },
    async CategoryGoodsFn(context, id) {
        let result = await CategoryGoods(id)
        if (result.status == 200) {
            context.commit("CategoryGoodsFn", result.data.data)
            let arr = state.Categorylists.filter(function(item) {
                return item.category_id == id
            })
            if (arr.length) {
                state.CategoryImg = arr[0].menu_img
            }
        }
    },
    async CategoryListsGoodsFn(context, params) {
        let result = await CategoryListsGoods(params)
        context.commit("CategoryListsGoodsFn", result.data.data)
    },
    async GoodsDetailFn(context, params) {
        let result = await GoodsDetail(params)

        context.commit("GoodsDetailFn", result.data.data[0])
    },
    async searchDataFn(context, params) {
        let result = await searchlist(params)

        context.commit("searchData", result.data.data)
    },
}

export default actions