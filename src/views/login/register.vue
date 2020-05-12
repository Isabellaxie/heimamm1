<template>
  <el-dialog :visible.sync="dialogVisible" class="register" width="600px">
    <!-- 重设头与底部 -->
    <div class="title" slot="title">
      用户注册
    </div>
    <el-form :model="form" :rules="rules" ref="form" label-width="60px">
      <!-- 头像 -->
      <el-form-item label="头像" prop="avatar">
        <!-- 不能双向绑 -->
        <!-- 图片上传: action: 请求图片地址, 基地址 +请求的  返回的图片地址, name=imageUrl, 如果有返回值,就显图片,如果没有,就显+,
                分上传前,类型,大小, 和上传成功后,-->
        <el-upload
          class="avatar-uploader"
          action="http://127.0.0.1/heimamm/public/uploads"
          name="image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <!--头像以下 -->
      <el-form-item label="昵称" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <!-- 要有栅格的 手机验证码和图形码 -->
      <el-form-item label="图形码" prop="code">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.code"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <img :src="codeUrl" @click="clickCode" class="codeImg" alt="" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="验证码" prop="rcode">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.rcode"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-button @click="getRecode" :disabled="totalTime != 15"
              >获取验证码<span v-if="totalTime != 15">{{
                totalTime
              }}</span></el-button
            >
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div class="footer" slot="footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitClick">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { register, getPhoneCode } from "@/api/register.js";
export default {
  data() {
    return {
      dialogVisible: false,
      imageUrl: "",
      baseUrl: process.env.VUE_APP_URL,
      codeUrl: process.env.VUE_APP_URL + "/captcha?type=sendsms",
      form: {
        username: "",
        phone: "",
        email: "",
        avatar: "",
        password: "",
        rcode: "",
        code: "",
      },
      //发送手机短信验证码,有效输入时间为30s
      totalTime: 15,
      rules: {
        username: [
          { required: true, message: "请输入你的昵称", trigger: "change" },
          {
            max: 4,
            min: 2,
            messsage: "请输入2-4位长度的名字",
            trigger: "change",
          },
        ],
        password: [
          { required: true, message: "请输入你的密码", trigger: "change" },
          {
            max: 8,
            min: 8,
            messsage: "请输入8位长度的名字",
            trigger: "change",
          },
        ],
        //邮箱和手机是 用到正则
        phone: [
          { required: true, message: "请输入你的手机号", trigger: "change" },
          {
            validator: (rules, value, callback) => {
              let _reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
              if (_reg.test(value)) {
                callback();
              } else {
                callback("请输入正确的手机号码");
              }
            },
          },
        ],
        email: [
          { required: true, message: "请输入你的邮箱", trigger: "change" },
          {
            validator: (rules, value, callback) => {
              let _reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
              if (_reg.test(value)) {
                callback();
              } else {
                callback("请输入正确的邮箱");
              }
            },
          },
        ],
        avatar: [{ required: true, message: "请上传头像", trigger: "change" }],
        code: [
          { required: true, message: "请输入验证码", trigger: "change" },
          { min: 4, max: 4, message: "请输入4位验证码", trigger: "change" },
        ],
        rcode: [
          {
            required: true,
            message: "请输入手机短信验证码",
            trigger: "change",
          },
          {
            max: 4,
            min: 4,
            message: "请输入正确4位手机短信验证码",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    //点击获取手机短信验证码
    //先这两个参数验证通过
    getRecode() {
      var _pass = true;
      this.$refs.form.validateField(["phone", "code"], (error) => {
        //验了两个,所以会有两个结果,只要有返回错的,就不过通过
        if (error != "") {
          //就是有错
          _pass = false;
        }
      });
      if (_pass == false) {
        return;
      } else {
        this.totalTime--;
        var timeId = setInterval(() => {
          this.totalTime--;
          if (this.totalTime <= 0) {
            clearInterval(timeId);
            this.totalTime = 15;
          }
        }, 1000);
        getPhoneCode({ phone: this.form.phone, code: this.form.code }).then(
          (res) => {
            window.console.log("返回的手机短信验证码", res);
            // this.$message.success("手机短信验证码为:", res.data.captcha + ""); // 后面不能再+"" 前面如下改一下就可以了
            this.$message.success("手机短信验证码为:" + res.data.captcha);
          }
        );
      }
      // 倒计时
      //  totalTime--;
    },
    //点击图形码时,就发一次请求新的验证码
    clickCode() {
      this.codeUrl = this.baseUrl + "/captcha?type=sendsms?=" + Date.now();
    },
    handleAvatarSuccess(res) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      //或者:工作中,用这个较多,很多人不喜欢上面的东西
      window.console.log("返回的图上片地址", res);
      this.imageUrl = this.baseUrl + "/" + res.data.file_path;
      //保存图片的地址
      this.form.avatar = res.data.file_path;
      // 在上传时,部分字段验证  参数:array/string ['avatar', 'name']会返回两个结果
      this.$refs.form.validateField("avatar");
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png" || "image/gif";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submitClick() {
      this.$refs.form.validate((result) => {
        if (result) {
          //注册成功请求, 提示成功信息,关闭 注册框子,再次打开注册还是有,所以要清空
          register(this.form).then((res) => {
            window.console.log("注册信息", res);
            this.$message.success("注册成功");
            this.dialogVisible = false;
            // 下面这种方法不行,打开,还是有验证信息在.得用resetField 用watch
            // this.form={
            //   username:"",
            //   phone:"",
            //   email:"",
            //   avatar:"",// 头像却不能清空?
            //   password:"",
            //   rcode:"",
            // },
            // this.imageUrl=''
          });
        }
      });
    },
  },
  watch: {
    dialogVisible(newVal) {
      if (newVal == false) {
        this.$refs.form.resetFields();
        this.imageUrl = "";
      }
    },
  },
};
</script>

<style lang="less">
.register {
  height: 786px;
  border: 1px solid rgba(78, 78, 78, 1);
  .el-dialog__header {
    height: 53px;
    background-color: rgb(6, 182, 250);
    padding: 0;
    text-align: center;
    line-height: 53px;
    color: #fff;
  }
  .el-icon-close:before {
    color: #fff;
  }
  .footer {
    text-align: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar-uploader {
    width: 178px;
    margin: 0 auto;
  }
  .codeImg {
    width: 144px;
    height: 41px;
  }
  .el-col.el-col-7.el-col-offset-1 {
    height: 41px;
  }
}
</style>
