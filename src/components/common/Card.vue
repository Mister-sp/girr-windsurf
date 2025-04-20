<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    class="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer block"
  >
    <img v-if="image" :src="image" class="w-full h-48 object-cover" :alt="title" />
    <div class="bg-black bg-opacity-50 text-white p-4 text-center">
      <slot name="title">{{ title }}</slot>
    </div>
  </component>
</template>

<script setup lang="ts">
defineProps<{ title: string; image?: string; to?: string }>();
</script>
