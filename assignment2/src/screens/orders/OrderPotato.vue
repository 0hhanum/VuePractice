<template>
  <form @submit.prevent="submitOrder">
    <div id="order-input-box">
      <div class="order-control">
        <label for="amount" :class="{ invalid: !amount.isValid }"
          >ORDER AMOUNT</label
        >
        <input
          :class="{ invalid: !amount.isValid }"
          v-model="amount.val"
          id="amount"
          type="number"
        />
        <span :class="{ invalid: !amount.isValid }">EA</span>
      </div>
      <div class="order-control">
        <label :class="{ invalid: !address.isValid }" for="address"
          >Address</label
        >
        <input
          :class="{ invalid: !address.isValid }"
          v-model="address.val"
          id="address"
          type="text"
        />
      </div>
      <div class="order-control">
        <label :class="{ invalid: !message.isValid }" for="message"
          >Message</label
        >
        <textarea
          :class="{ invalid: !message.isValid }"
          v-model="message.val"
          id="message"
        ></textarea>
      </div>
    </div>
    <BaseButton>Order</BaseButton>
  </form>
</template>

<script>
export default {
  inject: ["toastMessage"],
  data() {
    return {
      amount: { isValid: true, val: null },
      address: { isValid: true, val: null },
      message: { isValid: true, val: null },
      isValid: true,
    };
  },
  methods: {
    submitOrder() {
      this.isValid = true;
      this.validateFields();
      if (this.isValid) {
        const orderObj = {
          amount: this.amount,
          address: this.address,
          message: this.message,
        };
        this.$store.dispatch("addOrder", orderObj);
        this.$router.push({ name: "potatoDetail" });
        this.toastMessage("Order Complete :)");
      }
    },
    validateFields() {
      if (!this.amount.val) {
        this.amount.isValid = false;
        this.isValid = false;
      }
      if (!this.address.val) {
        this.address.isValid = false;
        this.isValid = false;
      }
      if (!this.message.val) {
        this.message.isValid = false;
        this.isValid = false;
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
}
.order-control {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.order-control label {
  margin-right: 10px;
  width: 10rem;
}
.order-control input,
textarea {
  outline: none;
  border-radius: 10px;
  border: 0.5px solid gray;
  width: 10rem;
  height: 1.6rem;
  margin-right: 10px;
}
.order-control textarea {
  height: 3rem;
  width: 20rem;
}

button {
  height: 10rem;
  width: 10rem;
}

.invalid {
  color: red;
  border-color: red !important;
}
</style>
