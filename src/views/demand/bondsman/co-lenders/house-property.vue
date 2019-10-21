<template>
        <div>
            <avue-tabs :option="option1" @change="handleChange"></avue-tabs>
            <div v-if="type.prop==='tab1'">
                <house></house>
            </div>
            <div v-else="type.prop==='tab2'">
                <house></house>
            </div>
        </div>
    </template>
    <script>
        import house from '../../house-information'
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
            components: {
                house
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