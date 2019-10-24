<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <div class="filter-container">
                            <div class="el-button-group">
                                <button type="button" class="el-button el-button--primary el-button--medium"
                                    @click="addorg">
                                    <!----><i class="plus"></i>
                                    <span>添加
                                    </span></button>
                                <button type="button" class="el-button el-button--primary el-button--medium"
                                    @click="updateorg">
                                    <!----><i class="edit"></i><span>编辑
                                    </span></button>
                                <button type="button" class="el-button el-button--primary el-button--medium"
                                    @click="orgdelete">
                                    <!----><i class="delete"></i><span>删除
                                    </span></button></div>
                        </div>
                        <div class="v-modal" tabindex="0" style="z-index: 2018;" v-show="addshow"></div>
                        <div class="el-dialog__wrapper avue-crud__dialog" size="50%" style="z-index: 2046;"
                            v-show="addshow">
                            <div role="dialog" aria-modal="true" aria-label="新 增" class="el-dialog"
                                style="margin-top: 100px; width: 50%;">
                                <div class="el-dialog__header">
                                    <span class="el-dialog__title">新 增</span>
                                    <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close" @click="close"></i>
                                    </button>
                                </div>
                                <div class="el-dialog__body">
                                    <avue-form :option="addoption" v-model="addform"></avue-form>
                                    <div class="el-dialog__footer">
                                        <span class="dialog-footer">
                                            <button type="button" class="el-button el-button--primary el-button--medium"
                                                @click="preserve">
                                                <span>保 存</span>
                                            </button>
                                            <button type="button" class="el-button el-button--default el-button--medium"
                                                @click="close">
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
                                    <!-- <div class="el-form-item__content" style="margin-left: 80px;" v-show="show"><button
                                            type="button" class="el-button el-button--primary el-button--medium">
                                            <span>保存
                                            </span></button><button type="button"
                                            class="el-button el-button--default el-button--medium">
                                            <span>取消</span></button>
                                    </div> -->
                                    <div class="el-form-item__content" style="margin-left: 80px;" v-show="update">
                                        <button type="button" class="el-button el-button--primary el-button--medium"
                                            @click="renewal">
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
    import { orgtree, orgadd, orgupdate, orgdelete } from '@/api/user'
    import { hint } from '@/util/util'
    const DIC = {
        ORGTYPE: [{
            label: '公司',
            value: 10
        }, {
            label: '部门',
            value: 20
        }],
    }

    export default {
        data() {
            return {
                data: [],
                present: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                show: false,
                text: true,
                update: false,
                val: '1111',
                type: '',
                form: {
                    parentId: '0'
                },
                addshow: false,
                disabled: true,
                addform: {
                    orgNo: "",
                    name: "",
                    fullName: "",
                    orgType: "",
                    parentId: 0,
                    seq: ""
                },
                option: {
                    labelWidth: 100,
                    emptyBtn: false,
                    submitBtn: false,
                    saveBtn: true,
                    disabled: true,
                    column: [{
                        label: "上级id",
                        prop: "parentId",
                        row: false,
                        editDisabled: true,
                        disabled: true
                    }, {
                        label: "机构简称",
                        prop: "name",
                        row: false,
                    }, {
                        label: "机构全称",
                        prop: "fullName",
                        row: false,
                    }, {
                        label: '机构类型',
                        prop: 'orgType',
                        type: "radio",
                        dicData: DIC.ORGTYPE,
                    }, {
                        label: "排序",
                        prop: "seq",
                        row: false,
                        readonly: true,
                        // disabled:true,
                    }]

                },
                addoption: {
                    emptyBtn: false,
                    submitBtn: false,
                    column: [{
                        label: '上级机构',
                        prop: 'parentId',
                        type: 'tree',
                        props: {
                            label: 'name',
                            value: 'id',
                            children: 'children'
                        },
                        dicUrl: 'https://dev.qichenyun.com/dw/org/tree',
                        readonly: true,
                    }, {
                        label: '机构编码',
                        prop: 'orgNo'
                    }, {
                        label: '机构全称',
                        prop: 'fullName'
                    }, {
                        label: '机构简称',
                        prop: 'name'
                    }, {
                        label: '机构类型',
                        prop: 'orgType',
                        type: "radio",
                        dicData: DIC.ORGTYPE,
                    }, {
                        label: '排序',
                        prop: 'seq',
                        hide: true
                    }]
                }


            };
        },

        created() {
            // 获取菜单树
            this.getTree()
        },
        methods: {
            // 获取机构树
            getTree() {
                orgtree().then(res => {
                    this.data = res.data.data
                    this.data.forEach(item => {
                        item.label = item.name
                        if (item.children.length == 0) {
                        } else {
                            item.children.forEach(item => {
                                item.label = item.name
                                if (item.children.lenght == 0) {

                                } else {
                                    item.children.forEach(item => {
                                        item.label = item.name
                                    })
                                }
                            })
                        }
                    })
                }).catch(error => {
                    console.log(error)
                })
            },
            // 点击树节点触发事件
            handleNodeClick(data, node) {
                this.form = data
                this.addform.parentId = this.form.id
                console.log(data)
            },
            addorg() {
                this.show = true
                this.addshow = true
                // this.addform.parentId = this.form.parentId
                // this.addform.parentId = this.form.parentId
            },
            updateorg() {
                this.update = true
                // console.log(this.form)
            },
            // 添加机构
            preserve() {
                orgadd(this.addform.orgNo, this.addform.name, this.addform.fullName, this.addform.orgType, this.addform.parentId, this.addform.seq).then(res => {
                    // this.addshow = false
                    this.close()
                    if (res.data.code === 0) {
                        this.getTree()
                        this.hint('添加', '添加机构成功')
                        this.$router.push({
                            path: "/info/organization",
                        });
                    }
                }).catch(error => {
                    this.hint('添加', '添加机构失败')
                })
            },
            // 关闭添加弹窗
            close() {
                this.addshow = false
                this.addform.parentId = 0
                this.addform.orgNo = '',
                    this.addform.fullName = '',
                    this.addform.name = ''
                this.addform.orgType = ''
                this.addform.seq = ''
            },
            // 修改机构信息
            renewal() {
                orgupdate(this.form.id, this.form.name, this.form.fullName, this.form.orgType, this.form.parentId, this.form.seq, this.form.remark).then(res => {
                    console.log(res)
                    this.hint('修改', '修改机构成功')
                    this.getTree()
                }).catch(error => {
                    console.log(error)
                    this.hint('修改', '修改机构失败')
                })
            },
            // 删除机构
            orgdelete() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    orgdelete(this.form.id).then(res => {
                        this.getTree()
                        if (res.data.code === 0) {
                            this.hint('删除', '删除菜单成功')
                        }
                        console.log(this.addform)
                    }).catch(error => {
                        console.log(error)
                        this.hint('删除', '删除菜单失败')
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            hint(title, value) {
                this.$notify.success({ title: title, message: value });
            }
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