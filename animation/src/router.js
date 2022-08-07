import VueRouter from "vue-router";
import MainScreen from "./screens/MainScreen";
import SubScreen from "./screens/SubScreen";

const routes = [
  {
    name: "a",
    path: "/a",
    component: MainScreen,
  },
  {
    name: "b",
    path: "/b",
    component: SubScreen,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
