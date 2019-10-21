<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <!-- 操作按钮 -->
                        <div class="filter-container">
                            <div class="el-button-group">
                                <button type="button" class="el-button el-button--primary el-button--medium"
                                    @click="add">
                                    <i class="plus"></i>
                                    <span>添加</span>
                                </button>
                                <button type="button" class="el-button el-button--primary el-button--medium"
                                    @click='upd'>
                                    <i class="edit"></i>
                                    <span>编辑</span>
                                </button>
                                <button type="button" class="el-button el-button--primary el-button--medium"
                                    @click='cancel'>
                                    <i class="delete"></i>
                                    <span>删除</span>
                                </button>
                            </div>
                        </div>
                        <!-- 新增表单 -->
                        <div class="v-modal" tabindex="0" style="z-index: 2018;" v-show="addshow" @click="ss"></div>
                        <div class="el-dialog__wrapper avue-crud__dialog" size="50%" style="z-index: 2046;"
                            v-show="addshow">
                            <div role="dialog" aria-modal="true" aria-label="新 增" class="el-dialog"
                                style="margin-top: 100px; width: 50%;">
                                <div class="el-dialog__header">
                                    <span class="el-dialog__title">新 增</span>
                                    <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                                    </button>
                                </div>
                                <div class="el-dialog__body">
                                    <avue-form :option="option" v-model="addform"></avue-form>
                                    <div class="el-dialog__footer">
                                        <span class="dialog-footer">
                                            <button type="button" class="el-button el-button--primary el-button--medium"
                                                @click="addsave">
                                                <span>保 存</span>
                                            </button>
                                            <button type="button" class="el-button el-button--default el-button--medium"
                                                @click="qx">
                                                <span>取 消</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="el-row">
                            <!-- 菜单树 -->
                            <div class="el-col el-col-8" style="margin-top: 15px;">
                                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                            </div>
                            <!-- 联动表单 -->
                            <div class="el-col el-col-16" style="margin-top: 15px;">
                                <avue-form :option="option" v-model="form">
                                </avue-form>
                                <div class="el-form-item el-form-item--medium">
                                    <div class="el-form-item__content" style="margin-left: 80px;" v-show="show"><button
                                            type="button" class="el-button el-button--primary el-button--medium"
                                            @click="save">
                                            <span>保存
                                            </span></button><button type="button"
                                            class="el-button el-button--default el-button--medium">
                                            <span>取消</span></button>
                                    </div>
                                    <div class="el-form-item__content" style="margin-left: 80px;" v-show="update">
                                        <button type="button" class="el-button el-button--primary el-button--medium"
                                            @click="compile">
                                            <!---->
                                            <!----><span>更新
                                            </span></button><button type="button"
                                            class="el-button el-button--default el-button--medium">
                                            <!---->
                                            <!----><span>取消</span></button>
                                        <!---->
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
    import { getMenutree, getcatalogue, getMenu2, getbutton, menucompile, menudelete } from '@/api/user'
    const DIC = {
        SEX: [{
            label: '目录',
            value: 10
        }, {
            label: '菜单',
            value: 20
        }, {
            label: '按钮',
            value: 30
        }],
        TREE: [],
        ADDTREE: [],
        SELECT: [{
            label: 'icon-cont',
            value: 'icon-cont'
        }]
    }
    export default {
        data() {
            return {
                data: [],
                present: [],

                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                show: false,
                text: true,
                update: false,
                addshow: false,
                val: '1111',
                type: '',
                addform: {
                    name: '',
                    menuType: '',
                    path: '',
                    icon: '',
                    component: '',
                    // keepAlive: true,
                    parentId: '1',
                    label: ''
                },
                form: {
                    text: '上级目录',
                    name: '',
                    menuType: '',
                    path: '',
                    icon: '',
                    component: '',
                    keepAlive: '',
                    parentId: '1',
                    label: '',
                    cascader:[]
                },
                catalogue: [{
                    label: "路径",
                    prop: "path",
                    row: false,
                    rules: [
                        { required: true, message: '路径不能为空', trigger: 'blur' }
                    ]
                },
                {
                    label: "组件地址",
                    prop: "component",
                    row: false,
                    rules: [
                        { required: true, message: '组件地址不能为空', trigger: 'blur' }
                    ]
                },
                {
                    label: "图标",
                    prop: "icon",
                    row: false,
                },
                {
                    label: "排序",
                    prop: "seq",
                    row: false,
                    readonly: true,
                }, {
                    label: "开关",
                    prop: "switch",
                    type: "switch",
                },
                ],
                // catalogue: [{
                //     label: "图标",
                //     prop: "icon",
                //     row: false,
                // }, {
                //     label: "菜单路径",
                //     prop: "path",
                //     row: false,
                // }, {
                //     label: "组件路径",
                //     prop: "component",
                //     row: false,
                // },],
                button: [{
                    label: "权限标识",
                    prop: "permission",
                    row: false,
                }, {
                    label: "排序",
                    prop: "seq",
                    row: false,
                },],
                option: {
                    labelWidth: 100,
                    emptyBtn: false,
                    submitBtn: false,
                    saveBtn: true,
                    column: [
                        {
                            label: "上级菜单",
                            prop: "cascader",
                            row: false,
                            type: 'cascader',
                            readonly: true,
                            dicData: DIC.ADDTREE,
                            props:{
                                label:'name',
                                value:'id',
                                children:'children'
                            }
            //                 dicData:[{
            //     label:'一级',
            //     value:0,
            //     children:[
            //       {
            //         label:'一级1',
            //         value:1,
            //       },{
            //         label:'一级2',
            //         value:2,
            //       }
            //     ]
            //   }],
                        }, {
                            label: "标题",
                            prop: "name",
                            row: false,
                            rules: [
                                { required: true, message: '名称不能为空', trigger: 'blur' }
                            ]
                        },
                        {
                            label: "类型",
                            prop: "menuType",
                            type: "radio",
                            dicData: DIC.SEX,
                            mock: {
                                type: 'dic'
                            },
                            rules: [
                                { required: true, message: '类型不能为空', trigger: 'blur' }
                            ],
                            change: ({ value }) => {
                                if (value === 10) {
                                    this.option.column.splice(3)
                                    if (this.option.column.length === 3) {
                                        this.option.column = this.option.column.concat(this.catalogue)
                                        this.option.column.splice(7)
                                    }
                                } else if (value === 20) {
                                    this.option.column.splice(3)
                                    this.option.column = this.option.column.concat(this.catalogue)
                                } else {
                                    this.option.column.splice(3)
                                    this.option.column = this.option.column.concat(this.button)
                                }
                                this.type = value
                                console.log(this.type)
                            }
                        },
                    ]
                },
                // addoption: {
                //     submitBtn: false,
                //     emptyBtn: false,
                //     saveBtn: true,
                //     column: [{
                //         label: "上级菜单",
                //         prop: "username",
                //         row: false,
                //         type: 'tree',
                //         dicData: DIC.ADDTREE
                //     },
                //     {
                //         label: "图标",
                //         prop: "icon",
                //         type:'select',
                //         row: false,
                //         dicData: DIC.SELECT
                //     },{
                //         label:'菜单名称',
                //         prop:'name',
                //     },{
                //         label:'菜单路径',
                //         prop:'path'
                //     },{
                //         label:'组件地址',
                //         prop:'component'
                //     },{
                //             label: "类型",
                //             prop: "menuType",
                //             type: "radio",
                //             dicData: DIC.SEX,
                //     }
                //     ]
                // }
            };
        },
        created() {
            // 获取菜单树
            this.getTree()
            this.show = false
            this.update = false
        },
        mounted() {
            getMenutree().then(res => {
                DIC.ADDTREE = res.data.data
                console.log(DIC.ADDTREE)
                // DIC.ADDTREE.forEach(item => {
                //     item.label = item.name
                //     item.value=item.id
                //     if (item.children.length == 0) {

                //     } else {
                //         item.children.forEach(item => {
                //             item.label = item.name
                //             item.value=item.id
                //             if (item.children.lenght == 0) {

                //             } else {
                //                 item.children.forEach(item => {
                //                     item.value=item.id
                //                     item.label = item.name
                //                 })
                //             }
                //         })
                //     }
                // })

            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            // 获取菜单树
            getTree() {
                getMenutree().then(res => {
                    this.data = res.data.data
                    DIC.TREE = this.data
                    if (res.data.code === 0) {
                        this.$store.dispatch("GetMenu").then(res => {
                            console.log(res)

                        }).catch(error => {
                            console.log(error)

                        })
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            // 点击菜单树的处理函数
            handleNodeClick(data, node) {
                this.present = data
                this.form = data
                this.update = true
                this.show = false
                if (node.level === 1) {
                    this.option.column.splice(3)
                    this.option.column = this.option.column.concat(this.catalogue)
                } else if (node.level === 2) {
                    this.option.column.splice(3)
                    this.option.column = this.option.column.concat(this.catalogue)
                } else {
                    this.option.column.splice(3)
                    this.option.column = this.option.column.concat(this.button)
                }
                // this.form.name = data.label
                this.form.menuType = data.menuType
                this.form.path = data.path
                this.form.icon = data.icon
                this.form.seq = data.seq
            },
            addsave() {
                console.log(this.form)
            },
            // 添加按钮点击事件控制表单下面显示的按钮是保存还是修改
            add() {
                // this.addshow = true
                this.option.column.splice(3)
                this.form.menuType = 0
                this.form.name = ''
                this.show = true
                this.update = false

            },
            // 遮罩层消失
            ss() {
                this.addshow = false
            },
            qx() {
                this.addshow = false
            },
            // 保存按钮点击事件，处理添加类型
            save() {
                // console.log(this.form)
                if (this.form.menuType === 10) {
                    getcatalogue(this.form.name, this.form.menuType, this.form.icon, this.form.seq).then(res => {
                        this.getTree()
                        if (res.data.code === 0) {
                            this.$store.dispatch("GetMenu").then(data => {
                                console.log(data)
                                // if(data.data.code===0){
                                    this.$notify.success({ title: '添加', message: '添加菜单成功' });
                                // }
                            });
                        }
                    }).catch(error => {
                        console.log(error)
                        this.$notify.success({ title: '添加', message: '添加菜单失败' });
                    })
                } else if (this.form.menuType === 20) {
                    getMenu2(this.form.name, this.form.menuType, this.form.path, this.form.component, this.form.keepAlive, this.form.icon, this.form.seq).then(res => {
                        this.getTree()
                        if (res.data.code === 0) {
                            this.$store.dispatch("GetMenu").then(data => {
                                console.log(data)
                                // if(data.data.code===0){
                                    this.$notify.success({ title: '添加', message: '添加菜单成功' });
                                // }
                            });
                        }
                    }).catch(error => {
                        console.log(error)
                        this.$notify.success({ title: '添加', message: '添加菜单失败' });
                    })

                } else {
                    getbutton(this.form.parentId, this.form.name, this.form.menuType, this.form.permission, this.form.seq).then(res => {
                        this.getTree()
                        if (res.data.code === 0) {
                            this.$store.dispatch("GetMenu").then(data => {
                                console.log(data)
                                this.$notify.success({ title: '添加', message: '添加菜单成功' });
                            });
                        }
                    }).catch(error => {
                        console.log(error)
                        this.$notify.success({ title: '添加', message: '添加菜单失败' });
                    })
                }

            },
            // 点击编辑按钮事件
            upd() {
                this.show = false
                this.update = true
            },
            // 编辑菜单
            compile() {
                // if (this.form.menuType === 30) {
                    menucompile(this.form.id, this.form.parentId, this.form.name, this.form.menuType, this.form.icon, this.form.path,this.form.component).then(res => {
                        this.getTree()
                        if (res.data.code === 0) {
                            this.$store.dispatch("GetUserMenu").then(data => {
                                console.log(data)
                                // if(data.data.code===0){
                                    this.$notify.success({ title: '编辑', message: '编辑菜单成功' });
                                // }
                            });
                        }
                    }).catch(error => {
                        console.log(error)
                        this.$notify.success({ title: '编辑', message: '编辑菜单失败' });
                    })
                // } else {
                //     menucompile2(this.form.id, this.form.parentId, this.form.name, this.form.menuType, this.form.permission, this.form.seq).then(res => {
                //         this.getTree()
                //         if (res.data.code === 0) {
                //             this.$store.dispatch("GetMenu").then(data => {
                //                 this.$notify.success({ title: '编辑', message: '编辑菜单成功' });
                //             });
                //         }
                //     }).catch(error => {
                //         console.log(error)
                //         this.$notify.success({ title: '编辑', message: '编辑菜单失败' });
                //     })
                // }
            },
            // 删除菜单
            cancel() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    menudelete(this.form.id).then(res => {
                        this.getTree()
                        if (res.data.code === 0) {
                            this.$notify.success({ title: '删除', message: '删除菜单成功' });
                        }
                    }).catch(error => {
                        console.log(error)
                        this.$notify.success({ title: '删除', message: '删除菜单失败' });
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
                // menudelete(this.form.id).then(res => {
                // }).catch(error => {
                //     console.log(error)
                // })
            },
        },

    };
</script>
<style>
    @media only screen and (min-width: 992px) {
        .el-col-md-12 {
            width: 100%;
        }
    }
</style>