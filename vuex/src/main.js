import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      items: ["a", "b", "c", "d"],
    };
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
  },
  getters: {
    getItems(state) {
      return [...state.items, "1", "2", "3"];
    },
    getItems2(_, getter) {
      const items = getter.getItems;
      items.pop();
      return items;
    },
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
