import { fetchList } from '../actions';

describe('fetchList', () => {
  jest.mock('axios', () => ({
    get: () => Promise.resolve({ data: [1, 2, 3, 4] })
  }));

  it('fetchList', async () => {
    const commit = jest.fn();
    await fetchList({ commit });
    expect(commit).toHaveBeenCalledTimes(3);
  });
});
