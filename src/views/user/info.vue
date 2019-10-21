<template>
  <div class="user-info">
    <el-row :span="24">
      <el-col :span="8">
        <basic-container>
          <div class="user-info__content">
            <img class="user-info__img" :src="form.img" alt="" />
            <p class="user-info__name">{{form.name}}</p>
            <router-link class="user-info__setting" :to="{path:'/info/setting'}">个人设置</router-link>
            <p class="user-info__desc">{{form.ms}}</p>
            <div class="user-info__detail-desc">
              <p><i class="el-icon-message"></i><span>{{form.yx}}</span></p>
              <p><i class="el-icon-postcard"></i><span>{{form.gs}} · {{form.bm}} · {{form.zw}}</span></p>
              <p><i class="el-icon-location-information"></i><span>{{form.dz}}</span></p>
            </div>
            <div class="user-info__divider"></div>
            <h4>标签</h4>
            <div class="user-info__tags">
              <el-tag effect="plain" v-for="(tag,index) in tags" :key="index">
                {{tag}}
              </el-tag>
            </div>
          </div>
        </basic-container>
      </el-col>
      <el-col :span="16">
        <basic-container>
          <avue-tabs :option="option" @change="handleChange"></avue-tabs>
          <span v-if="type.prop==='tab1'">
            <avue-form ref="form" v-model="form" :option="option1" @submit="handleSubmit">

            </avue-form>
          </span>
          <span v-else-if="type.prop==='tab2'">
            <avue-form :option="optionpwd" v-model="pwdform">
              <template slot-scope="scope" slot="menuForm">
                <el-button @click="updatapwd">自定义按钮</el-button>
              </template>

            </avue-form>
          </span>
          <span v-else-if="type.prop==='tab3'">选项卡内容3</span>
          <!-- <avue-tabs :option="option" v-model="form" @chang="handleChange" @submit="handleSubmit"></avue-tabs> -->
          <!-- <avue-tabs :option="option" v-model="form" @chang="handleChange" @submit="handleSubmit"></avue-tabs> -->
        </basic-container>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import option from "@/const/user/info";
  import { getUserInfo, updatamyinfo, updatemypwd } from '@/api/user'
  import { encryption } from '@/util/util'
  export default {
    data() {
      return {
        // type: "info",
        option1: {
          column: [
            {
              label: '头像',
              type: 'upload',
              listType: 'picture-img',
              propsHttp: {
                res: 'data.0'
              },
              canvasOption: {
                text: 'avue',
                ratio: 0.1
              },
              action: 'https://avueupload.91eic.com/upload/list',
              tip: '只能上传jpg/png用户头像，且不超过500kb',
              span: 16,
              prop: 'img'
            }, {
              label: '姓名',
              span: 12,
              prop: 'name'
            }, {
              label: '邮箱',
              row: true,
              span: 12,
              prop: 'yx'

            }, {
              label: '描述',
              type: 'textarea',
              span: 24,
              prop: 'ms'
            }, {
              label: '公司',
              prop: 'gs',
              span: 8,
            }, {
              label: '部门',
              span: 8,
              prop: 'bm'
            }, {
              label: '职位',
              span: 8,
              prop: 'zw'
            }, {
              label: '地址',
              span: 24,
              prop: 'dz'
            }, {
              label: '标签',
              span: 24,
              type: 'select',
              multiple: true,
              prop: 'bq',
              dicData: [{
                label: '善解人意',
                value: 1
              }, {
                label: '开朗乐观',
                value: 2
              }, {
                label: '真诚热情',
                value: 3
              }, {
                label: '心地善良',
                value: 4
              }, {
                label: '谦恭有礼',
                value: 5
              }, {
                label: '彬彬有礼',
                value: 6
              }]
            }
          ]
        },
        type: {},
        // info: [],
        id: '',
        uinfo: [],
        paws: {
          pwd: 1234567,
        },
        option: {
          column: [{
            label: '选项卡1',
            prop: 'tab1',
          }, {
            label: '选项卡2',
            prop: 'tab2',
          }]
        },
        optionpwd: {
          submitBtn: false,
          column: [
            //   {
            //   label:'原始密码',
            //   prop:'oldpassword',
            //   type:'password'
            // },{
            //   label:'新密码',
            //   prop:'newpassword',
            //   type:'password'
            // },{
            //   label:'确认密码',
            //   prop:'newpasswords',
            //   type:'password'
            // }
            {
              label: '原密码',
              span: 16,
              row: true,
              type: 'password',
              prop: 'oldpassword'
            }, {
              label: '新密码',
              span: 16,
              row: true,
              type: 'password',
              prop: 'newpassword'
            }, {
              label: '确认密码',
              span: 16,
              row: true,
              type: 'password',
              prop: 'newpasswords'
            }
          ]
        },
        tags: [
          ' 善解人意',
          '开朗乐观',
          '真诚热情',
          '心地善良',
          '谦恭有礼',
          '彬彬有礼',
          '虚怀若谷',
          '严于律己',
          '雍容大度',
          '热情洋溢',
          '从容自若',
          '诚挚',
          '温厚',
          '谦让',
          '勤恳',
          '耿直'
        ],
        form: {
          img: 'https://avatar.gitee.com/uploads/61/632261_smallweigit.jpg!avatar100?1518660401',
          username: "",
          name: "smallwei",
          ms: "保护头发，人人有责",
          yx: "1634566606@qq.com",
          gs: '某某公司',
          bm: '某某部门',
          zw: '前端开发工程师',
          dz: '内蒙古',
          bq: [1, 2, 3, 4],
          password: 12345,
          mobile: '',
          email: '',
          gender: '',
          birthday: '',
          avatar: ''
        },
        pwdform: {
          oldpassword: '123456',
          newpassword: '123456',
          newpasswords: '123456',
        }
      };
    },
    created() {
      this.type = this.option.column[0];

      this.info = this.$store.getters.userInfo
      // this.info.push(this.$store.getters.userInfo)
      // console.log(this.info)
      this.$store.dispatch("GetUserInfo").then((res) => {
        // console.log(res)
        this.form.name = res.data.data.username
        this.id = res.data.data.id
      })
      // this.getinfo(this.info.userId)
      // this.updatapwd()
    },
    methods: {
      handleSubmit() {
        console.log('点击了提交按钮')
        this.$message({
          message: this.form,
          type: "success"
        });
        this.updatamy()
      },
      // handleChange(item) {
      //   this.type = item.prop;
      // },
      // tab切换
      handleChange(column) {
        this.type = column
      },
      // 修改个人信息
      updatamy() {
        updatamyinfo(this.id, this.form.name, this.form.mobile, this.form.email, this.form.gender, this.form.birthday, this.form.avatar).then(res => {
          if(res.data.code===0){
            this.hint('修改','修改个人信息成功')
          }
        }).catch(error => {
          console.log(error)

        })
      },
      // 修改密码
      updatapwd() {
        console.log(this.pwdform)
        const password = {
          oldpassword: this.pwdform.oldpassword,
          newpassword: this.pwdform.newpassword,
          newpasswords: this.pwdform.newpasswords
        }
        const pwd = encryption({
          data: password,
          type: 'Aes',
          key: 'avue',
          param: ['oldpassword', 'newpassword', 'newpasswords']
        });
        updatemypwd(pwd.oldpassword, pwd.newpassword, pwd.newpasswords).then(res => {
          if (res.data.code === 0) {
            this.hint('修改','修改密码成功')
          }
        }).catch(error => {
          console.log(error)
        })
      },
      hint(title, value) {
        this.$notify.success({ title: title, message: value });
      },

    }
  };
</script>

<style lang="scss">
  .user-info {
    .avue-tabs {
      padding: 0 10px;
    }

    .el-tabs__content {
      padding: 20px 0;
    }

    &__img {
      display: block;
      margin: 0 auto;
      border-radius: 100%;
      width: 100px;
      height: 100px;
    }

    &__name {
      text-align: center;
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 0;
      margin-top: 10px;
    }

    &__setting {
      margin-bottom: 12px;
      display: block;
      font-size: 12px;
      color: #409eff;
      text-align: center;
    }

    &__desc {
      text-align: center;
      width: 200px;
      margin: 0 auto;
    }

    &__detail-desc {
      margin-top: 50px;
      font-size: 14px;

      p {
        margin-bottom: 10px;
      }

      span {
        margin-left: 10px;
      }
    }

    &__divider {
      border-top: 1px dashed #e8e8e8;
      display: block;
      height: 0;
      width: 100%;
      margin: 24px 0;
      clear: both;
    }

    &__tags {
      .el-tag {
        margin: 0 5px 5px 0;
      }
    }
  }
</style>