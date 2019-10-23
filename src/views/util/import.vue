<template>
  <div>
    <!-- <el-upload class="upload-demo" action="" :on-change="handleChange" :on-remove="handleRemove"
      :on-exceed="handleExceed" :limit="limitUpload" accept="application/vnd.openxmlformats-    
        officedocument.spreadsheetml.sheet,application/vnd.ms-excel" :auto-upload="false">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload> -->

    <el-upload
   class='image-uploader'
   :multiple='false'
   :auto-upload='true'
   list-type='text'
   :show-file-list='true'
   :before-upload="beforeUpload"
   :drag='true'
   action='https://dev.qichenyun.com/dw/asset/import'
   :limit="1"
   :on-exceed="handleExceed"
   :http-request="uploadFile" >
   <i class="el-icon-upload"></i>
   <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
   <div class="el-upload__tip" slot="tip">一次只能上传一个文件，仅限text格式，单文件不超过1MB</div>
</el-upload>
  </div>
</template>
<script>
  import {importexcel} from '@/api/user'
  export default {
    data() {
      return {
        limitUpload:5,
      }
    },
    methods: {
      beforeUpload (file) {
        console.log(file)
      console.log('beforeUpload')
      console.log(file.type)
      const isText = file.type === 'application/vnd.ms-excel'
      const isTextComputer = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      return (isText | isTextComputer)
      
    },
    // 上传文件个数超过定义的数量
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除后继续上传`)
    },
    // 上传文件
    uploadFile (item) {
      console.log(item)
      const fileObj = item.file
      // FormData 对象
      const form = new FormData()
      // 文件对象
      form.append('file', file.name)
      // form.append('comId', this.comId)
      // console.log(JSON.stringify(form))
      // let formTwo = JSON.stringify(form)
      // EnterAPI.iExcel(form).then(response => {
      //   console.log('MediaAPI.upload')
      //   console.log(response)
      //   this.$message.info('文件：' + fileObj.name + '上传成功')
      // })
      importexcel(form).then(res => {
          console.log(res)
          this.$message.info('文件：' + fileObj.name + '上传成功')
        }).catch(error => {
          console.log(error)
        })
      }
    },
      //上传文件时处理方法  
      handleChange(file, fileList){
            this.fileTemp = file.raw;
            if(this.fileTemp){
                if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') 
                    || (this.fileTemp.type == 'application/vnd.ms-excel')){
                    this.importfxx(this.fileTemp);
                } else {
                    this.$message({
                        type:'warning',
                        message:'附件格式错误，请删除后重新上传！'
                    })
                }
            } else {
                this.$message({
                    type:'warning',
                    message:'请上传附件！'
                })
            }
        },
        //超出最大上传文件数量时的处理方法
        handleExceed(){
            this.$message({
                type:'warning',
                message:'超出最大上传文件数量的限制！'
            })
            return;
        },
        //移除文件的操作方法
        handleRemove(file,fileList){
            this.fileTemp = null
        },
        importfxx(obj) {
            let _this = this;
            let inputDOM = this.$refs.inputer;
            // 通过DOM取文件数据
 
            this.file = event.currentTarget.files[0];
 
            var rABS = false; //是否将文件读取为二进制字符串
            var f = this.file;
 
            var reader = new FileReader();
            //if (!FileReader.prototype.readAsBinaryString) {
            FileReader.prototype.readAsBinaryString = function(f) {
                var binary = "";
                var rABS = false; //是否将文件读取为二进制字符串
                var pt = this;
                var wb; //读取完成的数据
                var outdata;
                var reader = new FileReader();
                reader.onload = function(e) {
                    var bytes = new Uint8Array(reader.result);
                    var length = bytes.byteLength;
                    for (var i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    //如果没有在main.js中引入，则此处需要引入，用于解析excel
                    // var XLSX = require("xlsx");
                    if (rABS) {
                        wb = XLSX.read(btoa(fixdata(binary)), {
                        //手动转化
                        type: "base64"
                        });
                    } else {
                        wb = XLSX.read(binary, {
                        type: "binary"
                        });
                    }
                    // outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); 
                      outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
                    //outdata就是读取的数据（不包含标题行即表头，表头会作为对象的下标）
                    //此处可对数据进行处理
                    // let arr = [];
                    // outdata.map(v => {
                    //     let obj = {}
                    //     obj.code = v['Code']
                    //     obj.name = v['Name']
                    //     obj.pro = v['province']
                    //     obj.cit = v['city']
                    //     obj.dis = v['district']
                    //     arr.push(obj)
                    // });
                    // _this.da=arr;
                    // _this.dalen=arr.length;
                    // return arr;
                    console.log(outdata)
                    console.log(wb)
                };
                reader.readAsArrayBuffer(f);
            };
            if (rABS) {
                reader.readAsArrayBuffer(f);
            } else {
                reader.readAsBinaryString(f);
            }
        }
    // }
  }
</script>