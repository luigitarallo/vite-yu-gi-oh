<script>
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default {
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    fetchCards() {
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
        .then((response) => {
          this.cards = response.data.data;
        });
    },
  },

  created() {
    this.fetchCards();
  },
};
</script>

<template>
  <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5">
    <div class="cols" v-for="card in cards" :key="card.id">
      {{ card.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
