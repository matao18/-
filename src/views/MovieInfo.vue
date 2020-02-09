<template>
  <div>
    <!-- 标题 -->
    <Navbar :title="movieDetails.nm" />
    <!-- 电影详情 -->
    <MovieDetails :movieDetails="movieDetails" />
    <!-- 影院选择 -->
    <FilterCinema />
    <!-- 电影院信息 -->
    <CinemaList />
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieDetails: {
        nm: "",
        img: "",
        snum: ""
      }
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "/ajax/detailmovie",
      params: {
        movieId: this.$route.params.id
      }
    }).then(data => {
      this.movieDetails = data.data.detailMovie;
    });
  },
  components: {
    Navbar: () => import("../components/MovieInfoView/Navbar"),
    MovieDetails: () => import("../components/MovieInfoView/MovieDetails"),
    CinemaList: () => import("../components/CinemaView/CinemaList"),
    FilterCinema: () => import("../components/CinemaView/FilterCinema")
  }
};
</script>

<style lang="scss" scoped></style>
