<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'computed',
  props: {
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    isOwner: {
      type: Boolean
    }
  },
  computed: {
    count() {
      return this.isOwner
        ? this.values.reduce((acc, current) => acc + current * 2, 0)
        : this.values.reduce((acc, current) => acc + current, 0);
    }
  }
};
</script>

<style></style>
