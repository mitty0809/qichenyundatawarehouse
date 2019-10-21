import { setToken, removeToken,setUser,getUser,setUserId,getUserId } from '@/util/auth'
import { setStore, getStore } from '@/util/store'
// import { isURL, validatenull } from '@/util/validate'
import { encryption, deepClone } from '@/util/util'
// import webiste from '@/config/website'
import { loginByUsername, getUserInfo, getMenu, getTopMenu, logout, refeshToken,getMenu1 } from '@/api/user'

import menuComponent from './menu'
// function addPath(ele, first) {
//     const menu = webiste.menu;
//     const propsConfig = menu.props;
//     const propsDefault = {
//         label: propsConfig.label || 'label',
//         path: propsConfig.path || 'path',
//         icon: propsConfig.icon || 'icon',
//         children: propsConfig.children || 'children'
//     }
//     const icon = ele[propsDefault.icon];
//     ele[propsDefault.icon] = validatenull(icon) ? menu.iconDefault : icon;
//     const isChild = ele[propsDefault.children] && ele[propsDefault.children].length !== 0;
//     if (!isChild && first && !isURL(ele[propsDefault.path])) {
//         ele[propsDefault.path] = ele[propsDefault.path] + '/index'
//     } else {
//         ele[propsDefault.children].forEach(child => {
//             if (!isURL(child[propsDefault.path])) {
//                 child[propsDefault.path] = `${ele[propsDefault.path]}/${child[propsDefault.path] ? child[propsDefault.path] : 'index'}`
//             }
//             addPath(child);
//         })
//     }

// }
function replaceDoc(item, permission) {
    // console.log(item)
    if(item.menuType === 10) {
        if(permission[item.permissionNo]) {
            item.isPermit = true;
            item.children.forEach((item) => {
                replaceDoc(item, permission);
            })
        } else {
            item.isPermit = false;
        }
    } else if(item.menuType === 20) {
        const component = menuComponent.state.component;
        if(component[item.permissionNo]) {
            item.component = component[item.permissionNo];
        }
        if(permission[item.permissionNo]) {
            item.isPermit = true;
            item.children.forEach((item) => {
                replaceDoc(item, permission);
            })
        } else {
            item.isPermit = false;
        }
    } else {
        if(permission[item.permissionNo]) {
            item.isPermit = true;
        } else {
            item.isPermit = false;
        }
    }
}
const user = {
    state: {
        userName: getStore({ name: 'username' }) || getUser() || '',
        userId: getStore({ name: 'userId' }) || getUserId() || '',
        nickName: '',
        userInfo: {},
        permission: {},
        orgName: "",
        type: "",
        roles: [],   
        menu: getStore({ name: 'menu' }) || [],
        menuAll: [],
        token: getStore({ name: 'token' }) || '',
    },
    actions: {
        //根据用户名登录
        LoginByUsername({ commit }, userInfo) {
            const user = encryption({
                data: userInfo,
                type: 'Aes',
                param: ['password']
            });
            return new Promise((resolve,reject) => {
                loginByUsername(user.username, user.password,user.type,user.tenant,user.captcha).then(res => {
                    const data = res.data.data;
                    commit('SET_TOKEN', data);
                    commit('SET_USERNAME', data.info.username);
                    commit('DEL_ALL_TAG');
                    commit('CLEAR_LOCK');
                    commit('SET_USERID', data.info.userId);
                    commit('SET_PERMISSION', data.info.permissions);                
                    resolve(res);
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //根据手机号登录
        LoginByPhone({ commit }, userInfo) {
            return new Promise((resolve) => {
                loginByUsername(userInfo.phone, userInfo.code).then(res => {
                    const data = res.data.data;
                    commit('SET_TOKEN', data);
                    commit('DEL_ALL_TAG');
                    commit('CLEAR_LOCK');
                    resolve();
                })
            })
        },
        GetUserInfo({ state,commit }) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.userId).then((res) => {
                    if(res.data.code==0){
                        const data = res.data.data;
                        commit('SET_ROLES', data.roles);
                        commit('SET_NICKNAME', data.nickname);
                        // commit('SET_ORGNAME', data.orgName);
                        // commit('SET_TYPE', data.type);
                        resolve(res);
                    }                  
                }).catch(err => {
                    reject(err);
                })
            })
        },
        //刷新token
        RefeshToken({ state, commit }) {
            return new Promise((resolve, reject) => {
                refeshToken(state.refeshToken).then(res => {
                    const data = res.data.data;
                    commit('SET_TOKEN', data);
                    resolve(data);
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登出
        LogOut({ commit }) {
            return new Promise((resolve, reject) => {
                logout().then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_MENU', [])
                    commit('SET_ROLES', [])
                    commit('DEL_ALL_TAG');
                    commit('CLEAR_LOCK');
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //注销session
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                commit('SET_MENU', [])
                commit('SET_ROLES', [])
                commit('DEL_ALL_TAG');
                commit('CLEAR_LOCK');
                removeToken()
                resolve()
            })
        },
        GetTopMenu() {
            return new Promise(resolve => {
                getTopMenu().then((res) => {
                    const data = res.data.data || []
                    resolve(data)
                })
            })
        },
        //获取系统菜单
        GetMenu({ commit,state }) {
            return new Promise((resolve,reject) => {
                getMenu().then((res) => {
                    if(res.data.code === 0) {
                        const data = res.data.data;
                        let menu = deepClone(data);
                        menu.forEach((item) => {
                            replaceDoc(item, state.permission);
                        });
                        commit('SET_MENU', menu);
                        resolve(menu)
                    }
                    reject();
                }).catch((err) => {
                    reject(err);
                })
            })
        },
        GetUserMenu({commit}) {
            return new Promise((resolve,reject) => {
                getMenu1().then((res) => {
                    // console.log(res)
                    const data =res.data.data
                    let menu = deepClone(data)
                    console.log(menu)
                    // menu.forEach((item) => {
                    //     replaceDoc(item, state.permission);
                    // });
                    commit('SET_MENU', menu);
                    resolve(menu)
                }).catch((err) => {
                    reject(err)
                })
            })   
        }
        // //获取字典
        // GetDictList({state}){
        //     // console.log(state.se)
        //     return new Promise(resolve => {
        //         getDictList(state.se.searchContent).then((res)=>{
        //             // console.log(searchContent)
        //             const data=res.data.data.content
        //             // console.log(data)
        //             resolve(data)
        //         })
        //     })
        // }

    },
    mutations: {
        SET_TOKEN: (state, token) => {
            setToken(token.token)
            state.token = token;
            setStore({ name: 'token', content: state.token, type: 'session' })
        },
        SET_USERNAME: (state, username) => {
            setUser(username);
            state.userName = username;
            setStore({ name: 'username', content: state.userName, type: 'session' })
        },
        SET_USERID: (state, userId) => {
            setUserId(userId)
            state.userId = userId;
        },
        SET_NICKNAME: (state, nickname) => {
            state.nickName = nickname;
        },
        SET_USERIFNO: (state, userInfo) => {
            state.userInfo = userInfo;
        },
        SET_MENU: (state, menu) => {
            state.menu = menu
            setStore({ name: 'menu', content: state.menu, type: 'session' })
        },
        SET_MENU_ALL: (state, menuAll) => {
            state.menuAll = menuAll;
        },
        SET_ROLES: (state, roles) => {
            // console.log(roles+'我是roles')
            state.roles=roles;
            // debugger
        },
        SET_USER:(state,form)=>{
            state.form=form
            // console.log(form)
        },
        SET_PERMISSION: (state, permission) => {
            // console.log(permission)
            state.permission = {};
            permission.forEach(ele => {
                state.permission[ele] = true;
            });
        },
        
    }

}
export default user