<!--  -->
<template>
  <div class="login">
    <div class="retreat" @click="rollbackFn">
      <i class="iconfont icon-zuo1"></i>
    </div>
    <div class="login-wrap">
      <div class="login-logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="login-select">
        <button :class="{ action: flag }" @click="flag = !flag">
          手机号登陆
        </button>
        <button :class="{ action: !flag }" @click="flag = !flag">
          账号登陆
        </button>
      </div>
      <div class="login-content">
        <div v-if="flag">
          <section>
            <input type="tel" placeholder="请输入手机号" maxlength="11" />
            <button v-if="code" @click="codeFn">获取验证码</button>
            <button v-else disabled>重新发送{{ codeNum }}s</button>
          </section>
          <section>
            <input type="tel" placeholder="请输入验证码" maxlength="6" />
          </section>
        </div>
        <div v-else>
          <section>
            <input
              type="text"
              placeholder="手机号/账号/邮箱"
              v-model="userName"
            />
          </section>
          <section>
            <input
              type="password"
              placeholder="请输入密码"
              v-if="passFlag"
              v-model="pass"
            />
            <input type="text" placeholder="请输入密码" v-else v-model="pass" />
            <button
              class="iconfont icon-yincang"
              v-if="passFlag"
              @click="passFlag = !passFlag"
            ></button>
            <button
              class="iconfont icon-xianshi"
              v-else
              @click="passFlag = !passFlag"
            ></button>
          </section>
          <section>
            <input
              type="text"
              placeholder="请输入验证码"
              maxlength="6"
              v-model="verifyCode"
            />
            <img :src="codeImg" alt="" @click="codeImgFn" />
          </section>
        </div>
        <button class="login-btn" @click="loginFn">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { Login } from "@/api/login.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      flag: true,
      code: true,
      codeNum: 10,
      passFlag: true,
      userName: "",
      pass: "",
      verifyCode: "",
      codeImg: "http://localhost:3000/api/v1/users/captcha",
    };
  },
  methods: {
    codeFn() {
      this.code = false;
      let num = 10;
      let codeTime = setInterval(() => {
        num--;
        this.codeNum = num;
        if (!num) {
          clearInterval(codeTime);
          this.code = true;
        }
      }, 1000);
    },
    codeImgFn() {
      this.codeImg =
        "http://localhost:3000/api/v1/users/captcha?" +
        new Date().getTime();
    },
    async loginFn() {
      if (!this.userName) {
        Toast("账号不能为空");
        return;
      } else if (!this.pass) {
        Toast("密码不能为空");
        return;
      } else if (!this.verifyCode) {
        Toast("验证码不能为空");
        return;
      }
      const result = await Login(this.userName, this.pass, this.verifyCode);
      console.log(result.data);
      if(result.data.err_code!=0){
        localStorage["userinfo"]=JSON.stringify(result.data.data[0])
        this.$router.push("/mine0")
      }
    },
    rollbackFn(){
        window.history.back()
    }
  },
  computed: {},
};
</script>
<style lang="less">
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  padding: 2rem;
  box-sizing: border-box;
  background: #fff;
  .retreat {
    position: absolute;
    top: 2rem;
    left: 2rem;
    i {
      font-size: 2rem;
    }
  }
  .login-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-logo {
      width: 10rem;
      height: 10rem;
      border: 0.3rem solid #ddd;
      border-radius: 50%;
      text-align: center;
      padding-top: 2rem;
      box-sizing: border-box;
      img {
        width: 80%;
      }
    }
    .login-select {
      width: 80%;
      height: 4.4rem;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      button {
        width: 40%;
        height: 100%;
        background-color: #777;
        color: #fff;
        font-size: 1.4rem;
        text-align: center;
        line-height: 4.4rem;
      }
      .action {
        background-color: #f00;
      }
    }
    .login-content {
      width: 80%;
      section {
        width: 100%;
        height: 4.4rem;
        margin-top: 2rem;
        position: relative;
        input {
          width: 100%;
          height: 4.4rem;
          border: 1px solid #999;
          box-sizing: border-box;
          border-radius: 1rem;
          text-indent: 0.8rem;
          &:focus {
            border: 1px solid red;
          }
        }

        button {
          position: absolute;
          height: 3rem;
          line-height: 3rem;
          right: 0.5rem;
          top: 0.7rem;
          border-left: 1px solid #ccc;
          text-indent: 0.5rem;
          color: #999;
          background: rgba(0, 0, 0, 0);
        }
        img {
          position: absolute;
          height: 3rem;
          border-left: 1px solid #ccc;
          right: 0.5rem;
          top: 0.7rem;
        }
      }
    }
    .login-btn {
      width: 100%;
      height: 4.4rem;
      background: red;
      color: #fff;
      font-size: 1.4rem;
      text-align: center;
      line-height: 4.4rem;
      margin-top: 2rem;
      border-radius: 0.5rem;
    }
  }
}
</style>