import Vue from "vue";
import App from "./App.vue";
import CardTemplate from "./components/CardTemplate";

Vue.config.productionTip = false;
Vue.component("card-template", CardTemplate);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
