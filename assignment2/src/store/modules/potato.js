export default {
  state() {
    return {
      potatoes: [
        {
          id: "p1",
          name: "The great pota",
          weight: 5,
          price: 30,
          img: "https://play-lh.googleusercontent.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65",
          owner: "host",
        },
        {
          id: "p2",
          name: "COOLPOTA",
          weight: 51,
          price: 20,
          img: "https://solidstarts.com/wp-content/uploads/Potato-for-Babies-scaled.jpg",
          owner: "host",
        },
        {
          id: "p3",
          name: "FUTATO",
          weight: 5,
          price: 30,
          img: "https://images.heb.com/is/image/HEBGrocery/000318982",
          owner: "host",
        },
      ],
    };
  },
  mutations: {
    addPotato(state, potato) {
      state.potatoes.push(potato);
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
    async addPotato(context, potato) {
      context.commit("addPotato", potato);
      const response = await fetch(
        `${process.env.VUE_APP_DATABASE_URL}/potatoes/${potato.owner}.json`,
        { method: "PUT", body: JSON.stringify(potato) }
      );
      console.log(response);
    },
  },
};
