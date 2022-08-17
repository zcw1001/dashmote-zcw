<template>
  <main>
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
main {
    height: calc(100vh - 70px);
    width: 100%;
    padding: 0 150px;
}
@media screen and (max-width: 768px) {
    main {
        padding: 0;
        padding: 0 30px;
    }
}
</style>