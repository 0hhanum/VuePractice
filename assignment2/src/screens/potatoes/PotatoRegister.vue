<template>
  <BaseCard>
    <h1>REGISTER POTATO</h1>
    <RegisterForm @submit-form="submitForm"></RegisterForm>
  </BaseCard>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  inject: ["toastMessage"],
  components: { RegisterForm },
  methods: {
    submitForm(potato) {
      this.$store.dispatch("addPotato", { potato });
      this.$router.replace("/potatoes");
      this.toastMessage("Potato Registered :)", "success");
    },
  },
};
</script>

<style scoped></style>
