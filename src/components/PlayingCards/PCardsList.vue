<script>
import axios from "axios";
export default {
  data() {
    return {
      cards: [],
    };
  },

  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
      .then((response) => {
        this.cards = response.data.data;
      });
  },
};
</script>

<template>
  <div>Lista carte</div>
</template>

<style lang="scss" scoped></style>
