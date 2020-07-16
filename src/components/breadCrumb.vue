<template>
  <div class="bread_crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">{{item.name == "index" ? '首页' : item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () {
    this.breadcrumb()
  },
  methods: {
    breadcrumb () {
      this.breadcrumbList = this.$route.matched.filter((item) => item.name)
      console.log(this.breadcrumbList, 888)
    }
  },
  watch: {
    $route (to, from) {
      this.breadcrumb()
    }
  }
}
</script>
<style lang="less" scoped>
    .bread_crumb{
        background: #fff;
        padding: 20px 0;
    }
</style>
