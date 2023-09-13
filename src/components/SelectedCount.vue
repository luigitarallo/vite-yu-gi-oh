<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      // Ricevo il valore tramite prop, deve essere un numero
      store,
    };
  },
};
</script>

<template>
  <div class="result-bar mt-4">
    <!-- Stampo il numero ricevuto tramite prop -->
    <!-- Avendo lo store delle cards, posso ricavare il numero di elementi nell'array aggiornato alla ricerca-->
    <h3>Found {{ this.store.cards.length }} cards</h3>
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
    font-weight: 800;
    margin: 0;
  }
}
</style>
