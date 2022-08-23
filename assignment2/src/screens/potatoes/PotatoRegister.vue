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
      } catch (e) {
        console.log(e);
        this.toastMessage("Error Occurred", "warn");
        this.$router.replace("/potatoes");
        return;
      }
      this.$router.replace("/potatoes");
      this.toastMessage("Potato Registered :)", "success");
    },
  },
};
</script>

<style scoped></style>
