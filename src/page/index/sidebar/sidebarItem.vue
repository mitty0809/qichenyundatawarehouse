<template>
  <div class="menu-wrapper">
    <!-- <template v-for="item in menu">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        text-color="#fff" >
        <el-menu-item index="item.parentId" v-if='item.menuType==10'>{{item.name}}</el-menu-item>
        </el-menu>
    </template> -->
    <template  v-for="item in menu">
      <el-menu-item :index="item.path" v-if='item.children.length==0' @click="open(item)" :key="item.name"
        :class="{'is-active':vaildAvtive(item)}">
        <i :class="item.icon"></i>
        <span slot="title" :alt="item.path">{{item.name}}</span>
      </el-menu-item>
      <el-submenu v-else-if='item.children.length!=0' :index="item.path"
      :key="item.name">
        <template slot="title">
          <i class="icon-guanli"></i>
          <span slot="title"
                :class="{'el-menu--display':collapse && first}">{{item.name}}</span>
        </template>
        <template v-for="child in item.children">
          <el-menu-item :index="child.path"
          @click="open(child)"
          :class="{'is-active':vaildAvtive(child)}"
          v-if="child.children.length==0"
          :key="child.name"><i :class="child.icon"></i>
          <span slot="title">{{child.name}}</span></el-menu-item>
        </template>

      </el-submenu>
    </template>
    <!-- <template>
      <el-menu-item v-if="validatenull(item[childrenKey]) && vaildRoles(item)" :index="item.path" @click="open(item)"
        :key="item.name" :class="{'is-active':vaildAvtive(item)}">
        <i :class="item.icon"></i>
        <span slot="title" :alt="item.path">{{item.name}}</span>
      </el-menu-item>
      <el-submenu v-else-if="!validatenull(item[childrenKey])&&vaildRoles(item)" :index="item[pathKey]"
        :key="item[labelKey]">
        <template slot="title">
          <i :class="item[iconKey]"></i>
          <span slot="title" :class="{'el-menu--display':collapse && first}">{{item.name}}</span>
        </template>
        <template v-for="(child,cindex) in item[childrenKey]">
          <el-menu-item :index="child[pathKey],cindex" @click="open(child)" :class="{'is-active':vaildAvtive(child)}"
            v-if="validatenull(child[childrenKey])" :key="child[labelKey]">
            <i :class="child[iconKey]"></i>
            <span slot="title">{{generateTitle(child)}}</span>
          </el-menu-item>
          <sidebar-item v-else :menu="[child]" :key="cindex" :props="props" :screen="screen" :collapse="collapse">
          </sidebar-item>
        </template>
      </el-submenu>
    </template> -->
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  import { validatenull } from "@/util/validate";
  import config from "./config.js";
  export default {
    name: "sidebarItem",
    data() {
      return {
        config: config,
        list: []
      };
    },
    //props接收父元素传递过来的数据
    props: {
      menu: {
        type: Array
      },
      first2: {
        type: Array
      },
      screen: {
        type: Number
      },
      first: {
        type: Boolean,
        default: false
      },
      props: {
        type: Object,
        default: () => {
          return {};
        }
      },
      collapse: {
        type: Boolean
      }
    },
    created() {

      // console.log(this.menu)
    },
    mounted() { },
    computed: {
      ...mapGetters(["roles"]),
      labelKey() {
        return this.props.label || this.config.propsDefault.label;
      },
      pathKey() {
        return this.props.path || this.config.propsDefault.path;
      },
      iconKey() {
        return this.props.icon || this.config.propsDefault.icon;
      },
      childrenKey() {
        return this.props.children || this.config.propsDefault.children;
      },
      nowTagValue() {
        return this.$router.$avueRouter.getValue(this.$route);
      }
    },
    methods: {
      generateTitle(item) {
        // console.log(item)左侧菜单详细信息
        return this.$router.$avueRouter.generateTitle(
          item[this.labelKey],
          (item.meta || {}).i18n
        );
      },
      vaildAvtive(item) {

        const groupFlag = (item["group"] || []).some(ele =>
          this.$route.path.includes(ele)
        );
        return this.nowTagValue === item[this.pathKey] || groupFlag;
      },
      vaildRoles(item) {
        // console.log(item)
        item.meta = item.meta || {};
        return item.meta.roles ? item.meta.roles.includes(this.roles) : true;
      },
      validatenull(val) {
        return validatenull(val);
      },
      open(item) {
        if (this.screen <= 1) this.$store.commit("SET_COLLAPSE");
        this.$router.$avueRouter.group = item.group;
        this.$router.$avueRouter.meta = item.meta;
        this.$router.push({
          path: this.$router.$avueRouter.getPath({
            name: item[this.labelKey],
            src: item[this.pathKey]
          }, item.meta),
          query: item.query
        });
      }
    }
  };
</script>