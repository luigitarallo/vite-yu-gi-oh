<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  emits: ["change-select"],
  props: {
    options: Object,
    placeHolder: String,
  },
};
</script>

<template>
  <select
    v-model="selected"
    @change="$emit('change-select', selected)"
    class="form-select mt-4"
    aria-label="Default select example"
  >
    <option disabled value="">{{ placeHolder }}</option>
    <option v-for="option in options">{{ option.archetype_name }}</option>
  </select>
</template>

<style lang="scss" scoped>
select {
  width: auto;
}
</style>
