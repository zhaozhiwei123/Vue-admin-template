<template>
  <div class="blank_layout">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'BlankLayout',
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.blank_layout{
  height: 100%;
}
/* 不需要左右嵌套的布局 */
</style>
