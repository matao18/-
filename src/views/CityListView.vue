<template>
  <div>
    <div class="lsit" v-if="cityArray">
      <van-index-bar :sticky="sticky" highlight-color="#000">
        <van-index-anchor
          :index="item.initial"
          v-for="(item, index) in cityArray"
          :key="index"
        >
          <h2>{{ item.initial }}</h2>
          <div
            class="city-list"
            v-for="(list, index) in item.list"
            :key="index"
            @click="go"
          >
            {{ list.name }}
          </div>
        </van-index-anchor>
      </van-index-bar>
    </div>

    <div class="loading" v-else>
      <van-loading />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Loading } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Loading);
export default {
  data() {
    return {
      cityArray: "",
      sticky: false
    };
  },
  created() {
    this.axios("/ajax/city").then(data => {
      let arr = data.data.data.city;
      this.cityArray = arr;
      console.log(this.cityArray);
    });
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lsit {
  background: #ebebeb;

  h2 {
    padding: 0 0.625rem;
  }

  .city-list {
    padding: 0.1563rem 0.625rem;
    background: #f5f5f5;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: #c8c7cc;
    }
  }
}
.van-index-anchor > div:last-child::after {
  background: transparent;
}
</style>
