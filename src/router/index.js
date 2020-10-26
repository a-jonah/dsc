import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Cart from '../views/Cart/Cart.vue'
import Category from '../views/Category/Category.vue'
import CategoryGoodsList from '../views/Category/CategoryGoodsList.vue'
import Mine from '../views/Mine/Mine.vue'
import Mine0 from '../views/Mine/Mine0.vue'
import Search from '../views/Search/Search.vue'
import Detail from "../views/Detail/Detail.vue"
import SearchList from "../views/Search/SearchList.vue"

// 配置首页子组件
import Index from "../views/Home/children/Index.vue"
import Ele from "../views/Home/children/Ele.vue"
import Clothing from "../views/Home/children/Clothing.vue"
import Box from "../views/Home/children/Box.vue"
import Phone from "../views/Home/children/Phone.vue"
import Componter from "../views/Home/children/Componter.vue"
import Mendale from "../views/Home/children/Mendale.vue"
import Person from "../views/Home/children/Person.vue"



import List from "../components/List.vue"

Vue.use(VueRouter)

const routes = [{
        path: "/list",
        component: List
    },
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
            path: "index",
            component: Index
        }, {
            path: "ele",
            component: Ele
        }, {
            path: "clothing",
            component: Clothing
        }, {
            path: "box",
            component: Box
        }, {
            path: "phone",
            component: Phone
        }, {
            path: "componter",
            component: Componter
        }, {
            path: "mendale",
            component: Mendale
        }, {
            path: "person",
            component: Person
        }, {
            path: "/home",
            redirect: "/home/index"
        }]
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/category/:cid',
        name: 'category',
        component: Category
    },
    {
        path: '/categorygoodslist',
        name: 'categorygoodslist',
        component: CategoryGoodsList
    },
    {
        path: '/mine0',
        component: Mine0
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/searchlist',
        name: 'searchlist',
        component: SearchList
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    }
]

const router = new VueRouter({
    routes
})

export default router