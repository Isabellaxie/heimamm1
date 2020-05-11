import instance from '../utils/request.js'
// 获取数据, 无其他了
// 有两个图表,所以有两个 获取数据请求的路径
function getChartData(params) {
    return instance({
        url: "/data/title",
        method: "get",
        params      //data: data   
    })
}

function getStatistics(data) {
    return instance({
        url: "/data/statistics",
        method: "post",
        data
    })
}
// function delQuestionDate(data) {
//     return instance({
//         url: "/question/remove",
//         method: "post",
//         data
//     })
// }
// function setQuestionStatus(data) {
//     return instance({
//         url: "/question/status",
//         method: "post",
//         data
//     })
// }
// function editQuestionDate(data) {
//     return instance({
//         url: "/question/edit",
//         method: "post",
//         data
//     })
// }
// editQuestionDate addQuestionDate, delQuestionDate, setQuestionStatus, editQuestionDate


export { getChartData,getStatistics }
