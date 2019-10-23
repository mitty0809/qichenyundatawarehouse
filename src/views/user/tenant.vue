<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <avue-crud :option="option" :data="data" @search-change="searchChange" @row-save="rowSave"
                            v-model="form" ref="crud" @row-update="rowUpdate" :page="page" @on-load="onLoad"
                            @row-del="rowDel" @refresh-change="refresh" :table-loading="loading">
                            <template slot-scope="scope" slot="menuForm">
                                <el-button type="primary" icon="el-icon-check" size="small" plain @click="test">测试数据连接
                                </el-button>
                            </template>
                            <template slot="search">
                                <el-col :md="6" :xs="24">
                                    <el-form-item label="搜索内容">
                                        <el-input placeholder="租户/租户名称" size="small" v-model="searchForm.solt" />
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
    import { tenantlist, tenantadd, checktenant, testconnection, updatetenant, disable, tenantdelete } from '@/api/user'
    import { encryption } from '@/util/util'
    export default {
        data() {
            const validatePass = (rule, value, callback) => {
                checktenant(value).then(res => {
                    if (res.data.code === 0) {
                        callback();
                    }
                }).catch(error => {
                    console.log(error)
                    callback(new Error('租户标识未通过'));
                })
            };
            return {
                searchForm: {},
                form: {
                    disabledFlag: false
                },
                loading:true,
                pages: [1, 2, 3, 4, 5],
                switch: '',
                search: '',
                data: [],
                page: {
                    pageSize: "",
                    total: ''
                },
                option: {
                    align: 'center',
                    gutter: 70,
                    searchShow: false,
                    labelWidth: 115,
                    column: [{
                        label: '租户标识',
                        prop: 'tenant',
                        editDisabled: true,
                        span: 11,
                        row: false,
                        rules: [{ validator: validatePass, trigger: 'blur' }]
                    }, {
                        label: '租户名称',
                        prop: 'tenantName',
                        span: 11,
                        row: false,
                    }, {
                        label: '联系人姓名',
                        prop: 'contactName',
                        span: 11,
                        row: false,
                    }, {
                        label: '联系人电话',
                        prop: 'contactPhone',
                        span: 11,
                        row: false,
                    }, {
                        label: '联系人地址',
                        prop: 'contactAddr',
                        hide: true,
                        addDisplay: false,
                        span: 11,
                        row: false,
                    }, {
                        label: '数据库用户名',
                        prop: 'username',
                        span: 11,
                        row: false,
                    }, {
                        label: '数据库密码',
                        prop: 'password',
                        type: 'password',
                        hide: true,
                        span: 11,
                        row: false,
                    }, {
                        label: '数据库链接',
                        prop: 'url',
                        hide: true
                    }, {
                        label: '域名',
                        prop: 'domain',
                        hide: true,
                        span: 11,
                        row: false,
                    }, {
                        label: '是否禁用',
                        type: 'switch',
                        prop: 'disabledFlag',
                        hide: true,
                        span: 11,
                        row: false,
                        displayAs: 'switch'
                    },
                    ]
                }
            };
        },
        watch: {
            "form.disabledFlag": function () {
                disable(this.form.id).then(res => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                })
            }

        },
        created() {
            // this.getlist()

        },
        methods: {
            // 分页
            onLoad(page) {
                this.page = page
                this.page.pageSizes = this.pages
                tenantlist(this.search, this.page.currentPage, this.page.pageSize).then(res => {
                    this.page.total = res.data.data.total
                    this.loading=false
                    this.getlist()
                }).catch(error => {
                    console.log(error)
                })
            },
            // 搜索用户
            searchChange(params) {
                this.search = this.searchForm.solt
                this.getlist()
            },
            // 获取租户列表
            getlist() {
                tenantlist(this.search, this.page.currentPage, this.page.pageSize).then(res => {
                    this.data = res.data.data.content
                    this.loading=false
                }).catch(error => {
                    console.log(error)
                })
            },
            // 新增租户
            rowSave(row, done) {
                const user1 = encryption({
                    data: row,
                    type: 'Aes',
                    key: 'avue',
                    param: ['password']
                });
                this.adddata = user1
                tenantadd(row.tenant, row.tenantName, row.contactName, row.contactPhone, row.url, row.username, user1.password, row.domain).then(res => {
                    if (res.data.code === 0) {
                        this.hint('添加', '添加租户成功')
                        this.getlist()
                    }
                }).catch(error => {
                    console.log(error)
                    this.hint('添加', '添加租户失败')
                })
                done()
            },
            // 编辑租户信息
            rowUpdate(form, index, done) {
                // this.switch=form.disabledFlag
                updatetenant(form.id, form.tenantName, form.contactName, form.contactPhone, form.contactAddr, form.url, form.username, form.password, form.domain).then(res => {
                    if (res.data.code === 0) {
                        this.hint('修改', '修改租户信息成功')
                        this.getlist()
                    }
                }).catch(error => {
                    console.log(error)
                    this.hint('修改', '修改租户信息失败')
                })
                done()
            },
            // 删除租户
            rowDel(form) {
                console.log(form)
                tenantdelete(form.id).then(res => {
                    this.getlist()
                    this.hint('删除', '删除租户成功')

                }).catch(error => {
                    console.log(error)
                })
            },

            // 测试数据库连接
            test() {
                testconnection(this.form.url, this.form.username, this.form.password).then(res => {
                    if (res.data.code === 0) {
                        this.hint('测试', '数据库连接成功')
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            // 提示
            hint(title, value) {
                this.$notify.success({ title: title, message: value });
            },
            refresh() {
                this.getlist()
                this.search = ''
            }
        }
    }
</script>
<style>
    @media only screen and (min-width: 992px) {
        .el-col-md-12 {
            width: 100%;
        }
    }
</style>