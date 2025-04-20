<template>
  <header class="bg-red-900 text-white px-4 py-3 flex items-center">
    <span class="material-icons mr-2">menu</span>
    <h1 class="text-lg font-semibold">
      <slot>12 Émissions</slot>
    </h1>
  </header>
</template>

<script setup lang="ts">
// Slot for custom title
</script>

<style scoped>
.material-icons {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
