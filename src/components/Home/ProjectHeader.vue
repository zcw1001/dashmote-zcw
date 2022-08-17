<template>
  <header>
    <div id="welcome-message">
      <div>Hello Sarah!</div>
      <div>Here you can find your projects and dashboards.</div>
    </div>
    <div id="search-container">
      <SearchBox :onSearch="onSearch" />
    </div>
    <div id="title">My Projects:</div>
  </header>
</template>

<script setup lang="ts">
import SearchBox from './SearchBox.vue'

defineProps<{
    onSearch: Function
}>()
</script>

<style scoped>
header {
    position: relative;
    height: 180px;
}
#search-container {
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding-right: 25px;
}
#welcome-message, #title {
  display: none;
}
@media screen and (max-width: 768px) {
    header {
      height: 220px;
    }
    #search-container {
        bottom: 70px;
        padding-right: 0;
    }
    #welcome-message {
        display: block;
        padding-top: 15px;

        color: #223273;
    }
    #welcome-message div:nth-child(1) {
        font-size: 28px;
        font-weight: bold;
    }
    #welcome-message div:nth-child(2) {
        opacity: 0.7;
    }
    #title {
        position: absolute;
        bottom: 10px;
        display: block;
        
        color: #223273;
        font-weight: bold;
    }
}
</style>