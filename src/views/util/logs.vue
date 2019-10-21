<template>
  <basic-container>
    <avue-crud :option="option" :data="data" @search-change="searchChange" @row-save="rowSave" @row-del="rowDel">
      <template slot="search">
        <el-col :md="6" :xs="24">
          <el-form-item label="门店名称/负责人">
            <el-input placeholder="门店名称/负责人" size="small" v-model="searchForm.solt" />
          </el-form-item>
        </el-col>
      </template>
      <template slot="searchMenu">
        <el-button size="small">添加</el-button>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
  export default {
    data() {
      return {
        searchForm: {},
        data: [{
          name: '张三'
        }],
        option: {
          column: [{
            label: '员工名称',
            prop: 'name',
            search: true,
          }, {
            label: '员工编码',
            prop: 'name',
          }, {
            label: '所属门店',
            prop: 'name',
          }, {
            label: '门店负责人',
            prop: 'name',
          }, {
            label: '负责人电话',
            prop: 'name',
          }, {
            label: '状态',
            prop: 'name',
          },]
        }
      }
    },
    methods: {
      // 搜索员工
      searchChange(params) {
        // this.$message.success('search callback' + JSON.stringify(Object.assign(params, this.searchForm)))
        console.log(params)
      },
      // 新增员工
      rowSave(form, done){
        console.log(form)
        done()
      },
      // 删除员工
      rowDel(form) {
        console.log(form)
        this.$message.success('删除数据' + JSON.stringify(form));
      },
    }
  }
</script>