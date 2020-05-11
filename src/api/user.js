import instance from '../utils/request.js'
// 得到用户数据
// 删除用户数据
//设置状态
// 新增数据
// 编辑数据
function getUserData(params) {
    return instance({
        url: "/user/list",
        method: "get",
        params
    })
}
function addUserData(data) {
    return instance({
        url: "/user/add",
        method: "post",
        data
    })
}
function delUserData(data) {
    return instance({
        url: "/user/remove",
        method: "post",
        data
    })
}
function setUserStatus(data) {
    return instance({
        url: "/user/status",
        method: "post",
        data
    })
}
function editUserData(data) {
    return instance({
        url: "/user/edit",
        method: "post",
        data
    })
}
export { getUserData, addUserData, delUserData, setUserStatus, editUserData }