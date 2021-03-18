import { mount } from '@vue/test-utils';
import Component from '../Props2.vue';

describe('Props2.vue', () => {
  it('displays a non authorized message', () => {
    const msg = 'submit';
    const wrapper = mount(Component, {
      propsData: {
        msg
      }
    });

    console.log(wrapper.html());

    expect(wrapper.find('span').text()).toBe('Not Authorized');
    expect(wrapper.find('button').text()).toBe('submit');
  });

  it('displays a admin privileges message', () => {
    const msg = 'submit';
    const isAdmin = true;
    const wrapper = mount(Component, {
      propsData: {
        msg,
        isAdmin
      }
    });

    console.log(wrapper.html());

    expect(wrapper.find('span').text()).toBe('Admin Privileges');
    expect(wrapper.find('button').text()).toBe('submit');
  });
});
