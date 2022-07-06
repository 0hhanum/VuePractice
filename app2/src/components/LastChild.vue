<template>
  <div>
    <div>{{ message }}</div>
    <div>{{ messageProp }}</div>
    <div>{{ refData }}</div>
    <div>{{ object.message }}</div>
  </div>
</template>
<script>
export default {
  name: "last-child",
  inject: ["message", "object"],
  props: ["message-prop"],
  data() {
    return {
      refData: "",
    };
  },
  methods: {
    changeRefData(message) {
      this.refData = message;
    },
  },
};
</script>
