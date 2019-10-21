<template>
        <div>
            <avue-tabs :option="option1" @change="handleChange"></avue-tabs>
            <div v-if="type.prop==='tab1'">
                <avue-form :option="option" v-model="form" :upload-before="uploadBefore" :upload-after="uploadAfter"> </avue-form>
    
            </div>
            <div v-else="type.prop==='tab2'">
                <avue-form :option="option" v-model="form" :upload-before="uploadBefore" :upload-after="uploadAfter"> </avue-form>
    
            </div>
        </div>
    </template>
    <script>
        // import detail from './detail-information'
        export default {
            components: {
                // detail
            },
            data() {
                return {
                    type: {},
                    form: {
              imgUrl:[{ "label": "avue@226d5c1a_logo.png", "value": "https://avuejs.com/3_1.png" }],
              imgUrl3:'https://avuejs.com/3_1.png',
              string:'https://avuejs.com/3_1.png,https://avuejs.com/3_1.png',
              img:['https://avuejs.com/3_1.png','https://avuejs.com/3_1.png']
          },
          option: {
            labelWidth: 120,
            column: [
              
              {
                label: '数组图片组',
                prop: 'img',
                dataType: 'array',
                type: 'upload',
                propsHttp: {
                  res: 'data.0'
                },
                span: 24,
                listType: 'picture-card',
                tip: '只能上传jpg/png文件，且不超过500kb',
                // action: 'https://avueupload.91eic.com/upload/list'
              },
            //   {
            //     label: '字符串图片组',
            //     prop: 'string',
            //     dataType: 'string',
            //     type: 'upload',
            //     propsHttp: {
            //       res: 'data.0'
            //     },
            //     span: 24,
            //     listType: 'picture-card',
            //     tip: '只能上传jpg/png文件，且不超过500kb',
            //     action: 'https://avueupload.91eic.com/upload/list'
            //   },
            ]
          },
                    option1: {
                        column: [{
                            label: '附件',
                            prop: 'tab1',
                        }, {
                            label: '征信附件',
                            prop: 'tab2',
                        }]
                    },
                }
            },
            created() {
                this.type = this.option.column[0];
            },
            methods: {
                handleChange(column) {
                    this.type = column
                    console.log(column)
                    //   this.$message.success(JSON.stringify(column))
                },uploadBefore(file, done, loading) {
          console.log(file)
          done()
          this.$message.success('上传前的方法')
        },
        uploadAfter(res, done, loading) {
          console.log(res)
          done()
          this.$message.success('上传后的方法')
        },
        submit() {
          this.$message.success('当前数据' + JSON.stringify(this.form))
        }
            }
        }
    </script>
    <style>
    </style>