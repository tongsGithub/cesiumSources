<template>
    <div class="home">
        <div class="home_cesium">
            <div id="cesiumContainer">
                <div class="topUI"></div>
                <div id="transitionBoxLeft" class="transition-box-left">
                    <h2>安全管理模块</h2>
                    <div id="transition" class="transition-box-left-1"></div>
                    <div id="pie_show" class="transition-box-left-2"></div>
                </div>
                <div id="transitionBoxright" class="transition-box-right">
                    <h2>监控视频</h2>
                    <div class="transition-box-right-1">
                    </div>
                    <div class="transition-box-right-2">
                    </div>
                    <div class="transition-box-right-3">
                    </div>
                </div>

                <div id="transitionBoxLeft1" class="transition-box-left1" style="display: none;">
                    <h2>教学管理模块</h2>
                </div>
                <div id="transitionBoxright1" class="transition-box-right" style="display: none;">
                    <h3>视角2</h3>
                </div>

                <div id="transitionBoxLeft2" class="transition-box-left1" style="display: none;">
                    <h2>运维管理模块</h2>
                </div>
                <div id="transitionBoxright2" class="transition-box-right" style="display: none;">
                    <h3>视角3</h3>
                </div>

                <div id="transitionBoxLeft3" class="transition-box-left1" style="display: none;">
                    <h2>能源管理模块</h2>
                </div>
                <div id="transitionBoxright3" class="transition-box-right" style="display: none;">
                    <h3>视角4</h3>
                </div>

                <div id="transitionBoxLeft4" class="transition-box-left1" style="display: none;">
                    <h2>应急管理模块</h2>
                </div>
                <div id="transitionBoxright4" class="transition-box-right" style="display: none;">
                    <h3>视角5</h3>
                </div>











                <button id="bt0" class="map3d-bt0" v-on:click="CloseLeft0">
                    <h2 id="bt0h2" class="map3d-bt0-h2">安全管理</h2>
                </button>

                <button id="bt1" class="map3d-bt1" v-on:click="CloseLeft1">
                    <h2 id="bt1h2">教学管理</h2>
                </button>

                <button id="bt2" class="map3d-bt2" v-on:click="CloseLeft2">
                    <h2 id="bt2h2">运维管理</h2>
                </button>

                <button id="bt3" class="map3d-bt3" v-on:click="CloseLeft3">
                    <h2 id="bt3h2">能源管理</h2>
                </button>

                <button id="bt4" class="map3d-bt4" v-on:click="CloseLeft4">
                    <h2 id="bt4h2">应急管理</h2>
                </button>

                <div>

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
import * as echarts from 'echarts';

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
                this.$router.push('/')

            }).catch(() => {//取消
            });
        },
        CloseLeft0(){
            //左侧子页面控制
            document.getElementById("transitionBoxLeft").style.display="inline";
            document.getElementById("transitionBoxLeft1").style.display="none";
            document.getElementById("transitionBoxLeft2").style.display="none";
            document.getElementById("transitionBoxLeft3").style.display="none";
            document.getElementById("transitionBoxLeft4").style.display="none";
            //右侧子页面控制
            document.getElementById("transitionBoxright").style.display="inline";
            document.getElementById("transitionBoxright1").style.display="none";
            document.getElementById("transitionBoxright2").style.display="none";
            document.getElementById("transitionBoxright3").style.display="none";
            document.getElementById("transitionBoxright4").style.display="none";

            document.getElementById("bt1").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt1h2").style.color = "#ffffff";
            document.getElementById("bt0").style.boxShadow = "0 0 20px #0b5ae3"
            document.getElementById("bt0h2").style.color = "#324766";
            document.getElementById("bt2").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt2h2").style.color = "#ffffff";
            document.getElementById("bt3").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt3h2").style.color = "#ffffff";
            document.getElementById("bt4").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt4h2").style.color = "#ffffff"; 
        },
        CloseLeft1(){
            document.getElementById("transitionBoxLeft1").style.display="inline";
            document.getElementById("transitionBoxLeft2").style.display="none";
            document.getElementById("transitionBoxLeft").style.display="none";
            document.getElementById("transitionBoxLeft3").style.display="none";
            document.getElementById("transitionBoxLeft4").style.display="none";

            document.getElementById("transitionBoxright1").style.display="inline";
            document.getElementById("transitionBoxright2").style.display="none";
            document.getElementById("transitionBoxright").style.display="none";
            document.getElementById("transitionBoxright3").style.display="none";
            document.getElementById("transitionBoxright4").style.display="none";

            document.getElementById("transitionBoxLeft").style.display="none";
            document.getElementById("bt0").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt0h2").style.color = "#ffffff";
            document.getElementById("bt1").style.boxShadow = "0 0 20px #0b5ae3"
            document.getElementById("bt1h2").style.color = "#324766";
            document.getElementById("bt2").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt2h2").style.color = "#ffffff";
            document.getElementById("bt3").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt3h2").style.color = "#ffffff";
            document.getElementById("bt4").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt4h2").style.color = "#ffffff";
        },
        CloseLeft2(){
            document.getElementById("transitionBoxLeft2").style.display="inline";
            document.getElementById("transitionBoxLeft1").style.display="none";
            document.getElementById("transitionBoxLeft").style.display="none";
            document.getElementById("transitionBoxLeft3").style.display="none";
            document.getElementById("transitionBoxLeft4").style.display="none";

            document.getElementById("transitionBoxright2").style.display="inline";
            document.getElementById("transitionBoxright1").style.display="none";
            document.getElementById("transitionBoxright").style.display="none";
            document.getElementById("transitionBoxright3").style.display="none";
            document.getElementById("transitionBoxright4").style.display="none";

            document.getElementById("bt1").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt1h2").style.color = "#ffffff";
            document.getElementById("bt2").style.boxShadow = "0 0 20px #0b5ae3"
            document.getElementById("bt2h2").style.color = "#324766";
            document.getElementById("bt0").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt0h2").style.color = "#ffffff";
            document.getElementById("bt3").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt3h2").style.color = "#ffffff";
            document.getElementById("bt4").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt4h2").style.color = "#ffffff";
        },
        CloseLeft3(){
            document.getElementById("transitionBoxLeft2").style.display="none";
            document.getElementById("transitionBoxLeft1").style.display="none";
            document.getElementById("transitionBoxLeft").style.display="none";
            document.getElementById("transitionBoxLeft4").style.display="none";
            document.getElementById("transitionBoxLeft3").style.display="inline";

            document.getElementById("transitionBoxright2").style.display="none";
            document.getElementById("transitionBoxright1").style.display="none";
            document.getElementById("transitionBoxright").style.display="none";
            document.getElementById("transitionBoxright4").style.display="none";
            document.getElementById("transitionBoxright3").style.display="inline";

            document.getElementById("bt2").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt2h2").style.color = "#ffffff";
            document.getElementById("bt3").style.boxShadow = "0 0 20px #0b5ae3"
            document.getElementById("bt3h2").style.color = "#324766";
            document.getElementById("bt0").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt0h2").style.color = "#ffffff";
            document.getElementById("bt1").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt1h2").style.color = "#ffffff";
            document.getElementById("bt4").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt4h2").style.color = "#ffffff";
        },
        CloseLeft4(){
            document.getElementById("transitionBoxLeft2").style.display="none";
            document.getElementById("transitionBoxLeft1").style.display="none";
            document.getElementById("transitionBoxLeft").style.display="none";
            document.getElementById("transitionBoxLeft3").style.display="none";
            document.getElementById("transitionBoxLeft4").style.display="inline";

            document.getElementById("transitionBoxright2").style.display="none";
            document.getElementById("transitionBoxright1").style.display="none";
            document.getElementById("transitionBoxright").style.display="none";
            document.getElementById("transitionBoxright3").style.display="none";
            document.getElementById("transitionBoxright4").style.display="inline";

            document.getElementById("bt3").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt3h2").style.color = "#ffffff";
            document.getElementById("bt4").style.boxShadow = "0 0 20px #0b5ae3"
            document.getElementById("bt4h2").style.color = "#324766";
            document.getElementById("bt0").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt0h2").style.color = "#ffffff";
            document.getElementById("bt1").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt1h2").style.color = "#ffffff";
            document.getElementById("bt2").style.boxShadow ="0 0 0px #0b5ae3"; 
            document.getElementById("bt2h2").style.color = "#ffffff";
        },

        initCurveFn() {
            var myChart = echarts.init(document.getElementById('transition'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '校园出入人数',
                    left: 'center',
                    top: '10'
                },
                legend: {
                    data: ['出校人数', '入校人数'],
                    top: '40'
                },
                xAxis: {
                    name: '日期',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: [{
                    name: '人数',
                    type: 'value'
                }],
                series: [
                    {
                        name: '出校人数',
                        data: [102, 112, 108, 132, 157, 251, 221],
                        type: 'line',
                        smooth: true,
                        areaStyle: {
                            color: '#fd956a'
                        }
                    },
                    {
                        name: '入校人数',
                        data: [210, 187, 143, 108, 100, 136, 120],
                        type: 'line',
                        smooth: true,
                        areaStyle: {
                            color: '#00ce68'
                        }
                    }
                ]
            });
        },
        picChartFn() {
            const oPie = echarts.init(document.getElementById('pie_show'))
            const oPieopt = {
                title: {
                    top: 10,
                    text: '数量比',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item', // 在图形上才会触发提示
                    formatter: '{a} <br/>{b} : {c} ({d}%)' // 提示的文字显示的格式
                    // a: 系列名
                    // b: 数据名
                    // c: 数值
                    // d: 百分比 (只有饼状图生效)
                },
                color: ['#5885e8', '#13cfd5', '#00ce68', '#ff9565'], // 系列颜色
                legend: { // 图例组件
                    x: 'center',
                    top: 65,
                    data: ['奇趣事', '会生活', '爱旅行', '趣美味'] // 每个部分对应的数据名(要和series里name对应)
                },
                toolbox: { // 工具箱
                    show: true,
                    x: 'center',
                    top: 35,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['45%', '60%'],
                        center: ['50%', '65%'],
                        data: [
                            { value: 300, name: '奇趣事' },
                            { value: 100, name: '会生活' },
                            { value: 260, name: '爱旅行' },
                            { value: 180, name: '趣美味' }
                        ]
                    }
                ]
            }
            oPie.setOption(oPieopt)
        },



    },
    mounted() {
        initViewer(cesiumContainer);
        //CesiumCamera.myFlyTo();
        // CesiumCamera.setView();
        addModel();
        this.initCurveFn();//校园出入人数表
        //this.picChartFn();


    },
    data: () => ({
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
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
            width: 10%;
            position: absolute;
            left: 20%;
            bottom: 50px;
            border: 1px solid #9fd3e0;
            background-color: #4e9ce6;
            z-index: 2;
            cursor: pointer;
            opacity: 80%;
            box-shadow: 0 0 20px #0b5ae3;
        }
        .map3d-bt0-h2{
            color:#324766
        }

        .map3d-bt1 {
            border-radius: 10px;
            height: 32px;
            width: 10%;
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
            width: 10%;
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
            width: 10%;
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
            width: 10%;
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
            box-shadow: 0 0 20px #0b5ae3;
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
            margin-top: 0px;
            margin-left: 0px;
        }

        h2:hover {
            color: #324766;
        }





    }

}

.transition-box-left {
    margin-bottom: 10px;
    width: 40%;
    height: 70%;
    top: 15%;
    border-radius: 10px;
    background-color: #4e9ce6;
    text-align: center;
    color: #ffffff;
    padding: 7px;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 2;
    opacity: 80%;
    
}
.transition-box-left1 {
    margin-bottom: 10px;
    width: 20%;
    height: 70%;
    top: 15%;
    border-radius: 10px;
    background-color: #4e9ce6;
    text-align: center;
    color: #ffffff;
    padding: 7px;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 2;
    opacity: 80%;
    
}

.transition-box-left-1 {
    width: 98%;
    height: 50%;
    top: 49%;
    left: 1%;
    border-radius: 10px;
    background-color: #ffffff;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 3;
    opacity: 80%;
}
.transition-box-left-2 {
    width: 98%;
    height: 40%;
    top: 8%;
    left: 1%;
    border-radius: 10px;
    background-color: #ffffff;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 3;
    opacity: 80%;
}

.transition-box-right {
    margin-bottom: 10px;
    width: 18%;
    height: 70%;
    right: 0px;
    top: 15%;
    border-radius: 10px;
    background-color: #4e9ce6;
    text-align: center;
    color: #ffffff;
    padding: 7px;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 2;
    opacity: 80%
}
.transition-box-right-1{
    margin-bottom: 10px;
    width: 98%;
    height: 25%;
    right: 1%;
    top: 12%;
    border-radius: 15px;
    text-align: center;
    padding: 7px;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 2;
    opacity: 100%;
    background-image: url('../../assets/监控01.png');
}
.transition-box-right-2{
    margin-bottom: 10px;
    width: 98%;
    height: 25%;
    right: 1%;
    top: 42%;
    border-radius: 15px;
    text-align: center;
    padding: 7px;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 2;
    opacity: 100%;
    background-image: url('../../assets/监控01.png');
}
.transition-box-right-3{
    margin-bottom: 10px;
    width: 98%;
    height: 25%;
    right: 1%;
    top: 72%;
    border-radius: 15px;
    text-align: center;
    padding: 7px;
    box-sizing: border-box;
    position: absolute;
    background-repeat: round;
    pointer-events: none;
    z-index: 2;
    opacity: 100%;
    background-image: url('../../assets/监控01.png');
}
</style>
