<template>
  <div id="app" class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!--这里是会被缓存的路由-->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!--因为用的是v-if 所以下面还要创建一个未缓存的路由视图出口-->
    </router-view>
    <!-- 底部tab -->
    <Tabbar v-show="show" />
  </div>
</template>
<script>
import Tabbar from "./components/Tabbar";
import { mapState } from "vuex";
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {},
  components: {
    Tabbar
  },
  watch: {
    "$route.path": function(newval) {
      if (newval === "/" || newval === "/cinema" || newval === "/my") {
        this.show = true;
        return;
      }
      this.show = false;
    }
  },
  mounted() {
    console.log();
    this.$router.beforeEach((to, from, next) => {
      if (to.path === "/my" && !this.login) {
        this.$router.push({ name: "登录", params: { to } });
      } else {
        next();
      }
    });
  },
  computed: {
    ...mapState({
      login: "login"
    })
  }
};
</script>

<style>
/* 引入字体图标 */
@import "./assets/scss/font.scss";
@import "./assets/scss/vantList.scss";

.app {
  font-size: 0.375rem;
}
</style>
