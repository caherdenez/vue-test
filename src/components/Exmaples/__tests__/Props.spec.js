import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Component from '../Props.vue';

describe('Props.vue', () => {
  it('render - default', () => {
    const msg = 'Melt Talk';
    const wrapper = shallowMount(Component);
    expect(wrapper.text()).toMatch(msg);
  });

  it('render - props', () => {
    const msg = 'Melt Talk 02';
    const wrapper = shallowMount(Component, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('render - changed props ', async () => {
    const msg = 'Melt Talk';
    const wrapper = shallowMount(Component);
    expect(wrapper.text()).toMatch(msg);

    wrapper.setProps({ msg: 'Melt' });
    await Vue.nextTick();
    expect(wrapper.text()).toMatch('Melt');
  });

  it('render - changed props', async () => {
    const msgDefault = 'Melt Talk';
    const wrapper = shallowMount(Component);
    expect(wrapper.text()).toMatch(msgDefault);

    await wrapper.setProps({ msg: 'Melt' });
    expect(wrapper.vm.msg).toMatch('Melt');
  });
});
