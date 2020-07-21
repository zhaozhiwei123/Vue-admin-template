<template>
  <div>
    <div class="table_handle_btn">
      <el-button
        v-for="(item, index) in tableHandles"
        :key="index"
        v-if="item.hidden"
        :size="item.size || size"
        :type="item.type || type"
        :icon="item.icon"
        @click="item.handle()"
      >
        {{ item.label }}
      </el-button>
    </div>
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @select="select"
      @select-all="selectAll"
      :tree-props = "treeProps"
      row-key="id"
      :default-expand-all="expandAll"
    >
      <el-table-column v-if="isSelection" type="selection" width="55">
      </el-table-column>
      <el-table-column v-if="isIndex" type="index" label="序号" width="50" />
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
      >
        <template slot-scope="scope">
          <span v-if="item.type === 'Button'">
            <el-button
              v-for="(btn, n) in item.btnList"
              :key="n"
              :disabled="btn.isDisabled && btn.isDisabled(scope.row)"
              :type="btn.type || type"
              :size="btn.size || size"
              :icon="btn.icon"
              @click="btn.handle(scope.row)"
              >{{ btn.label }}
            </el-button>
          </span>
          <!-- 输入框 -->
          <el-input
            v-if="item.type === 'Input'"
            v-model="scope.row[item.prop]"
            @focus="item.focus && item.focus(scope.row)"
          ></el-input>
          <span v-if="!item.type">{{
            (item.formatter && item.formatter(scope.row)) ||
              scope.row[item.prop]
          }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if='isPagination'
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.pageNum"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage4: 1
    }
  },
  mounted () {},
  props: {
    expandAll: {
      type: Boolean,
      default: false
    },
    treeProps: {
      type: Object,
      default: function () {
        return { children: 'children', hasChildren: 'hasChildren' }
      }
    },
    // 是否需要分页
    isPagination: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Object,
      default: function () {
        return {}
      }
    },
    rowKeys: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 表格按钮集合
    tableHandles: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 按钮类型
    type: { type: String, default: 'primary' },
    // 按钮型号
    size: { type: String, default: 'medium' },
    //   关于表头信息
    columns: {
      type: Array,
      default: function () {
        return [
          { label: '姓名', prop: 'name' },
          { label: '年龄', prop: 'age' },
          { label: '性别', prop: 'sex' },
          { label: '爱好', prop: 'interst' },
          {
            label: '操作',
            type: 'Button',
            btnList: [
              {
                type: 'primary',
                label: '编辑',
                handle: row => {
                  console.log(row)
                }
              },
              {
                type: 'danger',
                label: '删除',
                handle: row => {
                  console.log(row)
                }
              }
            ]
          }
        ]
      }
    },
    // 数据
    tableData: {
      type: Array,
      default: function () {
        return [
          { name: '张三', age: '12', sex: '男', interst: '女' },
          { name: '筱华', age: '27', sex: '女', interst: '羽毛球' },
          { name: '张三', age: '12', sex: '男', interst: '女' },
          { name: '筱华', age: '27', sex: '女', interst: '羽毛球' },
          { name: '筱华', age: '27', sex: '女', interst: '羽毛球' },
          { name: '筱华', age: '27', sex: '女', interst: '羽毛球' },
          { name: '筱华', age: '27', sex: '女', interst: '羽毛球' }
        ]
      }
    },
    // 前边是否有多选框
    isSelection: {
      type: Boolean,
      default: true
    },
    // 是否要序号
    isIndex: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleSelectionChange (val) {
      console.log(val)
    },
    select (selection, row) {
      this.$emit('selectRow', selection)
    },
    selectAll (selection) {
      this.$emit('selectRow', selection)
    },
    // 修改每条页数
    handleSizeChange (val) {},
    handleCurrentChange (val) {
      //  跳转页
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
