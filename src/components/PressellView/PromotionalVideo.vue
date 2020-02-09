<template>
  <div class="container">
    <div class="title">宣传片</div>
    <div class="movie-video">
      <video :src="videoUrl" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: String
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-top: 0.375rem solid #f5f5f5;
  padding: 0.3125rem;
}

.title {
  font-size: 0.4375rem;
  color: #555555;
  padding-bottom: 0.3125rem;
}

.movie-video {
  width: 100%;
  > video {
    width: 100%;
    object-fit: fill;
  }
}
</style>
