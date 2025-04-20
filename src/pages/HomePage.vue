<template>
  <div class="min-h-screen flex flex-col">
    <Header>12 Émissions</Header>
    <main class="flex-1 flex flex-col items-center py-8 space-y-8">
      <div class="w-full max-w-2xl">
        <Card
          v-for="show in shows"
          :key="show.id"
          :title="show.name"
          :image="show.image"
          :to="`/shows/${show.id}`"
          class="mb-6"
        />
      </div>
    </main>
    <button class="fixed bottom-6 right-6 bg-amber-400 text-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center text-2xl">
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Header from '../components/common/Header.vue';
import Card from '../components/common/Card.vue';
import Loader from '../components/common/Loader.vue';
import { useShowsStore } from '../store';
import { storeToRefs } from 'pinia';

interface Show {
  id: string;
  name: string;
  image?: string;
  // Ajoute d'autres propriétés si besoin
}

const store = useShowsStore();
const { shows, loading, error } = storeToRefs(store);

onMounted(() => {
  if (!shows.value.length) {
    store.fetchShows();
  }
});
</script>

<style scoped>
</style>
