<template>
  <form @submit.prevent="submitForm">
    <div id="form-divider">
      <div id="form-control">
        <div class="form-input-container">
          <label for="name">Name</label>
          <input
            v-model="formName"
            required
            id="name"
            type="text"
            placeholder="Potato..."
          />
        </div>
        <div class="form-input-container">
          <label for="price">Price</label>
          <input v-model="formPrice" required id="price" type="number" />
          <span> $</span>
        </div>
        <div class="form-input-container">
          <label for="weight">Weight</label>
          <input v-model="formWeight" required id="weight" type="number" />
          <span> KG</span>
        </div>
      </div>
      <div class="img">
        <label for="img" id="img-label">Register Image</label>
        <input
          ref="imgInput"
          @change="getImg"
          type="file"
          id="img"
          accept="image/png, image/jpeg, image/jpg"
        />
        <div
          @click="uploadImg"
          id="img-preview"
          :style="{ border: isPreviewLoaded ? 0 : null }"
        >
          <span v-if="!isPreviewLoaded">Click Me</span>
          <img v-show="isPreviewLoaded" ref="preview" />
        </div>
      </div>
    </div>
    <button id="submit">Resister</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isPreviewLoaded: false,
      formName: null,
      formWeight: null,
      formPrice: null,
      formImg: null,
    };
  },
  methods: {
    uploadImg() {
      const input = this.$refs.imgInput;
      input.click();
    },
    getImg(inputEvent) {
      const target = inputEvent.target;
      const preview = this.$refs.preview;
      if (target.files && target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target.result;
          preview.src = result;
          this.formImg = result;
        };
        reader.readAsDataURL(target.files[0]);
        this.isPreviewLoaded = true;
      }
    },
    submitForm() {
      const potato = {
        id: Math.random().toString(),
        name: this.formName,
        weight: this.formWeight,
        price: this.formPrice,
        img: this.formImg,
      };
      this.$store.dispatch("addPotato", potato);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}
#form-control {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
#img-preview,
img {
  width: 250px;
  height: 250px;
  background-color: blanchedalmond;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#img-preview {
  border: 1px dashed gray;
}
.form-input-container {
  margin: 20px;
  display: flex;
  align-items: center;
}
.form-input-container span {
  font-size: 20px;
}
label {
  display: flex;
  width: 70px;
  font-size: 25px;
  margin-right: 20px;
}
input {
  border-radius: 20px;
  border: 0.5px solid gray;
  margin-right: 10px;
  width: 250px;
  height: 2rem;
  outline: none;
  padding-left: 10px;
}
.img {
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
#img-label {
  width: fit-content;
  margin-bottom: 10px;
}
input[type="file"] {
  display: none;
}
#submit {
  outline: none;
  background-color: transparent;
  border: 0.5px solid gray;
  border-radius: 20px;
  height: 3rem;
  margin-top: 50px;
}
#submit:hover {
  background-color: blanchedalmond;
  color: green;
  border: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
#form-divider {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
