<template>
  <div>
    <!-- 页面顶部 -->
    <header>
      <div class="nav-header">{{ this.$route.name }}</div>
      <div v-show="scrollTop <= 100" class="download-app-bar" @click="download">
        <img src="/image/cat.png" />
        <div class="info">
          <p>猫眼</p>
          <span>在线选座,热门影讯,爱上看电影</span>
        </div>
        <van-button class="btn" size="small" color="#EF4238">
          立即打开
        </van-button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    download() {
      this.$router.push("/download");
    }
  },
  props: {
    scrollTop: Number
  }
};
</script>

<style lang="scss" scoped>
header {
  z-index: 1;
  background: #fff;
  width: 100%;
  .nav-header {
    height: 1.5625rem;
    background: #e54847;
    color: #fff;
    text-align: center;
    line-height: 1.5625rem;
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
}
</style>
