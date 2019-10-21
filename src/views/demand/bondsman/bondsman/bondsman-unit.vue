<template>
        <div>
            <avue-tabs :option="option1" @change="handleChange"></avue-tabs>
            <div v-if="type.prop==='tab1'">
                <unit></unit>
            </div>
            <div v-else="type.prop==='tab2'">
                <unit></unit>
                
            </div>
        </div>
    </template>
    <script>
         import unit from '../../unit-information'
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
                            label: '担保人1',
                            prop: 'tab1',
                        }, {
                            icon: 'el-icon-warning',
                            label: '担保人2',
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
       
    </style>