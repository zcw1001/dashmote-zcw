<template>
  <div id="project-list">
    <ProjectItem
      v-for="project in projects"
      :project="project"
      :onDelete="onDelete"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectItem from './ProjectItem.vue'
import type { Project } from '@/models/types'

defineProps<{
  projects: Project[]
  onDelete: Function
}>()
</script>

<style scoped>
#project-list {
    height: calc(100vh - 300px);  /* the height of MainContent should be: screen height - HomeHeader height - ProjectHeader height - 50px*/
    padding: 0 20px 300px 0; /* 300px padding-bottom makes the project list scrollable even when there are not many projects */
    overflow-y: scroll; /* enable the project list to scroll vertically */
    overflow-x: hidden; /* disable the project list to scroll horizontally */
}
/* styles applied when the screen is small */
@media screen and (max-width: 768px) {
    #project-list {
        padding: 0 10px 100px 0;
        -ms-overflow-style: none;  /* hide scrollbar for IE */
        scrollbar-width: none;  /* hide scrollbar for Firefox */
        overflow: -moz-scrollbars-none; /* hide scrollbar for older Firefox */
    }
    #project-list::-webkit-scrollbar { 
        display: none;  /* hide scrollbar for Safari and Chrome */
    }
}
</style>