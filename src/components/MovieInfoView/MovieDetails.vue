<template>
  <div>
    <router-link to="/" tag="div" class="movie-details">
      <div class="movie-filter"></div>
      <div
        class="movie-bg"
        :style="{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0'
        }"
      >
        <img :src="movieDetails.img.replace(/\/w.h/, '')" alt />
      </div>
      <div class="movie-list">
        <div class="left">
          <img :src="movieDetails.img.replace(/\/w.h/, '')" alt />
        </div>
        <div class="right">
          <h2>{{ movieDetails.nm }}</h2>
          <p>{{ movieDetails.enm }}</p>
          <div class="box-score">
            <span v-show="movieDetails.globalReleased && movieDetails.sc === 0">
              暂无评分
            </span>
            <span
              class="active"
              v-show="movieDetails.globalReleased && movieDetails.sc != 0"
            >
              &nbsp;{{ movieDetails.sc }}
            </span>
            <span
              class="snum"
              v-show="movieDetails.globalReleased && movieDetails.sc !== 0"
            >
              {{ snum }}
            </span>
          </div>
          <div class="plot">
            <p>{{ movieDetails.cat }}</p>
            <p>{{ movieDetails.src }}/{{ movieDetails.dur }}分钟</p>
            <p>{{ movieDetails.pubDesc }}</p>
          </div>
        </div>
        <div class="icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movieDetails: Object
  },
  computed: {
    snum() {
      let num = this.movieDetails.snum.toString();
      let length = num.length;
      num = num.slice(0, length - 3);
      num = num.split("");
      let snum = "";
      for (let i = 0; i < num.length; i++) {
        if (i == num.length - 1) {
          snum += ",";
        }
        snum += num[i];
      }
      return `(${snum}万人评)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.movie-details {
  height: 4.6875rem;
  overflow: hidden;
  position: relative;
  padding: 0.5938rem 15px 0.5938rem 0.4688rem;
  box-sizing: content-box;
}

.movie-filter {
  width: 100%;
  height: 100%;
  background: #333;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}

.movie-bg {
  width: 100%;
  height: 100%;
  z-index: -1;

  > img {
    width: 100%;
    height: 100%;
    filter: blur(15px);
    opacity: 0.66;
  }
}

.movie-list {
  width: 100%;
  display: flex;
  z-index: 1;

  .left {
    > img {
      width: 3.4375rem;
      height: 4.6875rem;
    }
  }

  .right {
    color: #dbdbdc;
    flex: 1;
    padding-left: 0.3125rem;

    > h2 {
      font-weight: bolder;
      color: #fff;
      font-size: 0.5625rem;
      margin-bottom: 0.3125rem;
    }

    > p {
      margin-bottom: 15px;
      white-space: nowrap;
    }
  }
}

.box-score {
  margin-bottom: 0.3125rem;
  > .active {
    color: #faaf00;
    font-weight: 800;
    font-size: 0.5rem;
  }
  .snum {
    margin-left: 0.1563rem;
    font-weight: 900;
  }
}

.icon {
  height: 4.6875rem;
  color: #fff;
  font-size: 18px;
  line-height: 4.6875rem;
}

.plot {
  > p {
    margin-bottom: 0.3125rem;
  }
}
</style>
