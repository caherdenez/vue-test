<template>
  <div class="container">
    <h1>Detail</h1>
    <div v-if="loading">
      <div class="mt-4">
        <Spinner />
      </div>
    </div>
    <div v-else class="row">
      <div class="col">
        <h3>Info</h3>
        <div class="info-content">
          Name: {{ item.name }}
          <br />
          Categories: {{ item.categories.join(', ') }}
          <br />
          Geminis data: {{ item.genesis_date || 'No date'}}
          <br />
          <div>
            <h4 class="mb-4">Ticker</h4>
            <div class="ticker-content">
              <Ticker v-for="ticker in tickers" :key="ticker.target_coin_id" :value="ticker" />
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <h3>Description</h3>
        <div class="description-content">
          <div
            style="text-align: justify; padding: 3px 10px"
            v-html="item.description[location]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Spinner from '@/components/Spinner.vue';
import Ticker from '@/components/Ticker.vue';

export default {
  name: 'coin-detail',
  components: {
    Spinner,
    Ticker
  },
  data() {
    return {
      location: 'en',
      target: 'USD'
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.fetchItem({ id });
  },
  computed: {
    ...mapGetters({ loading: 'coins/getLoadingDetail', item: 'coins/getItem' }),
    tickers() {
      return this.item.tickers.filter(i => i.target === this.target);
    }
  },
  methods: {
    ...mapActions({ fetchItem: 'coins/fetchCoin' })
  }
};
</script>

<style lang="scss" scoped>
.description-content {
  text-align: justify;
  max-height: 500px;
  overflow: auto;
}
.info-content {
  text-align: left;
}
.ticker-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(80px, auto);
}
</style>
