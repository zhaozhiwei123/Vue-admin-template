<template>
  <div class="login">
    <div class="login_input">
      <div class="title">登录</div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        number: "",
        pwd: ""
      }
    };
  },
  methods: {
    ...mapActions(["Login"]),
    onSubmit() {
      if (!this.form.number) {
        this.$message.error("请输入账号");
        return;
      }
      if (!this.form.pwd) {
        this.$message.error("请输入密码");
        return;
      }
      this.Login().then(res => {
        console.log(res);
        this.$router.push("/indexDesktop/welcome")
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login /deep/ .el-form-item .el-form-item__label{
  color: #fff;
}
.login {
  height: 100%;
  background: #2d3a4b;
  .login_input {
      width: 500px;
      height: 100%;
      margin: 0 auto;
      padding-top: 80px;
      .title {
        margin: 0 auto;
        padding: 50px 0;
        color: #fff;
        text-align: center;
      }
    }
}
</style>