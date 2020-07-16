<template>
  <div>
    <search-form :searchForm="searchForm" :searchData="searchData" @changeSearch="changeSearch"></search-form>
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

    </div>
  </div>
</template>
<script>
import CommonTable from '../../components/commonTable'
import SearchForm from '../../components/searchForm'
export default {
  data () {
    return {
      pagination: {
        pageSize: 10,
        pageNum: 1,
        total: 10
      },
      rowkeys: [], // 表示表格是否选中
      tableHandles: [
        { label: '新增', type: 'primary', hidden: true, handle: (row) => { console.log('新增按钮弹窗') } },
        { label: '删除', type: 'danger', hidden: false, handle: (row) => { console.log('删除弹窗') } }
      ], // 对这个表格的操作按钮
      columns: [
        { label: '角色编号', prop: 'id' },
        { label: '角色名称', prop: 'name' },
        { label: '权限字符', prop: 'string' },
        { label: '显示顺序', prop: 'order' },
        {
          label: '操作',
          type: 'Button',
          btnList: [
            { type: 'primary', label: '编辑', handle: row => { console.log(row) } },
            { type: 'danger', label: '删除', handle: row => { console.log(row) } }
          ]
        }
      ],
      tableData: [
        { id: '1', name: '管理员', string: 'admin', order: '1' },
        { id: '1', name: '普通角色', string: 'common', order: '2' }
      ],
      searchForm: [{ type: 'Input', label: '用户名', prop: 'name', placeholder: '请输入用户名' }
      ],
      searchData: { name: '' }
    }
  },
  components: { CommonTable, SearchForm },
  methods: {
    changeSearch (rows) {
      // 修改searhData
      this.searchData = rows
      console.log(this.searchData)
    },
    selectRow (rows) {
      this.rowkeys = rows
      if (this.rowkeys.length > 0) {
        this.tableHandles.forEach((v) => {
          if (v.label == '删除') {
            v.hidden = true
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
