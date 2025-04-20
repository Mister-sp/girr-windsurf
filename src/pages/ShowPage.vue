<template>
  <div class="min-h-screen flex flex-col">
    <Header>{{ show?.name || 'Émission' }}</Header>
    <main class="flex-1 flex flex-col items-center py-8">
      <div v-if="loading">
        <Loader />
      </div>
      <div v-else-if="error" class="text-red-500">Erreur : {{ error }}</div>
      <div v-else class="w-full max-w-2xl space-y-6">
        <img v-if="show?.image" :src="show.image" class="w-full h-48 object-cover rounded-lg" :alt="show.name" />
        <ShowTitle :show-id="show?.id" :initial-title="show?.name || ''" @title-updated="onTitleUpdated" />
        <ShowSubjects :subjects="subjects" />
        <!-- Gestion du titrage/config à venir -->
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/common/Header.vue';
import Loader from '../components/common/Loader.vue';
import ShowSubjects from '../components/features/ShowSubjects.vue';
import ShowTitle from '../components/features/ShowTitle.vue';
import { useShowsStore } from '../store';
import { storeToRefs } from 'pinia';

const route = useRoute();
const store = useShowsStore();
const { show, loading, error, subjects } = storeToRefs(store);

/**
 * Met à jour le titre localement après édition dans ShowTitle
 */
function onTitleUpdated(newTitle: string) {
  if (show.value) show.value.name = newTitle;
}

onMounted(() => {
  const showId = route.params.id as string;
  store.fetchShow(showId);
  store.fetchSubjects(showId);
});
</script>
