import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
