<template>
  <div class="layout">
<el-container>
      <el-header class="header">
      <div class="left">
        <i class="el-icon-s-fold icon" @click="collapse=!collapse"></i>
        <img class="logo" src="../../assets/img/logo.png" alt="">
        <span class="title">黑马面面</span>
      </div>
      <div class="right">
        <img class='avatar' src="../../assets/img/user.png" alt="">   
        <span class="span2">李达,你好</span>
        <el-button type="primary" class="exit">退出</el-button>
      </div>
  </el-header>
  <el-container>
    <el-aside width="auto" class="aside">
        <el-menu
      :default-active="$route.fullPath"
      class="menuTransition"
      :collapse='collapse'
      :router='true'
      >
<!-- 移动端也是, pc与移动是很像的; 跳由跳转 :router 记得要加 :  因为要动态 -->
<!-- 路由引出的问题:  这是固定,如果 以layout为固定, 然后 在内部,不跳转下, 就可以展示,分组件, 加:router 
然后, 关联的,index:   /home/chart等,  上头,就动态跟着 同步, :default-active=  $route.fullPath  这个是可以获取当前发址后一半的
还有 重定向, 就一句代码, redirect:'/home/chart' 这次书写,还是忘记了了不少. 得多写几遍呀
 -->
      <el-menu-item index="/home/chart">
        <i class="el-icon-pie-chart"></i>
        <span slot="title">数据概览</span>
      </el-menu-item>
      <el-menu-item index="/home/user">
        <i class="el-icon-user"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
      <el-menu-item index="/home/question">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">题库列表</span>
      </el-menu-item>
      <el-menu-item index="/home/business">
        <i class="el-icon-office-building"></i>
        <span slot="title">企业列表</span>
      </el-menu-item>
      <el-menu-item index="/home/subject">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">学科列表</span>
      </el-menu-item>
        </el-menu>
    </el-aside>
    <el-main class="main">
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container> 
  </div>
</template>

<script>
export default {
    data() {
        return {
            collapse:false
        }
    },

}
</script>

<style lang='less'>
.layout {
    height: 100%;
    .header {
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 5px 0px rgba(63, 63, 63, 0.35);
        height: 60px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        line-height: 60px;
        .left {
           .icon {
            
            //   height: 24px; 图标不是设宽高 只能是设字体大小,才对
            font-size: 24px;
          }
          .logo {
            width: 33px;
            height: 28px;
            margin-right: 11px;
            margin-left: 4px;
          }
          .title {
            width:92px;
            height:22px;
            font-size:22px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(73,161,255,1);
          }
        }
        .right {
          .avatar {
            width: 43px;
            height: 43px;
          }
          .span2 {
            width:63px;
            height:15px;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(99,99,99,1);
            margin-right: 38px;
            margin-left: 9px;
          }
          .exit {
            width:57px;
            height:28px;
            border-radius:4px;
            line-height: 4px;
            
          }
        }

    }
    .aside {
        // height: 100%;
         background:rgba(255,255,255,1);
        box-shadow:0px 2px 5px 0px rgba(63, 63, 63, 0.35);
  }
  .menuTransition:not(.el-menu--collapse) {
    // 初始宽度
    width: 180px;
  }
    .main {
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 5px 0px rgba(63, 63, 63, 0.35);
    }
}

</style>