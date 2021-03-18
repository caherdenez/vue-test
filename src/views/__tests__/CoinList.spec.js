import { shallowMount } from '@vue/test-utils';
import { createTestVue } from '@/lib/utils';
import Component from '../CoinList.vue';

xdescribe('CoinList.vue', () => {
  it('render', () => {
    const wrapper = shallowMount(Component);
    console.debug(wrapper.html());
  });
});

describe('CoinList.vue', () => {
  it('render', () => {
    const { localVue, store } = createTestVue({ modules: {} });
    const wrapper = shallowMount(Component, {
      localVue,
      store,
    });
    console.debug(wrapper.html());
  });
});
