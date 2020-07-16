<template>
  <div id="app">
   
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
 
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted(){
       
    },
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
