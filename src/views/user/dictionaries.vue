<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <avue-crud :option="option" :data="dictdata" @row-save="rowSave" @row-update="rowUpdate"
                            @row-del="rowDel" @search-change="searchChange" :page="page" @on-load="onLoad"
                            @size-change="sizechange" @refresh-change="refreshChange" :table-loading="loading">
                            <template slot="menu" slot-scope="scope">
                                <el-button :size="scope.size" :type="scope.type" icon="el-icon-postcard"
                                    @click='dqid(scope.row)'>字典项
                                </el-button>
                            </template>
                        </avue-crud>
                        <div class="mask-layer" v-show="ariamodal"></div>
                        <div class="popup-box" v-show="ariamodal" id="popup">
                            <div class="popup-content" style="margin-top: 100px; width: 70%;">
                                <div class="el-dialog__header"><span class="el-dialog__title">{{dictionariesname}} -
                                        字典项</span>
                                    <button type="button" aria-label="Close" class="el-dialog__headerbtn"
                                        @click="close">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                                    </button>
                                </div>
                                <div class="el-dialog__body">
                                    <div style="height: 400px; overflow: hidden;">
                                        <div class="el-scrollbar" style="height: 100%;">
                                            <div class="el-scrollbar__wrap"
                                                style="margin-bottom: -6px; margin-right: -6px;">
                                                <div class="el-scrollbar__view">
                                                    <div class="avue-form" style="width: 100%;">
                                                        <avue-crud :option="itemoption" :data="itemdata"
                                                            @row-save="rowSaveitem" @row-update="itemrowUpdate"
                                                            @row-del="itemrowDel" :page="itempage" @on-load="onLoad1"
                                                            @size-change="itemsizechange" @refresh-change="refresh"
                                                            :table-loading="loading">
                                                        </avue-crud>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="el-scrollbar__bar is-horizontal">
                                                <div class="el-scrollbar__thumb" style="transform: translateX(0%);">
                                                </div>
                                            </div>
                                            <div class="el-scrollbar__bar is-vertical">
                                                <div class="el-scrollbar__thumb" style="transform: translateY(0%);">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="el-dialog__footer">
                                        <span class="dialog-footer">
                                            <button type="button"
                                                class="el-button el-button--primary el-button--medium">
                                                <span>修 改</span>
                                            </button>
                                            <button type="button" class="el-button el-button--default el-button--medium"
                                                @click="close">
                                                <span>取 消</span>
                                            </button>
                                        </span>
                                    </div> -->
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
    import { getDictList, addDict, updateDict, deleteDict, getDictitemlist, addDictitem, updateDictitem, deleteDictitem, getdict } from '@/api/user'
    export default {
        data() {
            return {
                searchForm: {},
                searchContent: '',
                pagedata: [],
                itempagedata: [],
                ariamodal: false,
                dictionariesname: '',
                dictId: "",
                loading: true,
                pageSizes: [5],
                dictdata: [
                ],
                page: {
                    total: '',
                    pageSize: '',
                },
                itempage: {
                    total: 20,
                    pageSize: 10,
                },
                itemdata: [],
                option: {
                    align: "center",
                    index: true,
                    indexLabel: '序号',
                    dialogWidth: "50%",
                    maxHeight: 'auto',
                    column: [
                        {
                            label: '字典编码',
                            prop: 'dictNo',
                            rules: [
                                { required: true, message: '字典编码不能为空', trigger: 'blur' }
                            ]
                        },
                        {
                            label: '字典名称',
                            prop: 'dictName',
                            search: true,
                            rules: [
                            { required: true, message: '字典名称不能为空', trigger: 'blur' }
                        ]
                        }, {
                            label: '字典类型',
                            prop: 'dictType',
                            rules: [
                            { required: true, message: '字典类型不能为空', trigger: 'blur' }
                        ]
                        }, {
                            label: '排序',
                            prop: 'seq'
                        }, {
                            label: '备注',
                            prop: 'remark'
                        }
                    ]
                },
                itemoption: {
                    // addRowBtn: false,
                    align: "center",
                    index: true,
                    indexLabel: '序号',
                    labelWidth: 140,
                    // headerFixed:true,
                    column: [
                        {
                            label: '字典项标签',
                            prop: 'itemName',
                            // labelWidth: 140,
                            rules: [
                            { required: true, message: '字典项标签不能为空', trigger: 'blur' }
                        ]
                        }, {
                            label: '字典项键值',
                            prop: 'itemValue',
                            rules: [
                            { required: true, message: '字典项键值不能为空', trigger: 'blur' }
                        ]
                        }, {
                            label: '排序',
                            prop: 'seq'
                        }, {
                            label: '备注',
                            prop: 'remark'
                        }
                    ]
                },
            };
        },
        created() {
            // this.loading=true
        },
        methods: {
            onLoad(page) {
                this.page = page
                getDictList(this.searchContent, this.page.currentPage).then(res => {
                    this.pagedata = res.data.data
                    this.page.total = this.pagedata.total
                    this.page.pageSize = this.page.pageSize
                    this.dictdata = this.pagedata.content
                    this.loading = false
                });

            },
            // 获取字典列表
            dictlist() {
                getDictList(this.searchContent, this.page.currentPage, this.page.pageSize).then(res => {
                    this.dictdata = res.data.data.content
                });
            },
            // 添加字典
            rowSave(row, done, form) {
                addDict(row.dictNo, row.dictName, row.dictType, row.seq, row.remark).then(res => {
                    this.dictdata.push(res.data.data)
                    if (res.data.code === 0) {
                        this.$notify.success({ title: '添加', message: '添加字典成功' });
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '添加', message: '添加字典失败' });
                })
                done();
            },
            //编辑字典
            rowUpdate(form, index, done) {
                updateDict(form.id, form.dictName, form.seq, form.remark).then(res => {
                    this.dictlist()
                    if (res.data.code === 0) {
                        this.$notify.success({ title: '修改', message: '修改字典成功' });
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '修改', message: '修改字典失败' });
                })
                done();
            },
            //删除字典
            rowDel(form, index) {
                deleteDict(form.id).then(res => {
                    this.dictlist()
                    if (res.data.code === 0) {
                        this.$notify.success({ title: '删除', message: '删除字典成功' });
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '删除', message: '添加字典失败' });
                })
            },
            // 获取字典项列表
            itemlist(id) {
                getDictitemlist(id, this.itempage.pageSize, this.itempage.currentPage).then(res => {
                    this.itempagedata = res.data.data
                    this.itempage.total = this.itempagedata.total
                    this.itemdata = this.itempagedata.content
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '获取', message: '获取字典项失败' });
                })
            },
            // 新增字典项
            rowSaveitem(form, done) {
                debugger
                addDictitem(this.dictId, form.itemName, form.itemValue, form.seq, form.remark).then(res => {
                    this.itemdata = res.data.data
                    this.itemlist(this.dictId)
                    if (res.data.code === 0) {
                        this.$notify.success({ title: '添加', message: '添加字典项成功' });
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '添加', message: '添加字典项失败' });
                })
                done()
            },
            // 查询字典
            searchChange(params) {
                if (params.dictNo) {
                    this.searchContent = params.dictNo
                } else {
                    this.searchContent = params.dictName
                }
                this.dictlist()
                // this.$message.success('search callback' + JSON.stringify(Object.assign(params, this.searchForm)))
            },
            //修改字典项
            itemrowUpdate(form, index, done) {
                updateDictitem(form.id, form.itemName, form.seq, form.remark).then(res => {
                    this.itemlist(form.dictId)
                    if (res.data.code === 0) {
                        this.$notify.success({ title: '修改', message: '修改字典项成功' });
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '修改', message: '修改字典项失败' });
                })
                done()
            },
            //删除字典项
            itemrowDel(form, index) {
                deleteDictitem(form.id).then(res => {
                    this.itemlist(form.dictId)
                    if (res.data.code === 0) {
                        this.$notify.success({ title: '删除', message: '删除字典项成功' });
                    }
                }).catch(error => {
                    console.log(error)
                    this.$notify.success({ title: '删除', message: '删除字典项失败' });
                })
            },
            //显示字典项弹出框
            dqid(row) {
                // this.page.pageSize=1
                this.itempage.pageSizes = this.pageSizes
                this.itempage.pageSize = 5
                this.dictId = row.id
                this.dictionariesname = row.dictName
                this.itemlist(row.id)
                this.ariamodal = true
            },
            // 关闭字典项弹出框
            close() {
                this.ariamodal = false
            },
            // 切换每页条数
            sizechange(page) {
                // console.log(page)
                this.page.pageSize = page
                this.dictlist()
            },
            // 字典项分页首次请求
            onLoad1(page) {
                // console.log(page)
                this.itempage = page
                this.itempage.pageSizes = this.pageSizes
                this.itemlist(this.dictId)
            },
            itemsizechange(page) {
                console.log(page)
                console.log('点击了page')
                // this.itempage.pageSize=page
                // this.itemlist(this.dictId)
            },
            refreshChange(page) {
                this.searchContent = ''
                this.dictlist()
            },
            // 刷新
            refresh() {

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

    .box {
        width: 1016px;
        height: 772px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 7px 0px rgba(165, 192, 214, 0.5);
        border-radius: 5px;
        margin-left: 10px;
        position: relative;
    }

    .mask-layer {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000;
        z-index: 2118;
    }

    .popup-box {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
        z-index: 2119;
    }

    .popup-content {
        border-radius: 5px;
        position: relative;
        margin: 0 auto 50px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        box-sizing: border-box;
        background: #FFF;
    }

    /* .search-input {
        display: inline-block;
        width: 200px;
        margin-right: 20px;
    } */
    /* .el-form-item__label {
        width: 88px !important;
    }

    .el-form-item__content {
        margin-left: 88px !important;
    } */

    .search {
        margin-left: 50px;
    }

    #popup .el-table--medium {
        height: 277px !important;
        overflow: scroll;
    }

    #popup .el-dialog__body {
        padding: 30px 20px 0 20px !important;
    }

    /* el-table el-table--fit el-table--enable-row-transition el-table--medium */
    /* el-table el-table--fit el-table--enable-row-transition el-table--medium el-loading-parent--relative */
</style>