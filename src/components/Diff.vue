<template>
  <div class="diff">
    <symbols-drop-down :core="core" :on-change="onChangeCurrentSymbol" />
    <ul v-for="diff of diffs[currentSymbol]" v-if="diffs">
      <li>{{diff.date.toDateString()}} {{diff.date.toTimeString()}}</li>
      <li>
        <ul>
          <li>Bids</li>
          <li v-for="bid of diff[currentSymbol].bids">
            <span>Price: {{bid[0]}}</span>
            <br>
            <span>Amount: {{bid[1]}}</span>
          </li>
        </ul>
        <ul>
          <li>Asks</li>
          <li v-for="ask of diff[currentSymbol].asks">
            <span>Price: {{ask[0]}}</span>
            <br>
            <span>Amount: {{ask[1]}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import SymbolsDropDown from './SymbolsDropDown';

export default {
  name: "Diff",
  components: { SymbolsDropDown },
  props: {
    core: Object,
  },
  setup({ core }) {
    const currentSymbol = ref(core.api.symbols[core.api.current_symbol]);
    const diffs = ref(core.store.getDiff());
    // const currentDiff = reactive({value: diffs?.value[currentSymbol?.value]});

    function onChangeCurrentSymbol(symbol) {
      currentSymbol.value = core.api.symbols[symbol];
    }

    return {
      core,
      diffs,
      currentSymbol,
      onChangeCurrentSymbol,
    }
  }
};
</script>

<style scoped>
  .diff {
    padding: 0 10px;
  }
</style>
