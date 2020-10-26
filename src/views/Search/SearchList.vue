<!--  -->
<template>
  <div class="search">
    <div class="search-header">
      <header>
        <a href="javascript:;" onClick="window.history.back()">
          <i class="iconfont icon-zuo1"></i>
        </a>
        <form action="">
          <router-link
            to="/search"
            tag="input"
            :value="searchName"
            type="search"
            placeholder="请输入商品名"
          ></router-link>
          <i class="iconfont icon-sousuo"></i>
        </form>
        <button>搜索</button>
      </header>
    </div>
    <div style="height:5rem"></div>
    <SearchList :ListData="ListData" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SearchList from "@/components/List.vue"

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
      SearchList
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
      ListData(){
          return this.$store.state.searchData
      },
      searchName(){
          let list=this.$store.state.serchLists
            
          return list[list.length-1]
      }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style lang="less">
.search-header {
  height: 4.4rem;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #eee;
  header {
    height: 100%;
    width: 100%;
    display: flex;
    form {
      width: 75%;
      height: 100%;
      position: relative;
      input {
        width: 100%;
        height: 3rem;
        border-radius: 1.5rem;
        text-indent: 2em;
        line-height: 3rem;
        border: 1px solid #eee;
        margin-top: 0.7rem;
      }
      i {
        position: absolute;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
      }
    }
    a {
      width: 10%;
      height: 4.4rem;
      display: block;
      line-height: 4.4rem;
      text-align: center;
      i {
        font-size: 2rem;
        color: #aaa;
      }
    }
    button {
      width: 15%;
      background: #fff;
      text-align: center;
      font-size: 1.4rem;
    }
  }
}
</style>