<template>
  <div id="app">
    <middle-child ref="middleChild" :message="message"></middle-child>
    <input v-model="message" />
    <span>{{ message }}</span>
  </div>
</template>
<script>
/*****
정리
props => 1 depth만큼만 전달 가능
refs => 동일
provide => 전역으로 접근 가능 but, 동적으로 사용 원할시 별도의 방법 필요 (String 말고 객체 참조하는 array 혹은 object 는 가능) && 어느 부모에게서 왔는지 파악 불가
******/
export default {
  name: "app",
  data() {
    return {
      message: "HELLO~",
      objectForProvideData: {
        message: "HI",
      },
    };
  },
  provide() {
    return {
      message: this.message,
      object: this.objectForProvideData,
    };
  },
  watch: {
    message(e) {
      this.$refs.middleChild.$refs.lastChild.changeRefData(e);
      this.objectForProvideData.message = e;
    },
  },
};
</script>
