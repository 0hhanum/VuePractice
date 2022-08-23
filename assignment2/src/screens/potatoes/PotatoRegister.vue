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
    async submitForm(potato) {
      try {
        await this.$store.dispatch("addPotato", { potato });
        this.toastMessage("Potato Registered :)", "success");
      } catch (e) {
        console.log(e);
        this.toastMessage("Error Occurred", "warn");
      }
      this.$router.replace("/potatoes");
    },
  },
};
</script>

<style scoped></style>
