<template>
  <div id="project-list">
    <ProjectItem
      v-for="project in projects"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectItem from './ProjectItem.vue'
import type { Project } from '@/models/types'

defineProps<{
  projects: Project[]
}>()
</script>

<style scoped>
#project-list {
    height: calc(100vh - var(--project-header-height) - var(--home-header-height) - 80px);  /* the height of MainContent should be: screen height - HomeHeader height - ProjectHeader height - 80px*/
    padding: 0 20px 300px 0; /* 300px padding-bottom makes the project list scrollable even when there are not many projects */
    overflow-y: scroll; /* enable the project list to scroll vertically */
    overflow-x: hidden; /* disable the project list to scroll horizontally */
}
/* styles applied when the screen is small */
@media screen and (max-width: 768px) {
    #project-list {
        height: calc(100vh - var(--project-header-height-sm) - var(--home-header-height) - 30px);  /* the height of MainContent should be: screen height - HomeHeader height - small screen ProjectHeader height - 30px*/
        padding: 0 10px 0 0;
        -ms-overflow-style: none;  /* hide scrollbar for IE */
        scrollbar-width: none;  /* hide scrollbar for Firefox */
        overflow: -moz-scrollbars-none; /* hide scrollbar for older Firefox */
    }
    #project-list::-webkit-scrollbar { 
        display: none;  /* hide scrollbar for Safari and Chrome */
    }
}
</style>