export const getItems = state => state.items;
export const getLoadingList = state => state.loading.list;

export const getItem = state => state.item;
export const getLoadingDetail = state => state.loading.detail;

export default {
  getItems,
  getLoadingList,
  getItem,
  getLoadingDetail
};
