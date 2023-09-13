<script>
import CardsList from "./PlayingCards/CardsList.vue";
export default {
  components: { CardsList },
};
</script>

<template>
  <main class="container mt-4">
    <select class="form-select" aria-label="Default select example">
      <option selected>Alien</option>
      <option value="1">Alien</option>
    </select>
    <div class="box mt-3">
      <div class="result-bar">
        <h3>Found Cards</h3>
      </div>
      <CardsList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../src/assets/scss/style.scss" as *;
@use "../../src/assets/scss/partials/variables" as *;

main {
  select {
    width: 10%;
  }
  .box {
    background-color: $text-color;
    padding: 3rem;
    .result-bar {
      background-color: $nav-bg-color;
      h3 {
        color: $text-color;
        font-size: 1rem;
        padding: 1rem;
        margin: 0;
      }
    }
  }
}
</style>
