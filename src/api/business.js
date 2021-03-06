import instance from '../utils/request.js'
// 得到数据
// 设置状态 不是数据
//编辑数据
//新增数据
// 删除数据

function getBusinessDate(params) {
    return instance({
        url: "/enterprise/list",
        method: "get",
        params
    })
}
function addBusinessDate(data) {
    return instance({
        url: "/enterprise/add",
        method: "post",
        data
    })
}
function delBusinessDate(data) {
    return instance({
        url: "/enterprise/remove",
        method: "post",
        data
    })
}
function setBusinessStatus(data) {
    return instance({
        url: "/enterprise/status",
        method: "post",
        data
    })
}
function editBusinessDate(data) {
    return instance({
        url: "/enterprise/edit",
        method: "post",
        data
    })
}
export { getBusinessDate, addBusinessDate, delBusinessDate, setBusinessStatus, editBusinessDate }