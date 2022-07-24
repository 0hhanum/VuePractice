// HTML 태그와의 충돌 방지를 위한 컴포넌트 명명법
Vue.component("person-data", {
  template: `
  <li>
  <h2>{{person.name}}</h2>
  <button @click="toggleDetail">Show Details</button>
  <div v-if="detailVisible">
    <h2>{{person.number}}</h2>
    <h2>{{person.email}}</h2>
  </div>
  </li>
  `,
  data() {
    return {
      detailVisible: false,
      person: {
        name: "HM",
        number: "01",
        email: "aes",
      },
    };
  },
  methods: {
    toggleDetail() {
      this.detailVisible = !this.detailVisible;
    },
  },
});

const app = new Vue({
  el: "#app",
  data() {
    return {
      people: [
        { name: "a", number: "010101010", email: "sdf@sdf" },
        { name: "b", number: "190101010", email: "sdf@s99" },
      ],
    };
  },
});
