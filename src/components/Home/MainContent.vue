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
    height: calc(100vh - var(--home-header-height)); /* the height of MainContent should be: screen height - header height */
    width: 100%;
    padding: 0 var(--padding-lg);
}
/* styles applied when the screen is small */
@media screen and (max-width: 768px) {
    main {
        height: calc(100vh - var(--home-header-height-sm)); /* the height of MainContent should be: screen height - header height */
        padding: 0 var(--padding-sm);
    }
}
</style>