<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import BaseSelect from "./components/BaseSelect.vue";
import SelectedCount from "./components/SelectedCount.vue";

export default {
  data() {
    return {
      store,
      apiUri: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
      archetypeUri: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    };
  },

  components: { AppHeader, AppMain, BaseSelect, SelectedCount },

  methods: {
    // Metodo per interrogare l'url e salvare i dati ottenuti una variabile
    fetchCards(endpoint) {
      axios.get(endpoint).then((response) => {
        store.cards = response.data.data;
      });
    },

    // Metodo per interrogare un secondo url e salvare i dati ottenuti in una seconda variabile
    fetchArchetype(termination) {
      axios.get(termination).then((response) => {
        store.archetypes = response.data;
      });
    },

    // Ricevuti il dato della selected, creo il link, lo salvo in una variabile e la invio al metodo FetchCards
    handleSelect(selected) {
      const archPoint = `${this.apiUri}?archetype=${selected}`;
      this.fetchCards(archPoint);
    },
  },

  created() {
    this.fetchCards(this.apiUri);
    this.fetchArchetype(this.archetypeUri);
  },
};
</script>

<template>
  <AppHeader />
  <div class="container">
    <!-- Passo a BaseSelect valori tramite props -->
    <!-- Ricevo il parametro da BaseSelect e lo invio al metodo -->
    <BaseSelect
      :options="store.archetypes"
      :placeHolder="'Choose an ArcheType'"
      @change-select="handleSelect"
    />
    <!-- Invio la lunghezza dell'array store tramite prop al componente SelectedCount -->
    <SelectedCount :cardsNumber="store.cards.length" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
