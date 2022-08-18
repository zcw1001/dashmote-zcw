<!-- 
  Modal is used to ask the user to confirm the deletion of a project
-->
<template>
  <HomeHeader />
  <MainContent>
    <ProjectHeader />
    <ProjectList :projects="matchingProjects" />
  </MainContent>
  <Modal 
    id="deletion-confirmation"
    v-model:visible="modalVisible" 
    title="Project Deletion Confirmation" 
    @ok="confirmDelete">
    <p>If you click <strong>OK</strong>, this project will be <strong>deleted</strong>.</p>
  </Modal>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import useProjects from '@/use/projects'
import HomeHeader from '@/components/Home/HomeHeader.vue'
import ProjectList from '@/components/Home/ProjectList.vue'
import ProjectHeader from '@/components/Home/ProjectHeader.vue'
import MainContent from '@/components/Home/MainContent.vue'

// The projects data and data management functions. For more information, refer to comments in "@/use/projects.ts"
const { matchingProjects, filterProjects, deleteProject } = useProjects()
// The visivility of the deletion confirmation modal
const modalVisible = ref(false)
// The name of the project to be deleted
const deleteProjectName = ref('')

/*
 * The function to be called when deletion of a project is confirmed by the user
 * It deletes the project with the given project name.
 */
function confirmDelete() {
  deleteProject(deleteProjectName.value)
  modalVisible.value = false // hide the deletion confirmation modal
}

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
  // Set the visibility of the deletion confirmation modal to true and asks the user for confirmation
  modalVisible.value = true
  deleteProjectName.value = projectName
})
</script>