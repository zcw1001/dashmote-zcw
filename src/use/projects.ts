import { reactive } from 'vue'
import type { Project } from '@/models/types'

export default function useProjects() {
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
   * This function filters the matchingProjects array with the given query string
   */
  function filterProjects(query: string): void {
    // When query is empty string, restore the matchingProjects array with the projects array and return
    if (query === '') {
      matchingProjects.splice(0, matchingProjects.length, ...projects)
      return
    }
    // If query is not empty, then search the projects array and 
    // add the projects whose name includes query into the matchingProjects array
    matchingProjects.splice(0, matchingProjects.length, ...projects.filter(project => {
      return project.name.includes(query)
    }))
  }

  /*
   * This function delete the project with the given project name from projects and matchingProjects arrays.
   */
  function deleteProject(projectName: string): void {
    // 1. Find the matching project in projects array and delete it
    let matching_index = projects.findIndex(project => {
      return project.name === projectName
    })
    if (matching_index > -1) {
      projects.splice(matching_index, 1)
    }
    // 2. Find the matching project in matchingProjects array and delete it
    matching_index = matchingProjects.findIndex(project => {
      return project.name === projectName
    })
    if (matching_index > -1) {
      matchingProjects.splice(matching_index, 1)
    }
  }

  return {
    projects,
    matchingProjects,
    filterProjects,
    deleteProject
  }
}