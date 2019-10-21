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
                            label: "合同编码",
                            prop: "username",
                            row: false,
                            span: 8,
                            readonly: true,
                            valueDefault: "0001"
                        },
                        {
                            label: "合同日期",
                            prop: "date",
                            type: 'select',
                            row: false,
                            span: 8,
                            dicData: DIC.VAILD
                        },
                        {
                            label: "合同金额",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "合同是否归档",
                            prop: "password",
                            type:'date',
                            row: false,
                            span: 8
                        },
                        {
                            label: "抵押是否办理",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "办理抵押时间",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "抵押办理人员",
                            prop: "textareai",
                            row: false,
                            span: 8
                        },
                        {
                            label: "抵押办理人员电话",
                            prop: "textareai",
                            row: false,
                            span: 8
                        },
                        {
                            label: "是否结清",
                            prop: "textareai",
                            row: false,
                            type:'select',
                            span: 8,
                            formHeight: 40,
                            dicData: DIC.VAILD
                        },
                        {
                            label: "结清费用",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "结清人员",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "结清人员电话",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "解押是否办理",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "解押办理时间",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                            
                        },
                        {
                            label: "解押办理人员",
                            prop: "type",
                            span: 8,
                            
                        },
                        {
                            label: "解押办理人员电话",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "GPS是否拆除",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "GPS拆除人员",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                        {
                            label: "GPS拆除人员电话",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,

                        },
                        {
                            label: "GPS是否回收",
                            prop: "type",
                            span: 8
                        },
                        {
                            label: "是否逾期",
                            prop: "type",
                            span: 8
                        },
                        {
                            label: "累计逾期次数",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                        {
                            label: "累计逾期金额",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                        {
                            label: "累计罚息金额",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "累计罚息减面次数",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "累计罚息减面金额",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "是否诉讼",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "诉讼案件号",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "诉讼法院",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "诉讼金额",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "诉讼备注",
                            prop: "type",
                            span: 8,
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