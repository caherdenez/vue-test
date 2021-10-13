import flushPromises from 'flush-promises';
import { mount } from '@vue/test-utils';
import TBody from '@/components/table/TBody.vue';
import mockList from '@/mocks/mock.list.json';
import { createTestVue } from '@/lib/utils';
import coinsStore from '@/store/modules/coins';

import Component from '../CoinList.vue';

const modules = {
  coins: {
    ...coinsStore
  }
};

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: mockList })
}));

describe('CoinList.vue', () => {
  it('render', async () => {
    const { localVue, store } = createTestVue({ modules });
    const wrapper = mount(Component, {
      localVue,
      store,
      mocks: {
        $route: {
          params: {
            id: 'mock-id'
          }
        }
      },
      stubs: {
        TBody: { template: '<div><slot/></div>' }
      }
    });
    await flushPromises();
    const tbody = wrapper.findAllComponents(TBody);
    expect(tbody).toHaveLength(15);
  });
});
