<!--  -->
<template>
  <div class="category-left" @mousewheel.prevent="">
    <div class="category-nav">
      <ul>
        <li v-for="list in this.$store.state.Categorylists" :key="list.menu_id">
          <router-link :to="'/category/'+list.category_id" tag="a" >
            {{ list.menu_name }}</router-link>
        </li>
      </ul>
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
  //监听属性 类似于data概念
  computed: {

  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    
  },
  mounted() {
    // this.CategorylistsFn();
    this.$store.dispatch("CategorylistsFn")
   
  },
};
</script>
<style lang="less">
.category-left {
  width: 23%;
  height: 100%;
  background: #efefef;
  overflow-y: scroll;
  .category-nav {
    width: 100%;
    height: auto;

    ul {
      width: 100%;
      li {
        width: 100%;
        height: 3.8rem;
        text-align: center;
        line-height: 3.8rem;
        font-size: 1.4rem;
      }
      .router-link-active {
        display: block;
        background-color: #fff;
        color: red;
      }
    }
  }
}
.category-left::-webkit-scrollbar {
  display: none;
}
</style>