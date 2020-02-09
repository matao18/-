<template>
  <div>
    <!-- 标题 -->
    <Navbar :title="CinemaDetails.nm" />
    <div v-if="SetMeal">
      <!-- 电影院位置 -->
      <Location :CinemaDetails="CinemaDetails" />
      <!-- 电影列表 -->
      <CinemaList :MovieList="MovieList" />
      <!-- 电影院套餐 -->
      <div class="set-meal">
        <div class="title">影院超值套餐</div>
        <CinemaSetMeal
          v-for="(item, index) in SetMeal"
          :key="index"
          :item="item"
        />
      </div>
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
      CinemaDetails: "",
      SetMeal: "",
      MovieList: ""
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
        this.CinemaDetails = data.data.cinemaData;
        this.SetMeal = data.data.dealList.dealList;
        this.MovieList = data.data.showData.movies;
      });
    }
  },
  created() {
    this.getCinemaDetails();
  },
  components: {
    Navbar: () => import("../components/MovieInfoView/Navbar"),
    Location: () => import("../components/CinemaDetailsView/Location"),
    CinemaSetMeal: () =>
      import("../components/CinemaDetailsView/CinemaSetMeal"),
    CinemaList: () => import("../components/CinemaDetailsView/CinemaList")
  }
};
</script>

<style lang="scss" scoped>
.set-meal {
  border-top: 10px solid #f0f0f0;

  > .title {
    padding: 0.4688rem;
    font-size: 0.4375rem;
    color: #666666;
    border-bottom: 1px solid #f5f5f5;
  }
}

.loading {
  width: 100%;
  text-align: center;
}
</style>
