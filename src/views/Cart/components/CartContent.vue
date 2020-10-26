<!--  -->
<template>
  <div class="cart-content">
    <div class="cart-wrap" v-for="(list,index) in cartLists" :key="list.goods_id">
      <div class="cart-select" @click="selectFn(index)">
        <i class="iconfont icon-weixuanzhong" v-if="list.isSelect==false"></i>
        <i class="iconfont icon-xuanzhong" v-else></i>
      </div>
      <div class="shop-content">
        <div class="shop-img">
          <img
            :src="'http://localhost:3000/'+list.goods_img"
            alt=""
          />
        </div>
        <div class="shop-wrap">
          <div class="shop-title">
            {{list.goods_name}}
          </div>
          <div class="shop-info">
            <div class="shop-price">{{list.shop_price}}</div>   
            <div class="shop-dele" @click="deleCart(index)">
              <i class="iconfont icon-shanchu"></i>
            </div>
            <div class="shop-collect">
              <i class="iconfont icon-shoucang2" v-if="true"></i>
              <i class="iconfont icon-shoucang1" v-else></i>
            </div>
            <div class="shop-number">
              <a href="javascript:;" @click="lessenCart(index)">-</a>
              <input type="number" v-model="list.value" maxlength="3"  value="1"  @input="inputCart(index) "/>
              <a href="javascript:;" @click="addCart(index)">+</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-blank" v-if="!isBuyPage">
        <i class="iconfont icon-konggouwuche2"></i>
        <p>亲，您的购物车空空如也，快<router-link to="/home" tag="span">去逛逛</router-link>吧！</p>
    </div>
    <div class="cart-footer"  v-if="isBuyPage">
        <div class="cart-selectAll" @click="selectAllFn(selectAll)">
        <i class="iconfont icon-weixuanzhong" v-if="selectAll==false"></i>
        <i class="iconfont icon-xuanzhong" v-else></i>全选
      </div>
      <div class="totall">
          合计：<span>{{totallNum}}</span>
      </div>
      <div class="gobuy">
        <a href="javascript:;">去结算</a>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { MessageBox } from 'mint-ui';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    
  },
  data() {
    //这里存放数据
    return {
    
    };
  },
  //监听属性 类似于data概念
  computed: {
    cartLists(){
      return this.$store.state.Carts
    },
    selectAll(){
      return this.$store.state.Carts.every((item)=>{
        return item.isSelect
      })
    },
    totallNum(){
      let price=0
      let list=this.$store.state.Carts
      list.forEach((item)=>{
        if(item.isSelect){
          price+=item.shop_price*item.value
        }
      })
      return price
    },
    isBuyPage(){
      return this.$store.state.Carts.length!=0
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    selectAllFn(boolean){
      this.$store.commit("selectAllFn",boolean)
    },
    addCart(index){
       this.$store.commit("AddCart",index)
    },
    lessenCart(index){
      this.$store.commit("LessenCart",index)
    },
    deleCart(index){
      MessageBox.confirm('确定执行此操作?').then(() => {
        this.$store.commit("DeleCart",index)
     },()=>{
     });
      
    },
    inputCart(index){
       this.$store.commit("InputCart",index)
    },
    selectFn(index){
        this.$store.commit("selectFn",index)
    }
  },
  mounted() {
    console.log(this.$store.state.Carts);
  },

};
</script>
<style lang="less">
.cart-content {
  width: 100%;
  height: auto;
  padding: 4.5rem 1rem;
  box-sizing: border-box;
  .cart-wrap {
    background: #fff;
    border-radius: 0.5rem;
    width: 100%;
    height: 10rem;
    display: flex;
    margin-top: 2rem;
    align-items: center;
    .cart-select {
      width: 10%;
      text-align: center;
      i {
        color: red;
      }
    }
    .shop-content {
      width: 90%;
      height: 100%;
      padding: 1rem;
      box-sizing: border-box;
      border-radius: 0.5rem;
      display: flex;
      .shop-img {
        width: 7rem;
        padding-right: 1rem;
        img {
          height: 7rem;
        }

      }
      .shop-wrap {
        width: 80%;
        height: 100%;
        .shop-title {
          width: 100%;
        }
        .shop-info {
          width: 100%;
          height: 2rem;
          margin-top: 1rem;
          text-align: center;
          .shop-price {
            width: 20%;
            float: left;
            color: red;
            font-size: 1.4rem;
            &::before{
              content:"￥"
            }
          }
          .shop-number {
            width: 30%;
            float: right;
            display: flex;
             margin-right: 2rem;
            a {
              width: 25%;
              font-size: 1.6rem;
            }
            input {
              width: 50%;
              border: 1px solid #ccc;
              text-align: center;
              margin: 0 0.5rem;
            }
          }
          .shop-collect {
            width: 8%;
            float: right;
            margin-right: 2rem;
            .icon-shoucang1{
                color: red;
            }
          }
          .shop-dele {
            width: 8%;
            float: right;
             margin-right: 1rem;
          }
        }
      }
    }
  }
  .cart-blank{
    text-align: center;
    padding-top: 6rem;
    i{
      font-size: 16rem;
      font-weight: 300;
      color: red;
    }
    p{
      font-size: 1.6rem;
      margin-top: 4rem;
      span{
        color: red;
      }
    }
  }
}
.cart-footer{
    width: 100%;
    height: 4.4rem;
    position: fixed;
    left: 0;
    background: #fff;
    bottom: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cart-selectAll{
        width: 20%;
        color:red;
        text-align: center;
    }
    .totall{
        text-align: right;
       width: 40%;
       font-size: 1.4rem;
       span{
         color: red;
         font-size: 1.6rem;
         &::before{
           content:"￥"
         }
       }
    }
    .gobuy{
        width: 30%;
        height: 100%;
        background: #f00;
        text-align: center;
        line-height: 4.4rem;

        a{
             font-size: 1.6rem;
             color:#fff ;
        }
    }
}
</style>