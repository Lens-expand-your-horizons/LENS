<template>
  <div>
    <label>{{ label }}</label>
    <select v-model="selectedCountry">
      <option v-for="country in countries" :key="country.value" :value="country.value">
        {{ country.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: null,
      countries: [
        { value: 'japan', label: '日本' },
        { value: 'usa', label: 'アメリカ' }
      ]
    };
  },
  props: {
    label: String
  }
};
</script>

<style>
/* スタイルを追加 */
.select-container {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.select-box {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
