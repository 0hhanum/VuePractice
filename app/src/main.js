import Vue from "vue";
import App from "./App.vue";
import Contact from "./components/Contact";

Vue.config.productionTip = false;
Vue.component("contact-component", Contact, {
  props: ["person"],
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
