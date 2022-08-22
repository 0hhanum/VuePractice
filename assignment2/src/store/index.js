import Vuex from "vuex";
import Vue from "vue";

import potato from "./modules/potato";
import order from "./modules/order";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      userId: null,
      isSignIn: false,
      uid: null,
    };
  },
  mutations: {
    signIn(state, payload) {
      state.isSignIn = true;
      state.userId = payload.userId;
      state.uid = payload.uid;
    },
  },
  actions: {
    signIn(context, payload) {
      context.commit("signIn", payload);
    },
  },
  getters: {
    getCurrentUser(state) {
      return state.userId;
    },
    getIsSignIn(state) {
      return state.isSignIn;
    },
    getUid(state) {
      return state.uid;
    },
  },
  modules: { potato, order },
});

export default store;
