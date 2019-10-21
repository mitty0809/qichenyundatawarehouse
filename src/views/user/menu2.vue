<template>
        <div id="avue-view" style="height: 100%; overflow: hidden auto;">
            <!---->
            <div class="user-setting avue-view">
                <div class="basic-container" style="border-radius: 10px;">
                    <div class="el-card is-always-shadow">
                        <!---->
                        <div class="el-card__body">
                            <div class="filter-container">
                                <div class="el-button-group">
                                    <button type="button" class="el-button el-button--primary el-button--medium">
                                        <!----><i class="plus"></i>
                                        <span>添加
                                        </span></button><button type="button"
                                        class="el-button el-button--primary el-button--medium">
                                        <!----><i class="edit"></i><span>编辑
                                        </span></button><button type="button"
                                        class="el-button el-button--primary el-button--medium">
                                        <!----><i class="delete"></i><span>删除
                                        </span></button></div>
                            </div>
                            <div class="el-row">
                                <!-- 菜单树 -->
                                <div class="el-col el-col-8" style="margin-top: 15px;">
                                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                                </div>
                                <!-- 联动表单 -->
                                <div class="el-col el-col-16" style="margin-top: 15px;">
                                    <div class="el-card box-card is-always-shadow">
                                        <div class="el-card__body">
                                            <form class="el-form el-form--label-right">
                                                <div class="el-form-item el-form-item--medium"><label for="parentId"
                                                        class="el-form-item__label" style="width: 80px;">上级目录</label>
                                                    <div class="el-form-item__content" style="margin-left: 80px;">
                                                        <div class="el-input el-input--medium is-disabled">
                                                            <input type="text" disabled="disabled" autocomplete="off"
                                                                placeholder="请输入上级目录" class="el-input__inner">
                                                           
                                                        </div>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <!---->
                                                <div class="el-form-item is-required el-form-item--medium"><label for="name"
                                                        class="el-form-item__label" style="width: 80px;">标题</label>
                                                    <div class="el-form-item__content" style="margin-left: 80px;">
                                                        <div class="el-input el-input--medium">
                                                            <!----><input type="text" autocomplete="off"
                                                                placeholder="请输入标题" class="el-input__inner" v-model="val">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item is-required el-form-item--medium"><label for="type"
                                                        class="el-form-item__label" style="width: 80px;">类型</label>
                                                    <div class="el-form-item__content" style="margin-left: 80px;"><label
                                                            role="radio" aria-disabled="true" tabindex="-1"
                                                            class="el-radio is-disabled"><span
                                                                class="el-radio__input is-disabled"><span
                                                                    class="el-radio__inner"></span><input type="radio"
                                                                    aria-hidden="true" disabled="disabled" tabindex="-1"
                                                                    class="el-radio__original" value="0"></span><span
                                                                class="el-radio__label">菜单
                                                                <!----></span></label><label role="radio"
                                                            aria-disabled="true" tabindex="-1"
                                                            class="el-radio is-disabled"><span
                                                                class="el-radio__input is-disabled"><span
                                                                    class="el-radio__inner"></span><input type="radio"
                                                                    aria-hidden="true" disabled="disabled" tabindex="-1"
                                                                    class="el-radio__original" value="1"></span><span
                                                                class="el-radio__label">按钮
                                                                <!----></span></label>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!---->
                                            </form>
    
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <script>
        import { getMenutree } from '@/api/user'
        const DIC = {
            VAILD: [{
                label: '真',
                value: 'true'
            }, {
                label: '假',
                value: 'false'
            }],
            SEX: [{
                label: '男',
                value: 0
            }, {
                label: '女',
                value: 1
            }]
        }
        export default {
            data() {
                return {
                    data: [
    
                        {
                            "id": 1,
                            "createdBy": 0,
                            "createdTime": "2019-09-18 11:35:23",
                            "updatedBy": "",
                            "updatedTime": "",
                            "remark": "",
                            "disabledFlag": false,
                            "parentId": 0,
                            "label": "系统管理",
                            "menuType": 10,
                            "permission": "",
                            "path": "",
                            "icon": "",
                            "component": "",
                            "seq": "",
                            "keepAlive": "",
                            "children": [
                                {
                                    "id": 2,
                                    "createdBy": 0,
                                    "createdTime": "2019-09-18 11:38:10",
                                    "updatedBy": "",
                                    "updatedTime": "",
                                    "remark": "",
                                    "disabledFlag": false,
                                    "parentId": 1,
                                    "label": "用户管理",
                                    "menuType": 20,
                                    "permission": "",
                                    "path": "/user",
                                    "icon": "",
                                    "component": "User",
                                    "seq": "",
                                    "keepAlive": "",
                                    "children": [
                                        {
                                            "id": 3,
                                            "createdBy": 0,
                                            "createdTime": "2019-09-18 14:21:16",
                                            "updatedBy": "",
                                            "updatedTime": "",
                                            "remark": "",
                                            "disabledFlag": false,
                                            "parentId": 2,
                                            "label": "用户新增",
                                            "menuType": 30,
                                            "permission": "sys_user_add",
                                            "path": "",
                                            "icon": "",
                                            "component": "",
                                            "seq": 10,
                                            "keepAlive": "",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 4,
                            "createdBy": 0,
                            "createdTime": "2019-09-26 10:12:12",
                            "updatedBy": "",
                            "updatedTime": "",
                            "remark": "",
                            "disabledFlag": false,
                            "parentId": 0,
                            "label": "系统管理",
                            "menuType": 10,
                            "permission": "",
                            "path": "",
                            "icon": "",
                            "component": "",
                            "seq": 10,
                            "keepAlive": "",
                            "children": []
                        },
                        {
                            "id": 5,
                            "createdBy": 0,
                            "createdTime": "2019-10-09 18:39:31",
                            "updatedBy": "",
                            "updatedTime": "",
                            "remark": "",
                            "disabledFlag": false,
                            "parentId": 0,
                            "label": "系统管理",
                            "menuType": 10,
                            "permission": "",
                            "path": "",
                            "icon": "",
                            "component": "",
                            "seq": 10,
                            "keepAlive": "",
                            "children": []
                        }
    
                    ],
                    defaultProps: {
                        children: 'children',
                        label: 'label'
                    },
                    val:'',
                    form: {
                        text: '上级目录'
                    },
                    option: {
                        labelWidth: 120,
                        emptyBtn: false,
                        submitBtn: false,
                        column: [{
                            label: '上级目录',
                            prop: 'text',
                            formslot: true
                        }, {
                            label: '标题',
                            prop: 'text',
                            formslot: true
                        }]
                    }
    
                };
            },
    
            created() {
                getMenutree().then(res => {
                    // this.data = res.data.data
                    // console.log(res.data.data)
                }).catch(error => {
                    console.log(error)
                })
            },
            methods: {
                handleNodeClick(data) {
                    console.log(data);
                    this.val=data.label
                },
    
    
            }
        };
    </script>
    <style>
        @media only screen and (min-width: 992px) {
            .el-col-md-12 {
                width: 100%;
            }
        }
    </style>