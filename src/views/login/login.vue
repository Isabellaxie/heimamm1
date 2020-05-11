<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="../../assets/img/login.png" alt="" />
        <span class="span1">黑马面面</span>
        <span class="line">|</span>
        <span class="span2">用户登录</span>
      </div>
      <!-- 表单 -->
      <el-form :model="form" ref='form' :rules='rules'>
        <el-form-item prop="phone">
        <el-input placeholder="请输入手机" prefix-icon="el-icon-user" v-model="form.phone" class="phone">
        </el-input>
        </el-form-item>
        <el-form-item prop="password">
        <el-input placeholder="请输入密码" show-password  prefix-icon="el-icon-lock" v-model="form.password" class="password">
        </el-input>
        </el-form-item>
        <el-form-item prop='code'>
          <el-row>
          <el-col :span="16">
            <el-input placeholder="请输入验证码" prefix-icon="el-icon-key" class="code" v-model="form.code"></el-input>
          </el-col>
          <el-col :span=7 :offset=1>
             <img @click='codeClick'  class="codeImg" :src="code" alt="">
             </el-col>
        </el-row>
        </el-form-item>
        <!-- 多选框 -->
        <el-form-item prop='ischeck'>
           <el-checkbox class="color" v-model="form.ischeck">
             <span>我已阅读并同意</span><el-link type="primary">用户协议</el-link><span>和</span><el-link type="primary">隐私条款</el-link>
           </el-checkbox>
        </el-form-item>
      </el-form>
      <!-- 两个按钮 -->
      <el-button  class="setBtn" @click="clickLogin">登录</el-button>
      <el-button  class="setBtn" @click="clickRigester">注册</el-button>
    </div>
      <!-- 右边 -->
    <div class="right">
      <img src="../../assets/img/login_banner_ele.png" alt="" />
    </div>
     <register ref="register"></register>

  </div>
</template>

<script>
//思路: 根据 设计稿 写静态, 根据 接口,演染数据
// 写好静态,用到element-ui el-input 布局,栅格 文字链接, el-button, 
// 验证表单,form 用到,正则表达式, prop,如果没有,它验证不了.
// import register from './register.vue'
//为什么,弹性布局,对这个右边图片不生效?

// {toLogin}()=> import('@/api/login.js')  不能用于,这样拼接口
import { toLogin } from '@/api/login.js' 
import { saveToken, getToken } from '@/utils/token.js' 
export default {
  components :{
    //这种写法,是在 移动端学会的 
    register: () => import('./register.vue')
  },
  data() {
    return {
      code:process.env.VUE_APP_URL + "/captcha?type=login",
      form: {
        phone:'',
        password:'',
        code:'',
        ischeck:'',
        codeImg:''

      },
      rules :{
        phone:[{required:true, message:'请输入手机号码',trigger:'change'},
        // 自定义验证validator
               {
                 validator:(rules,value,callback) =>{
                   let  _reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
                   if(_reg.test(value)){
                     callback()
                   }else{
                     callback('请输入正确的手机号')
                   }
                 }
         }],
         password:[{
                required:true, message:'请输入密码',  trigger:'change'},
              { max:8, mix:8,message:'请输入8位数密码', trigger:'change'
         }],
        code:[{required:true, message:'请输入验证码', trigger:'change'},
             {max:4,min:4,message:'请输入4位验证码'}],
        ischeck:[{required:true,message:'请勾选协议',trigger:'change'},
             { validator:(rules,value,callback)=>{
               if(value){
                 callback()
               }else {
                 callback('请勾选协议')
               }
             }
             }]
      }
    }
  },
  methods: {
     codeClick() {
       // 解, 一进入页面就得有图片地址, 当再点图片时, data中,必先有一个
      this.code =
        process.env.VUE_APP_URL + "/captcha?type=login&t=" + Date.now();
    },
    // clickcode() {
    //   this.code =process.env.VUE_APP_URL+ '/captcha?type=login&t=' +Date.now()
    //    window.console.log('图片',this.code);
    //    // 已经打印出来,为什么不显示?
    //    //问: 只显第一次点示的, 第二次点击,无效,没有换图片.一进来就是没有验证码图,
    //    // 放生命周期看一下?
    //    //

    // },
    clickRigester (){
      // this.$router.push('/register') // 这个只是弹出一个框,与路由没有关系. 因为注册 的背景是登录页
      this.$refs.register.dialogVisible=true

    },
    clickLogin () {
      // 验证如果通过,就可以跳转,调接口
      window.console.log(111);
      this.$refs.form.validate(result=>{
        // 通过与不通过的处理
        if(result==true){
          toLogin(this.form).then(res=>{
            // 提示登录成功
            this.$message.success('登录成功')
            window.console.log('登录信息',res);
            // 跳转
            this.$router.push('/home')
            // 保存token
           saveToken(res.data.token)
          })

        }

      })
    }
  },
  created() {
    // 有时中间 直接关闭网页, 就来判一下,有无token.如果有,那就回到本页,如果没有就路到登录页
     if(getToken()){
       this.$router.push('/home')
       // 没有token 为什么不用写了呢 因为,它会自动 回到登录页
     }
  },

};
</script>

<style lang="less">
.login {
 height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  //弹性布局
  display: flex;
  justify-content: space-around;
  align-items: center;

  .left {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);

    //内边距
    padding: 43px;
    box-sizing: border-box;
    .title {
       margin-bottom: 29px;
    }
    .span1 {
      width:94px;
      height:22px;
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:400;
      color:rgba(12,12,12,1);
      margin-left:17px;
      margin-right:14px;
     
    }
    span.line { 
      width: 1px;
      height: 28px;
      color:#ccc;
    }
    .span2 {
      width:87px;
      height:21px;
      font-size:22px;
      font-family:PingFangSC;
      font-weight:400;
      color:rgba(12,12,12,1);
      margin-left: 12px;
    }
    .codeImg {
      height: 42px;
      width:110px;
    }
    input.el-input__inner {
    height: 43px;
    }
    .el-col.el-col-7.el-col-offset-1 {
    height: 0;
    }
    .color {
      color:#999;
      font-size: 14px;
    }
    .setBtn {
      width:394px;
      height:40px;
      background:rgba(20,147,250,1);
      border-radius:4px;
      color:#fff;
      margin-bottom: 26px;

    }
    .el-button+.el-button {
     margin-left: 0px;
}
  }
  .right>img {
    //为什么,弹性布局,对这个右边图片不生效?
    margin-top: 200px;
    
  }
}
</style>
