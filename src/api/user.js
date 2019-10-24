import request from '@/router/axios';
import { baseUrl } from '@/config/env';
// export const loginByUsername = (username, password, code, redomStr) => request({
//     url: baseUrl + '/user/login',
//     method: 'post',
//     meta: {
//         isToken: false
//     },
//     data: {
//         username,
//         password,
//         code,
//         redomStr
//     }
// })
// 登录
export const loginByUsername = (username, password, type, tenant, captcha) => request({
    url: baseUrl + '/open/login',
    method: 'post',
    meta: {
        isToken: true
    },
    data: {
        username,
        password,
        type,
        // source,
        tenant,
        captcha
    }
})
// 获取用户信息
export const getUserInfo = (id) => request({
    url: baseUrl + '/open/user/info/' + id,
    method: 'get',
});
// 获取菜单
export const getMenu1 = () => request({
    url: baseUrl + '/open/user/menus',
    method: 'get',
    // data: {
    //     type
    // }
});
export const getMenu = () => request({
    url: baseUrl + 'open/menu/tree',
    method: 'get',
});
// 获取字典
export const getDictList = (searchContent, pageNum, pageSize) => request({
    url: baseUrl + 'open/dict/list',
    method: 'post',
    data: {
        searchContent,
        pageNum,
        pageSize
    }
})
// 新增字典
export const addDict = (dictNo, dictName, dictType, seq, remark) => request({
    url: baseUrl + 'open/dict/add',
    method: 'post',
    data: {
        dictNo,
        dictName,
        dictType,
        seq,
        remark
    }
})
// 更新字典
export const updateDict = (id, dictName, seq, remark) => request({
    url: baseUrl + 'open/dict/update',
    method: 'post',
    data: {
        id,
        dictName,
        seq,
        remark
    }
})
//删除字典
export const deleteDict = (id) => request({
    url: baseUrl + 'open/dict/delete',
    method: 'post',
    data: {
        id
    }
})
// 获取字典项列表
export const getDictitemlist = (dictId, pageSize, pageNum) => request({
    url: baseUrl + 'open/dict/item_list',
    method: 'post',
    data: {
        dictId,
        pageSize,
        pageNum
    }
})
// 新增字典项
export const addDictitem = (dictId, itemName, itemValue, seq, remark) => request({
    url: baseUrl + 'open/dict/item_save',
    method: 'post',
    data: {
        dictId,
        itemName,
        itemValue,
        seq,
        remark
    }
})
// 修改字典项
export const updateDictitem = (id, itemName, seq, remark) => request({
    url: baseUrl + 'open/dict/item_update',
    method: 'post',
    data: {
        id,
        itemName,
        seq,
        remark
    }
})
// 删除字典项
export const deleteDictitem = (id) => request({
    url: baseUrl + 'open/dict/item_delete',
    method: 'post',
    data: {
        id
    }
})
// 刷新Token
export const refeshToken = () => request({
    url: baseUrl + '/user/refesh',
    method: 'post'
})
export const getTopMenu = () => request({
    url: baseUrl + '/user/getTopMenu',
    method: 'get'
});

export const sendLogs = (list) => request({
    url: baseUrl + '/user/logout',
    method: 'post',
    data: list
})
// 退出
export const logout = () => request({
    url: baseUrl + '/user/logout',
    meta: {
        isToken: false
    },
    method: 'get'
})
export const qq = (url, me, da) => request({
    url: baseUrl + url,
    method: me,
    data: da
})
// 获取字典项每个页面获取字典项
export const getdict = (name) => request({
    url: baseUrl + 'open/dict/items?dictNos=' + name,
    method: 'get',
})
// 获取菜单管理树
export const getMenutree = () => request({
    url: baseUrl + 'open/menu/tree',
    method: 'get',
})
// 新增菜单类型为目录
export const getcatalogue = (data) => request({
    url: baseUrl + 'open/menu/add',
    method: 'post',
    data:data
})
// 菜单编辑
export const menucompile = (data) => request({
    url: baseUrl + 'open/menu/update',
    method: 'post',
    data:data
})
export const menucompile2 = (id, parentId, name, menuType, permission, seq) => request({
    url: baseUrl + 'open/menu/update',
    method: 'post',
    data: {
        id,
        parentId,
        name,
        menuType,
        permission,
        seq
    }
})
// 删除菜单
export const menudelete = (id) => request({
    url: baseUrl + 'open/menu/delete',
    method: 'post',
    data: {
        id
    }
})
// 获取用户列表
export const getuserlist = (searchContent, pageNum, pageSize) => request({
    url: baseUrl + 'open/user/list_common',
    method: 'post',
    data: {
        searchContent,
        pageNum,
        pageSize
    }
})
// 编辑用户信息
export const updateuser = (id, nickname, deptId, roles, mobile, email, gender, birthday) => request({
    url: baseUrl + 'open/user/update',
    method: 'post',
    data: {
        id,
        nickname,
        deptId,
        roles,
        mobile,
        email,
        gender,
        birthday
    }
})
// 修改个人信息
export const updatamyinfo = (id, nickname, mobile, email, gender, birthday, avatar) => request({
    url: baseUrl + 'open/user/update_my_info',
    method: 'post',
    data: {
        id,
        nickname,
        mobile,
        email,
        gender,
        birthday,
        avatar
    }
})
// 修改密码
export const updatemypwd = (pwd, newPwd, confirmedPwd) => request({
    url: baseUrl + 'open/user/update_my_pwd',
    method: 'post',
    data: {
        pwd,
        newPwd,
        confirmedPwd
    }
})
// 重置密码
export const resetpwd = (ids) => request({
    url: baseUrl + 'open/user/reset_pwd',
    method: 'post',
    data: {
        ids
    }
})
// 新增用户
export const adduser = (username, nickname, password, deptId, roles, mobile, email, gender, birthday) => request({
    url: baseUrl + 'open/user/add',
    method: 'post',
    data: {
        username,
        nickname,
        password,
        deptId,
        roles,
        mobile,
        email,
        gender,
        birthday
    }
})
// 添加用户选择角色列表
export const rolesoptions = () => request({
    url: baseUrl + 'open/role/options',
    method: 'get',
})
// 获取机构管理的树型用于用户添加时选择所属部门
export const orgtree = () => request({
    url: baseUrl + 'open/org/tree',
    method: 'get',
})
// 获取租户列表
export const tenantlist = (search, pageNum, pageSize) => request({
    url: baseUrl + 'open/tenant/list?search=' + search + '&&pageNum=' + pageNum + '&&pageSize=' + pageSize,
    method: 'get',
})
// 添加租户
export const tenantadd = (tenant, tenantName, contactName, contactPhone, url, username, password, domain) => request({
    url: baseUrl + 'open/tenant/add',
    method: 'post',
    data: {
        tenant,
        tenantName,
        contactName,
        contactPhone,
        url,
        username,
        password,
        domain
    }
})
// 租户标识校验
export const checktenant = (tenant) => request({
    url: baseUrl + 'open/tenant/check_tenant?tenant=' + tenant,
    method: 'get',
})
// 编辑租户信息
export const updatetenant = (id, tenantName, contactName, contactPhone, contactAddr, url, username, password, domain) => request({
    url: baseUrl + 'open/tenant/update',
    method: 'post',
    data: {
        id,
        tenantName,
        contactName,
        contactPhone,
        contactAddr,
        url,
        username,
        password,
        domain
    }
})
// 租户禁用/启用
export const disable = (id) => request({
    url: baseUrl + 'open/tenant/disable',
    method: 'post',
    data: {
        id
    }
})
// 数据库测试连接
export const testconnection = (url, username, password) => request({
    url: baseUrl + 'open/tenant/test_connection',
    method: 'post',
    data: {
        url,
        username,
        password
    }
})
// 删除租户
export const tenantdelete = (id) => request({
    url: baseUrl + 'open/dw/tenant/delete?id=' + id,
    method: 'del'
})
// 获取角色列表
export const rolelist = (searchContent, pageNum, pageSize) => request({
    url: baseUrl + 'open/role/list',
    method: 'post',
    data: {
        searchContent,
        pageNum,
        pageSize
    }
})
// 新增角色
export const roleadd = (data) => request({
    url: baseUrl + 'open/role/add',
    method: 'post',
    data:data
})
// export const rolesadd = (roleNo,roleName,dataType,remark) => request({
//     url:baseUrl + 'open/role/add',
//     method:'post',
//     data:{
//         roleNo,
//         roleName,
//         dataType,
//         remark
//     }
// })
// 修改角色信息
export const roleupdate = (id, roleName, dataType, remark,orgs) => request({
    url: baseUrl + 'open/role/update',
    method: 'post',
    data: {
        id,
        roleName,
        dataType,
        remark,
        orgs
    }
})
// 删除角色
export const deleterole = (id) => request({
    url: baseUrl + 'open/role/delete',
    method: 'post',
    data: {
        id
    }
})
// 分配角色菜单
export const setrolemenu = (roleId, menus) => request({
    url: baseUrl + 'open/role/menus',
    method: 'post',
    data: {
        roleId,
        menus
    }
})
// 获取角色菜单
export const getrolemenu = (id) => request({
    url: baseUrl + 'open/role/menus?id=' + id,
    method: 'get',
})
// 添加机构
export const orgadd = (orgNo, name, fullName, orgType, parentId, seq) => request({
    url: baseUrl + 'open/org/add',
    method: 'post',
    data: {
        orgNo,
        name,
        fullName,
        orgType,
        parentId,
        seq
    }
})
//编辑机构
export const orgupdate = (id, name, fullName, orgType, parentId, seq, remark) => request({
    url: baseUrl + 'open/org/update',
    method: 'post',
    data: {
        id,
        name,
        fullName,
        orgType,
        parentId,
        seq,
        remark
    }
})
// 删除机构
export const orgdelete = (id) => request({
    url: baseUrl + 'open/org/delete',
    method: 'post',
    data: {
        id
    }
})
// 获取公告列表
export const noticelist = (searchContent,pageNum,pageSize) => request({
    url: baseUrl + 'open/notice/list',
    method: 'post',
    data: {
        searchContent,
        pageNum,
        pageSize
    }
})
// 新增公告
export const addnotice = (title, content, endDate) => request({
    url: baseUrl + 'open/notice/add',
    method: 'post',
    data: {
        title,
        content,
        endDate
    }
})
// 编辑公告
export const updatenotice = (id, title, content, endDate) => request({
    url: baseUrl + 'open/notice/update',
    method: 'post',
    data: {
        id,
        title,
        content,
        endDate
    }
})
// 获取客户信息
export const getinfo = (assetId) => request({
    url: baseUrl + 'open/asset/info/' + assetId,
    method: 'get',
})

export const getclientinfo = (assetId) => request({
    url: baseUrl + 'open/asset/info' + assetId,
    method: 'get'
})

// 导入excel
export const importexcel = (data) => request({
    url: baseUrl + 'open/asset/import',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data:data
})
