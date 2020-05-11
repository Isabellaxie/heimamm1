//这里是记录,关于token 三种形式 都是没有相关的事接口. 是与本地localStorage 直接挂钩
//保存
// 关于这个这保存, 就是会在登录时用到,在vrouter 处先让他们都是以超级管理者身份登上去,然后再通过路由前守卫
// 来决定, 哪些有权可以 访问哪些页面  网页的标题是在元信息里 meta: title 还有哪些身份

// 获取

//删除
// token保存
function saveToken(val, name = "token") {
    window.localStorage.setItem(name, val)
}
// 获取token
function getToken(name = "token") {
    return window.localStorage.getItem(name)
}
// 删除token
function removeToken(name = "token") {
    window.localStorage.removeItem(name)
}
export { saveToken, getToken, removeToken }