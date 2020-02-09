<template>
  <div>
    <div class="movie-brief">
      <div class="buy-ticket">
        <van-button type="primary" color="#EF4F4F">特惠购票</van-button>
      </div>
      <div class="brief" ref="brief">{{ dra }}</div>
      <div class="trigger" v-show="listHeight">
        <van-icon @click="trigger" v-show="falg" name="arrow-down" />
        <van-icon @click="trigger" v-show="!falg" name="arrow-up" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      falg: true,
      isMounted: false
    };
  },
  methods: {
    trigger() {
      console.log();
      if (this.falg) {
        this.$refs.brief.style.height = "auto";
        this.falg = false;
      } else {
        this.falg = true;
        this.$refs.brief.style.height = "1.8125rem";
      }
    }
  },
  props: {
    dra: String
  },
  computed: {
    listHeight() {
      let show = true;
      if (!this.isMounted) return;
      if (this.$refs.brief.textContent.length < 69) {
        show = false;
      }
      return show;
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss" scoped>
.movie-brief {
  .buy-ticket {
    padding: 0.3125rem;

    .van-button {
      height: 0.9375rem;
      line-height: 0.9375rem;
      width: 100%;
      border-radius: 0.125rem;
    }
  }

  .brief {
    padding: 0 0.3125rem;
    font-size: 0.4375rem;
    line-height: 0.625rem;
    color: #666666;
    overflow: hidden;
    height: 1.8125rem;
  }

  .trigger {
    padding: 5px;
    width: 100%;
    text-align: center;
    font-size: 0.5625rem;
    color: #666666;
  }
}
</style>
