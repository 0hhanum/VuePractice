import VueRouter from "vue-router";

import PotatoDetail from "./screens/potatoes/PotatoDetail.vue";
import PotatoList from "./screens/potatoes/PotatoList.vue";
import PotatoBuy from "./screens/potatoes/PotatoBuy.vue";

import OrderPotato from "./screens/orders/OrderPotato.vue";
import OrderedPotato from "./screens/orders/OrderedPotato.vue";

import NotFound from "./screens/NotFound.vue";

const routes = [
  { path: "/", redirect: "/potatoes" },
  { path: "/potatoes", component: PotatoList },
  {
    path: "/potatoes/:id",
    component: PotatoDetail,
    children: [{ path: "buy", component: PotatoBuy }],
  },
  { path: "/order", component: OrderPotato },
  { path: "/ordered", component: OrderedPotato },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
