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
.notification-icon:before { /* This pseudo-elemnt is the red circle that appears above the bell icon */
    content: '';
    position: absolute;
    top: 3px; /* position it relatie to the notification icon */
    left: 11px; /* position it relatie to the notification icon */
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%; /* make it round */

    background-color: #EF4444;
}
</style>