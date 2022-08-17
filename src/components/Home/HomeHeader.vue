<template>
  <header>
    <div id="menu-icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
    <div id="avatar">
      <img src="/avatar.png" />
    </div>
    <div id="username">Sarah Green</div>
    <div id="notification">
      <NotificationIcon />
    </div>
  </header>
</template>

<script setup lang="ts">
import NotificationIcon from './NotificationIcon.vue'
</script>

<style scoped>
header {
    position: relative;
    height: 70px;
    width: 100%;
    padding: 0 150px;
    border-bottom: 1px solid #D1D5DB;
}
#menu-icon {
    display: none;
}
#notification, #username, #avatar {
    height: 100%;
    float: right;

    color: #223273;
}
#username {
    padding-left: 30px;

    line-height: 73px;
}
#avatar {
    padding-left: 20px;
}
#avatar img {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    height: 30px;
    width: 30px;
}
@media screen and (max-width: 768px) {
    header {
        padding: 0 30px;
        border-bottom: none;
    }
    #menu-icon {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        display: block;
        width: 30px;
        height: 30px;
    }
    #username {
      display: none;
    }
}
</style>