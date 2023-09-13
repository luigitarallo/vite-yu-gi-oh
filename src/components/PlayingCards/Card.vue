<script>
export default {
  props: {
    name: String,
    type: String,
    image: String,
  },
};
</script>

<template>
  <div class="cols">
    <img :src="image" alt="" class="card-img" />
    <div class="caption">
      <h3 class="c-name">{{ name }}</h3>
      <p class="c-type">{{ type }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-img {
  max-width: 100%;
}
.caption {
  padding: 0.7rem;
  height: 100px;
  background-color: #d48f38;
  text-align: center;
  .c-name {
    color: white;
    font-size: 1rem;
    font-weight: 800;
  }
}
</style>
