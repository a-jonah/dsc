<!--  -->
<template>
  <div class="category-content">
    <div class="category-wrap" @mousewheel.prevent="" v-if="flag">
      <div class="title-img">
        <img :src="this.$store.state.CategoryImg"/>
      </div>
      <div class="child-list" v-for="list in this.$store.state.CategoryGoodsLists" :key="list.cat_id">
        <div class="child-title">— <span>{{list.cat_name}}</span> —</div>
        <ul>
          <router-link v-for="item in list.child" :key="item.cat_id" :to="'/categorygoodslist?cat_id='+item.cat_id" tag="li" >
            <img
              src="https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg"
              alt=""
            />
            <p>{{item.cat_name}}</p>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="loading" v-else>
      <img :src="loadingImg" alt="">
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
      loadingImg:require("@/assets/images/timg.gif"),
      flag:false 
    };
  },

  watch: {
    $route(to) {
       let cid = to.params.cid;
       this.CategoryGoodsFn(cid);
    }
  },
  //方法集合
  methods: {
   async CategoryGoodsFn(cid) {
        await  this.$store.dispatch("CategoryGoodsFn",cid)
       this.flag=true
    },
  },
  mounted() {
    let cidUrl= window.location.href;
    let cid=cidUrl.substr(cidUrl.lastIndexOf("/")+1)
    this.CategoryGoodsFn(cid)
   
  },
};
</script>
<style lang="less">

.category-content {
  width: 77%;
  height: 100%;
  background-color: #fff;
  padding: 1.1rem;
  box-sizing: border-box;

  .loading{
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: #F6F6F6;
    display: flex;
    align-items: center;
    img{
      width: 60%;
    }
  }
  .category-wrap {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .title-img {
      width: 100%;
      height: 9.6rem;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .child-list {
      width: 100%;
      .child-title {
        height: 2.5rem;
        margin: 1.1rem 0;
        text-align: center;
        line-height: 2.5rem;
        color: #bbb;
        span {
          color: #333;
          font-size: 1.6rem;
        }
      }
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 33.33%;
          height: 8.2rem;
          margin-bottom: 2rem;
          text-align: center;
          img {
            width: 60%;
          }
          p {
            margin: 0.4rem 0;
          }
        }
      }
    }
  }
  .category-wrap::-webkit-scrollbar {
    display: none;
  }
}
</style>