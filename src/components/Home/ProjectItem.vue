<!-- 
  The "#vertical-bar" div is the vertical bar that has different colors for different project categories.
  The "#category" div shows the category of the project.
  The "#name" div shows the name of the project.
  The "#n-users" div shows how many users are there for the project.
  The "#n-dashboards" div shows how many dashboards are there for the project.
  The "#delete" div is a text button for deletion of the project.
-->
<template>
  <div id="project-item">
    <div 
      id="vertical-bar"
      :style="{ backgroundColor: categoryColors[project.category][0] }"
    ></div>
    <div id="category">
      <span 
        class="center-box"
        :style="{ color: categoryColors[project.category][0], backgroundColor: categoryColors[project.category][1] }"
      >{{ project.category }}</span>
    </div>
    <div id="name">{{ project.name }}</div>
    <div id="n-users">{{ project.users }} users</div>
    <div id="n-dashboards">
      <span class="center-box">{{ project.dashboards }} dashboards</span>
    </div>
    <div 
      @click="() => { onDelete(project.name) }"
      id="delete"
    >Delete</div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { Project } from '@/models/types'

defineProps<{
  project: Project
}>();
const onDelete = inject('onDelete') as Function

// the colors for each category
// the second color is lighter than the first color
const categoryColors = {
  'C': ['#34D399', '#D1FAE5'],
  'F': ['#A78BFA', '#EDE9FE'],
  'D': ['#60A5FA', '#DBEAFE']
}
</script>

<style scoped>
#project-item {
  --item-height: 70px;
  display: flex; /* this container div is a flexbox */
  width: 100%;
  height: var(--item-height);
  margin-bottom: 10px;
  border-radius: 6px;

  background-color: white;
  box-shadow: 1px 2px 5px 2px #E5E7EB;
}
#vertical-bar {
    width: 10px;
    height: 100%;
    border-radius: 6px 0 0 6px;
    float: left; /* position the vertical bar at the leftmost of the container */
}
#category, #name, #n-users, #n-dashboards, #delete {
    height: 100%;
}
#name, #n-users, #delete {
    padding: 0 15px;

    line-height: var(--item-height); /* vertically center the text */
}
#name {
    flex-grow: 8; /* defines the relative width of the "name" div */

    color: var(--blue);
}
#n-users {
    flex-grow: 4; /* defines the relative width of the "n-users" div */
}
#category {
    flex-grow: 2; /* defines the relative width of the "category" div */
    padding: 0 15px;
}
#category span {
    position: relative;
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%; /* make it round */

    line-height: 32px; /* center the text vertically */
    text-align: center;
}
#n-dashboards {
    flex-grow: 2; /* defines the relative width of the "n-dashboards" div */
    padding-left: 0 15px;
}
#n-dashboards span {
    position: relative;
    display: inline-block;
    height: 25px;
    padding: 0 10px;
    border: 2px solid var(--green);
    border-radius: 5px;

    background-color: var(--light-green);
    color: var(--green);
    line-height: 23px;
}
#delete {
    flex-grow: 1; /* defines the relative width of the "delete" div */

    color: var(--red);
    cursor: pointer;
}
/* styles applied when the screen is small */
@media screen and (max-width: 768px) {
    #n-users, #n-dashboards, #delete  {
        display: none; /* do not display "n-users", "n-dashboards", and "delete" div when screen is small */
    }
    #category {
        flex-grow: 1; /* defines the relative width of the "category" div when screen is small */
    }
    #name {
        flex-grow: 8; /* defines the relative width of the "name" div when screen is small */
    }
}
</style>