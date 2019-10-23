<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <avue-crud :option="option" :data="data" @search-change="searchChange" v-model="form"
                            @row-save="rowSave" @row-update="rowUpdate" @row-del="rowDel" :page="page" @on-load="onLoad"
                            :table-loading="loading" ref="crud" :before-close='close'>
                            <template slot="menu" slot-scope="scope">
                                <el-button :size="scope.size" :type="scope.type" icon="el-icon-check"
                                    @click="jurisdiction(scope.row)">权限</el-button>
                            </template>
                            <template slot-scope="scope" slot="menuForm" :addDisplay="false">
                                <div class="tree" v-show="treeshow">
                                    <el-tree :data="data2" show-checkbox check-strictly ref="tree" :props="defaultProps"
                                        node-key="id" @check="getHalfCheckedNodes" :default-checked-keys="[]">
                                    </el-tree>
                                </div>
                                <!-- <el-button type="primary" size="small">自定义按钮</el-button> -->
                            </template>
                            <!-- <template slot-scope="scope" slot="menuForm">
                                <el-button type="primary" icon="el-icon-check" size="small" plain
                                    @click.stop="handleEdit(scope)">自定义按钮</el-button>
                            </template> -->

                        </avue-crud>
                        <!-- 设置权限 -->
                        <div class="v-modal" tabindex="0" style="z-index: 2018;" v-show="addshow"></div>
                        <div class="el-dialog__wrapper avue-crud__dialog" size="50%" style="z-index: 2046;"
                            v-show="addshow">
                            <div role="dialog" aria-modal="true" aria-label="新 增" class="el-dialog"
                                style="margin-top: 100px; width: 50%;">
                                <div class="el-dialog__header">
                                    <span class="el-dialog__title">新 增</span>
                                    <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close" @click="qx"></i>
                                    </button>
                                </div>
                                <div class="el-dialog__body">
                                    <el-tree :data="data1" show-checkbox node-key="id" ref="tree"
                                        :props="defaultProps1" @check="getHalfCheckedNodes1">
                                    </el-tree>
                                    <div class="el-dialog__footer">
                                        <span class="dialog-footer">
                                            <button type="button" class="el-button el-button--primary el-button--medium"
                                                @click="getmenu">
                                                <span>保 存</span>
                                            </button>
                                            <button type="button" class="el-button el-button--default el-button--medium"
                                                @click="countermand">
                                                <span>取 消</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var DIC = {
        VAILD: [{
            label: '全部',
            value: 0
        }, {
            label: '自定义',
            value: 1
        }, {
            label: '本级及子级',
            value: 2
        }, {
            label: '本级',
            value: 3
        }]
    };
    import { rolelist, roleadd, roleupdate, deleterole, getMenutree, getrolemenu, setrolemenu, orgtree } from '@/api/user'
    import { encryption } from '@/util/util'
    export default {
        data() {
            // const validatePass = (rule, value, callback) => {
            //     console.log(value)

            // };
            return {
                searchForm: {},
                data: [],
                form: {
                    dataType: '',
                    orgs: []
                },
                // return {
                data1: [],
                defaultProps1: {
                    children: 'children',
                    label: 'name'
                },
                getmenuarr: [],
                loading: true,
                roleId: '',
                // orgs:[],
                addshow: false,
                checken: [],
                index: '',
                total: [2, 3, 4, 5, 6],
                treeshow: false,
                treearr: [1, 2, 3, 4],
                page: {
                    pageSize: ''
                },
                data2: [],
                defaultProps: {
                    children: 'children',
                    label: 'name',
                    value: 'id'
                },
                option: {
                    align: 'center',
                    viewBtn: true,
                    index: true,
                    indexLabel: '序号',
                    searchContent: '',
                    gutter: 70,
                    menuWidth: 290,
                    column: [{
                        label: '角色名称',
                        prop: 'roleName',
                        search: true,
                    }, {
                        label: '角色标识',
                        prop: 'roleNo',
                        editDisabled: true,
                        editDisplay: false,
                    }, {
                        label: '角色描述',
                        prop: 'remark',
                        addDisplay: false,
                    }, {
                        label: '备注',
                        prop: 'remark',
                        addDisplay: true,
                    }, {
                        label: '数据类型',
                        prop: 'dataType',
                        hide: true,
                        addDisplay: true,
                        editDisplay: false,

                    }, {
                        label: '数据权限',
                        prop: 'dataType',
                        type: 'select',
                        hide: true,
                        dicData: DIC.VAILD,
                        // rules: [{ validator: validatePass, trigger: 'blur' }],
                        change: (value) => {
                            if (value.value !== "") {
                                if (value.value === 1) {
                                    this.treeshow = true
                                }
                            }
                        },
                    }, {
                        label: 'orgs',
                        prop: 'orgs',
                        hide: true,
                        addDisplay: false,
                        editDisplay: false,
                    }]
                }
            }
            // }
        },
        created() {
            getMenutree().then(res => {
                this.data1 = res.data.data
            }).catch(error => {
                console.log(error)
            })
            orgtree().then(res => {
                console.log(res)
                this.data2 = res.data.data

            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            // 查询角色
            searchChange(params) {
                this.searchContent = params.roleName
                this.getrolelist()
            },
            // 获取角色列表
            getrolelist() {
                // console.log(this.page)
                rolelist(this.searchContent, this.page.currentPage, this.page.pageSize).then(res => {
                    this.data = res.data.data.content
                    this.page.total = res.data.data.total
                    this.loading = false
                }).catch(error => {
                    console.log(error)
                })
            },
            // 添加角色
            rowSave(form, done) {
                if (form.dataType === 1) {
                    const data = {
                        roleNo: form.roleNo,
                        roleName: form.roleName,
                        dataType: this.form.dataType,
                        remark: form.remark,
                        orgs: this.form.orgs
                    }
                    roleadd(data).then(res => {
                        if (res.data.code === 0) {
                            this.hint('添加', '添加角色成功')
                            this.getrolelist()
                        }
                        this.treeshow = false
                    }).catch(error => {
                        console.log(error)
                        this.hint('添加', '添加角色失败')
                    })
                } else {
                    const data = {
                        roleNo: form.roleNo,
                        roleName: form.roleName,
                        dataType: this.form.dataType,
                        remark: form.remark,
                    }
                    roleadd(data).then(res => {
                        if (res.data.code === 0) {
                            this.hint('添加', '添加角色成功')
                            this.getrolelist()
                        }
                        this.treeshow = false
                    }).catch(error => {
                        console.log(error)
                        this.hint('添加', '添加角色失败')
                    })
                }
                done()
            },
            // 修改角色信息
            rowUpdate(form, index, done) {
                this.index = index
                roleupdate(form.id, form.roleName, form.dataType, form.remark, this.form.orgs).then(res => {
                    if (res.data.code === 0) {
                        this.hint('修改', '修改角色成功')
                        this.getrolelist()
                    }
                }).catch(error => {
                    console.log(error)
                    this.hint('修改', '修改角色失败')
                })
                done()
            },
            // 删除角色
            rowDel(form) {
                deleterole(form.id).then(res => {
                    if (res.data.code === 0) {
                        this.hint('删除', '删除角色成功')
                    }
                }).catch(error => {
                    console.log(error)
                    this.hint('删除', '删除角色失败')
                })
            },

            getHalfCheckedNodes(data, nodes) {
                const arr = nodes.checkedKeys
                this.form.orgs = arr
            },
            getHalfCheckedNodes1(data, nodes) {
                this.getmenuarr = nodes.checkedKeys
            },
            // 分页
            onLoad(page) {
                this.page = page
                this.page.pageSizes = this.total
                this.getrolelist()
            },
            // 获取菜单权限
            jurisdiction(row) {
                this.roleId = row.id
                console.log(row)
                console.log(this.checken)
                getrolemenu(row.id).then(res => {
                    this.checken = res.data.data
                    this.setCheckedKeys()
                }).catch(error => {
                    console.log(error)
                })
                this.addshow = true
            },
            setCheckedKeys(){
                console.log(this.checken)
                this.$refs.tree.setCheckedKeys(this.checken);
            },
            // 设置菜单权限
            getmenu() {
                setrolemenu(this.roleId, this.getmenuarr).then(res => {
                    if (res.data.code === 0) {
                        this.addshow = false
                        this.$store.dispatch("GetUserMenu").then(data => {
                        });
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            countermand() {
                this.addshow = false
            },
            qx() {
                this.addshow = false
            },
            // 提示
            hint(title, value) {
                this.$notify.success({ title: title, message: value });
            },
            handleCheckChange(data, checked, indeterminate) {
                
                // console.log(data, checked, indeterminate);
            },
            handleEdit(scope) {
                this.$refs.crud.rowEdit(this.form, this.index);
            },
            close(done, type) {
                this.treeshow = false
                this.form.orgs = []
                // this.getmenuarr=[]
                // this.checken=[]
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

    .tree {
        width: 262px;
        height: 150px;
        /* background: pink; */
        margin-top: -93px;
        margin-left: 128px;
        overflow: scroll
    }

    .tree .avue-tree__item {
        width: none;
    }
</style>