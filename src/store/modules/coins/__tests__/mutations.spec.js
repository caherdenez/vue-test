import { setItems } from '../mutations';

describe('setItems', () => {
  it('setItems ', async () => {
    const state = {
      items: []
    };

    setItems(state, [1, 2, 3]);

    expect(state.items).toHaveLength(3);
    expect(state.items[0]).toBe(1);
  });
});
