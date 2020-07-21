<template>
  <div class="global_header">
    <div class="header flex space_between align_center">
      <div class="collapse flex align_center">
        <i class="el-icon-s-fold" @click="Collapse"></i>
      </div>
      <el-dropdown split-button type="primary" @command="loginOut" @click="handleClick">
        <i class="el-icon-s-check"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>

  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions(['Collapse', 'LoginOut']),
    handleClick () {

    },
    loginOut (data) {
      if (data == 'loginOut') {
        this.LoginOut().then(() => {
          location.reload()
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.global_header {
  .header {
    height: 70px;
    padding: 0 20px;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    box-shadow: 5px 5px 5px #e8e8e8;
    .collapse {
      height: 100%;
      .el-icon-bangzhu {

      }
    }
  }
}
</style>
