<template>
  <HomeHeader />
  <MainContent>
    <ProjectHeader />
    <ProjectList :projects="matchingProjects" />
  </MainContent>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import useProjects from '@/use/projects'
import HomeHeader from '@/components/Home/HomeHeader.vue'
import ProjectList from '@/components/Home/ProjectList.vue'
import ProjectHeader from '@/components/Home/ProjectHeader.vue'
import MainContent from '@/components/Home/MainContent.vue'

// The projects data and data management functions. For more information, refer to comments in "@/use/projects.ts"
const { matchingProjects, filterProjects, deleteProject } = useProjects()

// Provide onSearch and onDelete functions to subcomponents
/* 
 * The onSearch function is called when a user inputs some text to the search box.
*/
provide('onSearch', function(query: string) {
  filterProjects(query)
})
/* 
 * The onDelete function is called when a user clicks the button to delete a project.
*/
provide('onDelete', function(projectName: string) {
  // If the user does not click OK, then the deletion process will end.
  if (!confirm("The project will be deleted if you click OK.")) {
    return
  }
  // If the user clicks OK, then the project with the given project name will be deleted.
  deleteProject(projectName)
})
</script>