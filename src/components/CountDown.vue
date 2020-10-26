<!--  -->
<template>
  <div class="count-down">
    <div class="content-img">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png"
        alt=""
      />
    </div>
    <div class="content">
      <span>距离活动结束</span>
      <div class="time-down" v-cloak>{{hh}}:{{mm}}:{{ss}}</div>
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
        hh:"",
        mm:"",
        ss:""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      timeDown(){
          //获取时间戳
        let now=new Date().getTime();
        let createTime=new Date("2020/10/17 19:55:20").getTime();
        let timeNum=createTime-now;
        if(timeNum<=0){
          timeNum=0
        }

        this.hh=Math.floor(timeNum/1000/60/60)+"";
        this.mm=Math.floor(timeNum/1000/60%60)+"";
        this.ss=Math.floor(timeNum/1000%60)+"";
       
       this.hh= this.hh.padStart(2,"0")
      this.mm=  this.mm.padStart(2,"0")
       this.ss= this.ss.padStart(2,"0")
      }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      setInterval(this.timeDown,1000)
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
[v-cloak]{
  display: none;
}
.count-down {
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  .content-img {
    display: flex;
    align-items: center;
    width: 30%;
    img {
      width: 100%;
    }
  }
  .content {
      margin-left: 2rem;
      align-items: center;
    display: flex;
    .time-down {
      width: 10rem;
      height: 3rem;
      line-height: 3rem;
      border-radius: 2rem;
      border: 2px solid red;
      color: red;
      font-weight: 600;
      text-align: center;
      margin-left:1rem ;
      font-size: 1.6rem;
    }
  }
}
</style>