<template>
  <div class="cinema-view">
    <header class="header">
      <!-- 头部 复用 主页 -->
      <HeaderTop />
      <!-- 搜影院 -->
      <SearchCinema :city="city" />
      <!-- 影城信息 -->
      <FilterCinema />
    </header>
    <!-- 影院列表 -->
    <CinemaList />
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "定位"
    };
  },
  methods: {
    location() {
      // 地理位置
      this.$jsonp("http://api.map.baidu.com/location/ip", {
        ak: "nE8GB5mEAaCHIMRvpOF9wHpTY1D0F4hl",
        callbackName: "callbakc"
      }).then(data => (this.city = data.content.address_detail.city));
    }
  },
  created() {
    this.location();
  },
  components: {
    HeaderTop: () => import("../components/HomeView/HeaderTop"),
    SearchCinema: () => import("../components/CinemaView/SearchCinema"),
    FilterCinema: () => import("../components/CinemaView/FilterCinema"),
    CinemaList: () => import("../components/CinemaView/CinemaList")
  }
};
</script>

<style lang="scss" scoped>
.cinema-view {
  margin-top: 4.25rem;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
