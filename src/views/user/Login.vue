<template>
  <div class="loginBox">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="user">
        <el-input
          type="text"
          v-model="ruleForm.user"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getLogin } from "../../api/index";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(value)) {
          callback(new Error("密码输入不合法"));
        } else {
          callback();
        }
      }
    };

    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (!/^[a-z0-9_-]{3,16}$/.test(value)) {
          callback(new Error("应户名输入不合法"));
        } else {
          callback();
        }
      }
    };
    return {
      ruleForm: {
        pass: "",
        user: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        user: [{ validator: validateUser, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          getLogin({
            account: this.ruleForm.user,
            pwd: this.ruleForm.pass,
            imgcode: "hhhh",
          }).then((res) => {
            console.log(res);
            // console.log(res.data.token);
            // console.log(res.data.menus);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("menus", JSON.stringify(res.data.menus));
            this.$router.push("/");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.loginBox {
  width: 100%;
  height: 100%;
}
</style>