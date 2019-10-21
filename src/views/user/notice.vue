<template>
    <div id="avue-view" style="height: 100%; overflow: hidden auto;">
        <!---->
        <div class="user-setting avue-view">
            <div class="basic-container" style="border-radius: 10px;">
                <div class="el-card is-always-shadow">
                    <!---->
                    <div class="el-card__body">
                        <avue-crud :option="option" :data="data" @search-change="searchChange" @row-save="rowSave"
                        @refresh-change="refresh" @row-update="rowUpdate">
                            <!-- <template slot="search">
                                <el-col :md="6" :xs="24">
                                    <el-form-item label="自定义">
                                        <el-input placeholder="自定义搜索" size="small" v-model="searchForm.solt" />
                                    </el-form-item>
                                </el-col>
                            </template>
                            <template slot="searchMenu">
                                <el-button size="small">自定义按钮</el-button>
                            </template> -->
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
                data: [
                ],
                searchContent: '',
                option: {
                    title: '公告管理',
                    page: false,
                    align: 'center',
                    menuAlign: 'center',
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
                        search: true,
                    },
                    {
                        label: '内容',
                        prop: 'content'
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
            listnotice() {
                noticelist(this.searchContent).then(res => {
                    console.log(res)
                    this.data=res.data.data.content
                }).catch(error => {
                    console.log(error)
                })
            },
            searchChange(params) {
                console.log(params)
                this.searchContent=params.title
                this.listnotice()
                this.$message.success('search callback' + JSON.stringify(Object.assign(params, this.searchForm)))
            },
            rowSave(form, done) {
                console.log(form)
                addnotice(form.title, form.content, form.endDate).then(res => {
                    console.log(res)
                    if(res.data.code===0){
                        this.listnotice()
                    }
                }).catch(error => {
                    console.log(error)
                })
                done()
            },
            refresh(){
                this.searchContent=''
                this.listnotice()
            },
            // 更新公告
            rowUpdate(form,index,done){
                console.log(form)
                updatenotice(form.id,form.title,form.content,form.endDate).then(res => {
                    console.log(res)
                    if(res.data.code===0){
                        this.listnotice()
                    }
                }).catch(error => {
                    console.log(error)
                })
                done()

            }
        }
    }
</script>