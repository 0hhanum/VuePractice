<template>
  <div>
    <last-child ref="lastChild" :message-prop="message"></last-child>
  </div>
</template>
<script>
export default {
  name: "middle-child",
  props: {
    message: { type: String },
  },
};
</script>
