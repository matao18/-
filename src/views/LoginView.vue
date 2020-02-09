<template>
  <div>
    <div class="login-page">
      <div class="bg"></div>
      <div @click="black" class="back iconfont icon-fanhui">
        <van-icon name="arrow-left" />返回
      </div>
      <div class="logo">
        <img src="/image/cat.png" />
      </div>
      <div class="login-form">
        <div class="user">
          <p>
            <label for="username">用户名:</label>
          </p>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="请输入账号"
          />
        </div>
        <div class="password">
          <p>
            <label for="username">密码:</label>
          </p>
          <input
            type="password"
            id="username"
            v-model="password"
            placeholder="请输入密码"
          />
        </div>
        <div class="submit">
          <van-button @click="logins" round type="primary" size="normal"
            >登录</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Notify } from "vant";

Vue.use(Notify);
import { mapState } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    black() {
      this.$router.go(-1);
    },
    logins() {
      if (this.username == "" || this.password == "") {
        Notify({ type: "danger", message: "账号或密码不能为空" });
        return;
      }
      this.$store.commit("setLogin");
      this.$router.replace("/my");
      Notify({ type: "success", message: "登录成功" });
    }
  },
  computed: {
    ...mapState({
      login: "login"
    })
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  z-index: 15;
  position: relative;
  padding: 12px;
  font-size: 0px;
  height: 100vh;
  box-sizing: border-box;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url("/image/login-bg.jpg") no-repeat;
    background-size: 100% 100%;
    opacity: 0.8;
    z-index: -1;
  }
}

.back {
  z-index: 5;
  position: relative;
  display: inline-block;
  font-size: 15px;
  padding: 15px 0;
  color: #fff;

  > i {
    vertical-align: text-top;
  }
}

.login-form {
  z-index: 20;
  font-size: 0.375rem;
  margin-top: 0.625rem;

  > div {
    z-index: 10;
    text-align: center;
    width: 100%;
    padding: 0.3125rem;

    > p {
      display: inline-block;
      width: 1.5625rem;
      text-align: right;
    }

    > input {
      width: 60%;
      border: 1px solid #f5f5f5;
      border-radius: 20px;
      padding: 0.1563rem;
      padding-left: 0.3125rem;
      font-size: 0.375rem;
      margin-left: 0.1563rem;
      background: rgba(255, 255, 255, 0.5);
    }
  }

  .submit {
    width: 40%;
    margin: 0 auto;

    .van-button--round {
      width: 100%;
    }
  }
}

.logo {
  z-index: 5;
  position: relative;
  padding: 30px 0;
  text-align: center;

  > img {
    width: 1.7312rem;
    height: 1.7312rem;
    border-radius: 50%;
  }
}
</style>
