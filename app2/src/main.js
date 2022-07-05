import Vue from "vue";
import App from "./App.vue";
import User from "./components/User.vue";
import CreateUserForm from "./components/CreateUserForm.vue";

Vue.config.productionTip = false;

Vue.component("user-component", User);
Vue.component("create-user", CreateUserForm);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
