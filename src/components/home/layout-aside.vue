<template>
  <div class="layout-aside">
    <!-- logo -->
    <div class="logo">
      <img src="../../assets/logo_admin.png" alt />
    </div>
    <!-- NAV -->
    <el-menu background-color="#5f207433">
      <!-- 一级菜单 -->
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span>一.首页</span>
      </el-menu-item>
      <!-- 二级菜单 -->
      <el-submenu>
        <template slot="title">
          <i class="el-icon-s-operation"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容</el-menu-item>
        <el-menu-item>评论</el-menu-item>
        <el-menu-item>发布文章</el-menu-item>
      </el-submenu>
      <!-- 二级菜单 -->
      <el-submenu>
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item>粉丝1</el-menu-item>
        <el-menu-item>粉丝2</el-menu-item>
        <el-menu-item>粉丝3</el-menu-item>
        <el-menu-item>粉丝4</el-menu-item>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-s-custom"></i>
        <span>三.账户</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-aside {
  background-color: #5f207ab9;
  text-align: center;
  height: 100vh;
  width: 230px;
  .logo img {
    height: 35px;
  }
  .el-menu {
    border: none;
  }
}
</style>
