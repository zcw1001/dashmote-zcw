<template>
  <HomeHeader />
  <MainContent>
    <ProjectHeader :onSearch="onSearch" />
    <ProjectList :projects="matchingProjects" :onDelete="onDelete" />
  </MainContent>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { Project } from '@/models/types'
import HomeHeader from '@/components/Home/HomeHeader.vue'
import ProjectList from '@/components/Home/ProjectList.vue'
import ProjectHeader from '@/components/Home/ProjectHeader.vue'
import MainContent from '@/components/Home/MainContent.vue'

// The projects data
const projects: Project[] = reactive([
  {"name": "Project A", "users": 4, "dashboards": 3, category: "D"},
  {"name": "Project B", "users": 2, "dashboards": 4, category: "C"},
  {"name": "Project C", "users": 1, "dashboards": 2, category: "F"},
  {"name": "Project D", "users": 3, "dashboards": 2, category: "D"}
])

// The projects that matches the query in the search box. 
// If the search box is empty (query is empty string),
// Then the matchingProjects array should have same elements as the projects array
const matchingProjects: Project[] = reactive([...projects])

/*
 * The function to be called when a user inputs some text to the search box.
 * This function updates the matchingProjects array with the given query
 */
function onSearch(query: string): void {
  // When query is empty string, restore the matchingProjects array with the projects array and return
  if (query === '') {
    matchingProjects.splice(0, matchingProjects.length, ...projects)
    return
  }
  // If query is not empty, then search the projects array and 
  // add the projects whose name includes query into the matchingProjects array
  matchingProjects.splice(0, matchingProjects.length) // Delete all elements in matchingProjects array
  for (let project of projects) {
    if (project.name.includes(query)) {
      matchingProjects.push(project)
    }
  }
}
/*
 * The function to be called when a user clicks the button to delete a project.
 * This function delete the project from the projects and matchingProjects arrays with the given project name.
 */
function onDelete(projectName: string): void {
  // If the user does not click OK, then the deletion process will be ended.
  if (!confirm("The project will be deleted if you click OK.")) {
    return
  }
  // If the user clicks OK, then the project with the given project name will be deleted.
  // 1. Find the matching project in projects array and delete it
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === projectName) {
      projects.splice(i, 1)
      break
    }
  }
  // 2. Find the matching project in matchingProjects array and delete it
  for (let i = 0; i < matchingProjects.length; i++) {
    if (matchingProjects[i].name === projectName) {
      matchingProjects.splice(i, 1)
      break
    }
  }
}
</script>