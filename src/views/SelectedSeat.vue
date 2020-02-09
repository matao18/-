<template>
  <div class="seat">
    <!-- 头部复用MovieInfoView 中Navbar组件 -->
    <Navbar :title="title" :flag="false" />
    <!-- 电影名字/时间 -->
    <div class="movie-avater">
      <h2>{{ $route.query.name }}</h2>
      <span>
        {{ $route.query.dt }}
        {{ $route.query.tm }}
        {{ $route.query.lang }}
        {{ $route.query.tp }}
      </span>
    </div>
    <!-- 电影位置 -->
    <CinemaSite :movieInfo="$route.query" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    getCinemaDetails() {
      this.axios({
        methods: "get",
        url: "/ajax/cinemaDetail",
        params: {
          cinemaId: this.$route.params.id
        }
      }).then(data => {
        this.title = data.data.showData.cinemaName;
      });
    }
  },
  created() {
    this.getCinemaDetails();
    // console.log(this.$route);
  },
  components: {
    Navbar: () => import("../components/MovieInfoView/Navbar"),
    CinemaSite: () => import("../components/SelectedSeat/CinemaSeat")
  }
};
</script>

<style lang="scss" scoped>
.seat {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.movie-avater {
  padding: 15px 0.625rem;
  border-bottom: 1px solid #f5f5f5;

  > h2 {
    font-weight: 800;
    font-size: 0.5rem;
    margin-bottom: 0.1563rem;
  }

  > span {
    color: #999;
  }
}
</style>
