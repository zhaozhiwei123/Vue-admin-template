<template>
  <div>
    <el-tabs
      v-model="activeKey"
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="selectTab"
    >
      <el-tab-pane
        v-for="(item, index) in pages"
        :key="item.name"
        :label="item.meta.title"
        :name="item.path"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fullPathList: [], // 路径信息
      pages: [], // 存放路由信息
      activeKey: '', // 当前所在tab坐标
      newTabIndex: 0 // 初始tab左边为0
    }
  },
  created () {
    this.pages.push(this.$route)
    this.activeKey = this.$route.fullPath
    this.fullPathList.push(this.$route.fullPath)
    this.selectedLastPath()
  },
  methods: {
    //  初始tab坐标为最后一个
    selectedLastPath () {
      this.activeKey = this.pages[this.pages.length - 1].fullPath
      this.setActiveMenuIndex()
    },
    // 关闭tab
    removeTab (data) {
      if (this.fullPathList.length > 1) {
        console.log(data, this.$route.fullPath)
        var index = this.fullPathList.indexOf(data)
        // 判断删除的是是不是当前标签
        if (this.$route.fullPath == data) {
          // 判断如果这是在最右边的话
          if (index == this.fullPathList.length - 1) {
            this.activeKey = this.fullPathList[index - 1]
          } else if (index == 0) {
            this.activeKey = this.fullPathList[index + 1]
          }
          this.fullPathList.splice(index, 1)
          this.pages.splice(index, 1)
          this.setActiveMenuIndex()
        } else {
          this.fullPathList.splice(index, 1)
          this.pages.splice(index, 1)
        }
      } else {
        this.$message.error('这是最后一个标签，无法被关闭')
      }
    },
    // 跳转
    setActiveMenuIndex () {
      this.$router.push({ path: this.activeKey })
    },
    // 选中tab
    selectTab (data, data2) {
      //  this.$store.dispatch("Active_Menu_Index",this.activeKey)
      this.setActiveMenuIndex()
    }
  },
  watch: {
    $route: function (newVal) {
      this.activeKey = newVal.fullPath
      if (this.fullPathList.indexOf(newVal.fullPath) < 0) {
        this.fullPathList.push(newVal.fullPath)
        this.pages.push(newVal)
      }
    }
  }
}
</script>
