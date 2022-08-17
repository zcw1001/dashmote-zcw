<template>
  <div id="project-item">
    <div 
      id="vertical-bar"
      :style="{ backgroundColor: categoryColors[project.category][0] }"
    ></div>
    <div id="category">
      <span 
        :style="{ color: categoryColors[project.category][0], backgroundColor: categoryColors[project.category][1] }"
      >{{ project.category }}</span>
    </div>
    <div id="name">{{ project.name }}</div>
    <div id="n-users">{{ project.users }} users</div>
    <div id="n-dashboards">
      <span>{{ project.dashboards }} dashboards</span>
    </div>
    <div 
      @click="() => { onDelete(project.name) }"
      id="delete"
    >Delete</div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/models/types'

defineProps<{
  project: Project
  onDelete: Function
}>();

const categoryColors = {
  'C': ['#34D399', '#D1FAE5'],
  'F': ['#A78BFA', '#EDE9FE'],
  'D': ['#60A5FA', '#DBEAFE']
}
</script>

<style scoped>
#project-item {
  display: flex;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 6px;

  background-color: white;
  box-shadow: 1px 2px 5px 2px #E5E7EB;
}
#vertical-bar {
  width: 10px;
  height: 100%;
  border-radius: 6px 0 0 6px;
  float: left;
}
#name, #n-users, #delete {
  height: 70px;
  padding: 0 15px;

  line-height: 70px;
}
#name {
  flex-grow: 8;

  color: #223273;
}
#n-users {
  flex-grow: 4;
}
#category, #delete {
  flex-grow: 1;
}
#category {
  flex-grow: 2;
  height: 70px;
  padding: 0 15px;
}
#category span {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 50%;

  background-color: #D1FAE5;
  color: #34D399;
  line-height: 32px;
  text-align: center;
}
#n-dashboards {
  flex-grow: 2;
  height: 70px;
  padding-left: 0 15px;
}
#n-dashboards span {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  display: inline-block;
  height: 25px;
  padding: 0 10px;
  border: 2px solid #6EE7B7;
  border-radius: 5px;

  background-color: #D1FAE5;
  color: #34D399;
  line-height: 23px;
}
#delete {
  color: #FB7185;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
    #n-users, #n-dashboards, #delete  {
        display: none;
    }
    #category {
      flex-grow: 1;
    }
    #name {
      flex-grow: 8;
    }
}
</style>