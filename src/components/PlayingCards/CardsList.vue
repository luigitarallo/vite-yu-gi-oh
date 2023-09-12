<script>
import Card from "./Card.vue";
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  components: { Card },
};
</script>

<template>
  <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-3">
    <Card
      v-for="card in store.cards"
      :key="card.id"
      :image="card.card_images[0].image_url"
      :name="card.name"
      :type="card.type"
    />
  </div>
</template>

<style lang="scss" scoped></style>
