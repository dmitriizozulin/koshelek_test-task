<template>
  <div v-for="a in table.data" class="table">
    <symbols-drop-down class="table__select" :core="core" />
    <div class="table__content">
      <ul class="table__order">
        <li class="table__row table__title">Bids</li>
        <li class="table__row table__title">
          <span class="table__column">Amount</span>
          <span class="table__column">Price</span>
          <span class="table__column">Total</span>
        </li>
        <li class="table__row" v-for="bid in a.bids">
          <span class="table__column">{{ bid[1] }}</span>
          <span class="table__column">{{ bid[0] }}</span>
          <span class="table__column">{{ bid[0] * bid[1] }}</span>
        </li>
      </ul>
      <ul class="table__order">
        <li class="table__row table__title">Asks</li>
        <li class="table__row table__title">
          <span class="table__column">Amount</span>
          <span class="table__column">Price</span>
          <span class="table__column">Total</span>
        </li>
        <li class="table__row" v-for="ask in a.asks">
          <span class="table__column">{{ ask[1] }}</span>
          <span class="table__column">{{ ask[0] }}</span>
          <span class="table__column">{{ ask[0] * ask[1] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

import SymbolsDropDown from './SymbolsDropDown';

export default {
  name: "Table",
  components: { SymbolsDropDown },
  props: {
    core: Object,
  },
  setup({ core }) {
    core.api.getData();

    const table = reactive({ data: {} });
    core.store.subscribe(data => table.data = data);

    return {
      table,
      core,
    };
  },
  beforeRouteLeave() {
    this.core.api.close();
  },
};
</script>

<style scoped>
.table {
  overflow: hidden;

  width: calc(100% - 17px);
}

.table:hover {
  overflow-y: auto;

  width: 100%;
}

.table__content {
  display: flex;
}

.table__select {
  display: inline-block;
  margin: 10px 17px;
}

.table__order {
  margin: 0;
  padding: 0;
}

.table__order:not(:last-child) {
  margin-right: 10px;
}

.table__order:first-child {
  margin-left: 17px;
}

.table__column {
  width: 150px;
}

.table__row {
  background-color: #cdcdcd;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 4px 8px;
}

.table__row:nth-child(even) {
  background-color: #fdfdfd;
}

.table__title {
  font-weight: 600;
}
</style>
