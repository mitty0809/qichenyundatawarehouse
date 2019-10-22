<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <avue-crud :option="option" :data="data" @search-change="searchChange" @row-save="rowSave">
                            <template slot="search">
                              <el-col :md="6" :xs="24">
                                <el-form-item label="自定义">
                                  <el-input placeholder="自定义搜索" size="small" v-model="searchForm.solt" />
                                </el-form-item>
                              </el-col>
                            </template>
                      
                          </avue-crud>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
</template>
<script>
  export default {
    data() {
      return {
        searchForm: {},
        data: [
          {
            name: '张三',
            sex: '男'
          }, {
            name: '李四',
            sex: '女'
          }
        ],
        option: {
          // page:false,
          //align:'center',
          // menuAlign:'center',
          saveBtn: true,
          header: true,
          addRowBtn: false,
          menu: false,
          editBtn: false,
          column: [
            {
              label: '租户名称',
              prop: 'name'
            }, {
              label: '租户编码',
              prop: 'sex'
            }, {
              label: '联系人',
              prop: 'sex'
            }, {
              label: '联系电话',
              prop: 'sex'
            }, {
              label: '联系地址',
              prop: 'sex'
            }, {
              label: '数据库URL',
              prop: 'sex'
            }, {
              label: '数据库密码',
              prop: 'sex'
            }, {
              label: '域名',
              prop: 'sex'
            }, {
              label: '状态',
              prop: 'sex'
            },
          ]
        },
      };
    },
    methods: {
      // 新增系统配置租户
      rowSave(form, done) {
        this.$message.success('新增数据' + JSON.stringify(form));
        done();
      },
      // 修改系统配置租户信息
      rowUpdate(form, index, done) {
        console.log(form + '编辑租户信息')
        // this.$message.success('编辑数据' + JSON.stringify(form) + '数据序号' + index);
        done();
      },
      // 删除系统配置租户信息
      rowDel(form) {
        console.log(form)
        // this.$message.success('删除数据' + JSON.stringify(form));
      },
      // 搜索租户
      searchChange(params) {
        console.log(params)
        // this.$message.success('search callback' + JSON.stringify(Object.assign(params, this.searchForm)))
      },
    }
  }
</script>
<style>
  .box {
    width: 100%;
    height: 772px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 7px 0px rgba(165, 192, 214, 0.5);
    border-radius: 5px;
    margin-left: 10px;
  }
</style>