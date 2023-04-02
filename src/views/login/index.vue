<template>
  <!-- 登录页面整体盒子 -->
  <div class="login-container">
    <div class="log-Box">
      <div class="title-welcome">智慧校园数字管理系统</div>
      <div class="login-img">
        <img class="login-images" src="../../assets/login.jpg" >
      </div>
      
      <div class="login-box">
        <div class="title-font">欢迎您登录</div>
         <div class="input-login">
         <el-form ref="form" :model="form" :rules="rulesObj">
            <el-form-item prop="username">
               <el-input v-model="form.username"  placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item prop="password">
               <el-input type="password" v-model="form.password"  placeholder="请输入密码" />
            </el-form-item>
            <el-form-item>
               <el-button class="btu-login" type="primary" @click="loginFn">登录</el-button>
               <el-link  href="http://localhost:9090/#/reg"  type="warning">去注册</el-link>
            </el-form-item>
         </el-form> 
         </div>
         <div class="title-box"></div>
      </div>
    </div>
      
      <div></div>
   </div>
</template>

<script>
import { loginAPI } from '@/api';
export default {
  name: 'my_login',
  data(){
    return{
      form:{//登录表单返回数据
      username:'',
      password:'',
    },
    rulesObj:{//登录表单规则校验对象
      username:[
               {required:true,message:'请输入用户名',trigger:'blur'},
               {
                  pattern:/^[a-zA-Z0-9{1,10}$]/,
                  message:'用户名必须是1-10的字母数字组合',
                  trigger:'blur'
               }
            ],
            password:[
               {required:true,message:'请输入密码',trigger:'blur'},
               {
                  pattern:/^\S{6,15}$/,
                  message:'密码必须是会6-15位的非空字符',
                  trigger:'blur'
               }
            ],
          }
      }
  },
  methods: {//注册点击事件
    loginFn(){//兜底校验
      this.$refs.form.validate(async valid => {
        if(valid){//通过校验
          const {data:res} = await loginAPI(this.form);
          if(res.code !==0)//用户提示
            return this.$message.error(res.message);
          else{
            //登录成功
            this.$message.success(res.message);
            this.$router.push('/index');
          }
          console.log(res);
        }
        else{//校验失败，阻止默认提交行为
          return false;
        }
      })
    }
  },

}
</script>
<style lang="less" scoped>
.login-container {
   width: 100%;
   height: 100%;
   background-color: hsl(202, 69%, 43%);
}
.title-welcome{
  position: absolute;
   left: 50%;
   top: 10%;
   transform: translate(-50%, -50%);
   font-size: 30px;
}

.log-Box{
  width: 90vw;
  height: 80vh;
  background-color: rgb(8, 148, 207);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
}
.login-img{
  width: 40vw;
  height: 55vh;
  background-color:hsl(202, 69%, 43%);
  backdrop-filter: blur(1px);
  position: absolute;
  left: 10%;
  top: 20%;
  border-radius: 40px;
  box-sizing: border-box;
}
.login-images{
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
.login-box {
  width: 30vw;
  height: 55vh;
  background-color:hsl(202, 69%, 43%);
  padding:60px;
  backdrop-filter: blur(1px);
  position: absolute;
  right: 10%;
  top: 20%;
  border-radius: 40px;
  box-sizing: border-box;
}

.title-font {
   position: absolute;
   left: 50%;
   top: 15%;
   transform: translate(-50%, -50%);
   font-size: 28px;
}
.btu-login{
   width: 100%;
}
.input-login{
   width: 50%;
   position: absolute;
   left: 50%;
   top: 60%;
   transform: translate(-50%, -50%);
}
</style>