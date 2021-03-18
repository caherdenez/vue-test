import { shallowMount } from '@vue/test-utils';
import Component from '../Data.vue';

describe('Example.vue', () => {
  it('renders from data', () => {
    const msg = 'Melt Talk';
    const wrapper = shallowMount(Component, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
