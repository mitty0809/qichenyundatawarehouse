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
                            label: "车辆品牌",
                            prop: "username",
                            row: false,
                            span: 8,
                            readonly: true,
                            valueDefault: "0001"
                        },
                        {
                            label: "车辆型号",
                            prop: "date",
                            type: 'select',
                            row: false,
                            span: 8,
                            dicData: DIC.VAILD
                        },
                        {
                            label: "车辆配置",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "车辆颜色",
                            prop: "password",
                            type:'date',
                            row: false,
                            span: 8
                        },
                        {
                            label: "车辆类型",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "二手车估值",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "估值来源",
                            prop: "textareai",
                            row: false,
                            span: 8
                        },
                        {
                            label: "已使用年限",
                            prop: "textareai",
                            row: false,
                            span: 8
                        },
                        {
                            label: "里程数",
                            prop: "textareai",
                            row: false,
                            type:'select',
                            span: 8,
                            formHeight: 40,
                            dicData: DIC.VAILD
                        },
                        {
                            label: "产品名称",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "车型代码",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "发动机号",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "车架号",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "市场指导价",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                            
                        },
                        {
                            label: "发票金额",
                            prop: "type",
                            span: 8,
                            
                        },
                        {
                            label: "首付款",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "还款周期",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "期数",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                        {
                            label: "融资期限（月）",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,

                        },
                        {
                            label: "还款方式",
                            prop: "type",
                            span: 8
                        },
                        {
                            label: "融资比例%",
                            prop: "type",
                            span: 8
                        },
                        {
                            label: "融资金额",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                        {
                            label: "每期还款额",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40,
                        },
                        {
                            label: "贷款银行",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "征信查询银行",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "一次性手续费",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "年利率",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "利息总额",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "银行利率",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "公司费率",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "费用总额",
                            prop: "type",
                            span: 8,
                        },
                        {
                            label: "GPS是否参融",
                            prop: "type",
                            span: 8,
                        },{
                            label: "保险开始时间",
                            prop: "type",
                            span: 8,
                        },{
                            label: "保险结束时间",
                            prop: "type",
                            span: 8,
                        },{
                            label: "保险费用",
                            prop: "type",
                            span: 8,
                        },{
                            label: "保险是否参融",
                            prop: "type",
                            span: 8,
                        },{
                            label: "是否安装GPS",
                            prop: "type",
                            span: 8,
                        },{
                            label: "GPS个数",
                            prop: "type",
                            span: 8,
                        },{
                            label: "GPS编号",
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