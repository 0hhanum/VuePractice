import Vue from "vue";
import App from "./App.vue";
import LastChild from "./components/LastChild.vue";
import MiddleChild from "./components/MiddleChild.vue";

Vue.config.productionTip = false;

Vue.component("middle-child", MiddleChild);
Vue.component("last-child", LastChild);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
