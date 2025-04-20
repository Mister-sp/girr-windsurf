import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000
});

// Récupère la liste des émissions
export const getShows = async () => {
  const { data } = await api.get('/shows');
  return data;
};

// Récupère les sujets d'une émission
export const getShowSubjects = async (showId: string) => {
  const { data } = await api.get(`/shows/${showId}/subjects`);
  return data;
};

// Met à jour le titre d'une émission
export const updateShowTitle = async (showId: string, title: string) => {
  // Adapter le endpoint selon le backend (ici, PATCH /shows/:id)
  const { data } = await api.patch(`/shows/${showId}`, { title });
  return data;
};

// À compléter avec d'autres endpoints (config, overlays, etc.)
