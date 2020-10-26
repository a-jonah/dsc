<!--  -->
<template>
  <div class="search-content">
    <div class="search-wrap">
      <div class="search-title">
        <span>最近搜索</span>
        <i class="iconfont icon-shanchu" @click="dele"></i>
      </div>
      <ul>
        <li v-if="searchLists.length==0">暂无</li>
        <li  v-for="(list, index) in searchLists" :key="index">{{ list }}</li>
      </ul>
     
    </div>
    <div class="search-wrap">
      <div class="search-title">
        <span>热搜</span>
      </div>
      <ul>
        <li>周大福</li>
        <li>内衣</li>
        <li>电脑</li>
        <li>手机</li>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    searchLists() {
      return this.$store.state.serchLists;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      dele(){
          this.$store.state.serchLists=[]
          localStorage.clear("serchs")
      }
  },
};
</script>
<style lang="less">
.search-content {
  margin-top: 4.4rem;
  width: 100%;
  background: #fff;
  padding: 1rem 1rem;
  box-sizing: border-box;
  .search-wrap {
    width: 100%;
    margin-bottom: 2rem;
    .search-title {
      font-size: 1.6rem;
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-top: 1rem;
      color: #666;
      li {
        margin: 0 1rem;
        height: 2.6rem;
        line-height: 2.6rem;
        background: #efefef;
        padding: 0 0.8rem;
        border-radius: 0.4rem;
        margin-bottom: 0.8rem;
      }
    }
  }
}
</style>