import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import BeerScreen from "./screens/BeerScreen";
import PeerScreen from "./screens/PeerScreen";

import BeerComponent from "./components/BeerComponent";
import PeerComponent from "./components/PeerComponent";

import BeerFooter from "./components/BeerFooter";
import PeerFooter from "./components/PeerFooter";

import NotFound from "./screens/NotFound";

Vue.config.productionTip = false;

const routes = [
  { path: "/", redirect: "/beer" },
  {
    name: "beer",
    path: "/beer",
    components: {
      default: BeerScreen,
      footer: BeerFooter,
    },
    children: [
      {
        name: "beer-detail",
        path: ":beerName",
        component: BeerComponent,
        props: true,
        beforeEnter(to, from, next) {
          if (to.name === "beer") next();
          else
            next({
              name: "beer",
            });
        },
      },
      // dynamic parameter 를 prop 으로 받음
    ],
  },
  // { path: "/beer", component: BeerScreen, alias: "/" },
  // ** alias doesn't change the URL
  {
    name: "peer",
    path: "/peer",
    components: {
      default: PeerScreen,
      footer: PeerFooter,
    },
    children: [
      {
        name: "peer-detail",
        path: "detail",
        component: PeerComponent,
      },
    ],
  },
  { path: "/:catchAll(.*)", component: NotFound },
];
const router = new VueRouter({
  mode: "history",
  routes,
  // active route 클래스명 지정
  // linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    // 어디로 scroll 할지 return
    return savedPosition || { x: 0, y: 0 };
  },
});

// router 에 의한 이동이 있을 때 항상 호출
router.beforeEach((to, from, next) => {
  /* next(false); route 변경 중지 => unauthorized user 에게 적용가능
  if (to.name !== "beer") next("/beer"); // route 변경 실행
  else next();
  */
  next();
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
