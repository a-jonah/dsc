<!--  -->
<template>
<div class='category-header'>
    <header>
        <a href="javascript:;" onClick="window.history.back()">
            <i class="iconfont icon-zuo1"></i>
        </a>
        <div class="cart-title">购物车</div>
        <a href="javascript:;" >
            <i class="iconfont icon-sangedian"></i>
        </a>
    </header>
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
    .category-header{
        height: 4.4rem;
        width: 100%;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #eee;
        header{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            a{
                width: 10%;
                height: 4.4rem;
                display: block;
                line-height: 4.4rem;
                text-align: center;
                i{
                    font-size: 2rem;
                    color: #aaa;
                }

            }
            .cart-title{
                width: 70%;
                height: 4.4rem;
                text-align: center;
                line-height: 4.4rem;
                font-size: 2rem;
            }
        }
    }
</style>