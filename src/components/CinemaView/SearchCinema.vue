<template>
  <div>
    <!-- 搜索影院 -->
    <div class="search-cinema">
      <router-link to="/city" tag="div" class="location">
        {{ city }}
        <van-icon name="arrow-down" />
      </router-link>
      <router-link to="/search" tag="div" class="search">
        <van-button type="default">
          <van-icon name="search" />搜电影
        </van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: String
  }
};
</script>

<style lang="scss" scoped>
.search-cinema {
  width: 100vw;
  height: 1.4063rem;
  background: #f5f5f5;
  line-height: 1.4063rem;
  display: flex;

  .location {
    margin-left: 0.4688rem;
    margin-right: 0.4688rem;
    font-size: 0.4375rem;

    > i {
      vertical-align: middle;
    }
  }
  .search {
    padding-right: 0.4688rem;
    flex: 1;
  }
  .van-button {
    width: 100%;
    align-self: center;
    height: 0.875rem;
    line-height: 0.875rem;
    border-radius: 5px;
  }
}
.van-button__text {
  color: #b2b2b2;
  > i {
    vertical-align: middle;
    font-size: 16px;
  }
}
</style>
