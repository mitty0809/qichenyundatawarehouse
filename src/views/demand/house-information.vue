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
                            label: '房产证类型',
                            prop: 'name'
                        }, {
                            label: '房屋所有权',
                            prop: 'sex'
                        },{
                            label: '房产面积',
                            prop: 'name'
                        },{
                            label: '是否有贷款',
                            prop: 'name'
                        },{
                            label: '每月还款额',
                            prop: 'name'
                        },{
                            label: '装修情况',
                            prop: 'name'
                        },{
                            label: '购房时间',
                            prop: 'name'
                        },{
                            label: '房产证户主数',
                            prop: 'name'
                        },{
                            label: '备注',
                            prop: 'name'
                        },{
                            label: '是否出租',
                            prop: 'name'
                        },{
                            label: '租金',
                            prop: 'name'
                        },
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