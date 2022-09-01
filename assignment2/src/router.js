import VueRouter from "vue-router";

import PotatoDetail from "./screens/potatoes/PotatoDetail.vue";
import PotatoList from "./screens/potatoes/PotatoList.vue";
import PotatoRegister from "./screens/potatoes/PotatoRegister.vue";

import OrderPotato from "./screens/orders/OrderPotato.vue";
import OrderList from "./screens/orders/OrderList.vue";

import NotFound from "./screens/NotFound.vue";
import SignIn from "./screens/SignIn.vue";
import NeedLogin from "./components/NeedLogin.vue";

import store from "@/store/index";

const routes = [
  { path: "/", redirect: "/potatoes" },
  { path: "/login", component: SignIn, meta: { onlyUnAuth: true } },
  { path: "/potatoes", component: PotatoList },
  {
    name: "potatoDetail",
    path: "/potatoes/:id",
    component: PotatoDetail,
    children: [{ name: "order", path: "order", component: OrderPotato }],
  },
  {
    name: "register",
    path: "/register",
    component: PotatoRegister,
    meta: { onlyAuth: true },
  },
  { path: "/orders", component: OrderList, meta: { onlyAuth: true } },
  { name: "redirect", path: "/redirect", component: NeedLogin },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const isSignIn = store.getters.getIsSignIn;
  if (to.meta.onlyAuth) {
    store.dispatch("trySignIn");
    if (store.getters.getIsSignIn) {
      next();
    } else {
      next("/redirect");
    }
  } else if (to.meta.onlyUnAuth && isSignIn) {
    next("/");
  }
  next();
});
export default router;
