<template>
        <div>
            <avue-tabs :option="option1" @change="handleChange"></avue-tabs>
            <div v-if="type.prop==='tab1'">
                <unit></unit>
                <!-- <basic-container>
                    <avue-form :option="option" v-model="form">
                        <template slot-scope="scope" slot="menuForm">
                            <el-button @click="tip">自定义按钮</el-button>
                        </template>
                    </avue-form>
                </basic-container> -->
            </div>
            <div v-else="type.prop==='tab2'">
                <unit></unit>
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
         import unit from '../../unit-information'
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
                unit
            },
            data() {
                return {
                    type: {},
                    page: {
                        total: 122
                    },
                    // form: {},
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
                    //     labelWidth: 80,
                    //     column: [
                    //         {
                    //             label: "工作单位",
                    //             prop: "type",
                    //             type: "select",
                    //             span: 8,
                    //             dicData: DIC.VAILD
                    //         },
                    //         {
                    //             label: "单位薪资",
                    //             prop: "username",
                    //             row: false,
                    //             span: 8
                    //         },
                    //         {
                    //             label: "单位电话",
                    //             prop: "date",
                    //             row: false,
                    //             span: 8
    
                    //         },
                    //         {
                    //             label: "职位",
                    //             prop: "password",
                    //             row: false,
                    //             span: 8
                    //         },
                    //         {
                    //             label: "从事行业",
                    //             prop: "date",
                    //             row: false,
                    //             span: 8
                    //         },
                    //         {
                    //             label: "工作年限",
                    //             prop: "textarea",
                    //             row: false,
                    //             span: 8
                    //         },
                    //         {
                    //             label: "单位负责人",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8
                    //         }, {
                    //             label: "负责人电话",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8
                    //         }, {
                    //             label: "负责人岗位",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 8
                    //         }, {
                    //             label: "单位地址",
                    //             prop: "textareai",
                    //             row: false,
                    //             span: 25
                    //         }
                    //     ]
                    // }
                }
            },
            created() {
                this.type = this.option.column[0];
            },
            methods: {
                handleChange(column) {
                    this.type = column
                    //   this.$message.success(JSON.stringify(column))
                },
                // handleForm() {
                //     this.$router.push({
                //         path: "/form-detail/index",
                //     });
                // },
                // tip() {
                //     console.log('点击了自定义按钮')
                // }
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