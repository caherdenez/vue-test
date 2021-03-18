<template>
  <div class="ticker-item my-2">
    <h6>{{ value.market.name }}
      <a :href="value.trade_url" target="_blank" rel="noopener noreferrer"> Link </a>
    </h6>
    <div class="mx-4">
      Price : {{ value.last }}
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticker',
  props: {
    value: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.ticker-item {
  margin: 5px;
  padding: 5px;
}
</style>
