import { writeDB, loadDB } from "@/firebase";

export default {
  state() {
    return {
      potatoes: [],
    };
  },
  mutations: {
    addPotato(state, potato) {
      state.potatoes.push(potato);
    },
    setPotatoes(state, payload) {
      state.potatoes = payload;
    },
  },
  getters: {
    hasPotatoes(state) {
      return state.potatoes && state.potatoes.length > 0;
    },
    getPotatoes(state) {
      return state.potatoes;
    },
  },
  actions: {
    addPotato(context, payload) {
      const { potato } = payload;
      context.commit("addPotato", potato);
      writeDB(`potatoes/${potato.id.toString().slice(2)}`, potato);
    },
    async loadPotatoes(context) {
      await loadDB("potatoes").then((response) => {
        context.commit("setPotatoes", response);
      });
    },
  },
};
