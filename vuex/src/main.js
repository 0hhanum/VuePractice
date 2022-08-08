import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      items: ["a", "b", "c", "d"],
      loggedIn: false,
    };
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload.value);
    },
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
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
    getIsLoggedIn(state) {
      return state.loggedIn;
    },
  },
  actions: {
    addItem(context, payload) {
      context.commit("addItem", payload);
    },
    async login(context) {
      const request = await setTimeout(() => {
        context.commit("login");
        clearTimeout(request);
      }, 3000);
    },
    async logout(context) {
      const request = await setTimeout(() => {
        context.commit("logout");
        clearTimeout(request);
      }, 3000);
    },
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
