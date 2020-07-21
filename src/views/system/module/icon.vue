<template>
    <div>
         <el-dialog title="操作" :visible.sync="iconVisible" width="30%">
             <div class="flex icon_box" @click="chooseIcon">
                 <i class="el-icon-platform-eleme"></i>
                 <i class="el-icon-eleme"></i>
                 <i class="el-icon-s-tools"></i>
                 <i class="el-icon-setting"></i>
                 <i class="el-icon-user-solid"></i>
                 <i class="el-icon-user"></i>
                 <i class="el-icon-phone"></i>
                 <i class="el-icon-phone-outline"></i>
                 <i class="el-icon-more"></i>
                 <i class="el-icon-more-outline"></i>
                 <i class="el-icon-star-on"></i>
                 <i class="el-icon-star-off"></i>
                 <i class="el-icon-picture"></i>
                 <i class="el-icon-picture-outline"></i>
                 <i class="el-icon-message-solid"></i>
                 <i class="el-icon-bell"></i>
                 <i class="el-icon-present"></i>
                 <i class="el-icon-position"></i>
                 <i class="el-icon-bangzhu"></i>
                 <i class="el-icon-delete-location"></i>
                 <i class="el-icon-s-cooperation"></i>
                 <i class="el-icon-s-order"></i>
                 <i class="el-icon-s-platform"></i>
                 <i class="el-icon-s-data"></i>
                 <i class="el-icon-s-grid"></i>
                 <i class="el-icon-menu"></i>
                 <i class="el-icon-folder"></i>
                 <i class="el-icon-tickets"></i>
                 <i class="el-icon-loading"></i>
                 <i class="el-icon-document-copy"></i>
                 <i class="el-icon-takeaway-box"></i>
                 <i class="el-icon-message"></i>
                 <i class="el-icon-reading"></i>
                 <i class="el-icon-office-building"></i>
                 <i class="el-icon-link"></i>
                 <i class="el-icon-school"></i>
             </div>
         </el-dialog>
    </div>
</template>
<script>
export default {
  data () {
    return {
      iconVisible: false
    }
  },
  methods: {
    show () {
      this.iconVisible = true
    },
    chooseIcon (e) {
      var target = e.target
      if (target.nodeName == 'I') {
        this.$emit('icon', target.className)
        this.iconVisible = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
    .icon_box{
        padding: 0 10px;
        justify-content: space-between;
        flex-wrap: wrap;
        i{
            font-size: 40px;
            margin:  10px;
        }
    }
</style>
