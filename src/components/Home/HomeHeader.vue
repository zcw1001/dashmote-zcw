<!-- 
  The "#menu-icon" div is the menu icon that appears when the web app is displayed in a mobile app.
  The "#avatar" div is the avatar of the user that appears on the right side the the header.
  The "#username" div is the username of the user. It disappers when the web app is displayed in a mobile app.
  The "#notification" div is the contaienr for the notification icon.
-->
<template>
  <header> 
    <div id="menu-icon" class="center-box">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
    <div id="avatar">
      <img class="center-box" src="/avatar.png" />
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
    height: var(--home-header-height);
    width: 100%;
    padding: 0 var(--padding-lg);
    border-bottom: 1px solid #D1D5DB;
}
#menu-icon {
    display: none; /* do not display the menu icon when screen is large */
}
#notification, #username, #avatar {
    height: 100%;
    float: right; /* place these items in the rightmost of the header  */

    color: var(--blue);
}
#username {
    margin-left: 30px;

    line-height: calc(var(--home-header-height) + 3px); /* position the username slightly below the vertical center */
}
#avatar {
    margin-left: 20px;
}
#avatar img {
    position: relative;
    height: 30px;
    width: 30px;
}
/* styles applied when the screen is small */
@media screen and (max-width: 768px) {
    header {
        padding: 0 var(--padding-sm);
        border-bottom: none;
    }
    #menu-icon {
        position: absolute;
        display: block;
        width: 30px;
        height: 30px;
    }
    #username {
      display: none; /* do not display the username in the header when screen is small */
    }
}
</style>