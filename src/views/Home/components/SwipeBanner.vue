<!--  -->
<template>
<div class='banner'>

      <mt-swipe :auto="4000" style="touch-action:none">
        <mt-swipe-item v-for="list in SwipeBannerLists" :key="list.swipe_id">
            <img :src="list.swipe_img" alt="">
        </mt-swipe-item>
      </mt-swipe>

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
computed:{
    SwipeBannerLists(){
        return this.$store.state.SwipeBannerLists
    }
},
mounted(){
    this.$store.dispatch('SwipeBannerFn')

}

}
</script>
<style lang="less">
    .banner{
        width: 100%;
        height: 12rem;
        border-radius: 1rem;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
          
        }
    }
</style>