<!--  -->
<template>
  <div class="detail-content">
    <div class="detail-banner">
      <mt-swipe :auto="4000" style="touch-action: none">
        <mt-swipe-item>
          <img :src="'http://192.168.0.160:3000/' + GoodsDetail.goods_img" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="'http://192.168.0.160:3000/' + GoodsDetail.goods_img" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="'http://192.168.0.160:3000/' + GoodsDetail.goods_img" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="'http://192.168.0.160:3000/' + GoodsDetail.goods_img" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="'http://192.168.0.160:3000/' + GoodsDetail.goods_img" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="detail-body">
      <div class="goods-info">
        <div class="goods-price">
          {{GoodsDetail.shop_price}}
          <s>{{GoodsDetail.market_price}}</s>
        </div>
        <h3>
          <em>自营</em>{{GoodsDetail.goods_name}}
        </h3>
        <!-- <p>小米电视4A 55英寸 4k超高清智能网络电视机 50 60</p> -->
      </div>
      <div ref="imgsrc" v-html="GoodsDetail.goods_desc" class="detail-img"></div>
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
    GoodsDetail() {
      return this.$store.state.GoodsDetail;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    imgSrc() {
      var imgsrc = this.$refs.imgsrc.querySelectorAll("img");
      imgsrc.forEach((item)=>{
          let index=item.src.indexOf("images")
          item.src="http://192.168.0.160:3000/"+item.src.slice(index)
      })
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  
    this.$store.dispatch("GoodsDetailFn", this.$route.query);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {
    
    this.imgSrc();
  }, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.detail-banner {
  width: 100%;
  height: 37.5rem;
  img {
    width: 100%;
    height: 37.5rem;
  }
}
.detail-body {
  width: 100%;
  border: 1rem solid #fff;
  box-sizing: border-box;
  .goods-info {
    .goods-price {
      color: red;
      font-size: 2.4rem;
      font-weight: 600;
      &::before {
        font-size: 1.4rem;
        content: "￥";
      }
      s {
        font-size: 1.4rem;
        font-weight: 400;
        color: #999;
        &::before {
          content: "￥";
        }
      }
    }
    h3 {
      color: #333;
      font-size: 1.4rem;
      font-weight: 400;
      em {
        height: 100%;
        padding: 0 0.5rem;
        display: inline-block;
        border-radius: 50%;
        background: #fba534;
        font-size: 1.2rem;
        color: #fff;
        font-weight: 500;
        font-style: normal;
      }
    }
    p {
      color: red;
      font-size: 1.4rem;
    }
  }
  .detail-img{
      width: 100%;
      p{
          width: 100%;
          img{
              width: 100%;
          }
      }
  }
}
</style>