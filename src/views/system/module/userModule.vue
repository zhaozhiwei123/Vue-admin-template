<template>
  <div>
    <el-dialog title="操作" :visible.sync="dialogFormVisible" width="600" @close="close" destroy-on-close>
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
          <el-input
            v-model="ruleForm.name"
            autocomplete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input
            v-model="ruleForm.phone"
            type="number"
            autocomplete="off"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择部门">
            <el-option label="技术部" value="1"></el-option>
            <el-option label="市场部" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        region: '',
        phone: ''
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        region: [{ required: true, message: '请选择部门', trigger: 'change' }]
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    add () {
      this.dialogFormVisible = true
    },
    close () {
      console.log('close')
      this.ruleForm = {
        name: '',
        region: '',
        phone: ''
      }
    },
    edit (row) {
      console.log(row, 77788)
      this.dialogFormVisible = true
      Object.assign(this.ruleForm, row)
    },
    handleUser () {
      var that = this
      this.$refs.ruleForm.validate((valid, err) => {
        if (valid) {
          this.dialogFormVisible = false
          console.log(that)
          that.$emit('refresh')
        } else {
          console.log('校验未通过')
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .el-select{
    width:100%;
  }
</style>
