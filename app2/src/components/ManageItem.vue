<template>
  <div>
    <h2>MANAGE</h2>
    <input type="text" v-model="message" />
    <button @click="setItem">Set Item</button>
    <teleport to="body">
      <error-component v-if="showError">
        <div>
          <h2>Input is required!</h2>
          <button @click="closeError">X</button>
        </div>
      </error-component>
    </teleport>
  </div>
</template>
<script>
import ErrorComponent from "./ErrorComponent";
export default {
  name: "manage-item",
  components: { ErrorComponent },
  data() {
    return {
      message: "",
      showError: false,
    };
  },
  methods: {
    setItem() {
      if (this.message === "") {
        this.showError = true;
      } else {
        this.showError = false;
      }
    },
    closeError() {
      this.showError = false;
    },
  },
};
</script>
