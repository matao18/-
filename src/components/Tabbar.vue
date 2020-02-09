<template>
  <div>
    <nav class="bottom-nav-bar">
      <div
        class="nav-icon-wrapper"
        v-for="(item, index) in data"
        :key="index"
        @click="trigger(index)"
        :class="{ con: currentNum == index }"
      >
        <i class="iconfont" :class="item.icon"></i>
        <p>{{ item.name }}</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { name: "电影", icon: "icon-cinema", path: "/" },
        { name: "影院", icon: "icon-caidanicondianyinghui", path: "/cinema" },
        { name: "我的", icon: "icon-my", path: "/my" }
      ]
    };
  },
  computed: {
    currentNum: function() {
      if (this.$route.path == "/") {
        return 0;
      } else if (this.$route.path == "/cinema") {
        return 1;
      } else if (this.$route.path == "/my") {
        return 2;
      }
      return 0;
    }
  },
  methods: {
    trigger(id) {
      this.current = id;
      if (this.$route.path === this.data[id]["path"]) return;
      this.$router.push({ path: this.data[id]["path"] });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/font.scss");
.bottom-nav-bar {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  border-top: 1px solid#D8D8D8;
  background: #fff;
  color: #696969;
  z-index: 10;
  > .nav-icon-wrapper {
    flex: 1;
    text-align: center;
    height: 1.5625rem;
    font-size: 12px;
    > i {
      line-height: 1.0938rem;
      font-size: 0.7188rem;
    }
  }
  .con {
    color: #f03d37;
  }
}
</style>
