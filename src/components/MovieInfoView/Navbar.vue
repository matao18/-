<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    <div class="download-app-bar" @click="download" v-show="flag">
      <img src="/image/cat.png" />
      <div class="info">
        <p>猫眼</p>
        <span>在线选座,热门影讯,爱上看电影</span>
      </div>
      <van-button class="btn" size="small" color="#EF4238">立即打开</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    download() {
      this.$router.push("/download");
    }
  },
  props: {
    title: String,
    flag: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background: #e54847;
  height: 1.5625rem;
  line-height: 1.5625rem;
}

.van-nav-bar,
.van-icon {
  color: #fff;
  font-size: 0.8125rem;
}

.van-nav-bar__title {
  color: #fff;
  font-size: 0.5625rem;
}

.download-app-bar {
  display: flex;
  margin: 0.3125rem 0;
  align-items: center;
  color: #999999;
  p {
    font-size: 0.5625rem;
    color: #000;
    margin-bottom: 0.0625rem;
  }

  > img {
    width: 1.375rem;
    height: 1.375rem;
    margin: 0 0.3125rem;
  }

  > .info {
    flex: 1;
  }

  > .btn {
    margin: 0 0.3125rem;
    border-radius: 4px;
  }
}
</style>
