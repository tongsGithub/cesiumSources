<template>
    <div class="home">
        <div class="home_cesium">

            <div id="cesiumContainer">
                <div class="topUI"></div>
                <div class="map3d-bt0" v-on:click="showinfo">
                    <h2>安全管理</h2>
                </div>
                <div class="map3d-bt1">
                    <h2>教学管理</h2>
                </div>
                <div class="map3d-bt2">
                    <h2>运维管理</h2>
                </div>
                <div class="map3d-bt3">
                    <h2>能源管理</h2>
                </div>
                <div class="map3d-bt4">
                    <h2>应急管理</h2>
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
        showinfo() {
            alert("我是安全模块")
        },
        butClose() {//退出登录click
            //确认退出提示框
            this.$confirm('既将退出系统, 是否继续?', '系统提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //清楚token
                this.$store.commit('updateToken','')
                //跳转页面
                this.$router.push('/login')
                
            }).catch(() => {//取消
            });
        }
    },
    mounted() {
        initViewer(cesiumContainer);
        // CesiumCamera.myFlyTo();
        // CesiumCamera.setView();
        addModel();


    },
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
            left: 20%;
            bottom: 50px;
            //background: #303336 url(../../Img/home/清空.png); 
            border: 1px solid #9fd3e0;
            background-size: cover;
            background-color: #4e9ce6;
            z-index: 6;
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
            z-index: 6;
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
            z-index: 6;
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
            z-index: 6;
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
            z-index: 6;
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
            font-size: 20px;
            margin: 10px;
            margin-top: 2px;
        }

        h2:hover {
            color: #324766;
        }





    }

}</style>
