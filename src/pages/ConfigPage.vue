<template>
  <div class="min-h-screen flex flex-col">
    <Header>Configuration</Header>
    <main class="flex-1 flex flex-col items-center py-8">
      <div class="w-full max-w-xl bg-white rounded shadow p-6 space-y-6">
        <h2 class="text-xl font-bold mb-4">Paramètres généraux</h2>
        <div>
          <label class="block mb-2 font-semibold">Émission à configurer</label>
          <select v-model="selectedShowId" @change="onSelectShow" class="w-full border rounded p-2">
            <option disabled value="">Sélectionner une émission</option>
            <option v-for="show in shows" :key="show.id" :value="show.id">{{ show.name }}</option>
          </select>
        </div>
        <div v-if="selectedShowId">
          <label class="block mb-2 font-semibold mt-4">Titre du direct</label>
          <input type="text" v-model="title" class="w-full border rounded p-2" placeholder="Titre du direct" />
        </div>
        <button
          class="bg-red-900 text-white px-4 py-2 rounded mt-2"
          @click="saveConfig"
          :disabled="loading || !selectedShowId"
        >Enregistrer</button>
        <Loader v-if="loading" />
        <div v-if="message && !loading" class="text-green-600 mt-2">{{ message }}</div>
        <div v-if="error && !loading" class="text-red-600 mt-2">{{ error }}</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '../components/common/Header.vue';
import Loader from '../components/common/Loader.vue';
import { getShows, updateShowTitle } from '../services/api';

const shows = ref<any[]>([]);
const selectedShowId = ref('');
const title = ref('');
const message = ref('');
const error = ref('');
const loading = ref(false);

async function fetchShows() {
  loading.value = true;
  error.value = '';
  try {
    shows.value = await getShows();
  } catch (e: any) {
    error.value = e?.message || 'Erreur lors du chargement des émissions.';
  } finally {
    loading.value = false;
  }
}

function onSelectShow() {
  const show = shows.value.find((s) => s.id === selectedShowId.value);
  title.value = show ? show.name : '';
  message.value = '';
  error.value = '';
}

async function saveConfig() {
  if (!selectedShowId.value) return;
  loading.value = true;
  message.value = '';
  error.value = '';
  try {
    await updateShowTitle(selectedShowId.value, title.value);
    message.value = 'Configuration enregistrée !';
  } catch (e: any) {
    error.value = e?.message || 'Erreur lors de l\'enregistrement.';
  } finally {
    loading.value = false;
  }
}

onMounted(fetchShows);
</script>
