import Mock from 'mockjs'
const top = [{
  label: "首页",
  path: "/wel/index",
  icon: 'el-icon-document',
  meta: {
    i18n: 'dashboard',
  },
  parentId: 0
},
{
  label: "权限管理",
  path: "/authorityManage",
  icon: 'el-icon-document',
  meta: {
    i18n: 'dashboard',
  },
  parentId: 7
},
{
  label: "门店管理",
  icon: 'el-icon-document',
  path: "/storeManagement",
  meta: {
    i18n: 'storeManagement',
  },
  parentId: 3
},
{
  label: "员工管理",
  icon: 'el-icon-document',
  path: "/employeeManagement",
  meta: {
    i18n: 'employeeManagement',
  },
  parentId: 4 
},
{
  label: "客户管理",
  icon: 'el-icon-document',
  path: "/customerManagement",
  meta: {
    i18n: 'customerManagement',
  },
  parentId: 5
},{
  label: "预约管理",
  icon: 'el-icon-document',
  path: "/bookingManagement",
  meta: {
    i18n: 'bookingManagement',
  },
  parentId: 6
},{
  label: "评分规则",
  icon: 'el-icon-document',
  path: "/scoringRules",
  meta: {
    i18n: 'scoringRules',
  },
  parentId: 6
},
{
  label: "官网",
  icon: 'el-icon-document',
  meta: {
    i18n: 'website',
  },
  path: "https://avuex.avue.top",
  parentId: 1
},
{
  label: "测试",
  icon: 'el-icon-document',
  path: "/test/index",
  meta: {
    i18n: 'test',
  },
  parentId: 2
},
{
  label: "数据大屏",
  icon: 'el-icon-document',
  path: "http://data.avue.top",
  meta: {
    i18n: 'datascreen',
  },
  parentId: 3
}]

const menu = {
    "code": 0,
    "message": "SUCCESS",
    "data": [
        {
            "id": 1,
            "createdBy": 1,
            "createdTime": "2019-07-19 14:55:00",
            "remark": "",
            "disabledFlag": 0,
            "parentId": 0,
            "parentName": "",
            "permissionName": "系统管理",
            "permissionNo": "sys",
            "permissionType": 0,
            "permissionTypeDesc": "目录",
            "orderNum": "",
            "icon": "iconfont setting",
            "path": "",
            "children": [
                {
                    "id": 2,
                    "createdBy": 1,
                    "createdTime": "2019-07-19 14:56:55",
                    "remark": "",
                    "disabledFlag": 0,
                    "parentId": 1,
                    "parentName": "系统管理",
                    "permissionName": "用户管理",
                    "permissionNo": "sys_user",
                    "permissionType": 1,
                    "permissionTypeDesc": "菜单",
                    "orderNum": "",
                    "icon": "",
                    "path": "/staff",
                    "children": [{
                        "id": 3,
                        "createdBy": 1,
                        "createdTime": "2019-07-19 14:58:13",
                        "remark": "",
                        "disabledFlag": 0,
                        "parentId": 2,
                        "parentName": "用户管理",
                        "permissionName": "用户查询",
                        "permissionNo": "sys_user_search",
                        "permissionType": 2,
                        "permissionTypeDesc": "按钮",
                        "orderNum": "",
                        "icon": "",
                        "path": "",
                        "children": []
                    }, {
                        "id": 4,
                        "createdBy": 1,
                        "createdTime": "2019-07-19 14:58:51",
                        "remark": "",
                        "disabledFlag": 0,
                        "parentId": 2,
                        "parentName": "用户管理",
                        "permissionName": "用户查看",
                        "permissionNo": "sys_user_detail",
                        "permissionType": 2,
                        "permissionTypeDesc": "按钮",
                        "orderNum": "",
                        "icon": "",
                        "path": "",
                        "children": []
                    }, {
                        "id": 5,
                        "createdBy": 1,
                        "createdTime": "2019-07-19 14:59:02",
                        "remark": "",
                        "disabledFlag": 0,
                        "parentId": 2,
                        "parentName": "用户管理",
                        "permissionName": "用户编辑",
                        "permissionNo": "sys_user_edit",
                        "permissionType": 2,
                        "permissionTypeDesc": "按钮",
                        "orderNum": "",
                        "icon": "",
                        "path": "",
                        "children": []
                    }, {
                        "id": 6,
                        "createdBy": 1,
                        "createdTime": "2019-07-19 14:59:15",
                        "remark": "",
                        "disabledFlag": 0,
                        "parentId": 2,
                        "parentName": "用户管理",
                        "permissionName": "用户删除",
                        "permissionNo": "sys_user_del",
                        "permissionType": 2,
                        "permissionTypeDesc": "按钮",
                        "orderNum": "",
                        "icon": "",
                        "path": "",
                        "children": [{
                            "id": 7,
                            "createdBy": 1,
                            "createdTime": "2019-07-19 14:59:02",
                            "remark": "",
                            "disabledFlag": 0,
                            "parentId": 2,
                            "parentName": "用户管理",
                            "permissionName": "用户编辑",
                            "permissionNo": "sys_user_edit",
                            "permissionType": 2,
                            "permissionTypeDesc": "按钮",
                            "orderNum": "",
                            "icon": "",
                            "path": "",
                            "children": []
                        }]
                    }]
                }, {
                    "id": 8,
                    "createdBy": 1,
                    "createdTime": "2019-07-19 14:56:55",
                    "remark": "",
                    "disabledFlag": 0,
                    "parentId": 1,
                    "parentName": "系统管理",
                    "permissionName": "角色管理",
                    "permissionNo": "sys_role",
                    "permissionType": 1,
                    "permissionTypeDesc": "菜单",
                    "orderNum": "",
                    "icon": "",
                    "path": "/role",
                    "children":[]
                }, {
                    "id": 9,
                    "createdBy": 1,
                    "createdTime": "2019-07-19 14:56:55",
                    "remark": "",
                    "disabledFlag": 0,
                    "parentId": 1,
                    "parentName": "系统管理",
                    "permissionName": "机构管理",
                    "permissionNo": "sys_org",
                    "permissionType": 1,
                    "permissionTypeDesc": "菜单",
                    "orderNum": "",
                    "icon": "",
                    "path": "/org",
                    "children":[]
                }, {
                    "id": 10,
                    "createdBy": 1,
                    "createdTime": "2019-07-19 14:56:55",
                    "remark": "",
                    "disabledFlag": 0,
                    "parentId": 1,
                    "parentName": "系统管理",
                    "permissionName": "菜单管理",
                    "permissionNo": "sys_menu",
                    "permissionType": 1,
                    "permissionTypeDesc": "菜单",
                    "orderNum": "",
                    "icon": "",
                    "path": "/menu",
                    "children":[]
                }
            ]
        }, {
            "id": 11,
            "permissionName": "客户管理", // 必须字段 在菜单栏显示
            "permissionNo": "customer", // 必须字段 与本地 component 映射
            "permissionType": 1, // 必须字段 类型
            "permissionTypeDesc": "菜单",
            "orderNum": "",
            "icon": "iconfont people",
            "path": "/customer", // 菜单为必须 目录可为空
            "children": []
        }, {
            "id": 12,
            "permissionName": "小程序设置", // 必须字段 在菜单栏显示
            "permissionNo": "mini", // 必须字段 与本地 component 映射
            "permissionType": 1, // 必须字段 类型
            "permissionTypeDesc": "菜单",
            "orderNum": "",
            "icon": "iconfont link",
            "path": "/mini", // 菜单为必须 目录可为空
            "children": []
        },{
            "id": 13,
            "permissionName": "预约管理", // 必须字段 在菜单栏显示
            "permissionNo": "appointment", // 必须字段 与本地 component 映射
            "permissionType": 1, // 必须字段 类型
            "permissionTypeDesc": "菜单",
            "orderNum": "",
            "icon": "iconfont people",
            "path": "/appointment", // 菜单为必须 目录可为空
            "children": []
        },{
            "id": 14,
            "permissionName": "金融方案", // 必须字段 在菜单栏显示
            "permissionNo": "financial", // 必须字段 与本地 component 映射
            "permissionType": 1, // 必须字段 类型
            "permissionTypeDesc": "菜单",
            "orderNum": "",
            "icon": "iconfont people",
            "path": "/financial", // 菜单为必须 目录可为空
            "children": []
        },{
            "id": 15,
            "permissionName": "评分规则", // 必须字段 在菜单栏显示
            "permissionNo": "rule", // 必须字段 与本地 component 映射
            "permissionType": 1, // 必须字段 类型
            "permissionTypeDesc": "菜单",
            "orderNum": "",
            "icon": "iconfont people",
            "path": "/rule", // 菜单为必须 目录可为空
            "children": []
        },
    ],
    "path": "/cls/menu/tree",
    "timestamp": 1564469096082
}

export default ({ mock }) => {
  if (!mock) return;

  Mock.mock('/user/getTopMenu', 'post', () => {
    return {
      data: top
    }
  })
  Mock.mock('/menu/tree', 'post', menu)
}