<template>
  <div id="app">
    <MiddleChild ref="middleChild" :message="message" :func="alertMessage" />
    <input v-model="message" />
    <span>{{ message }}</span>
    <hr />
    <span>{{ messageFromChild }}</span>
  </div>
</template>
<script>
/*****
정리
props => 1 depth만큼만 전달 가능
refs => 동일
provide => 전역으로 접근 가능 but, 동적으로 사용 원할시 별도의 방법 필요 (String 말고 객체 참조하는 array 혹은 object 는 가능) && 어느 부모에게서 왔는지 파악 불가
******/
import MiddleChild from "./components/MiddleChild.vue";

export default {
  name: "app",
  components: { MiddleChild: MiddleChild },
  data() {
    return {
      message: "HELLO~",
      objectForProvideData: {
        message: "HI",
      },
      messageFromChild: "",
    };
  },
  provide() {
    return {
      message: this.message,
      object: this.objectForProvideData,
      providedFunction: this.getChildMessage,
    };
  },
  watch: {
    message(e) {
      this.$refs.middleChild.$refs.lastChild.changeRefData(e);
      this.objectForProvideData.message = e;
    },
  },
  methods: {
    getChildMessage(message) {
      this.messageFromChild = message;
    },
    alertMessage() {
      alert("HI");
    },
  },
};
</script>
