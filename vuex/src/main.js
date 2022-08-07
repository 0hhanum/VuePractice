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
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
