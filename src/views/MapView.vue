<template>
  <div>
    <div class="map" ref="container"></div>
    <van-icon class="btn" @click="go" name="arrow-left" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cinemaData: {
        lat: 0, //纬度
        lng: 0 //经度
      }
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
        this.cinemaData = data.data.cinemaData;
        this.gainMap();
      });
    },
    gainMap() {
      const BMap = window.BMap;
      var map = new BMap.Map(this.$refs.container);
      var point = new BMap.Point(this.cinemaData.lng, this.cinemaData.lat);
      map.centerAndZoom(point, 14);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      map.addControl(new BMap.ScaleControl()); //比例尺
      map.addControl(new BMap.GeolocationControl());
      map.addControl(new BMap.NavigationControl());
      var opts = {
        width: 100, // 信息窗口宽度
        height: 10, // 信息窗口高度
        title: this.cinemaData.nm // 信息窗口标题
      };
      var infoWindow = new BMap.InfoWindow(this.cinemaData.addr, opts); // 创建信息窗口对象
      map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    },
    go() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getCinemaDetails();
  }
};
</script>

<style lang="scss" scoped>
.map {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.btn {
  width: 1.0938rem;
  height: 1.0938rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.3125rem;
  left: 0.3125rem;
  font-size: 0.5625rem;
}
</style>
