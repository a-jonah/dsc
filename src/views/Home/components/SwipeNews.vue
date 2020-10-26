<!--  -->
<template>
  <div class="news-box">
    <div class="news">
      <div class="news-logo">
        <img src="@/assets/images/news.png" alt="" />
      </div>
      <div class="swipe-news">
        <ul ref="news">
          <li v-for="item in newsList" :key="item.id">{{ item.title }}</li>
        </ul>
      </div>
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
      clear: "",
      newsList: [
        {
          id: 1,
          title: "5G知识普及",
        },
        {
          id: 2,
          title: "服务店突破2000多家",
        },
        {
          id: 3,
          title: "三大国际腕表品牌签约",
        },
        {
          id: 4,
          title: "抢百元优惠券，享4.22%活期",
        },
        {
          id: 5,
          title: "Macbook最高返50000消费豆！",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollTop() {
      var oUl = this.$refs.news;
      oUl.style.marginTop = "-3.6rem";
      oUl.className = "transition";
      setTimeout(() => {
        this.newsList.push(this.newsList[0]);
        this.newsList.shift();
        oUl.style.marginTop = "0";
        oUl.className = "";
      }, 1000);
    },
  },
  mounted() {
    this.clear = setInterval(this.scrollTop, 3000);
  },
  destroyed() {
    clearInterval(this.clear);
  },
};
</script>
<style lang="less">
.news-box {
  height: 5rem;
  box-sizing: border-box;
  padding: 0.7rem 1rem;
  margin-top: 0.5rem;
  .news {
    border-top: 1px solid #eee;
    padding-top: 0.5rem;
    display: flex;
    background: #fff;
    .news-logo {
      width: 7rem;
      margin-right: 2rem;
      img {
        width: 100%;
      }
    }
    .swipe-news {
      overflow: hidden;
      .transition {
        transition: all 1s;
      }
      ul {
        li {
          height: 100%;
          line-height: 3.6rem;
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>