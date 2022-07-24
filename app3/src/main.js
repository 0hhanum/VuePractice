import Vue from "vue";
import App from "./App.vue";

import BaseButton from "./components/BaseButton.vue";
Vue.component("BaseButton", BaseButton);
Vue.config.productionTip = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
