import { shallowMount } from '@vue/test-utils';
import Component from '../Method.vue';

describe('Method.vue', () => {
  it('methods', async () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.text()).toMatch('count');
    wrapper.vm.incr();
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toMatch('count 1');
    wrapper.vm.decr();
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toMatch('count 0');
    wrapper.vm.incr();
    wrapper.vm.incr();
    wrapper.vm.incr();
    wrapper.vm.incr();
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toMatch('count 4');
  });

  it('methods spy', async () => {
    const mockIncrMethod = jest.spyOn(Component.methods, 'incr');
    const mockDecrMethod = jest.spyOn(Component.methods, 'decr');

    const wrapper = shallowMount(Component);
    expect(wrapper.text()).toMatch('count');

    wrapper.find('#incr').trigger('click');
    wrapper.find('#decr').trigger('click');

    expect(mockIncrMethod).toHaveBeenCalled();
    expect(mockDecrMethod).toHaveBeenCalled();
  });
});
