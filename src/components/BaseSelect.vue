<script>
export default {
  data() {
    return {
      // Variabile dove salvo la selection
      selected: "",
    };
  },
  emits: ["change-select"],
  //   Props che prendo dall'App principale
  props: {
    options: Object,
    placeHolder: String,
  },
};
</script>

<template>
  <!-- Creo una select da dove prenderò la selection scelta -->
  <select
    v-model="selected"
    @change="$emit('change-select', selected)"
    class="form-select mt-4"
    aria-label="Default select example"
  >
    <!-- Inserisco un placeholder ricevuto tramite prop -->
    <option disabled value="">{{ placeHolder }}</option>
    <!-- Ciclo le la prop option per stampare tutte le select -->
    <option v-for="option in options">{{ option.archetype_name }}</option>
  </select>
</template>

<style lang="scss" scoped>
select {
  width: auto;
}
</style>
