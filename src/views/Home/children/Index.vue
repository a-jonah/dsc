<!--  -->
<template>
  <div class="index">
    <SwipeBanner />
    <div class="radius">
      <SwipeNav />
      <SwipeNews />
    </div>
    <div class="radius">
      <CountDown />
      <SwipeList :SwipeLists="SwipeLists1" />
    </div>
    <div class="radius">
      <div class="mass">
        <div class="mass-title">拼团专区</div>
        <div class="mass-content">
            <span>拼着买更实惠</span>
        </div>
      </div>
      <SwipeList :SwipeLists="SwipeLists2" />
    </div>
    <div style="height: 30rem"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SwipeBanner from "../components/SwipeBanner";
import SwipeNav from "../components/SwipeNav";
import SwipeNews from "../components/SwipeNews";
import SwipeList from "../components/SwipeList";
import CountDown from "@/components/CountDown";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    SwipeBanner,
    SwipeNav,
    SwipeNews,
    SwipeList,
    CountDown,
  },
  data() {
    //这里存放数据
    return {
      SwipeLists1: [
        {
          id: 1,
          img: require("@/assets/images/dfg_01.jpg"),
          title: "电饭锅l",
          newprice: 555,
          price: 999,
        },
        {
          id: 2,
          img: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489105257637.jpg",
          title: "电饭锅2",
          newprice: 555,
          price: 999,
        },
        {
          id: 3,
          img: "https://img14.360buyimg.com/n1/s800x800_jfs/t1/136652/22/7606/147264/5f3f8d56E7d475354/69f5237f59e881a8.jpg",
          title: "电饭锅3",
          newprice: 555,
          price: 999,
        },
        {
          id: 4,
          img: require("@/assets/images/dfg_01.jpg"),
          title: "电饭锅4",
          newprice: 555,
          price: 999,
        },
        {
          id: 5,
          img: require("@/assets/images/dfg_01.jpg"),
          title: "电饭锅5",
          newprice: 555,
          price: 999,
        },
        {
          id: 6,
          img: require("@/assets/images/dfg_01.jpg"),
          title: "电饭锅6",
          newprice: 555,
          price: 999,
        },
        {
          id: 7,
          img: require("@/assets/images/dfg_01.jpg"),
          title: "电饭锅7",
          newprice: 555,
          price: 999,
        },
        {
          id: 8,
          img: require("@/assets/images/dfg_01.jpg"),
          title: "电饭锅8",
          newprice: 555,
          price: 999,
        },
        {
          id: 9,
          img: require("@/assets/images/dfg_01.jpg"),
          title: "电饭锅9",
          newprice: 555,
          price: 999,
        },
        {
          id: 10,
          img: require("@/assets/images/dfg_01.jpg"),
          title: "电饭锅10",
          newprice: 555,
          price: 999,
        },
      ],
      SwipeLists2:[{
          id: 1,
          img: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
          title: "榨汁机1",
          newprice: 129,
          price: 299
      },{
          id: 2,
          img: "https://img14.360buyimg.com/n1/s800x800_jfs/t1/8331/9/13531/132329/5c454259E6bcee378/45463f3b9e4400bc.jpg",
          title: "榨汁机2",
          newprice: 129,
          price: 299
      },{
          id: 3,
          img: "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490175389121.jpg",
          title: "榨汁机3",
          newprice: 129,
          price: 299
      },{
          id: 4,
          img: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
          title: "榨汁机4",
          newprice: 129,
          price: 299
      },{
          id: 5,
          img: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
          title: "榨汁机5",
          newprice: 129,
          price: 299
      },{
          id: 6,
          img: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
          title: "榨汁机6",
          newprice: 129,
          price: 299
      },{
          id: 7,
          img: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
          title: "榨汁机7",
          newprice: 129,
          price: 299
      },{
          id: 8,
          img: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
          title: "榨汁机8",
          newprice: 129,
          price: 299
      },{
          id: 9,
          img: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
          title: "榨汁机9",
          newprice: 129,
          price: 299
      },{
          id: 10,
          img: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
          title: "榨汁机10",
          newprice: 129,
          price: 299
      }]
    };
  },
};
</script>
<style lang="less">
.index {
  margin: 0 10px;
  .radius {
    margin-top: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #fff;
  }
  .mass{
    height: 4rem;
    padding:1rem;
    display:flex;
    align-items: center;
    .mass-title{
      font-size: 2rem;
      font-weight: 700;
    }
    .mass-content{
      color:#999;
      margin-left: 2rem;
      font-size: 1.4rem;
    }
  }
}
</style>