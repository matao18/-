<template>
  <div id="List">
    <!-- 滑动 组件 -->
    <SlideComponent :movieInfo="movieInfo.movieList" />
    <!-- 热映列表 -->
    <div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="offset"
        ref="list"
      >
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div v-for="item in list" :key="item.id">
            <div class="content-wrapper">
              <img
                class="avatar-img"
                :alt="item.nm"
                v-lazy="item.img.replace(/\/w.h/, '')"
              />
              <div class="movie-right">
                <div class="movie-info">
                  <div class="box-title">
                    <p :class="{ con: item.nm.length >= 10 }">{{ item.nm }}</p>
                    <img v-show="item.version" src="/image/2d.png" alt />
                  </div>
                  <div class="box-score">
                    <span v-show="item.globalReleased && item.sc === 0">
                      暂无评分
                    </span>
                    <span v-show="item.globalReleased && item.sc !== 0">
                      观众评
                    </span>
                    <span
                      class="active"
                      v-show="item.globalReleased && item.sc != 0"
                      >&nbsp;{{ item.sc }}
                    </span>
                    <span class="active" v-show="!item.globalReleased">
                      {{ item.wish }}
                    </span>
                    <span v-show="!item.globalReleased">人想看</span>
                  </div>
                  <div class="box-star">
                    <span>主演:</span>
                    <span class="active">{{ item.star }}</span>
                  </div>
                  <p class="show-info">{{ item.showInfo }}</p>
                </div>
                <div class="movie-btn">
                  <van-button
                    :to="'/cinema/movie/' + item.id"
                    v-show="item.globalReleased"
                    color="#F03D37"
                    >购票</van-button
                  >
                  <van-button
                    v-show="!item.globalReleased"
                    color="#3C9FE6"
                    :to="'/presell/' + item.id"
                    >预售</van-button
                  >
                </div>
              </div>
            </div>
          </div>
        </van-pull-refresh>
      </van-list>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast, Lazyload } from "vant";

Vue.use(Toast);
Vue.use(Lazyload);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      movieIndex: 0,
      isLoading: false,
      offset: 10
    };
  },
  props: {
    movieInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          if (!this.movieInfo.movieList[this.movieIndex]) continue;
          this.list.push(this.movieInfo.movieList[this.movieIndex]);
          this.movieIndex++;
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.movieInfo.movieList.length) {
          this.finished = true;
        }
      }, 500);
      if (this.movieIndex > 5) {
        this.$emit("addMoiveList");
      }
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.list = [];
        this.onLoad();
        this.movieIndex = 0;
        this.finished = false;
      }, 1000);
    }
  },
  components: {
    SlideComponent: () => import("./SlideComponent")
  }
};
</script>

<style lang="scss" scoped>
.van-list {
  width: 100%;
  overflow: hidden;
}

.content-wrapper {
  display: flex;
  padding-left: 0.4688rem;

  .avatar-img {
    width: 2.0313rem;
    height: 2.8125rem;
    margin-top: 0.375rem;
    margin-right: 0.3125rem;
  }

  > .movie-right {
    padding: 0.375rem 0.4375rem 0.5625rem 0;
    width: 70vw;
    position: relative;
    line-height: 0.6575rem;
    border-bottom: 1px solid #f0f0f0;
  }

  .movie-btn {
    position: absolute;
    right: 0.0032px;
    top: 0.625rem;
  }

  .movie-info {
    font-size: 0.375rem;
    color: #666666;

    > .box-title {
      display: flex;
      font-weight: 800;
      font-size: 0.5313rem;
      color: #000;
    }

    > .box-title p.con {
      width: 50vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > .box-title img {
      width: 1.3438rem;
      height: 0.4375rem;
      margin-left: 0.1563rem;
      margin-top: 0.0938rem;
    }

    .box-score {
      > .active {
        color: #faaf00;
        font-weight: 800;
        font-size: 0.5rem;
      }
    }

    .box-star {
      span {
        display: inline-block;
      }

      .active {
        width: 40vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
      }
    }
  }
}

.movie-btn {
  height: 0.625rem;
  width: 60px;
  font-size: 0.375rem;
}

.van-button {
  line-height: 0.625rem;
  border-radius: 3px;
  height: 0.725rem;
}

.van-button--normal {
  padding: 0 0.1563rem;
}
</style>
