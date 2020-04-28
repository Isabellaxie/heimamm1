 
 import Vue from 'vue'
 // 导入 vue-router
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
// import register from '../views/login/register.vue'
//注册 vue-router
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
    //这里就是路由的配制项
    routes: [
        {
            path: '/',
            component:login  //这里要填入一个组件名(填入import的名字)，也就是上面地址对应的组件
        },
        // {
        //     path:'/register',
        //     component:register
        // }
    ]
})
export default router