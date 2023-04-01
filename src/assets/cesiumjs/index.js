import * as Cesium from 'cesium/Cesium';
let viewer=null;

  function initViewer(id) {
  viewer = new Cesium.Viewer(id, {
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: true,
  sceneModePicker: false,
  navigationHelpButton: false,
  scene3DOnly: true,
  timeline: false,
  selectionIndicator: false,//是否显示选取指示器组件
  shouldAnimate: false,     //自动播放动画控件
  shadows: true,//是否显示光照投射的阴影
  terrainShadows: Cesium.ShadowMode.RECEIVE_ONLY,//地质接收阴影
  sceneMode: Cesium.SceneMode.SCENE3D,
  //imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
  //url:"http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
  imageryProvider: new Cesium.UrlTemplateImageryProvider({
      url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      minimumLevel: 4,
      maximumLevel: 18
  }),
})
viewer._cesiumWidget._creditContainer.style.display = "none";  //	去除版权信息




}


export{
  initViewer,
  viewer
}