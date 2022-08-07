<template>
  <div>
    <div id="buttonContainer">
      <router-link :to="getRoute">
        <button @click="toggleRoute">ToggleRoute</button>
      </router-link>
    </div>
    <transition name="router">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUrl: "/a",
    };
  },
  methods: {
    toggleRoute() {
      if (this.currentUrl === "/a") {
        this.currentUrl = "/b";
      } else {
        this.currentUrl = "/a";
      }
    },
  },
  computed: {
    getRoute() {
      return this.currentUrl;
    },
  },
};
</script>

<style>
.router-enter-active {
  animation: slideFrom 1s ease-in-out;
  position: absolute;
  top: 35px;
}
.router-leave-active {
  animation: slideTo 1s ease-in-out;
  position: absolute;
  top: 35px;
}
@keyframes slideFrom {
  from {
    transform: translateX(-800px);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideTo {
  from {
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}
#buttonContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
