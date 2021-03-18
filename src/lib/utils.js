// eslint-disable-next-line import/no-extraneous-dependencies
import { createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';

export const createStore = config => {
  const store = new Vuex.Store({ ...config });
  return store;
};

export const createTestVue = config => {
  const { modules } = config;
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const store = createStore({ modules });
  return { localVue, store };
};
