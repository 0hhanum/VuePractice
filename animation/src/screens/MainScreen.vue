<template>
  <div id="container">
    <div>
      <div id="listContainer" class="box" ref="groupBox">
        <transition-group
          name="group-transition"
          tag="ul"
          @before-leave="animateGroupLeave"
          @before-enter="animateGroupEnter"
        >
          <li
            @click="removeUser(text)"
            v-for="text in texts"
            :key="text"
            class="group-transition-item"
          >
            {{ text }}
          </li>
        </transition-group>
        <div>
          <input type="text" v-model="text" @keydown.enter="submit" />
        </div>
      </div>
      <div id="firstContainer" class="box">
        <div id="box" :class="{ animate: animateActivated }"></div>
        <button @click="animate">ANIMATE</button>
      </div>
      <div id="secondContainer" class="box">
        <button @click="openDialog">SHOW DIALOG</button>
      </div>
      <transition
        name="text"
        @before-enter="beforeEnter"
        @before-leave="beforeLeave"
      >
        <div id="fourthContainer" class="box" v-if="showing">
          <p>HIHIHI</p>
        </div>
      </transition>
      <div id="thirdContainer" class="box">
        <transition name="btn" mode="out-in">
          <!-- KEY 가 있어야 어떤 element 가 추가/제거 되는지 추적 가능 -->
          <button key="show" @click="show" v-if="!showing">SHOW</button>
          <button key="hide" @click="hide" v-else>HIDE</button>
        </transition>
      </div>
      <transition name="modal">
        <dialog open v-show="dialogOpen">
          <div id="dialog-button-container">
            <button @click="closeDialog">X</button>
          </div>
          <strong>I AM DIALOG</strong>
        </dialog>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogOpen: false,
      animateActivated: false,
      showing: false,
      texts: ["hello", "i", "need", "more", "sleep"],
      text: "",
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
    show() {
      this.showing = true;
    },
    hide() {
      this.showing = false;
    },
    beforeEnter() {
      //
    },
    beforeLeave() {
      //
    },
    submit() {
      if (this.text) {
        this.texts.unshift(this.text);
        this.text = "";
      }
    },
    removeUser(e) {
      this.texts = this.texts.filter((text) => text !== e);
    },
    animateGroupLeave() {
      const box = this.$refs.groupBox;
      const currentHeight = box.offsetHeight;
      setTimeout(() => {
        box.style.height = currentHeight - 68.5 + "px";
      }, 500);
    },
    animateGroupEnter() {
      const box = this.$refs.groupBox;
      const currentHeight = box.clientHeight + 68.5;
      box.style.height = currentHeight + "px";
    },
  },
};
</script>

<style>
body {
  width: 100vw;
  margin: 0px;
}
#container {
  width: 100vw;
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

#secondContainer,
#thirdContainer,
#fourthContainer {
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
  width: 200px;
}
dialog {
  margin-top: 200px;
  width: 1200px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid rgba(1, 1, 1, 0.4);
  box-shadow: 20px 20px rgba(1, 1, 1, 0.03);
  top: 500px;
}
#dialog-button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.animate {
  animation: animation 1s ease-in-out;
}

/* <transition> 태그 사용 */
/* .v-enter {
  opacity: 0;
} */

.modal-enter-active,
.text-enter-active {
  animation: modal 0.5s ease-in-out;
}
.modal-leave-active {
  animation: modal 0.5s ease-in-out reverse;
}
/* .v-enter-to {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
*/

.btn-enter-active {
  animation: opacityAnimation 0.5s ease-out;
}
.btn-leave-active {
  animation: opacityAnimation 0.5s ease-in reverse;
}

@keyframes opacityAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li,
input {
  border: 1px solid #ccc;
  padding: 1rem 10rem;
  border-radius: 20px;
  margin-bottom: 15px;
}
#listContainer {
  flex-direction: column;
  align-items: center;
  transition: height 0.5s ease;
}
.group-transition-enter-active {
  animation: group 0.5s ease-in-out;
}
.group-transition-leave-active {
  animation: group 0.5s ease-in-out reverse;
  position: absolute;
}
.group-transition-move {
  transition: transform 0.5s ease;
}

@keyframes group {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
