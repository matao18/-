<template>
  <div>
    <div v-if="moviePressell">
      <!-- 标题 -->
      <Navbar :title="moviePressell.nm" />
      <!-- 电影详情 -->
      <MovieDetails :movieDetails="moviePressell" />
      <!-- 电影简介 -->
      <MovieReview :dra="moviePressell.dra" />
      <!-- 媒体库 -->
      <MediaLibrary :moviePhotos="moviePressell.photos" />
      <!-- 宣传片 -->
      <PromotionalVideo :videoUrl="moviePressell.videourl" />
      <!-- 底部 -->
      <footer class="footer">
        <van-button type="primary" color="#EF4F4F">
          下载猫眼电影,查看更多电影信息
        </van-button>
        <div>
          © 猫眼电影 客服电话:
          <a href="#">1010-5353</a>
        </div>
        <div>北京猫眼文化传媒有限公司</div>
      </footer>
    </div>
    <div class="loading" v-else>
      <van-loading />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Loading } from "vant";

Vue.use(Loading);
export default {
  data() {
    return {
      moviePressell: ""
    };
  },
  components: {
    Navbar: () => import("../components/MovieInfoView/Navbar"),
    MovieDetails: () => import("../components/MovieInfoView/MovieDetails"),
    MovieReview: () => import("../components/PressellView/MovieReview"),
    MediaLibrary: () => import("../components/PressellView/MediaLibrary"),
    PromotionalVideo: () =>
      import("../components/PressellView/PromotionalVideo")
  },
  created() {
    this.axios({
      method: "get",
      url: "/ajax/detailmovie",
      params: {
        movieId: this.$route.params.id
      }
    }).then(data => {
      this.moviePressell = data.data.detailMovie;
    });
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  background: #f5f5f5;
  padding: 10px;

  .van-button {
    height: 0.9375rem;
    line-height: 0.9375rem;
    width: 100%;
    border-radius: 0.125rem;
    margin: 5px 0;
  }

  > div {
    text-align: center;
    padding: 0.1563rem;

    > a {
      color: #ef4f4f;
    }
  }

  > div:nth-of-type(2) {
    color: #aeaeae;
  }
}
</style>
