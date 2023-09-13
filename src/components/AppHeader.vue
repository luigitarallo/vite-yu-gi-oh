<script>
export default {};
</script>

<template>
  <header class="">
    <div class="logo mx-4">
      <img src="logo.png" alt="logo small" />
    </div>
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<style lang="scss" scoped>
@use "../../src/assets/scss/style.scss" as *;
@use "../../src/assets/scss/partials/variables" as *;

header {
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100px;
  background-color: $text-color;
  .logo {
    width: 80px;
    img {
      max-width: 100%;
    }
  }
  h1 {
    font-size: 4rem;
  }
}
</style>
