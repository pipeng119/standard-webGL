htmlViewPlugin = function(){
    this.viewer = null,
    this.entityArray = [],
    this.init = function(viewer){
        console.log("1111111111111111111111")
        this.viewer = viewer;
        this.leftClick();
        $(document).delegate("#htmlPlugin-drawcircle","click",()=>{
            this.drawCircle();
        })
        $(document).delegate("#htmlPlugin-clearAll","click",()=>{
            this.clearAll();
        })
    },
    this.drawCircle = ()=>{
        console.log("222222222222222222222");
        this.camera = this.viewer.camera;
        this.entities = this.viewer.entities;
        this.ellipsoid = this.viewer.scene.globe.ellipsoid;
        // 初始化移除临时绘制对象，并重置参数
        this.entities.remove(this.templateEntity);
        if(this.drawColor){this.addEntity()}
        this.tempId = Math.random();
        this.circleR = 0;
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.drawColor = 'red';
        let DrawCircleEvent = this.handler.setInputAction((leftClick)=>{
            this.ControlMouseEvent(false);
            let cartesian1 = this.camera.pickEllipsoid(leftClick.position,this.ellipsoid);
            let cartographic1 = this.ellipsoid .cartesianToCartographic(cartesian1);
            this.circleLon = Cesium.Math.toDegrees(cartographic1.longitude).toFixed(4);
            this.circleLat = Cesium.Math.toDegrees(cartographic1.latitude).toFixed(4);
            this.templateEntity = {
                id: this.tempId,
                position: Cesium.Cartesian3.fromDegrees(this.circleLon, this.circleLat),
                // name: "red ellipse on surface",
                ellipse: {
                    semiMinorAxis: new Cesium.CallbackProperty(()=>{
                        return this.circleR
                    },false),
                    semiMajorAxis: new Cesium.CallbackProperty(()=>{
                        return this.circleR
                    },false),
                    material: Cesium.Color.fromCssColorString(this.drawColor).withAlpha(0.5)
                },
                definitionChanged: ""
            }
            this.tempTrueEntity = this.entities.add(this.templateEntity)
            let DrawCircleMoveEvent = this.handler.setInputAction((movement)=>{
                let cartesian2 = this.camera.pickEllipsoid(movement.endPosition,this.ellipsoid);
                let rLon = cartesian2.x - cartesian1.x;
                let rLat = cartesian2.y - cartesian1.y;
                this.circleR = Math.sqrt(rLon*rLon + rLat*rLat).toFixed(1);
                

            },Cesium.ScreenSpaceEventType.MOUSE_MOVE);

            this.handler.setInputAction((movement)=>{
                this.handler.destroy();
                this.ControlMouseEvent(true);
                this.entityArray.push({id: this.tempId,r: this.circleR, lon: this.circleLon, lat: this.circleLat, color: this.drawColor})
            },Cesium.ScreenSpaceEventType.LEFT_UP);
        },Cesium.ScreenSpaceEventType.LEFT_DOWN)
    },
    this.clearAll = ()=>{
        this.entities.removeAll();
        this.drawColor = null;
        $("#htmlPlugin-detail").html("")
    },
    this.addEntity = ()=>{
        this.viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(this.circleLon, this.circleLat),
            name: "Blue translucent, rotated, and extruded ellipse with outline",
            id: this.tempId,
            ellipse: {
                semiMinorAxis: this.circleR,
                semiMajorAxis: this.circleR,
                material: Cesium.Color.fromCssColorString(this.drawColor).withAlpha(0.5)
            }
        });
    },
    this.leftClick = ()=>{
        console.log("leftClick")
        this.scene = this.viewer.scene;
        this.handler = new Cesium.ScreenSpaceEventHandler(this.scene.canvas);//cesium上的鼠标操作监听事件
        // 直接鼠标左键点击事件
        this.handler.setInputAction((movement) => {
            var pickedObjects = this.scene.pick(movement.position);
            if(pickedObjects.id) {
                if(!this.entityArray.length){return;}
                for(var k of this.entityArray){
                    if(k.id == pickedObjects.id._id){
                        let temp = `<li>r: ${k.r}</li><li>lon: ${k.lon}</li>
                        <li>lat: ${k.lat}</li><li>color: ${k.color}</li>`;
                        $("#htmlPlugin-detail").html(temp)
                    }
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    },
    this.ControlMouseEvent = (isForbid)=>{
        this.viewer.scene.screenSpaceCameraController.enableTranslate = isForbid;
        this.viewer.scene.screenSpaceCameraController.enableLook = isForbid;
        this.viewer.scene.screenSpaceCameraController.enableTilt = isForbid;
        this.viewer.scene.screenSpaceCameraController.enableZoom = isForbid;
        this.viewer.scene.screenSpaceCameraController.enableRotate = isForbid;
    }
}