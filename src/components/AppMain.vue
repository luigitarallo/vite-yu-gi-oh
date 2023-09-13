<script>
import CardsList from "./PlayingCards/CardsList.vue";
import SelectedCount from "../components/SelectedCount.vue";

export default {
  components: { CardsList, SelectedCount },
};
</script>

<template>
  <main class="container">
    <div class="box mt-4">
      <SelectedCount />
      <CardsList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../src/assets/scss/style.scss" as *;
@use "../../src/assets/scss/partials/variables" as *;

main {
  .box {
    background-color: $text-color;
    padding: 2rem 3rem;
  }
}
</style>
