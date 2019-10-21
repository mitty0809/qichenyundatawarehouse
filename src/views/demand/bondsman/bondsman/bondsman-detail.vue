<template>
        <div>
            <avue-tabs :option="option1" @change="handleChange"></avue-tabs>
            <div v-if="type.prop==='tab1'">
                <detail></detail>
            </div>
            <div v-else="type.prop==='tab2'">
                <detail></detail>
            </div>
        </div>
    </template>
    <script>
        import detail from '../../detail-information'
        export default {
            components: {
                detail
            },
            data() {
                return {
                    type: {},
                    option1: {
                        column: [{
                            label: '担保人1',
                            prop: 'tab1',
                        }, {
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
                    console.log(column)
                    //   this.$message.success(JSON.stringify(column))
                }
            }
        }
    </script>
    <style>
    </style>