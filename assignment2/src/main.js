import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import store from "./store/index";
import router from "./router";

import BaseCard from "@/components/ui/BaseCard";
// import BaseButton from "@/components/ui/BaseButton";
// import BaseBadge from "@/components/ui/BaseBadge";

Vue.use(VueRouter);
Vue.component("BaseCard", BaseCard);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
