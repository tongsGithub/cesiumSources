<template>
    <div class="home">
        <div class="home_cesium">

            <div id="cesiumContainer">
                <div class="topUI"></div>
                
                    <el-button class="map3d-bt0" @click="(show1=false,show2=false,show3=false,show4=false,show=!show)"><h2>安全管理</h2></el-button>
                    <el-button class="map3d-bt1" @click="(show=false,show2=false,show3=false,show4=false,show1=!show1)"><h2>教学管理</h2></el-button>
                    <el-button class="map3d-bt2" @click="(show=false,show1=false,show3=false,show4=false,show2=!show2)"><h2>运维管理</h2></el-button>
                    <el-button class="map3d-bt3" @click="(show=false,show1=false,show2=false,show4=false,show3=!show3)"><h2>能源管理</h2></el-button>
                    <el-button class="map3d-bt4" @click="(show=false,show1=false,show2=false,show3=false,show4=!show3)"><h2>应急管理</h2></el-button>
                <div>



                    <div style="display: ">
                        <transition name="el-fade-in-linear">
                            <div v-show="show" class="transition-box-left">安全管理</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show" class="transition-box-right">.el-fade-in-linear</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show1" class="transition-box-left">教学管理</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show1" class="transition-box-right">.el-fade-in-linear</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show2" class="transition-box-left">运维管理</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show2" class="transition-box-right">.el-fade-in-linear</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show3" class="transition-box-left">能源管理</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show3" class="transition-box-right">.el-fade-in-linear</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show4" class="transition-box-left">应急管理</div>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <div v-show="show4" class="transition-box-right">.el-fade-in-linear</div>
                        </transition>
                        
                    </div>
                </div>

                <div class="btu-close" v-on:click="butClose">
                    <h2></h2>
                </div>
            </div>
        </div>
        <div class="element_bt">
        </div>

    </div>
</template>

<script>
import { initViewer } from '@/assets/cesiumjs/index';
import CesiumCamera from '@/assets/cesiumjs/cesiumCamera';
import { addModel } from '@/assets/cesiumjs/AddModel';

const Cesium = window.Cesium;
export default {
    name: 'mycesium',
    methods: {
        butClose() {//退出登录click
            //确认退出提示框
            this.$confirm('既将退出系统, 是否继续?', '系统提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //清楚token
                this.$store.commit('updateToken', '')
                //跳转页面
                this.$router.push('/login')

            }).catch(() => {//取消
            });
        }
    },
    mounted() {
        initViewer(cesiumContainer);
        //CesiumCamera.myFlyTo();
        // CesiumCamera.setView();
        addModel();



    },
    data: () => ({
        show:false,
        show1:false,
        show2:false,
        show3:false,
        show4:false,
    })
}

//系统功能设计






</script>

<style scoped lang="scss">
.home {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    .home_cesium {
        width: 100%;
        height: 100%;

        .map3d-bt0 {
            border-radius: 10px;
            height: 32px;
            width: 100px;
            position: absolute;
            left: 22%;
            bottom: 50px;
            //background: #303336 url(../../Img/home/清空.png); 
            border: 1px solid #9fd3e0;
            background-size: cover;
            background-color: #4e9ce6;
            z-index: 2;
            cursor: pointer;
            opacity: 80%
        }

        .map3d-bt1 {
            border-radius: 10px;
            height: 32px;
            width: 100px;
            position: absolute;
            left: 32.5%;
            bottom: 50px;
            border: 1px solid #9fd3e0;
            background-color: #4e9ce6;
            background-size: cover;
            z-index: 2;
            cursor: pointer;
            opacity: 80%
        }

        .map3d-bt2 {
            border-radius: 10px;
            height: 32px;
            width: 100px;
            position: absolute;
            left: 45%;
            bottom: 50px;
            border: 1px solid #9fd3e0;
            background-color: #4e9ce6;
            background-size: cover;
            z-index: 2;
            cursor: pointer;
            opacity: 80%
        }

        .map3d-bt3 {
            border-radius: 10px;
            height: 32px;
            width: 100px;
            position: absolute;
            left: 57.5%;
            bottom: 50px;
            border: 1px solid #9fd3e0;
            background-color: #4e9ce6;
            background-size: cover;
            z-index: 2;
            cursor: pointer;
            opacity: 80%
        }

        .map3d-bt4 {
            border-radius: 10px;
            height: 32px;
            width: 100px;
            position: absolute;
            left: 70%;
            bottom: 50px;
            border: 1px solid #9fd3e0;
            background-color: #4e9ce6;
            background-size: cover;
            z-index: 2;
            cursor: pointer;
            opacity: 80%
        }

        .btu-close {
            position: absolute;
            width: 40px;
            height: 40px;
            right: 10px;
            top: 30px;
            background-image: url("../../assets/close.png");
            background-repeat: round;
            //pointer-events: none;
            z-index: 2;
            opacity: 60%;
            border-radius: 10px;
            background-color: #0099CC;
        }

        .map3d-bt0:hover,
        .map3d-bt1:hover,
        .map3d-bt2:hover,
        .map3d-bt3:hover,
        .map3d-bt4:hover {
            fill: #534545;
            background-size: cover;
            border-color: rgb(9, 151, 186);
            box-shadow: 0 0 10px #0b5ae3;
        }

        .btu-close:hover {
            fill: #534545;
            background-size: cover;
            border-color: rgb(3, 31, 37);
            box-shadow: 0 0 20px #031430;
            border-radius: 20px;
        }

        .topUI {
            position: absolute;
            width: 100%;
            height: 10%;
            margin: 0;
            padding: 0;
            left: 0;
            top: -4px;
            background-image: url("../../assets/toplogo.png");
            background-repeat: round;
            pointer-events: none;
            z-index: 2;
            opacity: 80%
        }

        h2 {
            color: #fff;
            font-size: 18px;
            margin-top: -5px;
            margin-left: -7px;
        }

        h2:hover {
            color: #324766;
        }





    }

}

.transition-box-left {
    margin-bottom: 10px;
    width: 18%;
    height: 70%;
    top:15%;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 2;
    opacity: 80%
}
.transition-box-right{
    margin-bottom: 10px;
    width: 18%;
    height: 70%;
    right: 0px;
    top:15%;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 2;
    opacity: 80%
}
</style>
