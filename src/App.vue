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
      apiUri: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
      archetypeUri: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    };
  },

  components: { AppHeader, AppMain, BaseSelect },

  methods: {
    fetchCards(endpoint) {
      axios.get(endpoint).then((response) => {
        store.cards = response.data.data;
      });
    },
    fetchArchetype(endpoint) {
      axios.get(endpoint).then((response) => {
        store.archetypes = response.data;
        console.log(store.archetypes);
      });
    },

    handleSelect() {
      console.log("ho cambiato il valore");
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
    <BaseSelect :options="store.archetypes" @change-select="handleSelect()" />
  </div>
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
