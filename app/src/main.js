import Vue from "vue";
import App from "./App.vue";
import Contact from "./components/Contact";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

Vue.component("contact-component", Contact);
