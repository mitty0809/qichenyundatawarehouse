import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export const addMenuNode = (data) => request({
    url: baseUrl + '/menu/add',
    method: 'post',
    data: data
});
export const saveMenuNode = (data) => request({
    url: baseUrl + '/menu/edit',
    method: 'post',
    data: data
});
export const deleteMenuNode = (data) => request({
    url: baseUrl + '/menu/del',
    method: 'post',
    data: data
});