<!--  -->
<template>
  <div class="d-footer">
    <div class="footer-left">
      <div class="footer-icon">
        <i class="iconfont icon-xiaoxi"></i>
        <p>客服</p>
      </div>
      <div class="footer-icon">
        <i class="iconfont icon-shoucang"></i>
        <p>收藏</p>
      </div>
      <div class="footer-icon">
        <a href="#/cart" ></a>
        <div :class="{addnum:flag}" v-show="flag">+1</div>
        <i class="iconfont icon-gouwuchekong">
          <span>{{numN}}</span>
        </i>
        <p>购物车</p>
      </div>
    </div>
    <div class="footer-right">
      <button class="addbtn"  @click="CartFn(Detail)">加入购物车</button>
      <button class="buybtn">立即购买</button>
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
     num:0,
     flag:false,
     timer:""
    };
  },
  //监听属性 类似于data概念
  computed: {
    Detail() {
      return this.$store.state.GoodsDetail;
    },
    numN(){
      return this.num
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    CartFn(data) {
      this.flag=true;
      this.timer=setTimeout(() => {
        this.flag=false
      }, 1000);


      var isCart = this.$store.state.Carts.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });
      if (!isCart) {
        var cartData = {
          goods_id: data.goods_id,
          goods_img: data.goods_img,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          value: 1,
          isSelect: false,
        };
      }
      this.$store.commit("CartsFn", cartData);
      this.numfn()
    },
    numfn(){
      this.$store.state.Carts.find((item) => {
        if (item.goods_id == this.$route.query.goods_id) {
         this.num=item.value
        }
        return item.goods_id == this.$route.query.goods_id;
      });
    },
    
  },
  mounted(){
    this.numfn()
  }
  
};
</script>
<style lang="less">
.d-footer {
  height: 5rem;
  width: 100%;
  position: fixed;
  z-index: 99;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  .footer-left {
    width: 45%;
    height: 100%;
    text-align: center;
    display: flex;
    .footer-icon {
      height: 100%;
      width: 33.33%;
      color: #666;
      margin-top: 0.5rem;
      position: relative;
      a {
        width: 100%;
        height: 5rem;
        position: absolute;
        z-index: 10;
        top: -0.5rem;
        left: 0;
      }
      .addnum{
        position: absolute;
        top: 1rem;
        left: 40%;
        font-size: 1.8rem;
        color: red;
        font-weight: 600;
        opacity: 0;
        animation: add ease 1s;
      }
      @keyframes add {
        0%{
          opacity: 1;
        }
        80%{
          opacity: 1;
        }
        100%{
          top: -3rem;
          opacity: 0;
        }
      }
      i {
        font-size: 2.3rem;
      }
      .icon-gouwuchekong {
        width: 100%;
        position: relative;
        font-weight: 200;
        span {
          background: red;
          display: block;
          padding:0 0.5rem;
          border-radius: 50%;
          font-size: 1rem;
          color: #fff;
          text-align: center;
          position: absolute;
          right: -1rem;
          top: -0.5rem;
        }
      }
    }
  }
  .footer-right {
    width: 55%;
    height: 100%;
    button {
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 5rem;
      color: #fff;
      font-size: 1.6rem;
    }
    .addbtn {
      background: red;
    }
    .buybtn {
      background: #ff976a;
    }
  }
}
</style>