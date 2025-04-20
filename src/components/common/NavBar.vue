<template>
  <nav class="bg-red-900 text-white px-4 py-2 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <router-link to="/" class="font-semibold hover:underline">Émissions</router-link>
      <router-link to="/config" class="hover:underline">Configuration</router-link>
    </div>
    <slot />
  </nav>
</template>

<script setup lang="ts">
// Simple nav bar pour la navigation principale
</script>
