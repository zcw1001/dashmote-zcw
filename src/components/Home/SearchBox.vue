<!-- 
  The text input is the search input box.
  The "search-outlined" is the search icon.
-->
<template>
  <div id="SearchBox">
    <input 
      @input="e => { onSearch((e.target as HTMLInputElement).value) }"
      placeholder="Search for a keyword" 
    />
    <search-outlined id="search-icon" />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'

const onSearch = inject('onSearch') as Function
</script>

<style scoped>
#SearchBox {
  position: relative;
  float: right; /* position the search input box at the rightmost when the screen is large */

  color: #4B5563;
}
#search-icon {
  position: absolute; /* position the search icon relative to the search input box */
  right: 215px;
  top: 10px;
  font-size: 20px;

  opacity: 0.6; /* make the icon lighter */
}
input {
  height: 40px;
  width: 250px;
  border: 1px solid #D1D5DB;
  border-radius: 10px;
  outline: none;
  padding: 7px 10px 5px 50px;
}
/* styles applied when the screen is small */
@media screen and (max-width: 768px) {
    #SearchBox {
      width: 100%; /* make the search box container as wide as the "search-container" div when screen is small */
    }
    #search-icon {
      right: 0;
      top: 10px;
    }
    input {
      width: 100%;
      border: none;
      padding-left: 0;
      padding-right: 25px;
      border-radius: 0;
      border-bottom: 2px solid #9CA3AF;

      background-color: #f2f6fc;
    }
}
</style>