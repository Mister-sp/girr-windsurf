<template>
  <div class="min-h-screen flex flex-col">
    <Header>{{ (show as any)?.name || 'Émission' }}</Header>
    <main class="flex-1 flex flex-col items-center py-8">
      <div v-if="(loading as any)">
        <Loader />
      </div>
      <div v-else-if="(error as any)" class="text-red-500">Erreur : {{ (error as any) }}</div>
      <div v-else class="w-full max-w-2xl space-y-6">
        <img v-if="(show as any)?.image" :src="(show as any)?.image" class="w-full h-48 object-cover rounded-lg" :alt="(show as any)?.name" />
        <ShowTitle :show-id="(show as any)?.id" :initial-title="(show as any)?.name || ''" @title-updated="(onTitleUpdated as any)" />
        <ShowSubjects :subjects="(subjects as any)" />
        <!-- Gestion du titrage/config à venir -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '../components/common/Header.vue';
import Loader from '../components/common/Loader.vue';
import ShowSubjects from '../components/features/ShowSubjects.vue';
import ShowTitle from '../components/features/ShowTitle.vue';
import { useShowsStore } from '../store';
import { storeToRefs } from 'pinia';

export default Vue.extend({
  components: { Header, Loader, ShowSubjects, ShowTitle },
  computed: {
    ...storeToRefs(useShowsStore()),
    show(): any {
      const s = (this as any).show;
      return typeof s === 'function' ? s() : s;
    },
    loading(): boolean {
      const l = (this as any).loading;
      return typeof l === 'function' ? l() : l || false;
    },
    error(): string | null {
      const e = (this as any).error;
      return typeof e === 'function' ? e() : e || null;
    },
    subjects(): any[] {
      const sub = (this as any).subjects;
      return typeof sub === 'function' ? sub() : sub || [];
    }
  },
  methods: {
    onTitleUpdated(newTitle: string) {
      // Utilise une action Pinia pour modifier le titre si elle existe
      const show = this.show;
      if (show && typeof show === 'object' && 'id' in show) {
        if (typeof (this as any).updateShowTitle === 'function') {
          (this as any).updateShowTitle(show.id, newTitle);
        } else {
          // fallback temporaire si l'action n'existe pas
          show.name = newTitle;
        }
      }
    }
  },
  mounted() {
    const showId = this.$route.params.id;
    if (showId) {
      if (typeof (this as any).fetchShow === 'function') {
        (this as any).fetchShow(showId);
      }
      if (typeof (this as any).fetchSubjects === 'function') {
        (this as any).fetchSubjects(showId);
      }
    }
  }
});
</script>
  store.fetchShow(showId);
  store.fetchSubjects(showId);
});
</script>
