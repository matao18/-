<template>
  <div class="container">
    <div class="title">媒体库</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in moviePhotos"
          :key="index"
        >
          <img :src="item.replace(/\/w.h/, '')" alt="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper.css 样式
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
export default {
  props: {
    moviePhotos: Array
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 2.5,
      spaceBetween: 5,
      freeMode: true
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-top: 0.375rem solid #f5f5f5;
  padding: 0.3125rem;

  .title {
    font-size: 0.4375rem;
    color: #555555;
    padding-bottom: 0.3125rem;
  }

  .swiper-wrapper {
    height: 2.5rem;

    .swiper-slide {
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
