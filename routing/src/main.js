import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import BeerComponent from "./components/BeerComponent";
import PeerComponent from "./components/PeerComponent";

Vue.config.productionTip = false;

const routes = [
  { path: "/beer", component: BeerComponent },
  { path: "/peer", component: PeerComponent },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
