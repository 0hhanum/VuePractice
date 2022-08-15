<template>
  <BaseCard>
    <h1>REGISTER POTATO</h1>
    <RegisterForm @submit-form="submitForm"></RegisterForm>
  </BaseCard>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  components: { RegisterForm },
  methods: {
    submitForm(potato) {
      this.$store.dispatch("addPotato", potato);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
