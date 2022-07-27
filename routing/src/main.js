import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import BeerComponent from "./components/BeerComponent";
import BeerList from "./BeerList";
import PeerComponent from "./components/PeerComponent";

Vue.config.productionTip = false;

const routes = [
  { path: "/beer", component: BeerList },
  { path: "/peer", component: PeerComponent },
  { path: "/beer/:beerName", component: BeerComponent },
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
