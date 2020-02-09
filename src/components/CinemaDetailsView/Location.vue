<template>
  <div>
    <div class="location-title">
      <span>猫眼电影 &gt;</span>
      &nbsp;
      <span>{{ CinemaDetails.nm }}</span>
    </div>
    <div class="location-nav">
      <div>
        <p>{{ CinemaDetails.nm }}</p>
        <span>{{ CinemaDetails.addr }}</span>
      </div>
      <div @click="LinkMap">
        <van-icon name="location-o" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    CinemaDetails: Object
  },
  methods: {
    LinkMap() {
      this.$router.push(`/cinema/map/${this.$route.params.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.location-title {
  border-top: 1px solid #e6e6e6;
  padding: 10.0016px 0.4688rem;
  color: #777777;
  font-size: 0.4375rem;
}

.location-nav {
  margin-top: 0.3125rem;
  padding-left: 0.4688rem;
  padding-bottom: 0.4688rem;
  overflow: hidden;

  > div:nth-child(1) {
    float: left;
    position: relative;
    width: 75%;
    p {
      font-size: 0.5625rem;
      font-weight: 800;
      margin-bottom: 0.3125rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 90%;
    }

    span {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 90%;
      color: #999999;
    }

    &::after {
      display: block;
      content: "";
      width: 1px;
      height: 0.9375rem;
      background: #d8d8d8;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  > div:nth-child(2) {
    float: left;
    width: 25%;
    text-align: center;
    transform: translateY(25%);

    i {
      font-size: 0.75rem;
      color: #69b3ff;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
