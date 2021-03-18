<template>
    <header>
      <navigation />
    </header>
    <router-view :core="core" />
</template>

<script>
  import Core from '../core';

  import Navigation from './Navigation';
  import Table from './Table';

  export default {
    components: { Table, Navigation },
    setup() {
      const core = new Core();

      return {
        core,
      }
    }
  }
</script>

<style>
  body {
    font-family: "Roboto", "Open Sans", sans-serif;
    font-size: 14px;
    line-height: 1.6;

    margin: 0;
    padding: 0;
  }

  #app {
    align-items: flex-start;
    display: flex;
    flex-direction: column;

    height: 100vh;
  }
</style>
