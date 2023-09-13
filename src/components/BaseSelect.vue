<script>
export default {
  data() {
    return {
      title: "Hello world",
    };
  },
};
</script>

<template>
  <select
    @change="$emit('change-select')"
    class="form-select"
    aria-label="Default select example"
  >
    <option selected>Alien</option>
    <option value="1">Alien</option>
  </select>
</template>

<style lang="scss" scoped></style>
