<template>
  <div id="container">
    <div id="firstContainer" class="box">
      <div id="box" :class="{ animate: animateActivated }"></div>
      <button @click="animate">ANIMATE</button>
    </div>
    <div id="secondContainer" class="box">
      <button @click="openDialog">SHOW DIALOG</button>
    </div>
    <transition>
      <dialog open v-show="dialogOpen">
        <div id="dialog-button-container">
          <button @click="closeDialog">X</button>
        </div>
        <strong>I AM DIALOG</strong>
      </dialog>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogOpen: false,
      animateActivated: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
    },
    animate() {
      this.animateActivated = false;
      setTimeout(() => (this.animateActivated = true), 100);
    },
  },
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  display: flex;
  justify-content: center;
}
#container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  border: 1px solid rgba(1, 1, 1, 0.4);
  border-radius: 20px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
}
#firstContainer {
  height: 300px;
  flex-direction: column;
}

#secondContainer {
  height: 100px;
}

#box {
  width: 120px;
  height: 120px;
  background-color: black;
  margin-bottom: 50px;
  /* transition: all 1s ease-in-out; */
}
button {
  border: none;
  background: black;
  color: white;
  outline: none;
  padding: 10px 20px;
  border-radius: 20px;
}
dialog {
  margin-top: 200px;
  width: 1200px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid rgba(1, 1, 1, 0.4);
  box-shadow: 2px 2px rgba(1, 1, 1, 0.3);
}
#dialog-button-container {
  width: 100%;
  display: flex;
  justify-content: end;
}
.animate {
  animation: animation 1s ease-in-out;
}

/* <transition> 태그 사용 */
.v-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}
.v-enter-to {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@keyframes animation {
  10% {
    transform: translateX(-5rem) scale(1);
  }
  70% {
    transform: translateX(5rem) scale(1.5);
  }
  100% {
    transform: translateX(0rem) scale(1);
  }
}
@keyframes modal {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
