<template>
  <ul>
    <SiteCard
      v-for="site in sites"
      :key="site.id"
      :siteInfo="site"
      @delete="handleDelete"
    />
  </ul>
</template>

<script>
import SiteCard from "./SiteCard";
export default {
  name: "StoredSite",
  components: {
    SiteCard,
  },
  props: ["tmpStorage"],
  data() {
    return {
      sites: [
        {
          id: "google",
          title: "Google",
          description: "Main Page of Google.",
          link: "https://google.com",
        },
        {
          id: "vue",
          title: "Vue Official Guide",
          description: "The official of Vue.js documentation.",
          link: "https://kr.vuejs.org/v2/guide/index.html",
        },
      ],
    };
  },
  mounted() {
    this.sites = [...this.tmpStorage, ...this.sites];
  },
  inject: ["deleteData"],
  methods: {
    handleDelete(id) {
      this.deleteData(id);
      const localIndex = this.sites.find((item) => item.id === id);
      this.sites.splice(localIndex, 1);
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}
</style>
