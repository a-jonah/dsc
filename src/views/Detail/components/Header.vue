<!--  -->
<template>
<div class='detail-header'>
    <header>
        <div class="go-back" onclick="window.history.back()">
           <i class="iconfont icon-zuo1"></i>
        </div>
        <ul>
            <li class="active">商品</li>
            <li>详情</li>
            <li>评论</li>
        </ul>
        <div class="share">
            <i class="iconfont icon-share_alt"></i>
        </div>
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
    .detail-header{
        height: 40rem;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        header{
            height: 4rem;
            width: 100%;
            display: flex;
            text-align: center;
            .go-back{
                width: 20%;
                text-align: center;
                line-height: 4rem;
                i{
                    font-size: 2rem;
                }
            }
            ul{
                width: 60%;
                display: flex;
                li{
                    width: 33.333%;
                    line-height: 4rem;
                    font-size: 1.4rem;
                    
                }
                .active{
                    color:red;
                    border-bottom: 0.2rem solid red;
                }
            }
            .share{
                width: 20%;
                line-height: 4rem;
                text-align: center;
            }
        }
    }
</style>