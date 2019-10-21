<template>
        <basic-container>
                <avue-form :option="option" v-model="form">
                    <template slot-scope="scope" slot="menuForm">
                        <el-button>自定义按钮</el-button>
                    </template>
                </avue-form>
            </basic-container>
</template>
<script>
    var DIC = {
        VAILD: [{
            label: '真',
            value: 'true'
        }, {
            label: '假',
            value: 'false'
        }]
    }
    export default{
        data(){
            return{
                form: {},
                option: {
                    labelWidth: 105,
                    span: 8,
                    column: [
                        {
                            label: "姓名",
                            prop: "username",
                            row: false,
                            span: 8,
                            readonly: true,
                            valueDefault: "0001"
                        },
                        {
                            label: "证件类型",
                            prop: "date",
                            type: 'select',
                            row: false,
                            span: 8,
                            dicData: DIC.VAILD
                        },
                        {
                            label: "身份证号码",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "证件有效期",
                            prop: "password",
                            type:'date',
                            row: false,
                            span: 8
                        },
                        {
                            label: "身份证归属地",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "手机号码",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "手机号归属地",
                            prop: "textareai",
                            row: false,
                            span: 8
                        },
                        {
                            label: "备用手机号",
                            prop: "textareai",
                            row: false,
                            span: 8
                        },
                        {
                            label: "婚姻状况",
                            prop: "textareai",
                            row: false,
                            type:'select',
                            span: 8,
                            formHeight: 40,
                            dicData: DIC.VAILD
                        },
                        {
                            label: "年龄",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "民族",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "户籍",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "学历",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "QQ",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                            
                        },
                        {
                            label: "宅电",
                            prop: "type",
                            span: 8,
                            
                        },
                        {
                            label: "现居省份",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "现居城市",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                        {
                            label: "现居住地址",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,

                        },
                        {
                            label: "电子邮件",
                            prop: "type",
                            span: 8
                        },
                        {
                            label: "户籍省份",
                            prop: "type",
                            span: 8
                        },
                        {
                            label: "户籍城市",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                        {
                            label: "户籍地址",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                    ]
                }
            }
        }
    }
</script>
<style scoped>
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
            font-size: 12px !important;
        }
        .el-tabs__nav div:nth-child(2){
            border-right: none;
        }
        .avue-tabs .el-tabs__item{
            width:170px;
            border:1px solid #DCE0E7;
            text-align:center;
        } 
        .is-active
        .el-tabs__active-bar{
            width:170px !important;
            transform: translateX(170px);
        }
        .el-tabs__active-bar{
            background-color:transparent;
        }
        .avue-tabs .is-active{
            border-bottom:2px solid white !important;
        }
    </style>