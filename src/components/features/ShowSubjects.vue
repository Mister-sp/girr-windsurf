<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">Sujets</h2>
    <ul>
      <li v-for="subject in subjects" :key="subject.id" class="p-4 bg-white rounded shadow mb-2">
        {{ subject.title }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
interface Subject {
  id: string;
  title: string;
  // Ajoute d'autres propriétés au besoin
}
const props = defineProps<{ subjects: Subject[] }>();
</script>
