<template>
  <div id="form-container">
    <BaseCard :style="ratingStyle" v-if="done"
      ><RatingCard
        :rateProp="rating"
        @rate="rate"
        @close="closeModal"
        v-model="componentCommunicateTest"
      ></RatingCard
    ></BaseCard>
    <form @submit.prevent="handleSubmit">
      <div class="input-container" :class="{ invalid: !nameValidity }">
        <label for="name">Your Name</label>
        <input type="text" v-model.trim="name" id="name" @blur="validateName" />
        <p class="validity-message" v-if="!nameValidity">이름을 입력하세요</p>
      </div>
      <div class="input-container">
        <label for="age">Your Age</label>
        <input type="number" v-model="age" id="age" />
      </div>
      <div class="input-container">
        <label for="location">How did you hear about us?</label>
        <select id="location" name="location" v-model="location">
          <option value="Google">Google</option>
          <option value="Friend">Friend</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div class="input-container">
        <p>What are you interested in?</p>
        <label class="checkbox-label"
          ><input
            type="checkbox"
            name="interest"
            v-model="interest"
            value="News"
          />News</label
        >
        <label class="checkbox-label"
          ><input
            type="checkbox"
            name="interest"
            v-model="interest"
            value="Develop"
          />Develop</label
        >
        <label class="checkbox-label"
          ><input
            type="checkbox"
            name="interest"
            v-model="interest"
            value="Beer"
          />Beer</label
        >
      </div>
      <div class="input-container">
        <p>How do you learn?</p>
        <div>
          <input
            type="radio"
            value="video"
            id="video"
            name="wayToLearn"
            v-model="wayToLearn"
          />
          <label class="radio-label" for="video">Video Courses</label>
        </div>
        <div>
          <input
            type="radio"
            value="blog"
            id="blog"
            name="wayToLearn"
            v-model="wayToLearn"
          />
          <label class="radio-label" for="blog">Blogs</label>
        </div>
        <div>
          <input
            type="radio"
            value="other"
            id="other"
            name="wayToLearn"
            v-model="wayToLearn"
          />
          <label class="radio-label" for="other">Others</label>
        </div>
      </div>
      <div id="button-container">
        <BaseButton>SUBMIT</BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import RatingCard from "./RatingCard.vue";
import BaseCard from "@/components/BaseCard.vue";
export default {
  data() {
    return {
      name: "",
      age: 0,
      location: "Google",
      interest: [],
      wayToLearn: null,
      nameValidity: true,
      done: false,
      rating: null,
      ratingStyle: {
        position: "fixed",
        width: "300px",
        height: "300px",
        border: "3px solid rgba(0, 0, 0, 0.4)",
      },
    };
  },
  methods: {
    rate(rating) {
      this.rating = rating;
    },
    closeModal() {
      this.done = false;
      console.log(this.rating);
    },
    handleSubmit() {
      this.name = "";
      this.age = "";
      this.location = "";
      this.interest = [];
      this.wayToLearn = null;
      this.done = true;
      return;
    },
    validateName() {
      this.nameValidity = this.name === "" ? false : true;
      console.log(this.componentCommunicateTest);
    },
  },

  components: { BaseButton, RatingCard, BaseCard },
};
</script>

<style scoped>
#form-container {
  display: flex;
  padding: 40px;
  justify-content: center;
  color: black;
}
form {
  display: flex;
  width: 100%;
  flex-direction: column;
}
label,
p {
  font-weight: bolder;
  margin-bottom: 10px;
}
input:not(type="checkbox") {
  border: 2px solid rgba(0, 0, 0, 0.2);
  height: 20px;
}

select {
  height: 25px;
  width: 40%;
  border: 2px solid rgba(0, 0, 0, 0.2);
}
.input-container {
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.checkbox-label {
  font-weight: normal;
  display: block;
  margin-bottom: 8px;
}
.radio-label {
  margin-left: 10px;
  font-weight: normal;
}
input[type="checkbox"] {
  margin-right: 10px;
}
button {
  margin-top: 20px;
}
#button-container {
  display: flex;
  width: 100%;
  justify-content: end;
}
.validity-message {
  margin-top: 3px;
}

.invalid {
  color: red;
}
</style>
