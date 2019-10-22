import Layout from '@/page/index/'
export default [{
  path: '/wel',
  component: Layout,
  redirect: '/wel/index',
  children: [{
    path: 'index',
    name: '首页',
    meta: {
      i18n: 'dashboard'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/wel/index')
  },{
    path: '/tags',
    name: '数据统计',
    meta: {
      i18n: 'tags'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/util/statistics')
  }, {
    path: '/store',
    name: '数据查询',
    meta: {
      i18n: 'store'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/util/crud-form')
  },{
    path: 'dashboard',
    name: '控制台',
    meta: {
      i18n: 'dashboard',
      menu: false,
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/wel/dashboard')
  }]
}, {
  path: '/form-detail',
  component: Layout,
  children: [{
    path: 'index',
    name: '详情页',
    meta: {
      i18n: 'detail'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/util/form-detail'),
      children:[
        {
        path:'customer-details',
        name: '客户详细信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/basic/customer-details'),
      },{
        path:'house',
        name: '房产信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/basic/house'),
      },{
        path:'work-unit',
        name: '工作单位信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/basic/work-unit'),
      },{
        path:'borrower',
        name: '主贷人',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/credit/borrower'),
      },{
        path:'co-lenders',
        name: '共贷人',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/credit/co-lenders'),
      },{
        path:'bondsman',
        name: '担保人',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/credit/bondsman'),
      },{
        path:'detail',
        name: '共贷人详细信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/bondsman/co-lenders/detail'),
      },{
        path:'house-property',
        name: '共贷人房产信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/bondsman/co-lenders/house-property'),
      },{
        path:'unit',
        name: '共贷人单位信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/bondsman/co-lenders/unit'),
      },{
        path:'bondsman-detail',
        name: '担保人详细信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/bondsman/bondsman/bondsman-detail'),
      },{
        path:'bondsman-house',
        name: '担保人房产信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/bondsman/bondsman/bondsman-house'),
      },{
        path:'bondsman-unit',
        name: '担保人工作信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/bondsman/bondsman/bondsman-unit'),
      },{
        path:'emergency-contact',
        name: '紧急联系人',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/bondsman/bondsman/emergency-contact'),
      },{
        path:'vehicle-financing',
        name: '车辆融资信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/vehicle-financing'),
      },{
        path:'cost-detail',
        name: '费用详情',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/cost-detail'),
      },{
        path:'postloan-detail',
        name: '贷后详情',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/postloan-detail'),
      },{
        path:'accessory-information',
        name: '附件信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/demand/accessory-information'),
      },
    ]
  }]
}, {
  path: '/test',
  component: Layout,
  redirect: '/test/index',
  children: [{
    path: 'index',
    name: '测试页',
    meta: {
      i18n: 'test'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/util/test')
  }]
}, {
  path: '/info',
  component: Layout,
  redirect: '/info/index',
  children: [{
    path: 'index',
    name: '个人信息',
    meta: {
      i18n: 'info'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/info')
  }, {
    path: 'setting',
    name: '个人设置',
    meta: {
      i18n: 'setting'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/setting')
  }, {
    path: 'dialog',
    name: '导入弹窗',
    meta: {
      i18n: 'dialog'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/dialog')
  },{
    path: 'dictionaries',
    name: '字典管理',
    meta: {
      i18n: 'dictionaries'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/dictionaries')
  },{
    path: 'menu',
    name: '菜单管理',
    meta: {
      i18n: 'menu'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/menu')
  },{
    path: 'control',
    name: '用户管理',
    meta: {
      i18n: 'control'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/control')
  },{
    path: 'tenant',
    name: '租户管理',
    meta: {
      i18n: 'tenant'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/tenant')
  },{
    path: 'role',
    name: '角色管理',
    meta: {
      i18n: 'role'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/role')
  },
  {
    path: 'organization',
    name: '机构管理',
    meta: {
      i18n: 'organization'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/organization')
  },
  {
    path: 'notice',
    name: '公告管理',
    meta: {
      i18n: 'notice'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/notice')
  },
  {
    path: 'logs',
    name: '员工管理',
    meta: {
      i18n: 'logs'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/util/logs')
  },{
    path: 'permission',
    name: '系统配置',
    meta: {
      i18n: 'permission'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/util/permission')
  },{
    path: 'organizationalstructure',
    name: '组织架构',
    meta: {
      i18n: 'permission'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/util/organizationalstructure')
  },{
    path: 'member',
    name: '会员管理',
    meta: {
      i18n: 'member'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/util/member')
  }
]
}]