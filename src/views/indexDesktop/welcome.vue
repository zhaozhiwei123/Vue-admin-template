<template>
<div class="deskbg">
  <div style="min-width:800px; margin:0 auto; overflow-x:hidden;">
  <img  :src="`${publicPath}welcome.jpg`" style="width:1920px; position:relative; left:50%; margin-left:-960px;">
  </div>
</div>
</template>

<script>


export default {

  data () {
    return {
      publicPath:process.env.BASE_URL
    }
  },

  mounted () {
    
  },
 
}
</script>

<style scoped>
/**.bg{background: #f0f2f5 url(${publicPath}/logo.png) no-repeat 50%; width:100px; height:100px;}**/
</style>
