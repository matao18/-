import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import Download from "../views/Download";
import CinemaView from "../views/CinemaView";
import MyView from "../views/MyView";
Vue.use(VueRouter);

const routes = [
  {
    name: "猫眼电影",
    path: "/",
    component: HomeView,
    meta: {
      keepAlive: true
    }
  },
  {
    name: "下载",
    path: "/download",
    component: Download,
    meta: {
      keepAlive: true
    }
  },
  {
    name: "影院",
    path: "/cinema",
    component: CinemaView,
    meta: {
      keepAlive: true
    }
  },
  {
    name: "我的",
    path: "/my",
    component: MyView,
    meta: {
      keepAlive: true
    }
  },
  {
    name: "电影信息",
    path: "/cinema/movie/:id",
    component: () => import("../views/MovieInfo")
  },
  {
    name: "电影院信息",
    path: "/cinema/details/:id",
    component: () => import("../views/CinemaDetails")
  },
  {
    name: "地图",
    path: "/cinema/map/:id",
    component: () => import("../views/MapView")
  },
  {
    name: "地图",
    path: "/cinema/map/:id",
    component: () => import("../views/MapView")
  },
  {
    name: "选择座位",
    path: "/seat/:id",
    component: () => import("../views/SelectedSeat")
  },
  {
    name: "登录",
    path: "/login",
    component: () => import("../views/LoginView"),
    meta: {
      keepAlive: true
    }
  },
  {
    name: "电影预购详情",
    path: "/presell/:id",
    component: () => import("../views/PressellView")
  },
  {
    name: "城市列表",
    path: "/city",
    component: () => import("../views/CityListView")
  },
  {
    name: "电影搜索",
    path: "/search",
    component: () => import("../views/SearchView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
