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
    signOut(state) {
      state.isSignIn = false;
      state.userId = null;
      state.uid = null;
    },
  },
  actions: {
    signIn(context, payload) {
      const expire = localStorage.getItem("expire");
      const left = expire - new Date();

      context.commit("signIn", payload);
    },
    signOut(context) {
      context.commit("signOut");
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
