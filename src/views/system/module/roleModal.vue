<template>
  <div>
    <el-dialog title="操作" :visible.sync="dialogFormVisible" width="600" @close="close" destroy-on-close>
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name">
          <el-input
            v-model="ruleForm.name"
            autocomplete="off"
            placeholder="请输入角色名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="权限字符" :label-width="formLabelWidth" prop="string">
          <el-input
            v-model="ruleForm.string"
            autocomplete="off"
            placeholder="请输入权限字符"
          ></el-input>
        </el-form-item>
        <el-form-item label="显示顺序" :label-width="formLabelWidth" prop="order">
          <el-input
            v-model="ruleForm.order"
            autocomplete="off"
            placeholder="请输入显示顺序"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth" prop="state">
          <el-select v-model="ruleForm.state" placeholder="请选择状态">
            <el-option label="正常" value="1"></el-option>
            <el-option label="禁用" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="拥有权限" :label-width="formLabelWidth" >
            <s-tree ref="sTree"></s-tree>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleRole">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import STree from '../../../components/sTree'
export default {
  data () {
    return {
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        string: '',
        order: '',
        state: ''
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        string: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        order: [{ required: true, message: '请输入显示顺序', trigger: 'blur' }],
        state: [{ required: true, message: '请选择状态', trigger: 'change' }]
      },
      formLabelWidth: '120px'
    }
  },
  components: { STree },
  methods: {
    add () {
      this.dialogFormVisible = true
    },
    close () {
      this.ruleForm = {
        name: '',
        string: '',
        order: '',
        state: ''
      }
    },
    edit (row) {
      console.log(row, 77788)
      this.dialogFormVisible = true
      Object.assign(this.ruleForm, row)
      this.$nextTick(() => {
        this.$refs.sTree.set([{
          id: 2,
          label: '用户管理'
        }, {
          id: 3,
          label: '角色管理'
        }])
      })
    },
    handleRole () {
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
