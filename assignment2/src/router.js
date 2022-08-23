import VueRouter from "vue-router";

import PotatoDetail from "./screens/potatoes/PotatoDetail.vue";
import PotatoList from "./screens/potatoes/PotatoList.vue";
import PotatoRegister from "./screens/potatoes/PotatoRegister.vue";

import OrderPotato from "./screens/orders/OrderPotato.vue";
import OrderList from "./screens/orders/OrderList.vue";

import NotFound from "./screens/NotFound.vue";
import SignIn from "./screens/SignIn.vue";

import store from "@/store/index";

const routes = [
  { path: "/", redirect: "/potatoes" },
  { path: "/login", component: SignIn },
  { path: "/potatoes", component: PotatoList },
  {
    name: "potatoDetail",
    path: "/potatoes/:id",
    component: PotatoDetail,
    children: [{ name: "order", path: "order", component: OrderPotato }],
  },
  { name: "register", path: "/register", component: PotatoRegister },
  { path: "/orders", component: OrderList },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "order" || to.name === "register") {
    const isSignIn = store.getters.getIsSignIn;
    if (isSignIn) {
      next();
    } else {
      next("/");
    }
  }
  next();
});
export default router;
