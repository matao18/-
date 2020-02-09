<template>
  <div class="home-page" @scroll="listenScroll" ref="wrapper">
    <div class="header-top">
      <!-- 页面顶部 -->
      <HeaderTop :scrollTop="scrollTop" />
      <!-- 顶部选项卡 -->
      <TopBar
        :city="city"
        :current="current"
        @add="current = 1"
        @red="current = 0"
      />
    </div>
    <!-- 热映列表 -->
    <HotList
      v-show="current == 0"
      :movieInfo="movieInfo"
      @addMoiveList="addMoiveList"
    />
    <!-- 即将上映 -->
    <ComingList v-show="current == 1" />
  </div>
</template>

<script>
import HeaderTop from "../components/HomeView/HeaderTop";
import TopBar from "../components/HomeView/TopBar";
import HotList from "../components/HomeView/HotList";
import ComingList from "../components/HomeView/ComingList";

export default {
  data() {
    return {
      city: "定位",
      current: 0,
      movieInfo: {},
      scrollTop: 0
    };
  },
  components: {
    HeaderTop,
    TopBar,
    HotList,
    ComingList
  },
  methods: {
    addMoiveList() {
      let { movieIds, movieList } = this.movieInfo;
      let str = movieIds
        .filter((item, index) => {
          if (movieList.length <= index) {
            return item;
          }
        })
        .join(",");
      this.axios({
        method: "get",
        url: "/moreComingList",
        params: {
          token: "",
          movieIds: str
        }
      }).then(data => {
        movieList.push(...data.data.coming);
        if (movieList.length < movieIds.length) {
          this.addMoiveList();
        }
      });
    },
    listenScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    }
  },
  created() {
    // 地理位置
    this.$jsonp("http://api.map.baidu.com/location/ip", {
      ak: "nE8GB5mEAaCHIMRvpOF9wHpTY1D0F4hl",
      callbackName: "callbakc"
    }).then(data => (this.city = data.content.address_detail.city));

    // 城市json数据
    // this.axios("/ajax/city").then(data => {
    //   console.log(data.data);
    // });
    // 电影信息
    this.axios("/movieOnInfoList").then(data => (this.movieInfo = data.data));
  },
  mounted() {
    window.addEventListener("scroll", this.listenScroll);
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  margin-top: 5rem;
  margin-bottom: 1.5625rem;
}

.header-top {
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 1;
  top: 0;
}
</style>
