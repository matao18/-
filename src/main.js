import Vue from "vue";
// 引入axios
import VueAxios from "vue-axios";
import axios from "axios";
// Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);

import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入vant
import { Button, Icon, List, PullRefresh, NavBar } from "vant";
Vue.use(List);
Vue.use(Button);
Vue.use(Icon);
Vue.use(PullRefresh);
Vue.use(NavBar);
// 引入jsonp
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
