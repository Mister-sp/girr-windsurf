<template>
  <div class="min-h-screen flex flex-col">
    <Header>12 Émissions</Header>
    <main class="flex-1 flex flex-col items-center py-8 space-y-8">
      <div class="w-full max-w-2xl">
        <Card
          v-for="show in (shows as any[])"
          :key="(show as any).id"
          :title="(show as any).name"
          :image="(show as any).image"
          :to="`/shows/${(show as any).id}`"
          class="mb-6"
        />
      </div>
    </main>
    <button class="fixed bottom-6 right-6 bg-amber-400 text-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center text-2xl">
      +
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '../components/common/Header.vue';
import Card from '../components/common/Card.vue';
import Loader from '../components/common/Loader.vue';
import { useShowsStore } from '../store';
import { storeToRefs } from 'pinia';

export default Vue.extend({
  components: { Header, Card, Loader },
  computed: {
    ...storeToRefs(useShowsStore()),
    shows(): any[] {
      return (this as any).shows || [];
    },
    loading(): boolean {
      return (this as any).loading || false;
    },
    error(): string | null {
      return (this as any).error || null;
    }
  },
  mounted() {
    if (!this.shows.length) {
      this.$store.fetchShows && this.$store.fetchShows();
    }
  }
});
</script>
</script>
<style scoped>
</style>
