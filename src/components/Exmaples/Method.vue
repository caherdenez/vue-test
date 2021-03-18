<template>
  <div>
    count {{ count }}
    <button id="incr" @click="incr">incr</button>
    <button id="decr" @click="decr">decr</button>
  </div>
</template>

<script>
export default {
  name: 'methods',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    incr() {
      this.count += 1;
    },
    decr() {
      this.count -= 1;
    }
  }
};
</script>

<style></style>
