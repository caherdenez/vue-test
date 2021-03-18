import axios from 'axios';

const urls = {
  list:
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false',
  detail: 'https://api.coingecko.com/api/v3/coins/'
};
export const fetchList = async ({ commit }) => {
  commit('setLoadingList', true);
  try {
    const { data } = await axios.get(urls.list);
    commit('setItems', data);
  } catch (error) {
    // TODO
    console.debug(error);
  } finally {
    commit('setLoadingList', false);
  }
};
export const fetchCoin = async ({ commit }, { id }) => {
  commit('setLoadingDetail', true);
  try {
    const { data } = await axios.get(`${urls.detail}${id}`);
    commit('setItem', data);
  } catch (error) {
    // TODO
    console.debug(error);
  } finally {
    commit('setLoadingDetail', false);
  }
};

export default {
  fetchList,
  fetchCoin
};
