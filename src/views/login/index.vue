<template>
<div class="fluid container">
  <div class="login-box shadow">
      <p class="title">Lucimusic</p>
      <div class="login-from">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
          :label-position="labelPosition"
          >
                <el-form-item label="手机号" prop="phone">
                    <el-input type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
          </el-form>
      </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name : 'Login',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          callback();
        }
      };
      return {
        labelPosition : 'top',
        ruleForm: {
          phone: '',
          password: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      //登录操作
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            //  console.log(1)
            let { phone, password} = this.ruleForm
            let params = {
              phone : phone,
              password : password
            }
            // console.log(params)
            this.loginAsync(params)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //登录接口调用
      loginAsync(params){
        // console.log(params)
        this.$api.login(params).then(res=>{
          console.log(res)
          if(res.code == 200){
            this.getUserDetail(res.profile.userId)
            window.sessionStorage.setItem('cookie',res.cookie);
            window.sessionStorage.setItem('token',res.token);
            window.sessionStorage.setItem('loginStatus',true);
            this.setToken(res.token)
            this.setLoginStatus(true)
          }else{
            this.$message.error(res.msg)
          }
        })
      },
      // 获取个人信息
      async getUserDetail(uid){
        try{
          let res =  await this.$api.getUserDetail(uid);
          // console.log(1)
          if(res.code == 200){
          console.log(res)
          let userInfo = res.profile;
          userInfo.lever = res.level
          userInfo.listenSongs = res.listenSongs
          userInfo.createTime = res.createTime
          userInfo.createDays = res.createDays
          window.sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
          this.setUserInfo(userInfo)
          this.$message({
            message : '登录成功',
            type: 'success'
          })
          setTimeout(() => {
            this.$router.push({ path: '/' })
            // console.log(1)
          }, 1500)
          } else {
            this.$message.error(res.msg)
          }
        } catch(error) {
          console.log(error)
        }
      },
      ...mapMutations({
        setToken : 'SET_TOKEN',
        setUserInfo: 'SET_USERINFO',
        setLoginStatus: 'SET_LOGINSTATUS'
      })
    }
  }
</script>

<style>
.login-box{margin-top: 80px;margin-left: 850px; height: 486px;width: 350px;text-align: center;overflow: hidden;}
.login-box .title{margin-top: 60px;margin-bottom: 40px;font-size: 20px;font-weight: bolder;}

</style>

