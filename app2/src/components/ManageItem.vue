<template>
  <div>
    <h2>MANAGE</h2>
    <input type="text" v-model="message" />
  </div>
</template>
<script>
export default {
  name: "manage-item",
  data() {
    return {
      message: "",
    };
  },
};
</script>
