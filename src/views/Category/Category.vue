<!--  -->
<template>
  <div class="category">
    <CategoryHeader />
    <div class="category-body">
      <CategoryLeft />
      <CategoryContent />
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import CategoryHeader from "./components/CategoryHeader"
import CategoryLeft from "./components/CategoryLeft"
import CategoryContent from "./components/CategoryContent"


export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    CategoryHeader,
    CategoryLeft,
   CategoryContent
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
  .category{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 4.4rem 0 5rem 0;
    box-sizing: border-box;
    .category-body{
      height: 100%;
      width: 100%;
      display: flex;
    }
  }
</style>