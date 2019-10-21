import Cookies from 'js-cookie'
const TokenKey = 'x-access-token'
const UserKey = 'x-access-user';
const UserId = 'x-access-userId'
var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);
export function getToken() {
    return localStorage.getItem(TokenKey)
}

export function setToken(token) {
    return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return localStorage.removeItem(TokenKey)
}
export function setUser(user) {
    return Cookies.set(UserKey, user, { expires: inFifteenMinutes })
}

export function getUser() {
    return Cookies.get(UserKey);
}
export function setUserId(user) {
    return Cookies.set(UserId, user, { expires: inFifteenMinutes })
}

export function getUserId() {
    return Cookies.get(UserId);
}
