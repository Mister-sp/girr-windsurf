import { defineStore } from 'pinia';
import { getShows, getShowSubjects } from '../services/api';

export const useShowsStore = defineStore('shows', {
  state: () => ({
    shows: [] as Array<{ id: string; name: string; image: string }>,
    subjects: [] as Array<{ id: string; title: string }>,
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchShows() {
      this.loading = true;
      try {
        this.shows = await getShows();
        this.error = null;
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchSubjects(showId: string) {
      this.loading = true;
      try {
        this.subjects = await getShowSubjects(showId);
        this.error = null;
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    }
  }
});
