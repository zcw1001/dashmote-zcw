<template>
  <div id="SearchBox">
    <input 
      @input="e => { onSearch((e.target as HTMLInputElement).value) }"
      class="big-screen" 
      placeholder="Search for a keyword" 
    />
    <search-outlined id="search-icon" />
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined } from '@ant-design/icons-vue'

defineProps<{
    onSearch: Function
}>()
</script>

<style scoped>
#SearchBox {
  position: relative;
  float: right;

  color: #4B5563;
}
#search-icon {
  position: absolute;
  right: 215px;
  top: 10px;
  font-size: 20px;

  opacity: 0.6;
}
input {
  height: 40px;
  width: 250px;
  border: 1px solid #D1D5DB;
  border-radius: 10px;
  outline: none;
  padding: 7px 10px 5px 50px;
}
@media screen and (max-width: 768px) {
    #SearchBox {
      width: 100%;
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