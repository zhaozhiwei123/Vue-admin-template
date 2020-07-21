<template>
  <div>
    <search-form :searchForm="searchForm" :searchData="searchData" @changeSearch="changeSearch"></search-form>
    <common-table
      :columns="columns"
      :tableData="tableData"
      :tableHandles="tableHandles"
      :isSelection="false"
      :isIndex="true"
      :rowkeys="rowkeys"
      @selectRow="selectRow"
      :pagination="pagination"
      :expandAll="expandAll"
    >
    </common-table>

    <menu-modal ref="memuModal" :dialogFormVisible="dialogFormVisible" @refresh="refresh"></menu-modal>
  </div>
</template>
<script>
import CommonTable from '../../components/commonTable'
import SearchForm from '../../components/searchForm'
import MenuModal from './module/menuModal'
export default {
  data () {
    return {
      expandAll: true,
      dialogFormVisible: false, // 控制弹窗是否显示
      pagination: {
        pageSize: 10,
        pageNum: 1,
        total: 10
      },
      rowkeys: [], // 表示表格是否选中
      tableHandles: [
        { label: '新增', type: 'primary', hidden: true, handle: (row) => { this.$refs.memuModal.add() } },
        { label: '删除', type: 'danger', hidden: false, handle: (row) => { console.log('删除弹窗') } }
      ], // 对这个表格的操作按钮
      columns: [
        { label: '权限名称', prop: 'name' },
        { label: '动态菜单唯一键', prop: 'key' },
        { label: '排序', prop: 'order' },
        { label: '类型', prop: 'type' },
        { label: '状态', prop: 'state' },
        {
          label: '操作',
          type: 'Button',
          width: '200',
          btnList: [
            { type: 'primary', label: '编辑', handle: row => { this.$refs.memuModal.edit(row) } },
            { type: 'danger', label: '删除', handle: row => { console.log(row) } }
          ]
        }
      ],
      tableData: [
        {
          id: '1',
          name: '系统管理',
          key: '/system',
          order: '1',
          type: '1',
          state: '1',
          logo: 'el-icon-message',
          menuType: '1',
          superior: { label: '无', id: 0 },
          children: [{
            id: '2',
            name: '用户管理',
            key: '/system/user',
            order: '1',
            type: '1',
            state: '1',
            logo: 'el-icon-message',
            menuType: '2',
            superior: { label: '系统管理', id: '1' }
          }, {
            id: '3',
            name: '角色管理',
            key: '/system/role',
            order: '1',
            type: '1',
            state: '1',
            logo: 'el-icon-message',
            menuType: '2',
            superior: { label: '系统管理', id: '1' }
          }, {
            id: '4',
            name: '菜单管理',
            key: '/system/menu',
            order: '1',
            type: '1',
            state: '1',
            logo: 'el-icon-message',
            menuType: '2',
            superior: { label: '系统管理', id: '1' }
          }]
        }
      ],
      searchForm: [{ type: 'Input', label: '用户名', prop: 'name', placeholder: '请输入用户名' }
      ],
      searchData: { name: '' }
    }
  },
  components: { CommonTable, SearchForm, MenuModal },
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
      console.log(rows)
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
            v.hidden = false
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
