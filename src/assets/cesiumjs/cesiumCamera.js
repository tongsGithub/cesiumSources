import { viewer } from "./index";
import * as Cesium from 'cesium/Cesium';

class CesiumCamera {
  myFlyTo() {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(117.09581, 39.09104, 10000),
      duration: 5,
      // orientation:{
      //   heading:Cesium.Math.toRadians(0,0),
      //   pitch:Cesium.Math.toRadians(-10),
      //   roll:0.0
      // }
    })
  }
  // setView(){
  //   viewer.camera.setView({
  //     destination:Cesium.Cartesian3.fromDegrees(117,39,1000),
  //     orientation:{
  //       heading:Cesium.Math.toRadians(0,0),
  //       pitch:Cesium.Math.toRadians(-20),
  //       roll:0.0
  //     }
  //   })
  // }





}

export default new CesiumCamera