<template>
  <li>
    <p>USERNAME: {{ username }}</p>
    <p>AGE: {{ age }}</p>
  </li>
</template>
<script>
export default {
  name: "user-component",
  props: { age: String, username: String },
};
</script>
