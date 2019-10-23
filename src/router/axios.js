/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios'
import store from '@/store/';
import router from '@/router/router'
import { serialize } from '@/util/util'
import { getToken, setToken } from '@/util/auth'
import { Message } from 'element-ui'
import website from '@/config/website';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Loading } from 'element-ui'
// import {qq} from '@/api/user'
// let loading;
// function startLoading() {    
// 	if(loadingNum==0){
// 		loading = Loading.service({
// 		  lock: true,
// 		  text: '拼命加载中...',
// 		  background:'rgba(255,255,255,0.5)',
// 		})
// 	}
// 	//请求数量加1
// 	loadingNum++;
// }
// function endLoading() {
//     //请求数量减1
// 	loadingNum--
// 	if(loadingNum<=0){
// 		loading.close()
// 	}
// }
axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress Configuration
NProgress.configure({
    showSpinner: false
});
//HTTPrequest拦截
axios.interceptors.request.use(config => {
    // startLoading();
    // debugger
    // debugger
    // console.log(config)
    NProgress.start() // start progress bar
    const meta = (config.meta || {});
    const isToken = meta.isToken === false;
    if (getToken() && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
        // console.log(config.headers)
        // config.headers['Content-Type']="application/json"
        // console.log(config.headers)
    }

    //headers中配置serialize为true开启序列化
    if (config.method === 'post' && meta.isSerialize === true) {
        config.data = serialize(config.data);
    }
    // Vue.$vux.loading.show({
    //     text: 'Loading'
    //   })
    // axios(config)
    return config

}, error => {
    // setTimeout(() => {
    //     Vue.$vux.loading.hide();
    //     Vue.$vux.toast.text('加载超时', 'middle')
    //  },3000)
    return Promise.reject(error)
});
//HTTPresponse拦截
axios.interceptors.response.use(res => {
    // endLoading();
    // debugger
    // console.log(res)
    // debugger
    NProgress.done();
    const status = Number(res.data.code) || 200;
    // console.log(status)
    const statusWhiteList = website.statusWhiteList || [];
    const message = res.data.message || '未知错误';
    // if(res.status ===200 ){
    //     console.log('200')
    // };

    //如果在白名单里则自行catch逻辑处理
    if (statusWhiteList.includes(status)) return Promise.reject(res);
    //如果是401则跳转到登录页面
    if (status === 401) {
        store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }))
        Message({
            message: '登录失败',
            type: 'error'
        })
        return Promise.reject(new Error(message))
    };
    if (status === 535) {
        setToken(res.data.data.token)
        return axios(res.config)
    };
    // if (status === 700) {
    //     Message({
    //         message: '租户标识已经存在',
    //         type: 'error'
    //     })
    //     return Promise.reject(new Error(message))
    // }
    // if (status === 715) {
    //     Message({
    //         message: '字典名称已存在',
    //         type: 'error'
    //     })
    //     return Promise.reject(new Error(message))
    // } else {
    //     Message({
    //         message: res.data.msg,
    //         type: 'error'
    //     })
    //     return Promise.reject(new Error(message))
    // };
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
        Message({
            message: res.data.msg,
            type: 'error'
        })
        return Promise.reject(new Error(message))
    };
    // Vue.$vux.loading.hide()
    return res;
}, error => {
    // debugger
    // if()
    // axios(error.config)
    if (error.response.data.code === 535) {
        debugger
        // axios(error.config)
        setToken(error.response.data.data.token)
        return axios(error.config)
        // console.log('重新请求出错了')
        // qq(error.config.url,error.config.method,error.config.data).then(res => {
        //     console.log(res)
        //     console.log('token过期重新请求成功')
        // }).catch(error => {
        //     console.log(error)
        // })
    } else {
        // setTimeout(() => {
        //     Vue.$vux.loading.hide()
        //     Vue.$vux.toast.text('请求失败', 'middle')
        //   },1000)
        console.log(error.response.data.code)
        NProgress.done();
        return Promise.reject(new Error(error));
    }

})

export default axios;