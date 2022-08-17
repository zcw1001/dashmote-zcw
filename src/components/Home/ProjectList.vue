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
    height: calc(100vh - 300px);
    padding: 0 20px 300px 0;
    overflow-y: scroll;
    overflow-x: hidden;
}
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