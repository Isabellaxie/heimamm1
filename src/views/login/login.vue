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
          <el-col :span=7 :offset=1> <img class="codeImg" src="../../assets/img/code.png" alt=""></el-col>
        </el-row>
        </el-form-item>
        <!-- 多选框 -->
        <el-form-item>
           <el-checkbox class="color">
             <span>我已阅读并同意</span><el-link type="primary">用户协议</el-link><span>和</span><el-link type="primary">隐私条款</el-link>
           </el-checkbox>
        </el-form-item>
      </el-form>
      <!-- 两个按钮 -->
      <el-button  class="setBtn">登录</el-button>
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
import register from './register.vue'
//为什么,弹性布局,对这个右边图片不生效?
export default {
  components :{
    register
  },
  data() {
    return {
      form: {
        phone:'',
        password:'',
        code:''

      },
      rules :{

      }
    }
  },
  methods: {
    clickRigester (){
      // this.$router.push('/register') // 这个只是弹出一个框,与路由没有关系. 因为注册 的背景是登录页
      this.$refs.register.dialogVisible=true

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
