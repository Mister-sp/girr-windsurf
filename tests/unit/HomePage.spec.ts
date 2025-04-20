import { shallowMount } from '@vue/test-utils';
import HomePage from '@/pages/HomePage.vue';

describe('HomePage.vue', () => {
  it('affiche le titre de la page', () => {
    const wrapper = shallowMount(HomePage);
    expect(wrapper.text()).toMatch(/émissions?/i);
  });
});
