<script>
export default {
  emits: ["change-select"],
};
</script>

<template>
  <select
    @change="$emit('change-select')"
    class="form-select mt-4"
    aria-label="Default select example"
  >
    <option selected></option>
    <option value="1">Alien</option>
  </select>
</template>

<style lang="scss" scoped>
select {
  width: 10%;
}
</style>
