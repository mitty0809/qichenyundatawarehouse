<template>
        <avue-crud :data="data" :option="option" ref="crud">
                
            </avue-crud>
</template>
<script>
    export default {
        data() {
            return {
                data: [
                    {
                        name: '张三',
                        sex: '男'
                    }, {
                        name: '李四',
                        sex: '女'
                    }
                ],
                option: {
                    columnBtn: false,
                    menu:false,
                    border:true,
                    refreshBtn: false,
                    saveBtn: false,
                    updateBtn: false,
                    cancelBtn: false,
                    addBtn: false,
                    delBtn: false,
                    editBtn: false,
                    page: false,
                    align: 'center',
                    menuAlign: 'center',
                    column: [
                        {
                            label: '费用名称',
                            prop: 'name'
                        }, {
                            label: '费用金额',
                            prop: 'sex'
                        },{
                            label: '费用类型',
                            prop: 'name'
                        },{
                            label: '收/支',
                            prop: 'name'
                        },{
                            label: '状态',
                            prop: 'name'
                        },{
                            label: '备注',
                            prop: 'name'
                        }
                    ]
                },
            };
        },
        methods: {
            handleAdd() {
                this.$refs.crud.rowAdd();
            },
            handleEdit(row, index) {
                this.$refs.crud.rowEdit(row, index);
            },
        }
    }
</script>
<style></style>