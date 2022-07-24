<template>
  <div>
    <lastChild ref="lastChild" :message-prop="message" />
    <button @click="func">BUTTON</button>
  </div>
</template>
<script>
import LastChild from "./LastChild.vue";
export default {
  name: "middle-child",
  props: {
    message: { type: String },
    func: { type: Function },
  },
  components: {
    lastChild: LastChild,
  },
};
</script>
