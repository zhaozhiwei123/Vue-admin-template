<template>
  <div>
    <search-form :searchForm="searchForm" :searchData="searchData" @changeSearch="changeSearch" ></search-form>
    <common-table
      :columns="columns"
      :tableData="tableData"
      :tableHandles="tableHandles"
      :isSelection="true"
      :isIndex="true"
      :rowkeys="rowkeys"
      @selectRow="selectRow"
      :pagination="pagination"

    >
    </common-table>
    <user-modal ref="userModal" :dialogFormVisible="dialogFormVisible" @refresh="refresh"></user-modal>
  </div>
</template>
<script>
import CommonTable from '../../components/commonTable'
import SearchForm from '../../components/searchForm'
import UserModal from './module/userModule'
export default {
  data () {
    return {
      dialogFormVisible: false, // 控制弹窗是否显示
      pagination: {
        pageSize: 10,
        pageNum: 1,
        total: 10
      },
      rowkeys: [], // 表示表格是否选中
      tableHandles: [
        { label: '新增', type: 'primary', hidden: true, handle: (row) => { this.$refs.userModal.add() } },
        { label: '删除', type: 'danger', hidden: false, handle: (row) => { console.log('删除弹窗') } }
      ], // 对这个表格的操作按钮
      columns: [
        { label: 'ID', prop: 'id' },
        { label: '用户名', prop: 'name' },
        { label: '部门', prop: 'organ' },
        { label: '手机号', prop: 'phone' },
        {
          label: '操作',
          type: 'Button',
          width: '200',
          btnList: [
            { type: 'primary', label: '编辑', handle: row => { this.$refs.userModal.edit(row) } },
            { type: 'danger', label: '删除', handle: row => { console.log(row) } }
          ]
        }
      ],
      tableData: [
        { id: '1', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '2', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '3', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '4', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '5', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '6', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '7', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '8', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '9', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' },
        { id: '10', name: '赵志伟', organ: '技术部', phone: '15755023225', region: '1' }
      ],
      searchForm: [{ type: 'Input', label: '用户名', prop: 'name', placeholder: '请输入用户名' }
      ],
      searchData: { name: '' }
    }
  },
  components: { CommonTable, SearchForm, UserModal },
  methods: {
    refresh () {
      console.log('刷新表格')
    },
    changeSearch (rows) {
      // 修改searhData
      this.searchData = rows
      console.log(this.searchData)
      this.refresh()
    },
    selectRow (rows) {
      this.rowkeys = rows
      if (this.rowkeys.length > 0) {
        this.tableHandles.forEach((v) => {
          if (v.label == '删除') {
            v.hidden = true
          }
        })
      } else {
        this.tableHandles.forEach((v) => {
          if (v.label == '删除') {
            v.wwwwwwwwwwwwwww = false
          }
        })
      }
    },
    onSubmit () {
      console.log('submit!')
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
