// import { getTree } from '@/util/util'
// let RouterPlugin = function () {
//   this.$router = null;
//   this.$store = null;

// };
// RouterPlugin.install = function (vue, router, store, i18n) {
//   debugger
//   this.$router = router;
//   this.$store = store;
//   this.$vue = new vue({ i18n });
//   function isURL (s) {
//     if (s.includes('html')) return true;
//     return /^http[s]?:\/\/.*/.test(s)
//   }
//   function objToform (obj) {
//     let result = [];
//     Object.keys(obj).forEach(ele => {
//       result.push(`${ele}=${obj[ele]}`);
//     })
//     return result.join('&');
//   }
//   this.$router.$avueRouter = {
//     //全局配置
//     $website: this.$store.getters.website,
//     routerList: [],
//     group: '',
//     meta: {},
//     safe: this,
//     // 设置标题
//     setTitle: (title) => {
//       const defaultTitle = this.$vue.$t('title');
//       title = title ? `${title}——${defaultTitle}` : defaultTitle;
//       document.title = title;
//     },
//     closeTag: (value) => {
//       let tag = value || this.$store.getters.tag;
//       if (typeof value === 'string') {
//         tag = this.$store.getters.tagList.filter(ele => ele.value === value)[0]
//       }
//       this.$store.commit('DEL_TAG', tag)
//     },
//     generateTitle: (title, key) => {
//       if (!key) return title;
//       const hasKey = this.$vue.$te('route.' + key)
//       if (hasKey) {
//         // $t :this method from vue-i18n, inject in @/lang/index.js
//         const translatedTitle = this.$vue.$t('route.' + key)

//         return translatedTitle
//       }
//       return title
//     },
//     //处理路由
//     getPath: function (params = {}, meta = {}) {
//       let { src } = params;
//       let result = src || '/';
//       if (isURL(src)) {
//         result = `/myiframe/urlPath?${objToform(Object.assign(meta, params))}`;
//       }
//       return result;
//     },
//     //正则处理路由
//     vaildPath: function (list, path) {
//       let result = false;
//       list.forEach(ele => {
//         if (new RegExp("^" + ele + ".*", "g").test(path)) {
//           result = true
//         }

//       })
//       return result;
//     },
//     //设置路由值
//     getValue: function (route) {
//       let value = "";
//       if (route.query.src) {
//         value = route.query.src;
//       } else {
//         value = route.path;
//       }
//       return value;
//     },
//     //动态路由

//     formatRoutes: function (amenu = [], first) {
//       console.log(amenu)
//       const aMenu = getTree(amenu,0)
//       // console.log(aMenu)
//       debugger
//       const aRouter = []
//       const propsConfig = this.$website.menu.props;
//       const propsDefault = {
//         label: propsConfig.label || 'label',
//         path: propsConfig.path || 'path',
//         icon: propsConfig.icon || 'icon',
//         children: propsConfig.children || 'children',
//         meta: propsConfig.meta || 'meta',
//       }
//       // console.log('处理路由'+Menu)
//       // console.log(first)
//       // console.log(propsDefault)
//       console.log(aMenu)
//       if (aMenu.length === 0) return;
//       for (let i = 0; i < aMenu.length; i++) {
//         const oMenu = aMenu[i];
//         if (this.routerList.includes(oMenu[propsDefault.path])) return;
//         let path = (() => {
//           if (first) {
//             return oMenu[propsDefault.path].replace('/index', '')
//           } else {
//             return oMenu[propsDefault.path]
//           }
//         })(),
//           component = oMenu.component,
//           name = oMenu[propsDefault.label],
//           icon = oMenu[propsDefault.icon],
//           children = oMenu[propsDefault.children],
//           meta = oMenu[propsDefault.meta] || {};
//           console.log(oMenu)

//         meta = Object.assign(meta, (function () {
//           if (meta.keepAlive === true) {
//             return {
//               $keepAlive: true
//             }
//           }
//         })());
//         // console.log(children.length)
//         const isChild = children.length !== 0;
//         const oRouter = {
//           path: path,
//           component (resolve) {
//             // 判断是否为首路由
//             if (first) {
//               require(['../page/index'], resolve)
//               return
//               // 判断是否为多层路由
//             } else if (isChild && !first) {
//               require(['../page/index/layout'], resolve)
//               return
//               // 判断是否为最终的页面视图
//             } else {
//               require([`../${component}.vue`], resolve)
//             }
//           },
//           name: name,
//           icon: icon,
//           meta: meta,
//           redirect: (() => {
//             if (!isChild && first && !isURL(path)) return `${path}/index`
//             else return '';
//           })(),
//           // 处理是否为一级路由
//           children: !isChild ? (() => {
//             // debugger
//             if (first) {
//               // debugger
//               if (!isURL(path)) oMenu[propsDefault.path] = `${path}/index`;
//               return [{
//                 component (resolve) { require([`../${component}.vue`], resolve) },
//                 icon: icon,
//                 name: name,
//                 meta: meta,
//                 path: 'index'
//               }]
//             }
//             return [];
//           })() : (() => {
//             return this.formatRoutes(children, false)
//           })()
//         }
//         aRouter.push(oRouter)
//       }
//       if (first) {
//         if (!this.routerList.includes(aRouter[0][propsDefault.path])) {
//           this.safe.$router.addRoutes(aRouter)
//           this.routerList.push(aRouter[0][propsDefault.path])
//         }
//       } else {
//         return aRouter
//       }

//     }
//   }
// }
// export default RouterPlugin;

let RouterPlugin = function () {
  this.$router = null;
  this.$store = null;

};
RouterPlugin.install = function (vue, router, store, i18n) {
  this.$router = router;
  this.$store = store;
  this.$vue = new vue({ i18n });
  // function isURL(s) {
  //     return /^http[s]?:\/\/.*/.test(s)
  // }
  function objToform(obj) {
      let result = [];
      Object.keys(obj).forEach(ele => {
          result.push(`${ele}=${obj[ele]}`);
      })
      return result.join('&');
  }
  this.$router.$avueRouter = {
      //全局配置
      $website: this.$store.getters.website,
      routerList: [],
      group: '',
      meta: {},
      safe: this,
      // 设置标题
      setTitle: (title) => {
        //   console.log(title)
          const defaultTitle = this.$vue.$t('title');
          title = title ? `${title}——${defaultTitle}` : defaultTitle;
          document.title = title;
      },
      closeTag: (value) => {
          let tag = value || this.$store.getters.tag;
          console.log(value)
          if (typeof value === 'string') {
              tag = this.$store.getters.tagList.filter(ele => ele.value === value)[0]
          }
          this.$store.commit('DEL_TAG', tag)
      },
      generateTitle: (title, key) => {
          if (!key) return title;
          const hasKey = this.$vue.$te('route.' + key)
          if (hasKey) {
              // $t :this method from vue-i18n, inject in @/lang/index.js
              const translatedTitle = this.$vue.$t('route.' + key)

              return translatedTitle
          }
          return title
      },
      //处理路由
      getPath: function (params) {
          let { src } = params;
          let result = src || '/';
          if (src.includes("http") || src.includes("https")) {
              result = `/myiframe/urlPath?${objToform(params)}`;
          }
          return result;
      },
      //正则处理路由
      vaildPath: function (list, path) {
          let result = false;
          list.forEach(ele => {
              if (new RegExp("^" + ele + ".*", "g").test(path)) {
                  result = true
              }

          })
          return result;
      },
      //设置路由值
      getValue: function (route) {
          let value = "";
          if (route.query.src) {
              value = route.query.src;
          } else {
              value = route.path;
          }
          return value;
      },
      //动态路由
      formatRoutes: function (aMenu = []) {
        //   console.log(aMenu)
          const aRouter = []
          const propsConfig = this.$website.menu.props;
        //   console.log(propsConfig)
          // 拿到字段名称
          const propsDefault = {
              label: propsConfig.label || 'label',
              path: propsConfig.path || 'path',
              icon: propsConfig.icon || 'icon',
              children: propsConfig.children || 'children',
              meta: propsConfig.meta || 'meta',
          }
          if (aMenu.length === 0) return;

          // 循环
        //   console.log(aMenu)
          for (let i = 0; i < aMenu.length; i++) {
              const oMenu = aMenu[i];
              // 已经包含在内 停止注册
              if (this.routerList.includes(oMenu[propsDefault.path])) return;

              // 判断是目录还是菜单
              if (oMenu.menuType === 20) {
                  // 孩子递归
                  this.formatRoutes(oMenu.children);
                  // 自身结束
                  continue;
              }

              // 不是菜单全部结束
              if( oMenu.menuType !=20 ) continue;

              // 变量赋值
             
              let path = oMenu.path,
                  component = oMenu.component,
                  name = oMenu.name,
                  icon = oMenu.icon,

                  meta = oMenu.meta || {};

              meta = Object.assign(meta, (() => {
                  if (meta.keepAlive === true) {
                      return {
                          $keepAlive: true
                      }
                  }
              })());
              const oRouter = {
                  path: path,
                  component(resolve) {
                      require(['../page/index'], resolve)
                  },
                  name: name,
                  icon: icon,
                  meta: meta,
                  redirect: (() => {
                      return `${path}/index`;
                  })(),
                  children: (() => {
                      oMenu.path = `${path}/index`;
                      return [{
                          component(resolve) { require([`../${component}.vue`], resolve)},
                          icon: icon,
                          name: name,
                          meta: meta,
                          path: 'index'
                      }]
                  })()
              }
              aRouter.push(oRouter)
              this.routerList.push(path);
          }
          this.safe.$router.addRoutes(aRouter);
      }
  }
}
export default RouterPlugin;