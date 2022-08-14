<template>
  <BaseCard>
    <h2>FIND YOUR POTATO</h2>
    <div id="container">
      <span class="filter-option">
        <span>
          <label for="name">Name</label>
          <input
            v-model="filterName"
            type="text"
            id="name"
            placeholder="COOLPOTA..."
            :change="$emit('name-changed', filterName)"
          />
        </span>
      </span>
      <span class="filter-option">
        <span>
          <label for="weight">Weight</label>
          <input
            v-model="filterWeight"
            type="range"
            id="weight"
            min="0"
            max="50"
            @change="$emit('weight-changed', filterWeight)"
          />
        </span>
        <span v-if="filterWeight">Under {{ filterWeight }} KG</span>
      </span>
      <span class="filter-option">
        <span>
          <label for="price">Price</label>
          <input
            v-model="filterPrice"
            type="range"
            id="price"
            @change="$emit('price-changed', filterPrice)"
          />
        </span>
        <span v-if="filterPrice">Under {{ filterPrice }} $</span>
      </span>
    </div>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      filterName: null,
      filterWeight: null,
      filterPrice: null,
    };
  },
};
</script>

<style scoped>
input {
  outline: none;
  margin-right: 10px;
}
#container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
span {
  align-items: center;
  display: flex;
}
label {
  margin-right: 10px;
  font-weight: bold;
}
.filter-option {
  display: flex;
  flex-direction: column;
}
</style>
