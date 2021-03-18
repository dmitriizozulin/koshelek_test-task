<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="/diff">Diff</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.navigation__list {
  display: flex;

  margin: 0;
  padding: 20px;
}

.navigation__item {
  list-style: none;

  font-size: 1.2rem;
}

.navigation__item:not(:last-child) {
  margin: 0 20px 0 0;
}
</style>
