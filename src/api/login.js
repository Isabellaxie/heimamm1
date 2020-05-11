// 统一引入: instance 就是 axios 的副本 它已经加了, 请求, 响应
import instance from '../utils/request.js'
function toLogin(data) {
    return instance({
        url: "/login",
        method: "post",
        data      //data: data 所以 传参时, 一定要记得有点{} 要不就是id : id 这种形式  
    })
}
export { toLogin }