<script>
export default {
  //   Props che prendo dal componente CardsList
  props: {
    name: String,
    archetype: String,
    image: String,
  },
};
</script>

<template>
  <div class="cols">
    <!-- Inserisco i valori ricevuti tramite props -->
    <img :src="image" alt="card-img" class="card-img" />
    <div class="caption">
      <h3 class="c-name">{{ name }}</h3>
      <p class="c-type">{{ archetype || "Undefined" }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/style.scss" as *;
@use "../../assets/scss/partials/variables" as *;
.card-img {
  max-width: 100%;
}
.caption {
  padding: 0.7rem;
  height: 100px;
  background-color: $bg-color;
  text-align: center;
  .c-name {
    color: $text-color;
    font-size: 1rem;
    font-weight: 800;
  }
  .c-type {
    color: lightgray;
  }
}
</style>
