<template>
  <div id="container">
    <div id="firstContainer" class="box">
      <div id="box" :class="{ animate: animateActivated }"></div>
      <button @click="animate">ANIMATE</button>
    </div>
    <div id="secondContainer" class="box">
      <button @click="openDialog">SHOW DIALOG</button>
    </div>
    <dialog open v-show="dialogOpen">
      <div id="dialog-button-container">
        <button @click="closeDialog">X</button>
      </div>
      <strong>I AM DIALOG</strong>
    </dialog>
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
      this.animateActivated = !this.animateActivated;
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
  transition: all 1s ease-in-out;
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
}
#dialog-button-container {
  width: 100%;
  display: flex;
  justify-content: end;
}
.animate {
  transform: translateX(-5rem);
}
</style>
