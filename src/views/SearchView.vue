<template>
  <div>
    <!-- 头部 -->
    <Navbar :title="name" :flag="falg" />
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @input="onSearch(value)"
        @cancel="onCancel"
        background="#F5F5F5"
      />
    </form>
    <!-- 列表 -->
    <SearchList v-if="list" :list="list" />
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
var debounce = require("lodash.debounce");

export default {
  data() {
    return {
      name: "猫眼电影",
      falg: false,
      value: "",
      list: ""
    };
  },
  methods: {
    onSearch: debounce(function(val) {
      if (val == "") {
        this.list = "";
        return;
      }
      this.axios({
        method: "get",
        url: "ajax/search",
        params: {
          kw: val,
          cityId: 117
        }
      }).then(data => {
        if (data.data.movies !== undefined) {
          this.list = data.data.movies.list;
          return;
        }
        this.list = [];
      });
    }, 500),
    onCancel() {
      this.$router.go(-1);
    }
  },
  components: {
    Navbar: () => import("../components/MovieInfoView/Navbar"),
    SearchList: () => import("../components/SearchView/SearchList")
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.van-search {
  border-bottom: 1px solid #e5e5e5;
}

.van-search__content {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.van-search__action {
  color: $font-color;
}
</style>