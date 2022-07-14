import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = true;
import BaseCard from "./components/UI/BaseCard";
Vue.component("BaseCard", BaseCard);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
