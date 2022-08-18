<template>
  <HomeHeader />
  <MainContent>
    <ProjectHeader />
    <ProjectList :projects="matchingProjects" />
  </MainContent>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import UseProjects from '@/use/projects'
import HomeHeader from '@/components/Home/HomeHeader.vue'
import ProjectList from '@/components/Home/ProjectList.vue'
import ProjectHeader from '@/components/Home/ProjectHeader.vue'
import MainContent from '@/components/Home/MainContent.vue'

// The projects data and data management functions. For more information, refer to comments in "@/use/projects.ts"
const { matchingProjects, filterProjects, deleteProject } = UseProjects()

// Provide onSearch and onDelete functions to subcomponents
provide('onSearch', function(query: string) {
  // The onSearch function is called when a user inputs some text to the search box.
  filterProjects(query)
})
// 
provide('onDelete', function(projectName: string) {
  // The onDelete function is called when a user clicks the button to delete a project.
  deleteProject(projectName)
})
</script>