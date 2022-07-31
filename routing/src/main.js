import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import BeerList from "./BeerList";

import BeerComponent from "./components/BeerComponent";
import PeerComponent from "./components/PeerComponent";

import NotFound from "./screens/NotFound";

Vue.config.productionTip = false;

const routes = [
  { path: "/", redirect: "/beer" },
  {
    name: "beer",
    path: "/beer",
    component: BeerList,
    children: [
      {
        name: "beer-detail",
        path: ":beerName",
        component: BeerComponent,
        props: true,
      },
      // dynamic parameter 를 prop 으로 받음
    ],
  },
  // { path: "/beer", component: BeerList, alias: "/" },
  // ** alias doesn't change the URL
  { path: "/peer", component: PeerComponent },
  { path: "/:catchAll(.*)", component: NotFound },
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
