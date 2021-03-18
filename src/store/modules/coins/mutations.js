export const setItems = (state, payload) => {
  state.items = payload;
};

export const setLoadingList = (state, payload) => {
  state.loading.list = payload;
};

export const setLoadingDetail = (state, payload) => {
  state.loading.detail = payload;
};

export const setItem = (state, payload) => {
  state.item = payload;
};

export default {
  setLoadingList,
  setItems,
  setLoadingDetail,
  setItem
};
