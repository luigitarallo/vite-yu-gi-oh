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
      loading: false,
      apiUri: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
      archetypeUri: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    };
  },

  components: { AppHeader, AppMain, BaseSelect },

  methods: {
    // Metodo per interrogare l'url e salvare i dati ottenuti una variabile
    fetchCards(endpoint) {
      this.loading = true;
      axios.get(endpoint).then((response) => {
        store.cards = response.data.data;
        this.loading = false; // Imposta lo stato di caricamento su false quando i dati sono pronti
      });
    },

    // Metodo per interrogare un secondo url e salvare i dati ottenuti in una seconda variabile
    fetchArchetype(termination) {
      this.loading = true;
      axios.get(termination).then((response) => {
        store.archetypes = response.data;
        this.loading = false;
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
  <div v-if="loading" class="loader-container">
    <div class="loader"></div>
  </div>
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss";

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #060f4e;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
