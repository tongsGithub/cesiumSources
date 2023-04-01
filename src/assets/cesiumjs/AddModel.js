import { viewer } from "./index";
import * as Cesium from 'cesium/Cesium';

function addModel() {
  let position = Cesium.Cartesian3.fromDegrees(117.09624, 39.09055, 5)
        let hpRoll = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(90), Cesium.Math.toRadians(0), Cesium.Math.toRadians(0));//弧度
        let orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpRoll);
        let model = viewer.entities.add({
            // 模型id
            id: 'model',
            position: position,
            orientation: orientation,
            // 模型资源
            model: {
                minimumPixelSize: 1,
                // 模型路径
                uri: './Static/未标题 4.gltf',
                // colorBlendMode:Cesium.ColorBlendMode.REPLACE,
                // color:Cesium.Color.RED,
                //轮廓
                // shadows: Cesium.ShadowMode.ENABLED,
                // silhouetteColor:Cesium.Color.BLUE,
                silhouetteSize: 0,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(100, 20000),
            }
        })
    //图书馆模型
    // let position001 = Cesium.Cartesian3.fromDegrees(117.09753, 39.09045, 5)
    // let model_tuShuGuan = viewer.entities.add({
    //     // 模型id
    //     id: 'model001',
    //     position: position001,
    //     orientation: orientation,
    //     // 模型资源
    //     model: {
    //         minimumPixelSize: 1,
    //         // 模型路径
    //         uri: './Static/图书馆.gltf',
    //          //colorBlendMode:Cesium.ColorBlendMode.REPLACE,
    //         // color:Cesium.Color.SLATEGREY,
    //         //轮廓
    //         // shadows: Cesium.ShadowMode.ENABLED,
    //         // silhouetteColor:Cesium.Color.BLUE,
    //         silhouetteSize: 0,
    //         distanceDisplayCondition: new Cesium.DistanceDisplayCondition(100, 20000),
    //     }
    // })
    //理学院
    let position002 = Cesium.Cartesian3.fromDegrees(117.09803, 39.09110, 5)
    let model_liXueYuan = viewer.entities.add({
        // 模型id
        id: 'model002',
        position: position002,
        orientation: orientation,
        // 模型资源
        model: {
            minimumPixelSize: 1,
            // 模型路径
            uri: './Static/理学院.gltf',
            // colorBlendMode:Cesium.ColorBlendMode.REPLACE,
            // color:Cesium.Color.RED,
            //轮廓
            // shadows: Cesium.ShadowMode.ENABLED,
            // silhouetteColor:Cesium.Color.BLUE,
            silhouetteSize: 0,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(100, 20000),
        }
    })
    let position003 = Cesium.Cartesian3.fromDegrees(117.09823, 39.09210, 5)
    let model_fengYuCaoChang = viewer.entities.add({
        // 模型id
        id: 'model003',
        position: position003,
        orientation: orientation,
        // 模型资源
        model: {
            minimumPixelSize: 1,
            // 模型路径
            uri: './Static/风雨操场.gltf',
            // colorBlendMode:Cesium.ColorBlendMode.REPLACE,
            // color:Cesium.Color.RED,
            //轮廓
            // shadows: Cesium.ShadowMode.ENABLED,
            // silhouetteColor:Cesium.Color.BLUE,
            silhouetteSize: 0,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(100, 20000),
        }
    })
    let position004 = Cesium.Cartesian3.fromDegrees(117.09533, 39.09243, 5)
    let model_diYiShiTang = viewer.entities.add({
        // 模型id
        id: 'model004',
        position: position004,
        orientation: orientation,
        // 模型资源
        model: {
            minimumPixelSize: 1,
            // 模型路径
            uri: './Static/第一食堂.gltf',
            // colorBlendMode:Cesium.ColorBlendMode.REPLACE,
            // color:Cesium.Color.RED,
            //轮廓
            
            shadows: Cesium.ShadowMode.ENABLED,
           
            silhouetteColor:Cesium.Color.BLUE,
            silhouetteSize: 0,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(100, 20000),
        }
    })
  viewer.flyTo(model)
}

export {
  addModel
}