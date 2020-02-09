<template>
  <div v-if="MovieList.length">
    <!-- 列表轮播图 -->
    <div class="swiper-container">
      <div
        :style="{
          backgroundImage:
            'url(' + MovieList[current].img.replace(/\/w.h/, '') + ')',
          height: '100%',
          width: '100%',
          filter: 'blur(30px)',
          zIndex: '-2',
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundPosition: '0 40%'
        }"
      ></div>
      <div class="bg"></div>
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in MovieList"
          :key="index"
        >
          <div>
            <img :src="item.img.replace(/\/w.h/, '')" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="movie-title">
      <h2>
        {{ MovieList[current].nm }}
        <span>{{ MovieList[current].sc }}分</span>
      </h2>
      <p>{{ MovieList[current].desc }}</p>
    </div>
    <!-- 列表导航 -->
    <CinemaListNav
      :shows="MovieList[current].shows"
      :movieTotal="MovieList[current].dur"
      :name="MovieList[current].nm"
    />
  </div>
</template>

<script>
// 引入swiper.css 样式
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
export default {
  data() {
    return {
      current: 0
    };
  },
  props: {
    MovieList: Array
  },
  mounted() {
    let _this = this;
    new Swiper(".swiper-container", {
      slidesPerView: 3.5,
      centeredSlides: true,
      spaceBetween: 5,
      grabCursor: true,
      on: {
        slideChangeTransitionEnd: function() {
          // alert(this.activeIndex); //切换结束时，告诉我现在是第几个slide
          _this.current = this.activeIndex;
        }
      }
    });
  },
  components: {
    CinemaListNav: () => import("./CinemaListNav")
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  padding: 0.4688rem;

  .bg {
    background: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.3;
  }

  .swiper-wrapper {
    z-index: 10;
  }

  .swiper-slide {
    border: 4px solid transparent;

    > div {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  .swiper-slide-active {
    border: 2px solid #fff;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      border: 8px solid transparent;
      border-top-color: #fff;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.movie-title {
  text-align: center;
  padding: 0.3125rem;

  > h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0.3125rem;
    > span {
      font-size: 14px;
      color: #ffb400;
    }
  }

  p {
    font-size: 0.4063rem;
    color: #999;
  }
}
</style>
