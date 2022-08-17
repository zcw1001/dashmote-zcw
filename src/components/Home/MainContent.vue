<!-- 
  The "slot" component accepts content provided by HomeView
-->
<template>
  <main>
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
main {
    height: calc(100vh - 70px); /* the height of MainContent should be: screen height - header height */
    width: 100%;
    padding: 0 150px;
}
/* styles applied when the screen is small */
@media screen and (max-width: 768px) {
    main {
        padding: 0;
        padding: 0 30px;
    }
}
</style>