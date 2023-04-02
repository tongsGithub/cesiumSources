<template>
   <!-- 注册页面整体盒子 -->
   <div class="reg-container">
      <div class="reg-box">
         <div class="title-font">欢迎您注册智慧校园数字管理系统</div>
         <div class="input-reg">
         <el-form ref="form" :model="form" :rules="rulesObj">
            <el-form-item prop="username">
               <el-input v-model="form.username"  placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item prop="password">
               <el-input type="password" v-model="form.password"  placeholder="请输入密码" />
            </el-form-item>
            <el-form-item prop="repassword">
               <el-input type="password" v-model="form.repassword"  placeholder="请再次输入密码" />
            </el-form-item>
            <el-form-item>
               <el-button class="btu-reg" type="primary" @click="registerFn">注册</el-button>
               <el-link  type="warning">去登录</el-link>
            </el-form-item>
         </el-form> 
         </div>
         <div class="title-box"></div>
      </div>
      <div></div>
   </div>
</template>
 
<script>
import {registerAPI} from '@/api'
export default {
   name: 'my_reg',
   data() {
      const samePwdFn=(rule,value,callback)=>{
        if(value !==this.form.password){
         callback(new Error('两次输入的密码不一致!'));
        } else{
         callback();
        }
      }
      return {
         form: {//表单数据对象
            username:'',
            password:'',
            repassword:''
         },
         rulesObj:{//表单规则校验对象
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
            repassword:[
               {required:true,message:'请再次输入密码',trigger:'blur'},
               {
                  validator:samePwdFn,
                  trigger:'blur'
               }
            ] 
         }




      }
   },
   methods: {//注册点击事件
      registerFn(){
         //js form兜底校验 
         this.$refs.form.validate(async valid => {
            if (valid){//通过校验
               console.log('通过验证')
               console.log(this.form.username)
               const { data:res } = await registerAPI(this.form)
               console.log('success')
               if(res.code !==0) return this.$message.error(res.message);//注册失败
               this.$message.success(res.message);
               this.$router.push('/login');
            }
             else{
               return false ;//阻止默认提交行为
            }
         })
      }
   },
   
}
</script>
<style lang="less" scoped>
.reg-container {
   width: 100%;
   height: 100%;
   background-color: hsl(202, 69%, 43%);
}

.reg-box {
   width: 90vw;
   height: 80vh;
   background-color: rgb(8, 148, 207);
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   border-radius: 40px;
}

.title-font {
   position: absolute;
   left: 50%;
   top: 15%;
   transform: translate(-50%, -50%);
   font-size: 28px;
}
.btu-reg{
   width: 100%;
}
.input-reg{
   width: 50%;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
}
</style>