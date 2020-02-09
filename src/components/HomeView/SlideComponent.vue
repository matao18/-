<template>
  <div>
    <h2 class="slide-title">近期最受期待</h2>
    <div class="slide-wrapper">
      <div class="slide-list">
        <div
          @click="$router.push('/presell/' + item.id)"
          class="movie-info"
          v-for="item in movieInfo"
          :key="item.id"
        >
          <div class="movie-img">
            <img :src="item.img.replace(/\/w.h/, '')" :alt="item.nm" />
          </div>
          <span class="movie-wish">{{ item.wish }}人想看</span>
          <h5>{{ item.nm }}</h5>
          <p>{{ item.comingTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: {
      type: [Array]
    }
  }
};
</script>

<style lang="scss" scoped>
h2.slide-title {
  padding-left: 0.4688rem;
  padding-top: 0.4688rem;
  font-size: 0.4375rem;
}

.slide-wrapper {
  width: 92vw;
  overflow: scroll;

  > div.slide-list {
    display: flex;
    padding: 0.4688rem;
  }

  &::-webkit-scrollbar {
    display: none; //Safari and Chrome
  }
}

.movie-info {
  margin-right: 0.3125rem;
  position: relative;
  img {
    width: 100%;
    height: 3.5938rem;
    width: 2.6563rem;
  }

  .movie-wish {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    color: #faaf00;
    font-weight: 600;
    position: absolute;
    top: 3.1938rem;
  }

  > h5 {
    font-weight: 600;
    margin-top: 0.0938rem;
    font-size: 0.4688rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 2.8125rem;
  }

  > p {
    margin-top: 0.0938rem;
    color: #999999;
  }
}
</style>
