<template>
  <form>
    <div id="form-control">
      <div class="form-input-container">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Potato..." />
      </div>
      <div class="form-input-container">
        <label for="price">Price</label>
        <input id="price" type="number" />
        <span> $</span>
      </div>
      <div class="form-input-container">
        <label for="weight">Weight</label> <input id="weight" type="number" />
        <span> KG</span>
      </div>
    </div>
    <div class="img">
      <label for="img" id="img-label">Register Image</label>
      <input
        ref="imgInput"
        type="file"
        id="img"
        accept="image/png, image/jpeg, image/jpg"
      />
      <div ref="preview" @click="uploadImg" id="img-preview">Click Me</div>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    uploadImg() {
      const input = this.$refs.imgInput;
      input.click();
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
}
#form-control {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
#img-preview {
  width: 200px;
  height: 200px;
  background-color: blanchedalmond;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed gray;
}
.form-input-container {
  margin: 10px;
  display: flex;
}
label {
  display: flex;
  width: 70px;
  font-size: 20px;
  margin-right: 20px;
}
input {
  border-radius: 10px;
  border: 0.5px solid gray;
  margin-right: 5px;
  width: 200px;
  outline: none;
  padding-left: 10px;
}
.img {
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#img-label {
  width: fit-content;
  margin-bottom: 10px;
}
input[type="file"] {
  display: none;
}
</style>
