<template>
  <div class="container">
    <!-- Content here -->

    <h1>List</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Ranking</th>
          <th scope="col">Name</th>
          <th scope="col">Logo</th>
          <th scope="col">Current Price</th>
          <th scope="col">High/Low</th>
        </tr>
      </thead>
      <tbody v-if="loading">
        <td colspan="5">
          <div class="mt-4">
            <Spinner />
          </div>
        </td>
      </tbody>
      <tbody v-else>
        <TBody @click="onClickHandler" v-for="item in items" :value="item" :key="item.id"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import TBody from '@/components/table/TBody.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'coin-list',
  components: {
    Spinner,
    TBody
  },
  data() {
    return {};
  },
  mounted() {
    this.fetchList();
  },
  computed: {
    ...mapGetters({ loading: 'coins/getLoadingList', items: 'coins/getItems' })
  },
  methods: {
    ...mapActions({ fetchList: 'coins/fetchList' }),
    onClickHandler(data) {
      this.$router.push({ name: 'coin-detail', params: { id: data.id } });
    }
  }
};
</script>

<style lang="scss">
.spinner-border {
  width: 60px !important;
  height: 60px !important;
}
</style>
