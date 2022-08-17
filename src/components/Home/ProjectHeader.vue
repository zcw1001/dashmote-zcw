<!-- 
  The "#welcome-message" div displays the welcome message for the user only when screen is small
  The "#search-container" div is the container for the search box.
  The "#title" div is the title of the project list below. It only appears when the screen is small.
-->
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
  display: none; /* do not display the welcome message and title when screen is large */
}
/* styles applied when the screen is small */
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
        font-weight: bold; /* make the first message bold */
    }
    #welcome-message div:nth-child(2) {
        opacity: 0.7; /* make the second message lighter */
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