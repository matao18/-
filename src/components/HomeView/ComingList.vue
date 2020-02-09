<template>
  <div>
    <!-- 滑动组件 -->
    <SlideComponent :movieInfo="movieInfo" />
    <!-- list列表 -->
    <van-index-bar class="list" :index-list="indexList" :sticky="sticky">
      <van-index-anchor
        v-for="(item, index) in movieDay"
        :key="index"
        :index="item"
      >
        {{ item }}
        <div
          v-for="movieitem in movieInfo.filter(
            items => items.comingTitle == item
          )"
          :key="movieitem.id"
        >
          <div class="content-wrapper">
            <img
              class="avatar-img"
              :alt="movieitem.nm"
              :src="movieitem.img.replace(/\/w.h/, '')"
            />
            <div class="movie-right">
              <div class="movie-info">
                <div class="box-title">
                  <p :class="{ con: movieitem.nm.length >= 10 }">
                    {{ movieitem.nm }}
                  </p>
                  <img v-show="movieitem.version" src="/image/2d.png" alt />
                </div>
                <div class="box-score">
                  <span class="active">{{ movieitem.wish }}</span>
                  <span v-show="!movieitem.globalReleased">人想看</span>
                </div>
              </div>
              <div class="movie-btn">
                <van-button
                  color="#3C9FE6"
                  v-show="movieitem.comingTitle == movieDay[0]"
                  :to="{ path: '/presell/' + movieitem.id + '' }"
                  >预售</van-button
                >
                <van-button
                  color="#FAAF00"
                  v-show="movieitem.comingTitle != movieDay[0]"
                  >想看</van-button
                >
              </div>
            </div>
          </div>
        </div>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);

export default {
  data() {
    return {
      offsetNum: 0,
      movieInfo: [],
      indexList: [],
      movieDay: [],
      sticky: false
    };
  },
  components: {
    SlideComponent: () => import("./SlideComponent")
  },
  methods: {
    requestInfo() {
      this.axios({
        method: "get",
        url: "/mostExpected",
        params: {
          token: "",
          limit: 29,
          offset: this.offsetNum
        }
      }).then(data => {
        if (JSON.stringify(this.movieInfo) === "{}") {
          this.movieInfo = data.data.coming;
        } else {
          this.movieInfo.push(...data.data.coming);
        }
        this.offsetNum += 16;
        if (data.data.coming.length !== 0) {
          this.requestInfo();
        } else {
          // 选出所有日期
          let movieDay = [];
          this.movieInfo.forEach(item => {
            if (movieDay.indexOf(item.comingTitle) == -1) {
              movieDay.push(item.comingTitle);
            }
          });
          // 排序
          movieDay = movieDay.sort((a, b) => {
            if (a.match(/\d+/g).join("") < b.match(/\d+/g).join("")) {
              return -1;
            }
          });
          this.movieDay = movieDay;
          // 删除待定
          this.movieDay = this.movieDay.map(item => {
            if (item.indexOf("待定") == -1) {
              return item;
            }
          });
        }
      });
    }
  },
  created() {
    this.requestInfo();
  }
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;

  .avatar-img {
    width: 2.0313rem;
    height: 2.8125rem;
    margin-top: 0.375rem;
    margin-right: 0.3125rem;
  }

  > .movie-right {
    padding: 0.375rem 0.4375rem 1.7625rem 0;
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

.list {
  padding: 0 0.625rem;
  border-top: 0.3125rem solid #f5f5f5;
}
</style>
