<script>
export default {
  emits: ["change-select"],
  props: {
    options: Object,
  },
};
</script>

<template>
  <select
    @change="$emit('change-select')"
    class="form-select mt-4"
    aria-label="Default select example"
  >
    <option selected></option>
    <option v-for="option in options">{{ option.archetype_name }}</option>
  </select>
</template>

<style lang="scss" scoped>
select {
  width: auto;
}
</style>
