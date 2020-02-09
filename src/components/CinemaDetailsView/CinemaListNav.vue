<template>
  <div class="list">
    <van-tabs v-model="active" ellipsis>
      <van-tab
        v-for="(item, index) in shows"
        :key="index"
        :title="item.dateShow"
      >
        <div>
          <div v-if="filterShow.length">
            <div
              class="movie-pay"
              v-for="(item, index) in filterShow"
              :key="index"
            >
              <div class="movie-time">
                <h2>{{ item.tm }}</h2>
                <span>{{ overTime }}</span>
              </div>
              <div class="movie-site">
                <p>{{ item.lang }}{{ item.tp }}</p>
                <span>{{ item.th }}</span>
              </div>
              <div class="movie-sum">
                <p>
                  <span class="icon">￥</span>
                  <span class="price">
                    {{
                      typeof parseInt(item.vipPrice) == "number"
                        ? parseInt(item.vipPrice) + 5
                        : 0 + 5
                    }}
                  </span>
                  <span class="vip-name" v-show="item.vipPriceName">{{
                    item.vipPriceName
                  }}</span>
                  <span class="vip-price" v-show="item.vipPrice"
                    >￥{{ item.vipPrice }}</span
                  >
                </p>
                <span>{{ item.extraDesc }}</span>
              </div>
              <div>
                <van-button @click="verify(item)" size="small" color="#F03D37"
                  >购票</van-button
                >
              </div>
            </div>
          </div>
          <div class="nothing" v-else>
            <p>今日场次以放映完</p>
            <button v-if="active + 1 < shows.length" @click="active += 1">
              点击查看{{ shows[active + 1].dateShow }}场次
            </button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0
    };
  },
  props: {
    shows: Array,
    movieTotal: Number,
    name: String
  },
  computed: {
    // 过滤时间以过去的电影场次
    filterShow() {
      let plist = this.shows[this.active].plist;
      plist.filter(item => {
        let nowDate = new Date().getTime();
        let oldDate = new Date(`${item.dt} ${item.tm}`).getTime();
        let num = oldDate - nowDate;
        if (num > 0) {
          return item;
        }
      });
      return plist;
    },
    // 计算散场时间
    overTime() {
      let arrTime = this.filterShow[0].tm.split(":");
      arrTime[1] = parseInt(arrTime[1]) + parseInt(this.movieTotal);

      let h = parseInt(arrTime[1] / 60);
      let m = arrTime[1] % 60;
      m = m < 10 ? "0" + m : m;

      return parseInt(arrTime[0]) + h + ":" + m + " " + "散场";
    }
  },
  methods: {
    // 验证是否登录
    verify(item) {
      if (!this.$store.state.login) {
        this.$router.push("/login");
        return;
      }
      this.$router.push({
        path: "/seat/" + this.$route.params.id,
        query: { name: name, ...item }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.nothing {
  height: 7.1875rem;
  background: #f0f0f0 url("/image/nothing.png") no-repeat center 1.5625rem;
  background-size: 2.5rem;

  p {
    text-align: center;
    font-size: 0.5rem;
    color: #999;
    position: relative;
    top: 4.2188rem;
  }

  > button {
    border: 1px solid #d9d9d9;
    color: #f03d37;
    background: #fff;
    padding: 0.3125rem 0.3125rem;
    border-radius: 4px;
    position: absolute;
    bottom: 0.9375rem;
    left: 50%;
    transform: translateX(-50%);
  }
}

.movie-pay {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.3125rem 0.3125rem;

  .movie-time {
    > h2 {
      font-size: 0.6875rem;
      margin-bottom: 0.1563rem;
    }

    > span {
      color: #999999;
    }
  }

  .movie-site {
    > p {
      font-size: 0.4063rem;
      margin-top: 0.1563rem;
      margin-bottom: 0.2625rem;
    }

    > span {
      color: #999;
    }
  }

  .movie-sum {
    > p {
      margin-bottom: 0.2188rem;
    }

    .icon {
      font-size: 0.375rem;
      color: #f03d37;
    }

    .price {
      margin-left: -0.125rem;
      font-size: 0.5625rem;
      color: #f03d37;
    }

    .vip-name {
      font-size: 12px;
      background: #ff9900;
      color: #fff;
      border: 2px solid #ffdeb2;
      border-right: 1px solid #ffdeb2;
      transform: scale(0.9);
      display: inline-block;
    }

    .vip-price {
      font-size: 12px;
      color: #ff9900;
      border: 2px solid #ffdeb2;
      border-left: 0;
      transform: scale(0.9) translateX(-0.0938rem);
      display: inline-block;
    }

    > span {
      color: #999;
    }
  }
}

.van-button--small {
  border-radius: 4px;
  min-width: 0;
}

.stonefont {
  font-family: "stonefont";
}
</style>
