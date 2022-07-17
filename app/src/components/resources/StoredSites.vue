<template>
  <ul>
    <SiteCard v-for="site in sites" :key="site.id" :siteInfo="site" />
  </ul>
</template>

<script>
import SiteCard from "./SiteCard";
export default {
  name: "StoredSite",
  components: {
    SiteCard,
  },
  props: ["submitData"],
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
  methods: {},
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
