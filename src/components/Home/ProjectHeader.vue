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
      <SearchBox />
    </div>
    <div id="title">My Projects:</div>
  </header>
</template>

<script setup lang="ts">
import SearchBox from './SearchBox.vue'
</script>

<style scoped>
header {
    position: relative;
    height: var(--project-header-height);
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
        height: var(--project-header-height-sm);
    }
    #search-container {
        bottom: 70px;
        padding-right: 0;
    }
    #welcome-message {
        display: block;
        margin-top: 15px;

        color: var(--blue);
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
        
        color: var(--blue);
        font-weight: bold;
    }
}
</style>