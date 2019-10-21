<template>
        <div>
            <basic-container>
                <avue-form :option="option" v-model="form">
                    <template slot-scope="scope" slot="menuForm">
                        <el-button @click="tip">自定义按钮</el-button>
                    </template>
                </avue-form>
            </basic-container>
        </div>
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
        export default {
            data() {
                return {
    
                    page: {
                        total: 122
                    },
                    form: {},
                    option: {
                        labelWidth: 80,
                        column: [
                            {
                                label: "工作单位",
                                prop: "type",
                                type: "select",
                                span: 8,
                                dicData: DIC.VAILD
                            },
                            {
                                label: "单位薪资",
                                prop: "username",
                                row: false,
                                span: 8
                            },
                            {
                                label: "单位电话",
                                prop: "date",
                                row: false,
                                span: 8
    
                            },
                            {
                                label: "职位",
                                prop: "password",
                                row: false,
                                span: 8
                            },
                            {
                                label: "从事行业",
                                prop: "date",
                                row: false,
                                span: 8
                            },
                            {
                                label: "工作年限",
                                prop: "textarea",
                                row: false,
                                span: 8
                            },
                            {
                                label: "单位负责人",
                                prop: "textareai",
                                row: false,
                                span: 8
                            },{
                                label: "负责人电话",
                                prop: "textareai",
                                row: false,
                                span: 8
                            },{
                                label: "负责人岗位",
                                prop: "textareai",
                                row: false,
                                span: 8
                            },{
                                label: "单位地址",
                                prop: "textareai",
                                row: false,
                                span:25
                            }
                        ]
                    }
                };
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
            margin-bottom: 16px !important;
        }
        .avue-crud .el-input__inner,
        .avue-form .el-input__inner {
            height: 36px;
            line-height: 36px;
        }
    
        .el-input input::placeholder {
            font-size: 11px;
        }
    
        .el-form-item__label {
            font-size: 13px !important;
        }
    </style>