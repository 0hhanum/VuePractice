<template>
  <section>
    <slot name="firstSlot"></slot>
    <slot name="secondSlot">
      <div>
        <h1>IF THERE IS NO CONTENT, THIS H1 TAG WILL BE SHOWN</h1>
      </div>
    </slot>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
/* slot 에 대해서는 가장 바깥 container 에 대한 CSS만 적용가능 */
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
/* slot 내부 컴포넌트에는 영향을 미칠 수 없다 (scope) */
span {
  color: purple;
}
</style>
