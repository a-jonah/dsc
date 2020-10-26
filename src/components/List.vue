<!--  -->
<template>
<div class='list'>
    <ul v-if="ListData.length!=0">
        <li v-for="list in ListData" :key="list.goods_id">
           <router-link class="list-wrap" tag="div" :to="'/detail?goods_id='+list.goods_id">
                <img :src="'http://192.168.0.160:3000/'+list.goods_img" alt="">
           <div class="list-content">
                <h3>{{list.goods_name}}</h3>
                <p>￥{{list.shop_price}}</p>
           </div>
           </router-link>
        </li>
       
    </ul>
    <div v-else class="content-blank">
        <i class="iconfont icon-kongkongruye"></i>
        <p>这里空空如也</p>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
props:{
    ListData:Array
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
    .list{
        width: 100%;
         background: #efefef;
        .content-blank{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 5rem;
            i{
                font-size: 16rem;
            }
            p{
                margin-top: 3rem;
                font-size: 2rem;
            }
        }
        ul{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 0 0.6rem;
            box-sizing: border-box;
            li{
                width: 50%;
                padding: 0.6rem 0.3rem 0 0;
                box-sizing: border-box;
                &:nth-child(2n){
                    padding: 0.6rem  0 0 0.3rem;
                }
                .list-wrap{
                    width: 100%;
                    background: #fff;
                    img{
                        width: 100%;
                        
                    }
                    .list-content{
                        width: 100%;                        
                        padding: 1rem 0.6rem;
                        box-sizing: border-box;
                        h3{
                        width: 100%;
                        height: 4rem;
                        line-height: 2rem;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        font-size: 1.4rem;
                        font-weight: 400;
                        color: #333;
                    }
                    p{
                        font-size: 1.4rem;
                        color: red;
                        margin-top: 0.6rem;
                    }
                    }
                }
            }
        }
    }
</style>