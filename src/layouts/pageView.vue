<template>
    <div class="page_view">
        <!-- 面包屑 -->
        <bread-crumb></bread-crumb>
        <router-view></router-view>
    </div>
</template>
<script>
import BreadCrumb from '../components/breadCrumb'
export default {
  components: { BreadCrumb }

}
</script>
<style lang="less" scoped>
   .page_view{
       padding: 0 20px;
       flex: 1
   }
</style>
