<template>
  <section>
    <BaseCard style="width: 800px; padding: 30px 40px">
      <div id="container">
        <div>
          <h1>{{ potato.name }}</h1>
          <h1>{{ potato.weight }}KG</h1>
          <h1>{{ potato.price }}$</h1>
          <BaseButton :link="true" :to="`${currentPath}/order`"
            >ORDER</BaseButton
          >
        </div>
        <div>
          <img :src="potato.img" v-if="potato.img" />
          <div v-else id="no-image">No Image -_-</div>
        </div>
      </div>
    </BaseCard>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentPath: null,
    };
  },
  created() {
    this.currentPath = this.$route.path;
    const potatoId = this.$route.params.id;
    this.potato = this.$store.getters.getPotatoes.find(
      (potato) => potato.id === potatoId
    );
  },
};
</script>

<style scoped>
img,
#no-image {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(1, 1, 1, 0.2);
}
#no-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
#container {
  display: flex;
  justify-content: space-between;
}
a {
  display: flex;
  width: fit-content;
  margin-top: 120px;
}
</style>
