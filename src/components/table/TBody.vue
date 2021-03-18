<template>
  <tr @click="onClickHandler">
    <td>{{ value.market_cap_rank }}</td>
    <td>{{ value.name }}</td>
    <td><img height="35px" width="35px" :src="value.image" :alt="value.id" /></td>
    <td>{{ value.current_price }}</td>
    <td>{{ value.high_24h }} / {{ value.low_24h }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TBody',
  props: {
    value: {
      type: Object
    }
  },
  methods: {
    onClickHandler() {
      this.$emit('click', this.value);
    }
  }
};
</script>

<style></style>
