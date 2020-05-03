<template>
          <el-dialog
        :visible.sync="dialogVisible"
        class="register"
        width="600px"
        >
        <!-- 重设头与底部 -->
        <div class="title" slot='title'>
            用户注册
        </div>
        <el-form :model="form" :rules="rules" ref='form' label-width="60px">
            <!-- 头像 -->
            <el-form-item label="头像" prop="avatar">
                <!-- 不能双向绑 -->
           <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
         <el-form-item label="图形码">
            <el-row>
              <el-col :span="16">
                  <el-input v-model="form.code"></el-input>   
              </el-col>
              <el-col :span="7" :offset='1'>
             <img src="../../assets/img/code.png" class="codeImg" alt="">
              </el-col>
            </el-row>

         </el-form-item>
         <el-form-item label="验证码">
        <el-row>
              <el-col :span="16">
                  <el-input v-model="form.rcode"></el-input>   
              </el-col>
              <el-col :span="7" :offset='1'>
              <el-button >获取用户验证码</el-button>
              </el-col>
            </el-row> 
            </el-form-item>      
        </el-form>
            <div class="footer" slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
      </el-dialog>
    
 
</template>

<script>
export default {
    data() {
        return {
            dialogVisible:false,
            imageUrl:'',
            form :{
                username:"",
                phone:"",
                email:"",
                avatar:"",
                password:"",
                rcode:"",


            },
            rules:{

            }
        }
    },
     methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }

}
</script>

<style lang='less'>
.register {
height:786px;
border:1px solid rgba(78,78,78,1);
    .el-dialog__header{
    height: 53px;
    background-color: rgb(6, 182, 250);
    padding: 0;
    text-align: center;
    line-height: 53px;
    color:#fff;
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
    border-color: #409EFF;
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
  .el-col.el-col-7.el-col-offset-1{
      height: 41px;
  }
       

    
   
}

</style>