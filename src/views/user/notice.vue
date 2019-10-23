<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <avue-crud :option="option" :data="data" @search-change="searchChange" @row-save="rowSave"
                        @refresh-change="refresh" @row-update="rowUpdate" :page="page" @on-load="onLoad">
                        <template slot="search">
                                <el-col :md="6" :xs="24">
                                  <el-form-item label="搜索内容">
                                    <el-input placeholder="标题/内容" size="small" v-model="searchForm.solt" />
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
    import { noticelist, addnotice,updatenotice } from '@/api/user'
    export default {
        data() {
            return {
                obj: {},
                searchForm: {},
                data: [],
                searchContent: '',
                page:{
                    pageSize: 1
                },
                pagedata:{},
                option: {
                    align: 'center',
                    // menuAlign: 'center',
                    searchShow:false,
                    column: [{
                        label: 'id',
                        prop: 'id',
                        hide: true,
                        addDisplay: false,
                        editDisplay: false
                    },
                    {
                        label: '标题',
                        prop: 'title',
                        row:false
                        // search: true,
                    },
                    {
                        label: '内容',
                        prop: 'content',
                        type:'textarea'
                    }, {
                        label: "日期",
                        prop: "endDate",
                        type: 'date',
                        format: "yyyy-MM-dd",
                        valueFormat: "yyyy-MM-dd",
                    }, {
                        label: '创建时间',
                        prop: 'createdTime',
                        hide: true,
                        type: "date",
                        addDisplay: false,
                        editDisplay: false
                    }, {
                        label: '更新时间',
                        prop: 'updatedTime',
                        hide: true,
                        addDisplay: false,
                        editDisplay: false
                    }, {
                        label: '备注',
                        prop: 'remark',
                        hide: true,
                        addDisplay: false,
                        editDisplay: false
                    }
                    ]
                }
            }
        },
        created() {
            this.listnotice()
        },
        methods: {
            // 获取公告列表
            listnotice() {
                noticelist(this.searchContent,this.page.currentPage,this.page.pageSize).then(res => {
                    this.data=res.data.data.content
                    this.page.total=res.data.data.total
                }).catch(error => {
                    console.log(error)
                })
            },
            // 搜索
            searchChange(params) {
                this.searchContent= this.searchForm.solt
                this.listnotice()
                // this.$message.success('search callback' + JSON.stringify(Object.assign(params, this.searchForm)))
            },
            // 添加公告
            rowSave(form, done) {
                addnotice(form.title, form.content, form.endDate).then(res => {
                    if(res.data.code===0){
                        this.listnotice()
                    }
                }).catch(error => {
                    console.log(error)
                })
                done()
            },
            // 刷新
            refresh(){
                this.searchContent=''
                this.listnotice()
            },
            // 更新公告
            rowUpdate(form,index,done){
                updatenotice(form.id,form.title,form.content,form.endDate).then(res => {
                    if(res.data.code===0){
                        this.listnotice()
                    }
                }).catch(error => {
                    console.log(error)
                })
                done()
            },
            // 分页
            onLoad(page){
                this.page=page
                this.page.pageSizes=[1]
                this.listnotice()
            }
        }
    }
</script>