<template>
  <div id="content-container" :style="styleProp">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["styleProp"],
};
</script>
<style scoped>
#content-container {
  padding: 20px;
  background-color: rgba(23, 100, 100, 0.576);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
}
</style>
