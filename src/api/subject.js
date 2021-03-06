import instance from '../utils/request.js'
//它 本身就有一个,新增与编辑 且用的是复用
// 得到数据
// 删除数据
// 设置数据 就是编辑数据的意思,   设置状态才是对的
//新增数据
// 编辑数据

function getSubjectData(params) {
    return instance({
        url: "/subject/list",
        method: "get",
        params      //data: data   
    })
}
function setSubjectStatus(data) {
    return instance({
        url: "/subject/status",
        method: "post",
        data      //data: data   
    })
}
function delSubjectData(data) {
    return instance({
        url: "/subject/remove",
        method: "post",
        data      //data: data   
    })
}
function addSubjectData(data) {
    return instance({
        url: "/subject/add",
        method: "post",
        data      //data: data   
    })
}
function editSubjectData(data) {
    return instance({
        url: "/subject/edit",
        method: "post",
        data      //data: data   
    })
}
export { getSubjectData, setSubjectStatus, delSubjectData, addSubjectData, editSubjectData }