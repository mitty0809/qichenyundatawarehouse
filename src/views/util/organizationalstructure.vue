<template>
    <avue-crud :option="option" :data="data" @search-change="searchChange" @row-save="rowSave" @row-del="rowDel">
        <template slot="search">
            <el-col :md="6" :xs="24">
                <el-form-item label="客户姓名">
                    <el-input placeholder="客户姓名" size="small" v-model="searchForm.solt" />
                </el-form-item>
            </el-col>
        </template>
        <template slot="searchMenu">
            <el-button size="small">自定义按钮</el-button>
        </template>
    </avue-crud>
</template>
<script>
    export default {
        data() {
            return {
                searchForm: {},
                data: [{
                    outletname: '张三',
                    encoding:'',
                    superior:'',
                    orgnature:'',
                    principal:'',
                    principalphone:'',
                    outletaddress:'',
                    status:''
                }],
                option: {
                    column: [{
                        label: '门店名称',
                        prop: 'outletname',
                        search: true,
                    },{
                        label: '编码',
                        prop: 'encoding',
                    },{
                        label: '上级组织',
                        prop: 'superior',
                    },{
                        label: '组织性质',
                        prop: 'orgnature',
                    },{
                        label: '负责人',
                        prop: 'principal',
                    },{
                        label: '负责人电话',
                        prop: 'principalphone',
                    },{
                        label: '门店地址',
                        prop: 'outletaddress',
                    },{
                        label: '状态',
                        prop: 'status ',
                    },
                ]
                }
            }
        },
        methods: {
            // 搜索
            searchChange(params) {
                // this.$message.success('search callback' + JSON.stringify(Object.assign(params, this.searchForm)))
                console.log(params + '搜索用户')
            },
            // 添加
            rowSave(form,done){
                console.log(form)
                done()
            },
            // 删除
            rowDel(form){
                console.log(form)
            }
        }
    }
</script>