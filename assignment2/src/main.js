import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import store from "./store/index";
import router from "./router";

import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
import ToastMessage from "@/components/ui/ToastMessage";

Vue.use(VueRouter);
Vue.component("BaseCard", BaseCard);
Vue.component("BaseButton", BaseButton);
Vue.component("ToastMessage", ToastMessage);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
