<template>
    
        <basic-container class="container">
          <!-- <template v-slot:header>菜单管理</template> -->
          <div>
              <div class="body">
                <!-- 第一行 -->
                <el-row>
                  <!-- 操作按钮组 -->
                  <!-- <div>操作按钮组</div> -->
                  <el-col :span="24" class="search">
                      <el-button-group>
                          <el-button type="primary"  @click.native="addNodeDialog = true">新增</el-button>
                          <el-button type="primary"  @click="nodeDelete">删除</el-button>
                      </el-button-group>
                  </el-col>
                </el-row>
      
                <!-- 第二行 -->
                <el-row>
                  <!-- 树 -->
                  <el-col :span="6">
                      <div class="left-tree"  :style="{height:heightData}">
                          <el-tree
                          :data="menu"
                          :props="defaultProps"
                          accordion
                          @node-click="handleNodeClick"></el-tree>
                      </div>
                  </el-col>
      
                  <!-- 表单 -->
                  <el-col :span="18">
                    <el-form   
                      label-width="120px"
                      :model="selectedNode"
                      :rules="rules"
                      ref="saveNodeForm">
                      <el-form-item label="父节点ID"><el-input v-model="selectedNode.parentId" size="medium" :disabled="true"></el-input></el-form-item>
                      <el-form-item label="父节点名称"><el-input v-model="selectedNode.parentName" size="medium" :disabled="true"></el-input></el-form-item>
                      <el-form-item label="节点ID"><el-input v-model="selectedNode.id" size="medium" :disabled="true"></el-input></el-form-item>
                      <el-form-item label="节点权限映射"><el-input v-model="selectedNode.permission" size="medium" :disabled="true"></el-input></el-form-item>
                      <el-form-item label="节点路径"><el-input v-model="selectedNode.path" size="medium" :disabled="true"></el-input></el-form-item>
                      <el-form-item label="节点名称" prop="name"><el-input v-model="selectedNode.name" size="medium"></el-input></el-form-item>
                      <!-- <el-form-item label="节点图标">
                        <el-select v-model="selectedNode.icon">
                          <el-option v-for="(item, index) in icon.icon" :key="index" :value="item.value">
                            <span :class="item.value"></span>
                            <span>{{item.value}}</span>
                          </el-option>
                        </el-select>
                      </el-form-item> -->
                      <el-form-item label="节点类型">
                        <el-radio disabled v-model="selectedNode.menuType" :label=10>目录</el-radio>
                        <el-radio disabled v-model="selectedNode.menuType" :label=20>菜单</el-radio>
                        <el-radio disabled v-model="selectedNode.menuType" :label=30>操作</el-radio>
                      </el-form-item>
                      <el-form-item><el-button type="primary" @click="nodeSave">保存</el-button></el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </div>
      
              <el-dialog title="新增节点" :visible.sync="addNodeDialog">
                <el-form label-width="120px" ref="addNodeForm" :model="addNode" :rules="rules">
                  <el-form-item label="父节点ID">
                    <el-input v-model="addNode.parentId" size="medium" :disabled="true"></el-input>
                  </el-form-item>
                  <el-form-item label="父节点名称">
                    <el-cascader
                      v-model="addNode.parentId"
                      size="medium"
                      :options="cascaderMenu"
                      :props="defaultProps"
                      :show-all-levels="false">
                    </el-cascader>
                  </el-form-item>
                  <el-form-item label="节点权限映射" prop="permissionNo">
                    <el-input v-model="addNode.permissionNo" size="medium"></el-input>          
                  </el-form-item>
                  <el-form-item label="节点路径">
                    <el-input v-model="addNode.path" size="medium"></el-input>
                  </el-form-item>
                  <el-form-item label="节点名称" prop="permissionName">
                    <el-input v-model="addNode.permissionName" size="medium"></el-input>
                  </el-form-item>
                    <!-- <el-form-item label="节点图标">
                      <el-select v-model="addNode.icon">
                        <el-option v-for="(item, index) in icon.icon" :key="index" :value="item.value">
                          <span :class="item.value"></span>
                          <span>{{item.value}}</span>
                        </el-option>
                      </el-select>
                    </el-form-item> -->
                  <el-form-item label="节点类型" prop="permissionType">
                    <el-radio v-model="addNode.permissionType" :label=0>目录</el-radio>
                    <el-radio v-model="addNode.permissionType" :label=1>菜单</el-radio>
                    <el-radio v-model="addNode.permissionType" :label=2>操作</el-radio>
                  </el-form-item>
                </el-form>
                <div slot="footer">
                  <el-button @click="addNodeDialog = false">取 消</el-button>
                  <el-button type="primary" @click="nodeAdd">确 定</el-button>
                </div>
              </el-dialog>
            </div>
        </basic-container>
      </template>
      
      <script>
      import { mapGetters, mapState } from "vuex";
      import { deepClone } from '@/util/util';
      import { deleteMenuNode, saveMenuNode, addMenuNode } from '@/api/menu';
      export default {
        computed: {
          ...mapGetters(['menu']),
          ...mapState(['icon']),
          cascaderMenu() {
            let cmenu = deepClone(this.menu);
            cmenu.forEach((item) => {
              this.cascaderMenuRe(item);
            });
            return cmenu;
          }
        },
        data() {
          return {
            heightData:'',
            defaultProps: {
              children: 'children',
              label: 'name',
              value: 'id',
              checkStrictly: true,
              emitPath: false
            },
            selectedNode: {},
            addNode: {
              parentId: "",
              name: "",
              permissionNo: "",
              menuType: "",
              path: "",
              orderNum: "",
              remark: "",
              icon: ""
            },
            rules: {
              parentId: [
                { required: true, message: '请选择父节点', trigger: 'change' }
              ],
              permissionNo: [
                { required: true, message: '请填写节点映射', trigger: 'change' }
              ],
              path: [
                { required: true, message: '请填写节点路径', trigger: 'change' }
              ],
              name: [
                { required: true, message: '请填写节点名称', trigger: 'change' }
              ],
              permissionType: [
                { required: true, message: '请选择节点类型', trigger: 'change' }
              ]
            },
            addNodeDialog: false,
          }
        },
         mounted() {
            // this.getHeight()
            console.log(this.menu)
            window.onresize = () => {
            return (() => {
              this.getHeight()
            })()
          }
        },
        methods: {
          getHeight() {
            this.heightData = document.body.clientHeight -250+'px';
            },
          handleNodeClick(data) {
              console.log(data)
            this.$set(this, 'selectedNode', deepClone(data));
          },
          nodeDelete() {
            if(!this.selectedNode.id) {
              this.$notify.error({ title: '删除失败', message: '请选择一个节点。' });
              return false;
            }
            this.$confirm('确认删除该节点？', '提示', {
              confirmButtonText: '确认',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              deleteMenuNode({
                id: this.selectedNode.id
              }).then((res) => {
                if(res.data.code === 0) {
                  this.$notify.success({ title: '删除成功', message: '该节点已被删除。' });
                  this.$store.dispatch('GetMenu').then();
                }
              })
              
            })
          },
          nodeSave() {
            let that = this;
            this.$refs.saveNodeForm.validate((val) => {
                console.log(val)
              if(val) {
                saveMenuNode(that.selectedNode).then((res) => {
                  if(res.data.code === 0) {
                    that.$notify.success({ title: '保存成功', message: '该节点信息已被修改。' });
                    that.$store.dispatch('GetMenu').then();
                  }
                }).catch(() => {
                  that.$notify.error({ title: '保存失败', message: '网络错误。' });
                })
              }
            })
          },
          nodeAdd() {
            this.$refs.addNodeForm.validate((val) => {
              if(val) {
                addMenuNode(this.addNode).then((res) => {
                  if(res.data.code === 0) {
                    this.$notify.success({ title: '新增成功', message: '新增节点成功。' });
                    this.$store.dispatch('GetMenu').then();
                    this.addNodeDialog = false;
                    this.$set(this, 'addNode', {
                      parentId: "",
                      permissionName: "",
                      permissionNo: "",
                      permissionType: "",
                      path: "",
                      orderNum: "",
                      remark: "",
                      icon: ""
                    })
                  }
                }).catch(() => {
                  this.$notify.error({ title: '新增失败', message: '网络错误。' });
                });
              }
            })
      
          },
          cascaderMenuRe(item) {
            if(item.permissionType === 2) {
              item.disabled = true;
            } else {
              item.disabled = false;
            }
            if(item.children.length === 0) {
              delete item.children
            } else {
              item.children.forEach((item) => {
                this.cascaderMenuRe(item);
              });
            }
          }
        }
      }
      </script>
      <style lang="scss" scoped>
      .container {
        height: 100%;
      }
      .body {
        width: 100%;
      }
      .left-tree {
          width: 100%;
          padding-right: 15px;
          overflow: auto;
      }

      .el-dialog__wrapper{
          z-index:2013 !important;
      }
      </style>
      