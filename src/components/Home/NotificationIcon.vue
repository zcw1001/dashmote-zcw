<template>
  <bell-outlined 
    class="notification-icon"
    :style="{ 'fontSize': '20px' }" 
  />
  
</template>

<script setup lang="ts">
import { BellOutlined } from '@ant-design/icons-vue'
</script>

<style scoped>
.notification-icon {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);

    cursor: pointer;
}
.notification-icon:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 11px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background-color: #EF4444;
}
</style>