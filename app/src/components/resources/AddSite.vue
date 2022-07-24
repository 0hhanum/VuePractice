<template>
  <BaseCard>
    <form @submit.prevent="handleSubmit">
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
    <BaseDialog
      v-show="isInvalidModalOpen"
      title="입력 사항 누락"
      @close="closeModal"
    >
      <template #default>
        <p>필수 입력 사항입니다.</p>
        <p>모든 정보를 입력해주세요.</p>
      </template>
      <template #actions>
        <BaseButton @click.native="closeModal">OKAY</BaseButton>
      </template>
    </BaseDialog>
  </BaseCard>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import BaseDialog from "../UI/BaseDialog.vue";
export default {
  components: { BaseButton, BaseDialog },
  props: ["submitData"],
  data() {
    return {
      title: "",
      description: "",
      link: "",
      isInvalidModalOpen: false,
    };
  },
  methods: {
    handleSubmit() {
      const title = this.title;
      const description = this.description;
      const link = this.link;
      if (this.checkInput()) {
        this.submitData(title, description, link);
      } else {
        this.isInvalidModalOpen = true;
      }
    },
    checkInput() {
      return this.title && this.description && this.link;
    },
    closeModal() {
      this.isInvalidModalOpen = false;
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
