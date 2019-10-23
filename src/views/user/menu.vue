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
    import { getMenutree, getcatalogue, menucompile, menudelete } from '@/api/user'
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
                update: false,
                addshow: false,
                type: '',
                typedata: '',
                form: {},
                compiledata:'',
                catalogue: [{
                    label: "路径",
                    prop: "path",
                },
                {
                    label: "组件地址",
                    prop: "component",
                },
                {
                    label: "图标",
                    prop: "icon",
                },],
                menu: [{
                    label: "路径",
                    prop: "path",
                    rules: [
                        { required: true, message: '路径不能为空', trigger: 'blur' }
                    ]
                },
                {
                    label: "组件地址",
                    prop: "component",
                    rules: [
                        { required: true, message: '组件地址不能为空', trigger: 'blur' }
                    ]
                },
                {
                    label: "图标",
                    prop: "icon",
                },
                {
                    label: "排序",
                    prop: "seq",
                }, {
                    label: "开关",
                    prop: "keepAlive",
                    type: "switch",
                    cell: true,
                    displayAs: 'switch'
                },
                ],
                button: [{
                    label: "权限标识",
                    prop: "permission",
                }, {
                    label: "排序",
                    prop: "seq",
                },],
                option: {
                    labelWidth: 100,
                    emptyBtn: false,
                    submitBtn: false,
                    saveBtn: true,
                    column: [
                        {
                            label: "上级菜单",
                            prop: "parentId",
                            type: 'tree',
                            dicMethod: 'get',
                            props: {
                                label: 'name',
                                value: 'id',
                                children: 'children'
                            },
                            dicUrl: 'https://dev.qichenyun.com/dw/menu/tree'
                        }, {
                            label: "标题",
                            prop: "name",
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
                                    }
                                } else if (value === 20) {
                                    this.option.column.splice(3)
                                    this.option.column = this.option.column.concat(this.menu)
                                } else {
                                    this.option.column.splice(3)
                                    this.option.column = this.option.column.concat(this.button)
                                }
                                this.type = value
                            }
                        },
                    ]
                },
            };
        },
        created() {
            // 获取菜单树
            this.getTree()
            this.show = false
            this.update = false
        },
        methods: {
            // 获取菜单树
            getTree() {
                getMenutree().then(res => {
                    this.data = res.data.data
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
                if (data.menuType === 10) {
                    this.option.column.splice(3)
                    this.option.column = this.option.column.concat(this.catalogue)
                } else if (data.menuType === 20) {
                    this.option.column.splice(3)
                    this.option.column = this.option.column.concat(this.menu)
                } else {
                    this.option.column.splice(3)
                    this.option.column = this.option.column.concat(this.button)
                }
            },
            // 添加按钮点击事件控制表单下面显示的按钮是保存还是修改
            add() {
                // this.addshow = true
                this.option.column.splice(3)
                this.form.menuType = 0
                this.form.name = ''
                this.form.seq = ''
                this.form.path = ''
                this.form.component = ''
                this.form.icon = ''
                this.show = true
                this.update = false
            },
            // 保存按钮点击事件，处理添加类型
            save() {
                if (this.form.menuType === 10) {
                    const catalogue = {
                        name: this.form.name,
                        menuType: this.form.menuType,
                        icon: this.form.icon,
                        seq: this.form.seq,
                        path: this.form.path,
                        component: this.form.component
                    }
                    this.typedata = catalogue
                } else if (this.form.menuType === 20) {
                    const menudata = {
                        name: this.form.name,
                        menuType: this.form.menuType,
                        path: this.form.path,
                        component: this.form.component,
                        keepAlive: this.form.keepAlive,
                        icon: this.form.icon,
                        seq: this.form.seq,
                        parentId: this.form.parentId,
                        remark: this.form.remark
                    }
                    this.typedata = menudata
                } else {
                    const button = {
                        name: this.form.name,
                        parentId: this.form.parentId,
                        menuType: this.form.menuType,
                        permission: this.form.permission,
                        seq: this.form.seq,
                        remark: this.form.remark
                    }
                    this.typedata = button
                }
                // console.log(this.typedata)
                getcatalogue(this.typedata).then(res => {
                    this.getTree()
                    if (res.data.code === 0) {
                        this.$notify.success({ title: '添加', message: '添加菜单成功' });
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '添加', message: '添加菜单失败' });
                })
            },
            // 点击编辑按钮事件
            upd() {
                this.show = false
                this.update = true
            },
            // 编辑菜单
            compile() {
                if (this.form.menuType === 10) {
                    const catalogue = {
                        name: this.form.name,
                        menuType: this.form.menuType,
                        icon: this.form.icon,
                        seq: this.form.seq,
                        path: this.form.path,
                        component: this.form.component
                    }
                    this.compiledata = catalogue
                } else if (this.form.menuType === 20) {
                    const menudata = {
                        name: this.form.name,
                        menuType: this.form.menuType,
                        path: this.form.path,
                        component: this.form.component,
                        keepAlive: this.form.keepAlive,
                        icon: this.form.icon,
                        seq: this.form.seq,
                        parentId: this.form.parentId,
                        remark: this.form.remark
                    }
                    this.compiledata = menudata
                } else {
                    const button = {
                        name: this.form.name,
                        parentId: this.form.parentId,
                        menuType: this.form.menuType,
                        permission: this.form.permission,
                        seq: this.form.seq,
                        remark: this.form.remark
                    }
                    this.compiledata = button
                }
                menucompile(this.compiledata).then(res => {
                    this.getTree()
                    if (res.data.code === 0) {
                        this.$notify.success({ title: '编辑', message: '编辑菜单成功' });
                        this.$store.dispatch("GetUserMenu").then(data => {
                        });
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '编辑', message: '编辑菜单失败' });
                })
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