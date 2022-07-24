// import dotenv from "dotenv";
import Vue from "vue";
import App from "./App.vue";

// dotenv.config();
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
