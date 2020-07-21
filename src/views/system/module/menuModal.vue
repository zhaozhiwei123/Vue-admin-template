<template>
  <div>
    <el-dialog title="操作" :visible.sync="dialogFormVisible" width="600" @close="close" destroy-on-close>
     <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="上级权限" :label-width="formLabelWidth" prop="superior" >
          <el-select ref="superiorSelect" v-model="ruleForm.superior" clearable placeholder="请选择上级权限">
            <el-option hidden key="upResId" :value="ruleForm.superior" :label="upResName">
            </el-option>
            <el-tree :data="selectData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </el-select>
        </el-form-item>
         <el-form-item label="菜单类型" :label-width="formLabelWidth" prop="menuType">
          <el-select @change="menuChange" v-model="ruleForm.menuType" placeholder="请选择菜单类型">
            <el-option label="目录" value="1"></el-option>
            <el-option label="菜单" value="2"></el-option>
            <el-option label="按钮" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限名称" :label-width="formLabelWidth" prop="name">
          <el-input
            v-model="ruleForm.name"
            autocomplete="off"
            placeholder="请输入权限名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="动态菜单唯一键" :label-width="formLabelWidth" prop="key">
          <el-input
            v-model="ruleForm.key"
            autocomplete="off"
            placeholder="请输入动态菜单唯一键"
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
        <el-form-item v-if="iconState" label="图标" :label-width="formLabelWidth" prop="logo">
          <el-input
            v-model="ruleForm.logo"
            autocomplete="off"
            placeholder="请选择图标"
            @focus="openIcon"
            ref="iconInput"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleRole">确 定</el-button>
      </div>
    </el-dialog>
    <icon ref="icon" @icon="iconResult"></icon>
  </div>
</template>
<script>
import Icon from './icon'
import STree from '../../../components/sTree'

export default {
  data () {
    return {
      iconState: true, // 图标状态
      upResName: '',
      selectData: [{
        label: '无',
        id: '0'
      }, {
        label: '系统管理',
        id: '1',
        children: [{
          label: '用户管理',
          id: '2'
        }, {
          label: '角色管理',
          id: '3'
        }, {
          label: '菜单管理',
          id: '4'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        key: '',
        order: '',
        state: '',
        menuType: '',
        logo: '',
        superior: ''
      },
      rules: {
        menuType: [{ required: true, message: '请选择菜单类型', trigger: 'change' }],
        superior: [{ required: true, message: '请选择上级权限' }],
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        key: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        order: [{ required: true, message: '请输入显示顺序', trigger: 'blur' }],
        state: [{ required: true, message: '请选择状态', trigger: 'change' }],
        logo: [{ required: true, message: '请选择图标', trigger: 'blur' }]
      },
      formLabelWidth: '120px'
    }
  },
  components: { STree, Icon },
  methods: {
    deep (data, id) {
      data.forEach((v) => {
        if (v.id == id) {
          this.ruleForm.superior = v.label
          this.superiorId = v.id
        }
        if (v.children && v.children.length > 0) {
          this.deep(v.children, id)
        }
      })
    },
    menuChange (data) {
      if (data == 2 || data == 3) {
        this.iconState = false
      }
    },
    // 树形控件选择
    handleNodeClick (data) {
      console.log(data)
      this.ruleForm.superior = data.id
      this.upResName = data.label
      this.$refs.superiorSelect.blur()
    },
    iconResult (name) {
      if (name) {
        this.ruleForm.logo = name
        this.$refs.iconInput.focus()
      }
    },
    openIcon () {
      this.$refs.icon.show()
    },
    add () {
      this.dialogFormVisible = true
    },
    close () {
      this.ruleForm = {
        name: '',
        key: '',
        order: '',
        state: '',
        menuType: '',
        logo: '',
        superior: ''
      }
      this.upResName = ''
    },
    edit (row) {
      const data = { ...row }
      console.log(row, 77788)

      this.dialogFormVisible = true
      Object.assign(this.ruleForm, data)
      this.ruleForm.superior = data.superior.id
      this.upResName = data.superior.label
      // 对选择器树形控件处理
      // this.deep(this.selectData, data.superior.id)
    },
    handleRole () {
      var that = this
      this.$refs.ruleForm.validate((valid, err) => {
        if (valid) {
          console.log(valid)
          this.dialogFormVisible = false

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
