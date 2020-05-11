import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
    // ...
    state:{
        //用户信息,保存,后面修改方便获取,统一管理
        // 角色也一样,
        userInfo:'',
        roleObj:{
            1:'超级管理者',
            2:'管理者',
            3:'老师',
            4:'学生'
        },
        role:'超级管理者' // 登录时,先以这个为默认身份,可以让它登录进来再说, 然后,再后面通过来路由前守卫,来让它知道哪些角色 是没有权限的
    }
})
export default store

