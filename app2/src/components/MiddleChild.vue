<template>
  <div>
    <last-child ref="lastChild" :message-prop="message"></last-child>
    <button @click="func">BUTTON</button>
  </div>
</template>
<script>
export default {
  name: "middle-child",
  props: {
    message: { type: String },
    func: { type: Function },
  },
};
</script>
