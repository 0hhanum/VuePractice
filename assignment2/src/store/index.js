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
      isAutoSignOut: false,
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
    autoSignOut(state) {
      state.isAutoSignOut = true;
    },
    offAutoSignOut(state) {
      state.isAutoSignOut = false;
    },
  },
  actions: {
    signIn(context, payload) {
      const expire = localStorage.getItem("expire");
      const left = expire - new Date();
      if (left > 0) {
        // 남은 시간 후에 로그아웃
        const timer = setTimeout(function () {
          context.dispatch("autoSignOut");
          clearTimeout(timer);
        }, left);
        context.commit("signIn", payload);
      }
    },
    trySignIn(context) {
      if (!context.getters.getIsSignIn) {
        const userId = localStorage.getItem("userId");
        const uid = localStorage.getItem("uid");
        if (userId) {
          context.dispatch("signIn", { userId, uid });
        }
      }
    },
    signOut(context) {
      context.commit("signOut");
      localStorage.clear();
    },
    autoSignOut(context) {
      context.commit("autoSignOut");
      context.dispatch("signOut");
    },
    offAutoSignOut(context) {
      context.commit("offAutoSignOut");
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
    getAutoSignOut(state) {
      return state.isAutoSignOut;
    },
  },
  modules: { potato, order },
});

export default store;
