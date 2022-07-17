<template>
  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="input-container">
        <label for="title">TITLE</label>
        <input id="title" type="text" name="title" v-model="title" />
      </div>
      <div class="input-container">
        <label for="description">DESCRIPTION</label>
        <textarea
          id="description"
          type="text"
          name="description"
          v-model="description"
          rows="5"
        ></textarea>
      </div>
      <div class="input-container">
        <label for="link">LINK</label>
        <input id="link" type="url" name="link" v-model="link" />
      </div>
      <BaseButton type="submit" :style="{ width: '90%' }">ADD SITE</BaseButton>
    </form>
  </BaseCard>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      title: "",
      description: "",
      link: "",
    };
  },
  methods: {
    submitData() {
      const title = this.title;
      const description = this.description;
      const link = this.link;
      this.$emit("submit-data", title, description, link);

      this.title = "";
      this.description = "";
      this.link = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.input-container {
  display: flex;
  justify-content: center;
  width: 90%;
  margin-bottom: 20px;
  flex-direction: column;
}
.input-container > input {
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  display: block;
  height: 30px;
}
.input-container > textarea {
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
}
</style>
