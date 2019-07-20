<template>
  <header>
    <div class="logo">NETFLIX ROULETTE</div>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.logo {
  margin-bottom: 5em;
}
</style>
