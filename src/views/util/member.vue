<template>
    <avue-crud :option="option" :data="data" @search-change="searchChange">
        <template slot="search">
            <el-col :md="6" :xs="24">
                <el-form-item label="门店名称/负责人">
                    <el-input placeholder="门店名称/负责人" size="small" v-model="searchForm.solt" />
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
                    name: '张三',
                    coding:'',
                    org:'',
                    phone:'',
                    password:'',
                    email:'',
                    state:''
                }],
                option: {
                    column: [{
                        label: '会员名称',
                        prop: 'name',
                        search: true,
                    },{
                        label: '会员编码',
                        prop: 'coding',
                    },{
                        label: '所属门店',
                        prop: 'org',
                    },{
                        label: '手机号',
                        prop: 'phone',
                    },{
                        label: '密码',
                        prop: 'password',
                    },{
                        label: '邮箱',
                        prop: 'email',
                    },{
                        label: '状态',
                        prop: 'state',
                    },]
                }
            }
        },
        methods: {
            // 搜索
            searchChange(params) {
                console.log(params)
                this.$message.success('search callback' + JSON.stringify(Object.assign(params, this.searchForm)))
            },
        }
    }
</script>