<script>
import PCardsList from "./PlayingCards/pCardsList.vue";
export default {
  components: { PCardsList },
};
</script>

<template>
  <main class="container mt-4">
    <select class="form-select" aria-label="Default select example">
      <option selected>Alien</option>
      <option value="1">Alien</option>
    </select>
    <PCardsList />
  </main>
</template>

<style lang="scss" scoped>
@use "../../src/assets/scss/style.scss" as *;

main {
  height: 100vh;
  select {
    width: 10%;
  }
}
</style>
