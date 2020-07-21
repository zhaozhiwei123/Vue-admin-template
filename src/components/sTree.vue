<template >
  <div class="s_tree">
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
    >
    </el-tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [{
        id: 1,
        label: '系统管理',
        children: [
          {
            id: 2,
            label: '用户管理'
          },
          {
            id: 3,
            label: '角色管理'
          },
          {
            id: 4,
            label: '菜单管理'
          }
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    set (rows) {
      this.$refs.tree.setCheckedNodes(rows)
    }
  }
}
</script>
<style lang="less" scoped>
    .s_tree{
        margin-top: 8px;
    }
</style>
