<template>
  <basic-container>
    <avue-form :option="option" v-model="form" @submit="handleSubmit">
      <template slot-scope="scope" slot="menuForm">
        <!-- <el-button @click="tip">自定义按钮</el-button> -->
        <!-- <el-button @click="tip">自定义按钮</el-button> -->
        <exceldialog class="upload" v-bind:title="show">
          <div class="el-message-box__title" slot="title">
            <span>导入</span>
          </div>
          <!-- 导入Excel -->
          <div style="margin:0 auto;" slot="upload">
            <el-upload :show-file-list="false" action="action" :on-change="handleChange">
              <!-- <el-button type="primary" icon="el-icon-plus" round>导入 excel</el-button> -->
              <el-tooltip class="item" effect="dark" content="请先下载模板在导入数据" placement="top-start">
                  <el-button type="primary" icon="el-icon-plus" round>导入 excel</el-button>
              </el-tooltip>
            </el-upload>
          </div>
          <!-- 下载模板 -->
          <div style="margin:0 auto;text-align:center;display:flex" slot="download">
            <div style="width:50%" class="download" @click="handleGet">
              <i class="icon-xiazaimoban1"></i><span style="cursor:pointer;margin-left:8px;">下载模板</span>
            </div>
            <div style="width:50%" class="download" @click="handleGet">
              <i class="icon-xiazai2"></i><span style="cursor:pointer;margin-left:8px;">下载模板</span>
            </div>
          </div>
        </exceldialog>
      </template>
    </avue-form>
    <!-- 客户列表 -->
    <avue-crud :option="optiontable" :page="page" :data="list" @on-load="onLoad">
      <template slot="menu" slot-scope="scope">
        <el-button :size="scope.size" :type="scope.type" @click="handleForm">详情</el-button>
      </template>
    </avue-crud>
    <!-- <avue-crud :option="option2" :data="list">
    </avue-crud> -->
  </basic-container>
</template>

<script>
  import exceldialog from '../user/dialog'
  import {getinfo,getclientinfo} from '@/api/user'

  export default {
    components: {
      exceldialog
    },
    data() {
      return {
        // list: [],
        clearble: false,
        assetId:1,
        show: false,
        // option2: {
        //             column: [{
        //                 label: 'id',
        //                 prop: 'id'
        //             }, {
        //                 label: '姓名',
        //                 prop: 'name'
        //             }, {
        //                 label: '年龄',
        //                 prop: 'sex'
        //             }]
        //         },
        page: {
          total: 122,
        },
        data: [
          // {
          //   username: "张三",
          //   cellphone: "17230129549",
          //   idnumber: "412829199808092345",
          //   loanamount: '90.00',
          //   businessspecialist: "嘻嘻",
          //   businesstype: "直租",
          //   organisation: "业务一部"
          // }, {
          //   username: "李四",
          //   cellphone: "17230129549",
          //   idnumber: "412829199808092345",
          //   loanamount: '90.00',
          //   businessspecialist: "嘻嘻",
          //   businesstype: "直租",
          //   organisation: "业务二部"
          // }
        ],
        optiontable: {
          selection: true,
          columnBtn: false,
          editBtn: false,
          delBtn: false,
          header: false,
          menuWidth: 60,
          menuType: "text",
          menuBtnTitle: "详情",
          align: 'center',
          border: true,
          pageSize: 10,
          column: [
            {
              label: "客户名称",
              prop: "usedname",
            },
            {
              label: "客户手机号",
              prop: "cellphone",
            },
            {
              label: "身份证号",
              prop: "idnumber",
              width: 160,
            },
            {
              label: "贷款金额",
              prop: "loanamount",
              hide: true,
            },
            {
              label: "业务专员",
              prop: "businessspecialist",
            },
            {
              label: "所属组织",
              prop: "organisation",
            }, 
            {
              label: "业务类型",
              prop: "businesstype",
            }
          ]
        },

        form: {},
        list:[],
        option: {
          labelWidth: 80,
          submitBtn: true,//控制提交按钮是否显示
          emptyBtn: true,
          // clearable:false,
          clearable:this.clearble,
          submitText:'查询',
          column: [
            {
              label: "客户姓名",
              prop: "username",
              row: false,
              span: 8
            },
            {
              label: "身份证号",
              prop: "idnumber",
              row: false,
              span: 8
            },
            {
              label: "业务日期",
              prop: "date",
              type: "daterange",
              row: false,
              span: 8

            },
            {
              label: "手机号码",
              prop: "cell-phone",
              row: false,
              span: 8
            },
            {
              label: "业务专员",
              prop: "textarea",
              row: false,
              span: 8
            },
            {
              label: "所属组织",
              prop: "textarea",
              row: false,
              span: 8
            },
            {
              label: "业务类型",
              prop: "textareai",
              row: false,
              span: 8
            }
          ]
        }
      };
    },
    created() {
     this.getclientinfo()
    },
    methods: {
      // 获取客户信息
      getclientinfo(){
        getinfo(this.assetId).then(res => {
          console.log(res)
        }).catch(error => {
          console.log(error)
        })
      },
      // 点击详情查询对应信息
      handleForm() {
        this.$router.push({
          path: "/form-detail/index/customer-details",
        });
      },
      // 表单清空回调
      emptytChange() {
        // this.$message.success('清空方法回调');
        console.log('清空表单回调')
      },
      // 表单查询提交回调
      handleSubmit(form, done) {
        console.log(form)
        // this.$message.success('当前数据' + JSON.stringify(this.form));
        // console.log('点击查询按钮')
        done()
      },
      // 分页信息首次加载
      onLoad(page) {
        this.page=page
        // 获取客户全部信息
        this.getclientinfo()
        // console.log(this.list)
      },
      // 导入Excel
      handleChange(file, fileLis) {
        this.$export.xlsx(file.raw)
          .then(data => {
            console.log(data)
            this.data = data.results;
          })
      },
      // 下载模板
      handleGet() {
        // window.open('/cdn/demo.xlsx')
        window.open('../../demo.xlsx')
        console.log('下载地址')
      },
    }
  };
</script>

<style>
  .upload {
    display: inline-block;
    margin-left: 20px;
  }
</style>