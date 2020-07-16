<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item
        v-for="(item, index) in searchForm"
        :key="index"
        :label="item.label"
      >
        <template slot-scope="scope">
          <el-input
            v-if="item.type == 'Input'"
            :placeholder="item.placeholder"
            v-model="data[item.prop]"
          ></el-input>
          <el-select
            v-if="item.type == 'Select'"
            :placeholder="item.placeholder"
            v-model="data[item.prop]"
          >
           <el-option v-for="(m,n) in item.options" :key="n" :label="m.label" :value="m.value"></el-option>
          </el-select>
          
        </template>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button> <el-button @click="reset" type="primary">重置</el-button> 
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {

      },
      data: {}
    }
  },
  mounted () {
    this.data = this.searchData
  },
  props: {
    // 按钮类型
    type: { type: String, default: 'primary' },
    // 按钮型号
    size: { type: String, default: 'medium' },
    searchData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    searchForm: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    search(){
        console.log(this.data)
        this.$emit("changeSearch",this.data)
    },
    reset(){
       this.data = {}
        this.$emit("changeSearch",this.data)
    }
  }
}
</script>
