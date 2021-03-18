<template>
  <label>
    <span>Symbols: </span>
    <select v-model="currentSymbol">
      <option v-for="(sym, id) of symbols" :value="id" :selected="id === currentSymbol">{{ sym }}</option>
    </select>
  </label>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: "SymbolsDropDown",
  props: {
    core: Object,
    onChange: Function,
  },
  setup({ core, onChange }) {
    const symbols = ref(core.api.symbols);
    const currentSymbol = ref(core.api.current_symbol);
    watch(currentSymbol, symbol => {
      core.api.changeCurrentSymbol(symbol);

      if (onChange) {
        onChange(symbol);
      }
    });

    return {
      symbols,
      currentSymbol,
    }
  }
};
</script>

<style scoped>

</style>
