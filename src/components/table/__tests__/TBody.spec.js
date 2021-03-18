import { shallowMount } from '@vue/test-utils';
import TBody from '../TBody.vue';

const data = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  current_price: 57956,
  market_cap: 1078125771481,
  market_cap_rank: 1,
  fully_diluted_valuation: 1213482133676,
  total_volume: 61789740666,
  high_24h: 60186,
  low_24h: 57511,
  price_change_24h: 41.5,
  price_change_percentage_24h: 0.07165,
  market_cap_change_24h: -5036211282.281982,
  market_cap_change_percentage_24h: -0.46495,
  circulating_supply: 18657581.0,
  total_supply: 21000000.0,
  max_supply: 21000000.0,
  ath: 61712,
  ath_change_percentage: -6.34474,
  ath_date: '2021-03-13T20:49:26.606Z',
  atl: 67.81,
  atl_change_percentage: 85134.13501,
  atl_date: '2013-07-06T00:00:00.000Z',
  roi: null,
  last_updated: '2021-03-18T21:08:02.135Z'
};

describe('TBody.vue', () => {
  it('render', () => {
    const wrapper = shallowMount(TBody, {
      propsData: {
        value: data
      }
    });
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.vm.onClickHandler();
    const emitData = wrapper.emitted().click[0][0];
    expect(emitData.id).toEqual(data.id);
  });
});
