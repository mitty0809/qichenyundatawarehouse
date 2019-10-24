<template>
    <basic-container>
        <avue-form :option="option" v-model="form">
            <template slot-scope="scope" slot="menuForm">
                <el-button @click="tip">自定义按钮</el-button>
            </template>
        </avue-form>
    </basic-container>
    <!-- <el-form ref="form" :model="form" label-width="80px" :inline="true">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
        </el-form-item>
    </el-form> -->
</template>
<script>
    import VueEvent from '../../../bus.js'
    import { getinfo } from '@/api/user'
    import { mapGetters, mapState } from "vuex";
    var DIC = {
        VAILD: [{
            label: '自用',
            value: '10'
        }, {
            label: '商用',
            value: '20'
        }, {
            label: '代购',
            value: '30'
        }, {
            label: '其他',
            value: '99'
        }],
        SEX: [{
            label: '男',
            value: 0
        }, {
            label: '女',
            value: 1
        }],
        SEX2: [{
            label: '有',
            value: true
        }, {
            label: '无',
            value: false
        }]
    }
    export default {
        // data() {
        //     return {
        //         form: {
        //             name: '',
        //             region: '',
        //             date1: '',
        //             date2: '',
        //             delivery: false,
        //             type: [],
        //             resource: '',
        //             desc: ''
        //         }
        //     }
        // },
        data() {
            return {
                page: {
                    total: 122
                },
                form: {},
                baseInfo: {},
                assetId: 1,
                option: {
                    labelWidth: 100,
                    span: 8,
                    column: [
                        // 字段名未校对
                        {
                            label: "单据编码",
                            prop: "serialNo",
                            row: false,
                            span: 8,
                        },
                        // 字段名未校对
                        {
                            label: "业务日期",
                            prop: "date",
                            type: 'date',
                            row: false,
                            span: 8
                        },
                        {
                            label: "业务类型",
                            prop: "bizType",
                            type: "select",
                            span: 8,
                            dicData: [{
                                label: '卡分期',
                                value: 10
                            }, {
                                label: '直租',
                                value: 20
                            }, {
                                label: '回租',
                                value: 10
                            }, {
                                label: '车抵押',
                                value: 40
                            },]
                        },
                        {
                            label: "经销商",
                            prop: "dealer",
                            row: false,
                            span: 8
                        },
                        // 字段名未校对
                        {
                            label: "业务部门",
                            prop: "type",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "业务员",
                            prop: "salesman",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "业务员电话",
                            prop: "salemanMobile",
                            type: 'phone',
                            row: false,
                            span: 8
                        },
                        {
                            label: "资金来源",
                            prop: "capitalSource",
                            row: false,
                            span: 8,
                            type: 'select',
                            dicData: [
                                {
                                    label: '自有',
                                    value: 10
                                }, {
                                    label: '银行',
                                    value: 20
                                }, {
                                    label: '其他',
                                    // disabled: true,
                                    value: 99
                                }
                            ]
                        },
                        {
                            label: "客户姓名",
                            prop: "name",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "证件类型",
                            prop: "idType",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "身份证号码",
                            prop: "idNo",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "证件有效期",
                            prop: "idEndDate",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "身份证归属地",
                            prop: "idPlace",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "手机号码",
                            prop: "mobile",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "手机号归属地",
                            prop: "mobilePlace",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "备用手机号",
                            prop: "secondMobile",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "婚姻状况",
                            prop: "marriageStatus",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        // 字段名未校对
                        {
                            label: "年龄",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        // 字段名未校对
                        {
                            label: "民族",
                            prop: "textareai",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "户籍",
                            prop: "householdType",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "学历",
                            prop: "education",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "驾驶证",
                            prop: "driverLicense",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "宅电",
                            prop: "tel",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "购车目的",
                            prop: "purpose",
                            type: "select",
                            span: 8,
                            dicData: DIC.VAILD
                        },
                        {
                            label: "现居省份",
                            prop: "residenceProvinceNo",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "现居城市",
                            prop: "residenceCityNo",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "现居地址",
                            prop: "residenceAddr",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "电子邮件",
                            prop: "email",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "户籍省份",
                            prop: "householdProvinceNo",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "户籍城市",
                            prop: "householdCityNo",
                            // type: "select",
                            span: 8,
                            // dicData: DIC.VAILD
                        },
                        {
                            label: "户籍地址",
                            prop: "householdAddr",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "QQ号",
                            prop: "qq",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "家庭月收入",
                            prop: "familyMonthIncome",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "家庭月支出",
                            prop: "familyMonthExpenses",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "主要收入来源",
                            prop: "incomeSource",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "其它收入来源",
                            prop: "secondIncomeSource",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "社保",
                            prop: "socialSecurity",
                            row: false,
                            type: 'radio',
                            span: 8,
                            formHeight: 40,
                            dicData: DIC.SEX2,
                        },
                        {
                            label: "开户行",
                            prop: "bank",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "账号",
                            prop: "bankCardAccountName",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                        {
                            label: "抚养/赡养人数",
                            prop: "familyMembers",
                            row: false,
                            span: 8,
                            formHeight: 40
                        },
                    ]
                }
            };
        },
        created() {
            console.log(this.client)
            this.form = this.client.customers[0]
            this.baseInfo = this.client.baseInfo
            this.form.serialNo=this.baseInfo.serialNo
            this.$set(this.form, 'bizType', this.baseInfo.bizType)
            this.$set(this.form, 'dealer', this.baseInfo.dealer)
            this.$set(this.form, 'salesman', this.baseInfo.salesman)
            this.$set(this.form, 'salemanMobile', this.baseInfo.salemanMobile)
            this.$set(this.form, 'capitalSource', this.baseInfo.capitalSource)
        },
        mounted() {
        },
        computed: {
            ...mapState({
                client: state => state.user.client
            }),
        },
        methods: {
            handleForm() {
                this.$router.push({
                    path: "/form-detail/index",
                });
            },
            tip() {
                console.log('点击了自定义按钮')
            },

        }
    };
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
        font-size: 13px !important;
    }
</style>