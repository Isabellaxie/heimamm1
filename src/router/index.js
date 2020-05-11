
import Vue from 'vue'
// 导入 vue-router
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import layout from '../views/home/layout.vue'
import chart from '../views/home/chart/chart.vue'
import question from '../views/home/question/question.vue'
import business from '../views/home/business/business.vue'
import user from '../views/home/user/user.vue'
import subject from '../views/home/subject/subject.vue'
//注册 vue-router
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
    //这里就是路由的配制项
    routes: [
        {
            path: '/',
            component: login,  //这里要填入一个组件名(填入import的名字)，也就是上面地址对应的组件
            meta: {
                title: '登录页',
                rules: ['超级管理员', '管理员','老师','学生']
            }
        },
        {
            path: '/home', // 这个名字,可以自己 看情况取的
            component: layout,// 这个,其实就是 layout.vue 不是那个文件夹名.  今天写这个静态, 以为是文件夹名
            redirect: '/home/business',
            children: [
                // '/chart' 不能加 / ????    /是相对的,  不能用?   
                //路由元信息, 是一个可以让我们 随便定义信息的一个对象        
                {
                    path: 'chart',
                    component: chart,
                    meta: {
                        title: '数据概览',
                        rules: ['超级管理员', '管理员','老师']
                    }
                },
                {
                    path: 'question',
                    component: question,
                    meta: {
                        title: '题库列表',
                        rules: ['超级管理员', '管理员', '老师']
                    }
                },
                {
                    path: 'business',
                    component: business,
                    meta: {
                        title: '企业列表',
                        rules: ['超级管理员', '管理员','老师']
                    }
                },
                {
                    path: 'user',
                    component: user,
                    meta: {
                        title: '用户列表',
                        rules: ['超级管理员', '管理员']
                    }
                },
                {
                    path: 'subject',
                    component: subject,
                    meta: {
                        title:'学科列表',
                        rules: ['超级管理员', '管理员', '老师', '学生']
                    }
                },
            ]


        }
    ]
})
// 导入nprogress   start()开启    done()结束
// import NProgress from 'nprogress'
// // 导入nprogress对应css
// import 'nprogress/nprogress.css'
// // 路由请求拦截
// //路由响应拦截
// // 路由前守卫
// router.beforeEach((to, from, next) => {
//     // 进度条开启
//     NProgress.start()
//     window.console.log(from);
//     window.console.log(to);
//     window.console.log(next);
// })
// //路由后守卫
// // 进入后守卫
// router.afterEach((to) => {
//     // 进度条结束
//     NProgress.done()
//     document.title = to.meta.title    //to就相当于当前的$route信息
// })

export default router