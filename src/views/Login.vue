
<template>
  <div class="login">
    <div class="login_box">
      <h3>急诊后台管理系统</h3>
      <el-form :model="loginData" :rules="rules" ref="ruleForm">
        <el-form-item label="工号：" prop="no">
          <el-input v-model="loginData.No" placeholder="工号"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="loginData.Pwd" placeholder="工号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance } from "vue";
import { setSession} from "../utils/session"
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import loginApi from '../api/login'
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const { ctx }: any = getCurrentInstance();
    const ruleForm = ref<Element | null>(null);
    const loginData = reactive({
      No: "",
      Pwd: "",
      HospitalAreaId: "ccec3b76-7e1f-e911-80cd-0050568e1b08",
    });
    const rules = reactive({
      No: [{ required: true, message: "请输工号", trigger: "blur" }],
      Pwd: [{ required: true, message: "请输密码", trigger: "blur" }],
    });
    const login = () => {
      ruleForm.value?.validate((valid: any) => {
        if (valid) {
          console.log({...loginApi})
          // fetch("http://172.16.0.161:4085/api/v1/Account/Login", {
          //   body: JSON.stringify(loginData),
          //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          //   credentials: "same-origin", // include, same-origin, *omit
          //   headers: {
          //     "user-agent": "Mozilla/4.0 MDN Example",
          //     "content-type": "application/json",
          //   },
          //   method: "POST", // *GET, POST, PUT, DELETE, etc.
          //   mode: "cors", // no-cors, cors, *same-origin
          //   redirect: "follow", // manual, *follow, error
          //   referrer: "no-referrer", // *client, no-referrer
          // })
          //   .then((res) => res.json())
          //   .then((data) => {
          //     if(data.Status){
          //         setSession('user',data.Data);
          //         router.push("/index/home");
          //         store.commit('public/SET_USER', data.Data)
          //     }
          //     ctx.$msg[data.Status ? "success" : "warning"](data.Message);

          //   });
        }
      });
    };
    return {
      loginData,
      rules,
      ruleForm,
      login,
    };
  },
});
</script>
<style lang="less" scoped>
.login {
  background: url("../assets/image/login.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login_box {
    //   text-align: center;
    background: #fff;
    //   height: 400px;
    width: 500px;
    box-shadow: 0px 0px 20px #ccc;
    transition: all 0.3s;
    padding: 20px;
    box-sizing: border-box;
    &:hover {
      box-shadow: 0px 0px 30px rgb(19, 202, 74);
      //   margin-top: -10px;
    }
    h3 {
      text-align: center;
      font-size: 20px;
      line-height: 60px;
      margin-bottom: 20px;
    }
    .el-button {
      margin-top: 20px;
      width: 380px;
      margin-left: 55px;
    }
    .el-input {
      width: 380px;
    }
  }
}
</style>
