<template>
  <div
    id="messageContainer"
    v-if="message"
    :class="{
      warn: type === 'warn',
      success: type === 'success',
    }"
  >
    <span>
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    };
  },
  methods: {
    createMessage(message, type = null) {
      this.message = message;
      this.type = type;
      const timeout = setTimeout(() => {
        this.message = null;
        this.type = null;
        clearTimeout(timeout);
      }, 3000);
    },
  },
};
</script>

<style scoped>
#messageContainer {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  top: -7%;
  width: 15rem;
  height: 3rem;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(1, 1, 1, 0.2);
  animation: showAndHide 3s ease;
}
@keyframes showAndHide {
  0% {
    top: -7%;
  }
  15% {
    top: 3%;
  }
  85% {
    top: 3%;
  }
  100% {
    top: -7%;
  }
}
.warn {
  background-color: red;
}
.warn span {
  color: white;
}
.success {
  background-color: green;
}
.success span {
  color: white;
}
</style>
