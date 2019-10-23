<template>
        <basic-container>
                <avue-form :option="option" v-model="form" >
                  <template slot-scope="scope" slot="menuForm">
                    <el-button @click="tip">自定义按钮</el-button>
                  </template>
                </avue-form>         
        </basic-container>
    <!-- <el-form ref="form" :model="form" label-width="80px" :inline="true">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
        </el-form-item>
    </el-form> -->
</template>
<script>
        var DIC = {
        VAILD: [{
            label: '真',
            value: 'true'
        }, {
            label: '假',
            value: 'false'
        }],
        SEX: [{
            label: '男',
            value: 0
        }, {
            label: '女',
            value: 1
        }]
    }
    export default {
        // data() {
        //     return {
        //         form: {
        //             name: '',
        //             region: '',
        //             date1: '',
        //             date2: '',
        //             delivery: false,
        //             type: [],
        //             resource: '',
        //             desc: ''
        //         }
        //     }
        // },
        data() {
            return {
                page: {
                    total: 122
                },
                form: {},
                option: {
                    labelWidth: 100,
                    span:8,
                    column: [
                        {
                            label: "单据编码",
                            prop: "username",
                            row: false,
                            span: 8,
                            readonly:true,
                            valueDefault: "0001"
                        },
                        {
                            label: "业务日期",
                            prop: "date",
                            type: 'date',
                            row: false,
                            span: 8
                        },
                        {
                            label: "业务类型",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "经销商",
                            prop: "password",
                            row: false,
                            span: 8
                        },
                        {
                            label: "业务部门",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "业务员",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "业务员电话",
                            prop: "textareai",
                            row: false,
                            span: 8
                        },
                        {
                            label: "资金来源",
                            prop: "textareai",
                            row: false,
                            span: 8
                        },
                        {
                            label: "客户姓名",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "证件类型",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "身份证号码",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "证件有效期",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "身份证归属地",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "手机号码",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "手机号归属地",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "备用手机号",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "婚姻状况",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "年龄",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "民族",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "户籍",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "学历",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "驾驶证",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "宅电",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "购车目的",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "现居省份",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "现居城市",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "现居地址",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "电子邮件",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "户籍省份",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "户籍城市",
                            prop: "type",
                            type: "select",
                            span:8,
                            dicData:DIC.VAILD
                        },
                        {
                            label: "户籍地址",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "QQ号",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "家庭月收入",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "家庭月支出",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "主要收入来源",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "其它收入来源",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "社保",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "开户行",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "账号",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                        {
                            label: "抚养/赡养人数",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight:40
                        },
                    ]
                }
            };
        },
        created(){
            
        },
        methods: {
            handleForm() {
                this.$router.push({
                    path: "/form-detail/index",
                });
            },
            tip() {
                console.log('点击了自定义按钮')
            }
        }
    };
</script>
<style>
    .el-form-item {
        margin-bottom: 8px !important;
    }

    .avue-crud .el-input__inner,
    .avue-form .el-input__inner {
        height: 30px;
        line-height: 30px;
    }

    .el-input input::placeholder {
        font-size: 11px;
    }

    .el-form-item__label {
        font-size: 13px !important;
    }
</style>