<!--  -->
<template>
  <div class="header">
    <div class="search-warp">
      <form action="">
        <input type="text" placeholder="搜索商品名称" />
        <router-link to="/search"  tag="i" class="iconfont icon-sousuo"></router-link>
      </form>
      <em class="iconfont icon-xiaoxi"></em>
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
<style lang='less'>
.header {
  height: 4.4rem;
  background: red;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  .search-warp {
    display: flex;
    form {
      width: 85%;
      margin-left: 1rem;
      position: relative;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #ccc;
        border-radius: 1.5rem;
        margin: 0.7rem 0;
        box-sizing: border-box;
        text-indent: 2em;
      }
      i {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 1em;
        text-align: right;
        line-height: 4.4rem;
      }
    }
    em{
        margin-left: 0.6rem;
        color: #fff;
        text-align: center;
        line-height: 4.4rem;
        font-size: 2rem;
    }
  }
}
</style>