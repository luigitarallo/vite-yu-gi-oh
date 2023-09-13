<script>
import CardsList from "./PlayingCards/CardsList.vue";
export default {
  components: { CardsList },
};
</script>

<template>
  <main>
    <div class="box">
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
    padding: 3rem;
  }
}
</style>
