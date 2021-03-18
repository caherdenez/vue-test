import Component from '../Computed.vue';

describe('Computed.vue', () => {
  it('call ', async () => {
    const localThis = { isOwner: false, values: [1, 2, 3] };
    expect(Component.computed.count.call(localThis)).toBe(6);
    const isOwnerData = { isOwner: true, values: [1, 2, 3] };
    expect(Component.computed.count.call(isOwnerData)).toBe(12);
  });
});
