<script>
export default {
  // Ricevo il valore tramite prop, deve essere un numero
  props: {
    cardsNumber: Number,
  },
};
</script>

<template>
  <div class="result-bar mt-4">
    <!-- Stampo il numero ricevuto tramite prop -->
    <h3>Found {{ cardsNumber }} cards</h3>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.result-bar {
  background-color: $nav-bg-color;
  h3 {
    color: $text-color;
    font-size: 1rem;
    padding: 1rem;
    margin: 0;
  }
}
</style>
