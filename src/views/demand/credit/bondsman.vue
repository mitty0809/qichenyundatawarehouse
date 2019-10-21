<template>
        <div>
            <avue-tabs :option="option1" @change="handleChange"></avue-tabs>
            <div v-if="type.prop==='tab1'">
                <credit></credit>
                <!-- <basic-container>
                    <avue-form :option="option" v-model="form">
                        <template slot-scope="scope" slot="menuForm">
                            <el-button @click="tip">自定义按钮</el-button>
                        </template>
                    </avue-form>
                </basic-container> -->
            </div>
            <div v-else="type.prop==='tab2'">
                <credit></credit>
                <!-- <basic-container>
                    <avue-form :option="option" v-model="form">
                        <template slot-scope="scope" slot="menuForm">
                            <el-button @click="tip">自定义按钮</el-button>
                        </template>
                    </avue-form>
                </basic-container> -->
            </div>
        </div>
    </template>
    <script>
        import credit from '../credit-information'
        // var DIC = {
        //     VAILD: [{
        //         label: '真',
        //         value: 'true'
        //     }, {
        //         label: '假',
        //         value: 'false'
        //     }]
        // }
        export default {
            components: {
            credit
        },
            data() {
                return {
                    type: {},
                    option1: {
                        column: [{
                            icon: 'el-icon-info',
                            label: '选项卡1',
                            prop: 'tab1',
                        }, {
                            icon: 'el-icon-warning',
                            label: '选项卡2',
                            prop: 'tab2',
                        }]
                    },
                    // option: {
                    //     labelWidth: 105,
                    //     span: 8,
                    //     column: [
                    //         {
                    //             label: "姓名",
                    //             prop: "username",
                    //             row: false,
                    //             span: 8,
                    //             readonly: true,
                    //             valueDefault: "担保人"
                    //         },
                    //         {
                    //             label: "查询日期",
                    //             prop: "date",
                    //             type: 'date',
                    //             row: false,
                    //             span: 8
                    //         },
                    //         {
                    //             label: "证件类型",
                    //             prop: "type",
                    //             type: "select",
                    //             span: 8,
                    //             dicData: DIC.VAILD
                    //         },
                    //         {
                    //             label: "证件号码",
                    //             prop: "password",
                    //             row: false,
                    //             span: 8
                    //         },
                    //         {
                    //             label: "曾用名",
                    //             prop: "type",
                    //             span: 8,
                    //         },
                    //         {
                    //             label: "信用状态",
                    //             prop: "type",
                    //             type: "select",
                    //             span: 8,
                    //             dicData: DIC.VAILD
                    //         },
                    //         {
                    //             label: "查询次数",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8
                    //         },
                    //         {
                    //             label: "不适合做的业务",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8
                    //         },
                    //         {
                    //             label: "未结清贷款数",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8,
                    //             formHeight: 40
                    //         },
                    //         {
                    //             label: "未结清贷款余额",
                    //             prop: "type",
                    //             span: 8,
                    //         },
                    //         {
                    //             label: "月供",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8,
                    //             formHeight: 40
                    //         },
                    //         {
                    //             label: "账户数",
                    //             prop: "type",
                    //             span: 8,
                    //         },
                    //         {
                    //             label: "授信总额",
                    //             prop: "type",
                    //             span: 8,
                    //         },
                    //         {
                    //             label: "近6个月平均使用额度",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8,
                    //             formHeight: 40,
                    //             labelWidth: 130
                    //         },
                    //         {
                    //             label: "24个月内连续3次逾期",
                    //             prop: "type",
                    //             span: 8,
                    //             labelWidth: 130
                    //         },
                    //         {
                    //             label: "担保笔数",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8,
                    //             formHeight: 40
                    //         },
                    //         {
                    //             label: "担保余额",
                    //             prop: "type",
                    //             span: 8,
                    //         },
                    //         {
                    //             label: "12个月累计逾期次数",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8,
                    //             formHeight: 40,
                    //             labelWidth: 130
                    //         },
                    //         {
                    //             label: "是否缴纳公积金",
                    //             prop: "textareai",
                    //             row: false,
                    //             type: "select",
                    //             span: 8,
                    //             formHeight: 40,
    
                    //         },
                    //         {
                    //             label: "缴纳公积金单位",
                    //             prop: "type",
                    //             span: 8
                    //         },
                    //         {
                    //             label: "公积金缴纳年限",
                    //             prop: "type",
                    //             span: 8
                    //         },
                    //         {
                    //             label: "是否缴纳社保",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8,
                    //             type: "select",
                    //             formHeight: 40,
                    //             dicData: DIC.VAILD
                    //         },
                    //         {
                    //             label: "社保续存状态",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8,
                    //             formHeight: 40,
                    //             type: "select",
                    //             dicData: DIC.VAILD
                    //         },
                    //         {
                    //             label: "备注",
                    //             prop: "type",
                    //             span: 8,
                    //         }
                    //     ]
                    // }
                }
            },
            created() {
                this.type = this.option1.column[0];
            },
            methods: {
                handleChange(column) {
                    this.type = column
                    //   this.$message.success(JSON.stringify(column))
                }
            }
        }
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
            font-size: 12px !important;
        }
    </style>