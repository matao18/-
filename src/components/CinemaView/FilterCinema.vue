<template>
  <!-- 下拉菜单 -->
  <div class="dropdown-menu">
    <ul class="meun-wrapper">
      <li>
        全城
        <van-icon name="arrow-down" size="12px" />
      </li>
      <li>
        品牌
        <van-icon name="arrow-down" size="12px" />
      </li>
      <li>
        特色
        <van-icon name="arrow-down" size="12px" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {}
    };
  },
  methods: {
    filterCinemas() {
      this.axios("/ajax/filterCinemas").then(data => {
        this.filter = data.data;
      });
    }
  },
  created() {
    this.filterCinemas();
  }
};
</script>

<style lang="scss" scoped>
.meun-wrapper {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
  background: #fff;
  > li {
    flex: 1;
    text-align: center;
    color: #777777;
    position: relative;
    font-size: 0.375rem;
    > i {
      vertical-align: middle;
    }

    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 0.4688rem;
      background: #e8e8e8;
      position: absolute;
      top: 0.4063rem;
      right: -0.0625rem;
    }
  }
}
.van-popup {
  width: 100%;
  top: 4.25rem;
}
</style>
