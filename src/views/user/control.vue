<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <avue-crud :option="option" :data="data" @search-change="searchChange" @row-update="rowUpdate"
                            @row-click="rowclick" @row-save="rowSave" v-model="form" @selection-change="selectchange"
                            :page="page" @on-load="onLoad" @refresh-change="refreshchange" ref="crud" @row-del="rowDel" :table-loading="loading">
                            <template slot="menuLeft">
                                <el-button type="primary" size="small" @click="setpwd">重置密码</el-button>
                            </template>
                        </avue-crud>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var DIC = {
        SEX: [{
            label: '未知',
            value: 0
        }, {
            label: '男',
            value: 1
        }, {
            label: '女',
            value: 2
        }
        ],
        VAILD: [],
        tree: []
    }
    import { getuserlist, updateuser, adduser, orgtree, getUserInfo, resetpwd, rolesoptions } from '@/api/user'
    import { encryption } from '@/util/util'
    import { isvalidatemobile } from "@/util/validate";
    export default {
        data() {
            const validatePhone = (rule, value, callback) => {
                if (isvalidatemobile(value)[0]) {
                    callback(new Error(isvalidatemobile(value)[1]));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    deptId: '',
                    roles: '',
                    password: '',
                    gender: '',
                    birthday: ''
                },
                loading:true,
                mobile: '',
                searchForm: {},
                data: [],
                updatauser: [],
                searchContent: '',
                addrow: [],
                ids: [],
                userdata: [],
                tree: [],
                page: {
                    total: '',
                    pageSize: '',
                },
                option: {
                    selection: true,
                    viewBtn: true,
                    gutter: 60,
                    column: [{
                        label: '用户名',
                        prop: 'username',
                        span: 10,
                        row: false,
                        editDisabled: true,
                        rules: [
                            { required: true, message: '用户名不能为空', trigger: 'blur' }
                        ]
                    }, {
                        label: '昵称',
                        prop: 'nickname',
                        search: true,
                        span: 10,
                        row: false,
                        required: true,
                        rules: [
                            {
                                required: true,
                                message: '请填写名称',
                                trigger: 'blur'
                            }
                        ],
                    }, {
                        label: '手机号',
                        prop: 'mobile',
                        type:'phone',
                        span: 10,
                        row: false,
                        // rules: [{ validator: validatePhone, trigger: 'blur' }]
                    }, {
                        label: '邮箱',
                        prop: 'email',
                        span: 10,
                        row: false,
                        hide: true,
                        rules: [
                            { message: '请输入邮箱地址', trigger: 'blur' },
                            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                        ]
                    }, {
                        label: '密码',
                        prop: 'password',
                        type: 'password',
                        span: 10,
                        row: false,
                        hide: true,
                        editDisplay: false,
                        rules: [
                            { required: true, message: '密码不能为空', trigger: 'blur' }
                        ]
                    },
                    {
                        label: '所属机构',
                        prop: 'deptId',
                        span: 10,
                        row: false,
                        type: 'tree',
                        dicData: DIC.tree,
                        rules: [
                            { required: true, message: '所属机构不能为空', trigger: 'blur' }
                        ]
                    }, {
                        label: '性别',
                        prop: 'gender',
                        span: 10,
                        row: false,
                        hide: true,
                        type: "radio",
                        dicData: DIC.SEX,
                        mock: {
                            type: 'dic'
                        },
                        valueDefault: 0,
                        // change: ({ value, column }) => {
                        //     this.$message.success(value)
                        // }
                    },
                    {
                        label: '生日',
                        prop: 'birthday',
                        span: 10,
                        type: 'date',
                        row: false,
                        hide: true,
                    }, {
                        label: '角色',
                        prop: 'roles',
                        type: "select",
                        dicData: DIC.VAILD,
                        multiple: true,
                        rules: [
                            { required: true, message: '角色不能为空', trigger: 'blur' }
                        ]
                    },]

                }
            }
        },
        created() {
            this.form.gender = ''
            rolesoptions().then(res => {
                DIC.VAILD = res.data.data.content
                DIC.VAILD.forEach(item => {
                    item.label = item.roleName
                    item.value = item.id
                })
            }).catch(error => {
                console.log(error)
            })
        },
        mounted() {
            // 获取所属部门的下拉选项
            // console.log('打开页面')
            orgtree().then(res => {
                // console.log(res)
                DIC.tree = res.data.data
                DIC.tree.forEach(item => {
                    item.label = item.name
                    item.value = item.id
                    if (item.children.length == 0) {
                    } else {
                        item.children.forEach(item => {
                            item.label = item.name
                            item.value = item.id
                            if (item.children.length == 0) {
                            } else {
                                item.children.forEach(item => {
                                    item.label = item.name
                                    item.value = item.id
                                    if (item.children.length == 0) {
                                    }
                                })
                            }
                        })
                    }
                })
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            // 用户管理分页
            onLoad(page) {
                this.page = page
                getuserlist(this.searchContent, this.page.currentPage, this.page.pageSize).then(res => {
                    this.page.total = res.data.data.total
                    this.data = res.data.data.content
                    this.loading=false
                    if(res.data.code!==0){
                        this.$notify.success({ title: '获取失败', message: '获取用户列表失败！' });
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            // 查询用户信息
            searchChange(params) {
                this.searchContent = params.nickname
                this.getlist()
            },
            //   获取用户列表
            getlist() {
                getuserlist(this.searchContent, this.page.currentPage, this.page.pageSize).then(res => {
                    this.userdata = res.data.data
                    this.data = this.userdata.content
                    this.loading=false
                    if(res.data.code===0){
                        this.$notify.success({ title: '刷新', message: '刷新成功' });
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            // 新增用户
            rowSave(form, done,loading) {
                this.addrow = form
                const user1 = encryption({
                    data: form,
                    type: 'Aes',
                    key: 'avue',
                    param: ['password']
                });
                adduser(form.username, form.nickname, user1.password, form.deptId, form.roles, form.mobile, form.email, form.gender, form.birthday).then(res => {
                    this.getlist()
                    console.log(form)
                    this.form.roles=form.roles
                    this.form.deptId=form.deptId
                    if(res.data.code===0){
                        this.$notify.success({ title: '添加成功', message: '添加用户成功！' });
                        loading()
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '添加失败', message: '添加用户失败！' });
                })
                
                
                done()
            },
            // 修改用户信息
            rowUpdate(form, index, done) {
                updateuser(form.id, form.nickname, form.deptId, form.roles, form.mobile, form.email, form.gender, form.birthday).then(res => {
                    this.getlist()
                    if(res.data.code===0){
                        this.$notify.success({ title: '修改成功', message: '修改用户成功！' });
                    }
                }).catch(error => {
                    console.log(error)
                })
                done()
            },
            // 获取用户所属于的部门机构树
            // urerorgtree() {
            //     orgtree().then(res => {
            //         console.log(res)
            //         DIC.tree = res.data.data
            //         DIC.tree.forEach(item => {
            //             item.label = item.name
            //             item.value = item.id
            //             if (item.children.length == 0) {
            //             } else {
            //                 item.children.forEach(item => {
            //                     item.label = item.name
            //                     item.value = item.id
            //                     if (item.children.length == 0) {
            //                     } else {
            //                         item.children.forEach(item => {
            //                             item.label = item.name
            //                             item.value = item.id
            //                             if (item.children.length == 0) {
            //                             }
            //                         })
            //                     }
            //                 })
            //             }
            //         })
            //     }).catch(error => {
            //         console.log(error)
            //     })
            // },
            // 
            // 获取用户信息
            rowclick(row) {
                console.log(row)
                getUserInfo(row.id).then(res => {
                    this.updatauser = res.data.data
                    this.form = this.updatauser
                }).catch(error => {
                    console.log(error)
                })
            },
            // 重置密码
            selectchange(selection) {
                this.ids = []
                selection.forEach(item => {
                    this.ids.push(item.id)
                })
            },
            setpwd() {
                resetpwd(this.ids).then(res => {
                    if(res.data.code===0){
                        this.$notify.success({ title: '重置', message: '当前选择用户密码重置成功' });
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            // 刷新表格
            refreshchange() {
                this.searchContent = ''
                this.getlist()

            },
            handleEdit(scope) {
                console.log(scope)
                // this.$refs.crud.rowEdit(row, index);
            },
            // 删除用户
            rowDel(form,index){
                console.log(form)
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