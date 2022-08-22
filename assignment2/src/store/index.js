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
    signIn(state, userId, uid) {
      state.isSignIn = true;
      state.userId = userId;
      state.uid = uid;
    },
  },
  actions: {
    signIn(context, userId, uid) {
      context.commit("signIn", userId, uid);
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
