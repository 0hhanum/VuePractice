<template>
  <section>
    <BaseCard class="base-card--detail">
      <div id="container">
        <div>
          <h1>Seller: {{ potato.owner }}</h1>
          <h1>{{ potato.name }}</h1>
          <h1>{{ potato.weight }}KG</h1>
          <h1>{{ potato.price }}$</h1>
          <BaseButton
            v-if="$route.name !== 'order'"
            :link="true"
            :to="`${currentPath}/order`"
            >ORDER</BaseButton
          >
        </div>
        <div>
          <img :src="imgSrc" v-if="potato.img" />
          <div v-else id="no-image">No Image -_-</div>
        </div>
      </div>
    </BaseCard>
    <BaseCard class="base-card--detail" v-if="$route.name === 'order'">
      <router-view></router-view>
    </BaseCard>
  </section>
</template>

<script>
import { downloadFile } from "@/firebase";
export default {
  data() {
    return {
      currentPath: null,
      imgSrc: null,
    };
  },
  async created() {
    this.currentPath = this.$route.path;
    const potatoId = this.$route.params.id;
    this.potato = this.$store.getters.getPotatoes.find(
      (potato) => potato.id === potatoId
    );

    if (this.potato.img) {
      const id = this.potato.id.toString().slice(2);
      const url = await downloadFile(id);
      console.log(url);
      /*
      const reader = new FileReader();
      reader.onload = (data) => {
        this.imgSrc = data.target.result;
      };
      reader.readAsDataURL(this.potato.img); 
      */
      this.imgSrc = url;
    }
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
.base-card--detail {
  width: 800px;
  padding: 30px 40px !important;
}
</style>
