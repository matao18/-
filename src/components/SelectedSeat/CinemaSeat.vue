<template>
  <div class="site">
    <div class="site-title">{{ this.movieInfo.th }}</div>
    <div class="siteMap" v-for="(row, index) in site" :key="index">
      <span class="site-row">{{ index + 1 }}</span>
      <span
        class="site-each"
        v-for="(items, i) in row"
        :key="i"
        :style="getImageData(items)"
        @click="selected(index, i)"
      ></span>
    </div>
    <div class="btn">
      <van-button @click="pay" :disabled="flag" color="#FF9900" block>
        <span v-show="price != 0">￥{{ price }}</span>
        请先选座
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4],
        [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0]
      ],
      selectedUrl: "/image/kexuan.png",
      seatUrl: "/image/yixuan.png",
      soldUrl: "/image/bukexuan.png",
      flag: true
    };
  },
  props: {
    movieInfo: Object
  },
  methods: {
    getImageData(type) {
      let data = "";
      switch (type) {
        case 0:
          data = this.selectedUrl;
          break;
        case 1:
          data = this.seatUrl;
          break;
        case 2:
          data = this.soldUrl;
          break;
        default:
          return {};
      }
      return { backgroundImage: `url(${data})` };
    },
    selected(i, j) {
      let arr = this.site[i];

      if (arr[j] == 0) {
        this.$set(this.site[i], j, 1);
      } else if (arr[j] == 1) {
        this.$set(this.site[i], j, 0);
      }
    },
    pay() {
      this.site = this.site.map(item => {
        return item.map(i => {
          if (i != 1) {
            return i;
          }
          return 2;
        });
      });
    }
  },
  created() {
    // console.log(this.movieInfo);
  },
  watch: {
    site: function(newValue) {
      for (let arr of newValue) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == 1) {
            return (this.flag = false);
          }
          this.flag = true;
        }
      }
    }
  },
  computed: {
    price() {
      let arr = this.site.map(item => {
        return item.filter(i => {
          return i == 1;
        });
      });
      let price = [];
      for (let i = 0; i < arr.length; i++) {
        price.push(...arr[i]);
      }
      return `${price.length * (parseInt(this.movieInfo.vipPrice) + 5)}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.site {
  background: #f2f1f6;
  height: 100%;
  width: 100%;

  .site-title {
    display: block;
    width: 6.25rem;
    height: 0.625rem;
    background: #e3e3e3;
    border-radius: 0 0 30px 30px;
    z-index: 99;
    text-align: center;
    margin: 0 auto;
    line-height: 0.625rem;
    color: #999;
    margin-bottom: 2.5rem;
  }

  .siteMap {
    position: relative;
    text-align: center;
    > .site-row {
      position: absolute;
      left: 0;
      display: inline-block;
      background: #e6e5e9;
      color: #979798;
      margin-right: 10px;
      height: 0.9375rem;
    }

    > .site-each {
      display: inline-block;
      width: 0.625rem;
      height: 0.625rem;
      margin: 2px;
      background-size: 0.625rem;
      background-repeat: no-repeat;
    }
  }

  > .btn {
    position: absolute;
    width: 100%;
    padding: 10px;
    background: #fff;
    bottom: 0;
  }

  .van-button__text {
    font-weight: 800;
    font-size: 0.5625rem;
  }
}
</style>
