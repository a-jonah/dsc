<!--  -->
<template>
  <div class="swipe-list">
    <div class="list-box">
      <ul :style="contentStyle">
        <li v-for="item in SwipeLists" :key="item.id">
          <img :src="item.img" alt="" />
          <div>
            <span>{{ item.title }}</span>
            <p>￥{{item.newprice}}</p>
            <em>{{item.price}}</em>
          </div>
        </li>
      </ul>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="pBarStyle"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: ["SwipeLists"],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      swipeContentW: 1100,
      screenW:
        document.documentElement.clientWidth || document.body.clientWidth,
      progressbgW: 100,
      progressBarW: 0,
      leftMove: 0,
      startX: 0,
      endX: 0,
      contentX: 0,
      contentMove: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {
    pBarStyle() {
      return {
        width: `${this.progressBarW}px`,
        left: `${this.leftMove}px`,
      };
    },
    contentStyle() {
      return {
        left: `${this.contentMove}px`,
      };
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    touchstartFn(e) {
      this.startX = e.touches[0].pageX;
    },
    touchmoveFn(e) {
      let moveW = e.touches[0].pageX - this.startX;
      this.contentMove = this.contentX + moveW;
      this.leftMove =
        this.endX -
        (moveW / (this.swipeContentW - this.screenW)) *
          (this.progressbgW - this.progressBarW);
      if (this.leftMove < 0) {
        this.leftMove = 0;
      } else if (this.leftMove > this.progressbgW - this.progressBarW) {
        this.leftMove = this.progressbgW - this.progressBarW;
      }

      if (this.contentMove > 0) {
        this.contentMove = 0;
      } else if (this.contentMove < this.screenW - this.swipeContentW - 40) {
        this.contentMove = this.screenW - this.swipeContentW - 40;
      }
    },
    touchendFn() {
      this.endX = this.leftMove;
      this.contentX = this.contentMove;
    },
    //   绑定触摸事件
    bindEvent() {
      this.$el.addEventListener("touchstart", this.touchstartFn, false);
      this.$el.addEventListener("touchmove", this.touchmoveFn, false);
      this.$el.addEventListener("touchend", this.touchendFn, false);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.progressBarW = (this.screenW / this.swipeContentW) * this.progressbgW;
    this.bindEvent();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.swipe-list {
  height: 21rem;
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  position: relative;
  .list-box {
    height: 100%;
    border-top:1px solid #eee;
    position: relative;
    overflow-x: hidden;
    ul {
      position: absolute;
      left: 0;
      width: 110rem;
      display: flex;
      li {
        width: 10rem;
        padding: 0.5rem;
        text-align: center;
        img {
          width: 100%;
        }
        span{
          font-size: 1.6rem;
        }
        p{
          font-size: 1.4rem;
          color: red;
          margin: 0.4rem 0;
        }
        em{
          color: #ccc;
          text-decoration:line-through ;
        }
      }
    }
  }
  .list-box::-webkit-scrollbar {
    display: none;
  }
  .progress {
    width: 10rem;
    height: 0.4rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    margin-left: -5rem;
    background-color: #eee;
    .progress-bar {
      position: absolute;
      left: 0;
      width: 2rem;
      height: 100%;
      background-color: red;
    }
  }
}
</style>