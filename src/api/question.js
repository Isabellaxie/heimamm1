import instance from '../utils/request.js';
// 得到数据
// 删除数据
// 设置状态
// 新增数据
// 编辑数据 ??/没有以上??? 只有一个 得到数据???  正确的,都是有, 一个也不少
function getQuestionData(params) {
    return instance({
        url: "/question/list",
        method: "get",
        params      //data: data   
    })
}

function addQuestionDate(data) {
    return instance({
        url: "/question/add",
        method: "post",
        data
    })
}
function delQuestionDate(data) {
    return instance({
        url: "/question/remove",
        method: "post",
        data
    })
}
function setQuestionStatus(data) {
    return instance({
        url: "/question/status",
        method: "post",
        data
    })
}
function editQuestionDate(data) {
    return instance({
        url: "/question/edit",
        method: "post",
        data
    })
}
// editQuestionDate


export { getQuestionData, addQuestionDate, delQuestionDate, setQuestionStatus, editQuestionDate}