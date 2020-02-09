<template>
  <div>
    <!-- list列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <router-link
        :to="'/cinema/details/' + item.id"
        v-for="item in list"
        tag="div"
        :key="item.id"
        class="cinema-list"
      >
        <div class="cinema-name">
          <h3>{{ item.nm }}</h3>
          <span>{{ item.sellPrice }}</span>
          <span v-show="item.sellPrice">元起</span>
        </div>
        <div class="cinema-address">
          <p>{{ item.addr }}</p>
          <span>{{ item.distance }}</span>
        </div>
        <div
          class="cinema-advertising"
          v-show="item.promotion.cardPromotionTag"
        >
          <img src="/image/card.png" alt />
          {{ item.promotion.cardPromotionTag }}
        </div>
      </router-link>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cinemaList: [],
      list: [],
      loading: false,
      finished: false,
      num: 0,
      flag: 0
    };
  },
  methods: {
    reqCinemaList(offset) {
      this.finished = false;
      // 影城信息
      this.axios({
        method: "get",
        url: "/ajax/cinemaList",
        params: {
          limit: 10,
          offset
        }
      }).then(data => {
        this.cinemaList.push(...data.data.cinemas);
        this.finished = false;
      });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          if (!this.cinemaList[this.num]) continue;
          this.list.push(this.cinemaList[this.num]);
          this.num += 1;
        }
        if (this.flag < this.num) {
          if (this.list.length >= 10) {
            this.flag = this.num;
            this.reqCinemaList(this.num);
          }
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.cinemaList.length) {
          if (this.list.length > 0) {
            this.finished = true;
          }
          // console.log(this.cinemaList);
        }
      }, 500);
    }
  },
  created() {
    this.reqCinemaList(0);
  }
};
</script>

<style lang="scss" scoped>
.van-list {
  margin-bottom: 1.5625rem;
}

.cinema-list {
  padding: 0.3125rem 0;
  margin: 0 0.3125rem;
  border-bottom: 1px solid #f5f5f5;

  .cinema-name {
    display: flex;
    margin-bottom: 0.3125rem;

    h3 {
      font-size: 0.5rem;
      margin-right: 0.1563rem;
    }

    span {
      color: #f03d37;
    }

    span:nth-of-type(1) {
      font-size: 0.625rem;
      margin-top: -0.1875rem;
    }
  }

  .cinema-address {
    color: #666666;
    display: flex;
    margin-bottom: 0.25rem;
    > p {
      width: 80vw;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .cinema-advertising {
    color: #666666;
    > img {
      width: 0.4688rem;
      height: 0.4688rem;
    }
  }
}
</style>
