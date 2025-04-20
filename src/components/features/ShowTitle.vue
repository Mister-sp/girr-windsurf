<template>
  <section class="mb-6">
    <h2 class="text-xl font-semibold mb-2">Titrage</h2>
    <form @submit.prevent="saveTitle" class="flex space-x-2">
      <input
        type="text"
        v-model="title"
        class="border rounded p-2 flex-1"
        placeholder="Titre de l'émission"
        :disabled="loading"
      />
      <button type="submit" class="bg-red-900 text-white px-4 py-2 rounded" :disabled="loading">Enregistrer</button>
    </form>
    <div v-if="loading" class="text-red-900 mt-2">Enregistrement…</div>
    <div v-if="message && !loading" class="text-green-600 mt-2">{{ message }}</div>
    <div v-if="error && !loading" class="text-red-600 mt-2">{{ error }}</div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { updateShowTitle } from '../../services/api';
const emit = defineEmits<(e: 'title-updated', value: string) => void>();

interface Props {
  showId: string;
  initialTitle?: string;
}
const props = defineProps<Props>();
const title = ref<string>(props.initialTitle || '');
const message = ref<string>('');
const loading = ref<boolean>(false);
const error = ref<string>('');

watch(() => props.initialTitle, (val: string | undefined) => {
  title.value = val || '';
});

async function saveTitle() {
  message.value = '';
  error.value = '';
  loading.value = true;
  try {
    await updateShowTitle(props.showId, title.value);
    message.value = 'Titre enregistré !';
    emit('title-updated', title.value);
  } catch (e: any) {
    error.value = e?.message || 'Erreur lors de la mise à jour du titre.';
  } finally {
    loading.value = false;
  }
}
</script>
