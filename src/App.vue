<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import BaseSelect from "./components/BaseSelect.vue";

export default {
  data() {
    return {
      store,
      apiUri: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
      archetypeUri: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    };
  },

  components: { AppHeader, AppMain, BaseSelect },

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

  <!-- Passo a BaseSelect valori tramite props -->
  <!-- Ricevo il parametro da BaseSelect e lo invio al metodo -->
  <div class="container">
    <BaseSelect
      :options="store.archetypes"
      :placeHolder="'Choose an ArcheType'"
      @change-select="handleSelect"
    />
  </div>
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
