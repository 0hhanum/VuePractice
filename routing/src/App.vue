<template>
  <div>
    <nav>
      <router-link to="/beer"><button>BEER</button></router-link>
      <router-link to="/peer"><button>PEER</button></router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {};
  },
};
</script>

<style></style>
