<template>
  <ul>
    <SiteCard v-for="site in sites" :key="site.id" :siteInfo="site" />
  </ul>
</template>

<script>
import SiteCard from "./resources/SiteCard";
export default {
  name: "StoredSite",
  components: {
    SiteCard,
  },
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
};
</script>

<style scoped></style>
