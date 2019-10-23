<template>
  <basic-container>
    <!-- <avue-form :option="option" v-model="form" @submit="handleSubmit">
      <template slot-scope="scope" slot="menuForm">
        <exceldialog class="upload" v-bind:title="show">
          <div class="el-message-box__title" slot="title">
            <span>导入</span>
          </div>
          <div style="margin:0 auto;" slot="upload">
            <el-upload 
            
            action=""
            :before-upload="beforeUpload"
            :show-file-list="false"
            :with-credentials="true"
             multiple>
              <el-tooltip class="item" effect="dark" content="请先下载模板在导入数据" placement="top-start">
                <el-button type="primary" icon="el-icon-plus" round>导入 excel</el-button>
              </el-tooltip>
            </el-upload>
          </div>
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
    </avue-form> -->
    <!-- 客户列表 -->
    <!-- <avue-crud :option="optiontable" :page="page" :data="data" @on-load="onLoad">
      <template slot="menu" slot-scope="scope">
        <el-button :size="scope.size" :type="scope.type" @click="handleForm">详情</el-button>
      </template>
    </avue-crud> -->
    <avue-crud :option="option" :data="data" @search-change="searchChange">
        <!-- <template slot="search">
          <el-col :md="6" :xs="24">
            <el-form-item label="自定义">
              <el-input placeholder="自定义搜索" size="small" v-model="searchForm.solt" />
            </el-form-item>
          </el-col>
        </template> -->
        <!-- <template slot="searchMenu">
          <el-button size="small">自定义按钮</el-button>
        </template> -->
        <template slot-scope="scope" slot="searchMenu">
            <exceldialog class="upload" v-bind:title="show">
              <div class="el-message-box__title" slot="title">
                <span>导入</span>
              </div>
              <div style="margin:0 auto;" slot="upload">
                <el-upload 
                action=""
                :before-upload="beforeUpload"
                :show-file-list="false"
                :with-credentials="true"
                 multiple>
                  <el-tooltip class="item" effect="dark" content="请先下载模板在导入数据" placement="top-start">
                    <el-button type="primary" icon="el-icon-plus"  size="small">导入 excel</el-button>
                  </el-tooltip>
                </el-upload>
              </div>
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
        <template slot="menu" slot-scope="scope">
            <el-button :size="scope.size" :type="scope.type" @click="handleForm">详情</el-button>
          </template>
      </avue-crud>
  </basic-container>
</template>

<script>
  import exceldialog from '../user/dialog'
  import { getinfo, getclientinfo, importexcel, addFile } from '@/api/user'

  export default {
    components: {
      exceldialog
    },
    data() {
      return {
        // list: [],
        searchForm:{},
        // clearble: false,
        assetId: 1,
        show: false,
        // limitUpload: 5,
        fileTemp: '',
        page: {
          total: 122,
        },
        data: [],
        option: {
          editBtn: false,
          delBtn: false,
          addBtn:false,
          menuWidth: 60,
          menuType: "text",
          menuBtnTitle: "详情",
          align: 'center',
          border: true,
          searchLabelWidth:150,
          searchShow:false,
          // labelWidth:120,
          column: [
            {
              label: "客户名称",
              prop: "name",
              search:true,
            },
            {
              label: "手机号",
              prop: "mobile",
              search:true,
            },
            {
              label: "身份证号",
              prop: "idNo",
              search:true,
            },
            {
              label: "贷款金额",
              prop: "loanamount",
              hide: true,
              search:true,
            },
            {
              label: "业务专员",
              prop: "businessspecialist",
              search:true,
            },
            {
              label: "所属组织",
              prop: "organisation",
              search:true,
            },
            {
              label: "业务类型",
              prop: "businesstype",
              search:true,
            }
          ]
        },

        // form: {},
        // list: [],
        // option: {
        //   labelWidth: 80,
        //   submitBtn: true,
        //   emptyBtn: true,
        //   clearable: this.clearble,
        //   submitText: '查询',
        //   column: [
        //     {
        //       label: "客户姓名",
        //       prop: "username",
        //       row: false,
        //       span: 8
        //     },
        //     {
        //       label: "身份证号",
        //       prop: "idnumber",
        //       row: false,
        //       span: 8
        //     },
        //     {
        //       label: "业务日期",
        //       prop: "date",
        //       type: "daterange",
        //       row: false,
        //       span: 8

        //     },
        //     {
        //       label: "手机号码",
        //       prop: "cell-phone",
        //       row: false,
        //       span: 8
        //     },
        //     {
        //       label: "业务专员",
        //       prop: "textarea",
        //       row: false,
        //       span: 8
        //     },
        //     {
        //       label: "所属组织",
        //       prop: "textarea",
        //       row: false,
        //       span: 8
        //     },
        //     {
        //       label: "业务类型",
        //       prop: "textareai",
        //       row: false,
        //       span: 8
        //     }
        //   ]
        // }
      };
    },
    created() {
      this.getclientinfo()
    },
    methods: {
      // 获取客户信息
      getclientinfo() {
        getinfo(this.assetId).then(res => {
          console.log(res)
          this.data=res.data.data.customers
          console.log(this.data)
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
      // 搜索
      searchChange(params) {
        this.$message.success('search callback' + JSON.stringify(Object.assign(params, this.searchForm)))
      },
      // 分页信息首次加载
      onLoad(page) {
        this.page = page
      },
      // 导入Excel
      beforeUpload(file){
        const formData = new FormData();
        formData.append('file', file, file.name);
        importexcel(formData).then(res => {
        }).catch(error => {
          console.log(error)
        })
      },
      // 下载模板
      handleGet() {
        // window.open('/cdn/demo.xlsx')
        window.open('../../demo.xlsx')
        // window.open('https://dev.qichenyun.com/dw/template/video001.mp4')
      },
      //超出最大上传文件数量时的处理方法
      handleExceed() {
        this.$message({
          type: 'warning',
          message: '超出最大上传文件数量的限制！'
        })
        return;
      },
      //移除文件的操作方法
      handleRemove(file, fileList) {
        this.fileTemp = null
      },
    }
  };
</script>

<style>
  .upload {
    display: inline-block;
    margin-left: 20px;
  }

  .el-upload {
    display: inline;
    text-align: center
  }
</style>