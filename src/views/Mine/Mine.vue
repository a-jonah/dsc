<!--  -->
<template>
  <div class="mine">
    <div v-if="!userInfo.user_id">
      <Login />
    </div>
    <div v-else class="user-info">
      <div class="user-title">
        <div class="user-logo">
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2073454431,3122178464&fm=26&gp=0.jpg"
            alt=""
          />
        </div>
        <h2>嗨，<span>{{ userInfo.user_name }}</span> ,欢迎您的登录</h2>
        <div class="mine-love">
            <div>
                <i class="iconfont icon-shoucang"></i>
                <span>关注</span>
            </div>
            <div>
                <i class="iconfont icon-shoucang2"></i>
                <span>收藏</span>
            </div>
            <div>
                <i class="iconfont icon-zuji"></i>
                <span>足迹</span>
            </div>
            <div>
                <i class="iconfont icon-untitled4"></i>
                <span>卡包</span>
            </div>
        </div>
      </div>
      
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import Login from "../Login/login";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Login,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    userInfo() {
      if (localStorage["userinfo"]) {
        return JSON.parse(localStorage["userinfo"]);
      } else {
        return [];
      }
    },
  },
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
.user-info {
  box-sizing: border-box;
  width: 100%;
  padding: 0 1rem;
  .user-title {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: #e2e5e5;
    border-radius: 1rem;
    padding: 1rem 0;
    img {
      width: 7rem;
      height: 7rem;
      border: 0.3rem solid #f55;
      border-radius: 50%;
      margin-left: 2rem;
    }
    h2{
      width: 70%;
      text-align: center;
      span{
        color: #f88;
      }
    }
    .mine-love{
      width: 100%;
      display: flex;
      margin-top: 2rem;
      
      div{
        width: 25%;
        height: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        i{
          color: #f33;
        }
      }
    }
  }
}
</style>