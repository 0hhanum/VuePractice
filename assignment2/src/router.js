import VueRouter from "vue-router";

const routes = [
  { path: "/", redirect: "/potatoes" },
  { path: "/potatoes", component: null },
  {
    path: "/potatoes/:id",
    component: null,
    children: [{ path: "contact", component: null }],
  },
  { path: "/register", component: null },
  { path: "/requests", component: null },
  { path: "/:notFound(.*)", component: null },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
