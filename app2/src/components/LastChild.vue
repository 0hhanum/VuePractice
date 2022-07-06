<template>
  <section>
    <div>
      <div>{{ message }}</div>
      <div>{{ messageProp }}</div>
      <div>{{ refData }}</div>
      <div>{{ object.message }}</div>
    </div>
    <div>
      <input style="background-color: gray" v-model="input" />
      <button @click="() => providedFunction(input)">CLICK ME</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "last-child",
  inject: ["message", "object", "providedFunction"],
  props: ["message-prop"],
  data() {
    return {
      refData: "",
      input: "",
    };
  },
  methods: {
    changeRefData(message) {
      this.refData = message;
    },
  },
};
</script>
