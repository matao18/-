<template>
  <div>
    <div v-if="list.length">
      <div class="movie-list">
        <div class="title">电影/电视剧/综艺</div>
        <div
          class="content"
          v-for="item in list"
          :key="item.id"
          @click="go(item.id)"
        >
          <div class="avater">
            <img :src="item.img.replace(/\w.h/, '')" alt />
          </div>
          <div class="movie-info">
            <div class="name">
              <span class="name-details">
                {{ item.nm }}
                <span v-show="item.version">
                  <img src="/image/2d.png" alt />
                </span>
              </span>
              <span class="evaluate" v-show="item.sc">{{ item.sc }}分</span>
              <span class="evaluate add" v-show="!item.sc">暂无评分</span>
            </div>
            <div class="other">
              <p>{{ item.enm }}</p>
              <p>{{ item.cat }}</p>
              <p>{{ item.rt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nothing" v-else>没有找到相关内容</div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods: {
    go(id) {
      console.log(id);
      this.$router.push({ path: `presell/${id}` });
    }
  }
};
</script>

<style lang="scss" scoped>
.nothing {
  width: 100%;
  text-align: center;
  font-size: 0.5rem;
  padding: 0.625rem;
}

.movie-list {
  width: 100%;

  > .title {
    border-bottom: 1px solid #e6e6e6;
    padding: 0.3125rem;
    font-size: 0.4375rem;
    color: #999999;
  }
}

.content {
  display: flex;
  margin: 0 0.3125rem;
  padding: 0.3125rem 0;
  border-bottom: 1px solid #e6e6e6;

  .avater {
    flex: 0 0 25vw;
    text-align: center;

    img {
      width: 2rem;
      height: 2.8125rem;
    }
  }
}

.movie-info {
  flex: 1;

  .name {
    font-weight: 900;
    font-size: 0.5625rem;
    position: relative;
    padding: 5px 0;

    > .name-details:nth-of-type(1) {
      display: inline-block;
      width: 4.6875rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span > img {
      width: 1.3438rem;
    }

    .evaluate {
      color: $color;
      float: right;
    }

    .add {
      font-weight: 400;
      font-size: 0.375rem;
      color: #666;
    }
  }

  .other {
    p {
      padding: 0.0938rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 60vw;
    }
  }
}
</style>
