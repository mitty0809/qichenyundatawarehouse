<template>
    <div class="fod">
      <div class="fod__Breadcrumb"></div>
      <div class="fod__bottom">
        <div class="fod__bottom-left">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" node-key="id"
          :default-expanded-keys="[1, 1]"  :default-checked-keys="[8]"></el-tree>
        </div>
        <div class="fod__bottom-right">
          <router-view></router-view>
        </div>
  
      </div>
  
    </div>
  
  </template>
  <script>
    export default {
      data() {
        return {
          data: [{
            id:1,
            label: '基本信息',
            children: [{
              id:8,
              label: '客户详细信息',
              path:'/form-detail/index/customer-details'
            },{
              id:9,
              label:'房产信息',
              path:'/form-detail/index/house'
            },{
              id:10,
              label:'工作单位信息',
              path:'/form-detail/index/work-unit'
            }]
          }, {
            id:2,
            label: '征信信息',
            children: [{
              label: '主贷人',
              path:'/form-detail/index/borrower'
            }, {
              label: '共贷人',
              path:'/form-detail/index/co-lenders'
            }, {
              label: '担保人',
              path:'/form-detail/index/bondsman'
            }]
          }, {
            id:3,
            label: '担保信息',
            children: [{
              label: '共贷人',
              children: [{
                label: '共贷人详细信息',
                path:'/form-detail/index/detail'
  
              },{
                label: '共贷人房产信息',
                path:'/form-detail/index/house-property'
              },{
                label: '共贷人工作单位信息',
                path:'/form-detail/index/unit'
              }]
            }, {
              label: '担保人',
              children: [{
                label: '担保人详细信息',
                path:'/form-detail/index/bondsman-detail'
              },{
                label: '担保人房产信息',
                path:'/form-detail/index/bondsman-house'
              },{
                label: '担保人工作单位信息',
                path:'/form-detail/index/bondsman-unit'
              },{
                label: '紧急联系人',
                path:'/form-detail/index/emergency-contact'
              }]
            }]
          },{
            id:4,
            label:'车辆融资信息',
            path:'/form-detail/index/vehicle-financing'
          },{
            id:5,
            label:'费用详情',
            path:'/form-detail/index/cost-detail'
          },{
            id:6,
            label:'贷后详情',
            path:'/form-detail/index/postloan-detail'
          },{
            id:7,
            label:'附件信息',
            path:'/form-detail/index/accessory-information'
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      methods: {
        // 点击树形节点的回调
        handleNodeClick(data) {
          // console.log(data.path);
          this.$router.push(data.path)
        }
      }
    };
  </script>
  <style scoped="scoped" lang="scss">
    .fod {
      &__Breadcrumb {
        width: 100%;
        height: 14px;
      }
  
      &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
  
        &-left {
          width: 15%;
          min-width:204px;

          height: 1040px;
        }
        &-right{
          width:85%;
          min-width:986px;
          height:1040px;
          background:white;
        }
      }
      .el-tree{
        background:transparent;
      }
      .is-current{
      color:blue !important;
    }
    }
    
    
  </style>