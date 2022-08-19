import VueRouter from "vue-router";

import PotatoDetail from "./screens/potatoes/PotatoDetail.vue";
import PotatoList from "./screens/potatoes/PotatoList.vue";
import PotatoRegister from "./screens/potatoes/PotatoRegister.vue";

import OrderPotato from "./screens/orders/OrderPotato.vue";
import OrderList from "./screens/orders/OrderList.vue";

import NotFound from "./screens/NotFound.vue";
import SignIn from "./screens/SignIn.vue";

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
  { path: "/register", component: PotatoRegister },
  { path: "/orders", component: OrderList },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
