<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="form-card" style="opacity:0.8;background-color:transparent;">
      <!-- logo图标 -->
      <div class="logo">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <!-- 输入表单 用element组件-->
      <el-form :model='formData' ref='formData' :rules='myRules' style="margin-top:20px;">
          <!-- 手机号 -->
        <el-form-item prop='mobile' label="手机号：" inline-message="true">
          <el-input style="width:78%;" v-model='formData.mobile' placeholder="输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop='code' label="验证码：">
          <el-input v-model='formData.code' placeholder="输入验证码" style="width:50%;"></el-input>
          <el-button plain style="float:right;">验证码</el-button>
        </el-form-item>
        <!-- 勾选栏 -->
        <el-form-item prop='checkforBox'>
          <el-checkbox v-model='formData.checkforBox' label="我已同意----"></el-checkbox>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button style="width: 100%;" type="primary" @click="onSubmit()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        mobile: '',
        code: '',
        checkforBox: false
      },
      myRules: {
        mobile: [
          {
            required: true,
            min: 11,
            // 提示信息
            message: '请输入11位手机号码',
            // 规则验证形式
            trigger: ['change', 'blur'],
            // 正则表达式限制
            pattern: /^1[0-9]\d{9}$/
          }
        ],
        checkforBox: [
          {
            validator: function (rule, value, callback) {
              value ? callback() : callback(new Error('必须同意这个条款才行'))
            }
          }
        ],
        code: [
          {
            required: true,
            message: '输入6位验证码！',
            trigger: ['change', 'blur'],
            min: 6 // 最少6位
            // pattern: /^\d{6}$/   // 最少6位
          }
        ]
      }
    }
  },
  methods: {
    // 这里不需要传参，因为 refs可以直接获取表单form的实例对象
    onSubmit () {
      this.$refs.formData.validate().then(() => {
        // 接口
        console.log(this.formData)
        this.$axios({
          url: 'authorizations',
          method: 'POST',
          data: this.formData
        }).then(res => {
          // 成功就需要获取token
          window.localStorage.setItem('userToken', res.data.token)
          // 跳转页面
          this.$router.push('/home')
        }).catch(() => this.$message.error('用户密码错误'))
      })
    }
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
