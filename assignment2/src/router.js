import VueRouter from "vue-router";

import PotatoDetail from "./screens/potatoes/PotatoDetail.vue";
import PotatoList from "./screens/potatoes/PotatoList.vue";
import PotatoRegister from "./screens/potatoes/PotatoRegister.vue";

import OrderPotato from "./screens/orders/OrderPotato.vue";
import OrderedPotato from "./screens/orders/OrderedPotato.vue";

import NotFound from "./screens/NotFound.vue";

const routes = [
  { path: "/", redirect: "/potatoes" },
  { path: "/potatoes", component: PotatoList },
  {
    name: "potatoDetail",
    path: "/potatoes/:id",
    component: PotatoDetail,
    children: [{ name: "order", path: "order", component: OrderPotato }],
  },
  { path: "/register", component: PotatoRegister },
  { path: "/ordered", component: OrderedPotato },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
