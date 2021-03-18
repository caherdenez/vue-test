<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'example',
  props: {
    msg: {
      tyepe: String,
      default() {
        return 'Melt Talk';
      }
    }
  }
};
</script>
