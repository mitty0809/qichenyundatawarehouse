<template>
        <div>
            <avue-tabs :option="option" @change="handleChange"></avue-tabs>
            <div v-if="type.prop==='tab1'">
                <credit></credit>
            </div>
            <div v-else="type.prop==='tab2'">
                <credit></credit>
            </div>
        </div>
    </template>
    <script>
        // import credit from '../credit-information'
        import credit from '../credit-information'
        export default {
            components: {
                credit
            },
            data() {
                return {
                    type: {},
                    option: {
                        column: [{
                            label: '共贷人1',
                            prop: 'tab1',
                        }, {
                            label: '共贷人2',
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
        .el-tabs__item{
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
        .is-active{
            border-bottom:2px solid white !important;
        }
    </style>