import instance from '../utils/request.js'

// 注册页面有4个接口为什么只用两个?
// 上传图片, 提交数据, 图形验证码发送, 短信验证码
//短信发送
function getPhoneCode(data) {
    return instance({
        url: "/sendsms",
        method: "post",
        data      //data: data   
    })
}
//用户注册
function register(data) {
    return instance({
        url: "/register",
        method: "post",
        data      //data: data   
    })
}

// export default getPhoneCode
// export default我们看不出来页面用了些什么接口，它一个js只能使用一个export default
//
export { getPhoneCode, register }