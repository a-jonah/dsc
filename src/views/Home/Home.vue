<!--  -->
<template>
  <div class="home">
    <Header />
    <div class="nav-list">
      <ly-tab v-model="selectedId" :items="items" :options="options" @change="routerFn"> </ly-tab>
      <div class="home-category">
        <i class="iconfont icon-leimupinleifenleileibie1"></i>
        <span>分类</span>
      </div>
    </div>
    <div style="height: 8.8rem"></div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import Header from "./components/Header";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Header,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器" },
        { label: "男装女装" },
        { label: "鞋靴箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家居家纺" },
        { label: "个人美妆" },
      ],
      options: {
        activeColor: "#fff",
      },
      routerChild:["/home/index","/home/ele","/home/clothing","/home/box","/home/phone","/home/componter","/home/mendale","/home/person"]
    };
  },
 
  methods: {
    routerFn(item,index){
      this.$router.push(this.routerChild[index])
    }
  },
  
};
</script>
<style lang="less">
.home{
  background: rgba(0,0,0,.1);
  .header,.footer{
    z-index: 999;
  }
}
.nav-list {
  z-index: 999;
  position: fixed;
  width: 100%;
  left: 0;
  top: 4.4rem;
  height: 4.4rem;
  background: red;
  display: flex;
  border-top: 1px solid #ccc;
  .ly-tab {
    width: 85%;

    .ly-tabbar {
      background: red;
      border: 0;
      box-shadow: 0 0px 0px 0px #fff;
      .ly-tab-list{
        padding: 1.2rem 1rem;
      }
      a {
        color: #fff;
        font-size: 1.4rem;
      }
    }
  }
  .home-category {
    width: 15%;
    text-align: center;
    line-height: 4.4rem;
    color: #fff;
    i{ 
        font-size: 1.6rem;
        padding-left:0.5rem ;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
    }
    span {
      font-size: 1.4rem;
    }
  }
}
</style>