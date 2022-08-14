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
        },
        {
          id: "p2",
          name: "COOLPOTA",
          weight: 51,
          price: 20,
          img: "https://solidstarts.com/wp-content/uploads/Potato-for-Babies-scaled.jpg",
        },
        {
          id: "p3",
          name: "FUTATO",
          weight: 5,
          price: 30,
          img: "https://images.heb.com/is/image/HEBGrocery/000318982",
        },
      ],
    };
  },
  mutations: {},
  getters: {
    hasPotatoes(state) {
      return state.potatoes && state.potatoes.length > 0;
    },
    getPotatoes(state) {
      return state.potatoes;
    },
  },
};
