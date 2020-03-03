<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="form-card" style="opacity:0.8;background-color:transparent;">
      <!-- logo图标 -->
      <div class="logo">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <!-- 输入表单 用element组件-->
      <el-form  style="margin-top:20px;">
          <!-- 手机号 -->
        <el-form-item>
          <el-input placeholder="输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-input placeholder="输入验证码" style="width:60%;"></el-input>
          <el-button plain style="float:right;">验证码</el-button>
        </el-form-item>
        <!-- 勾选栏 -->
        <el-form-item>
          <el-checkbox label="我已同意----"></el-checkbox>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button style="width: 100%;" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    onSubmit () {}
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/BGBymine.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-card {
    width: 400px;
    height: 320px;
    background-color: rgb(86, 38, 141);
    .logo {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}
</style>
