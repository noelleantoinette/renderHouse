'use strict';

app.directive('ngWebgl', function () {
    return {
      restrict: 'E',
      scope: {
        modelUrl: '=modelUrl'
      },
      link: function (scope, element, attrs) {

        // Setup selections
        scope.renderFrame = $('#render-frame');
        var renderFrameWidth = scope.renderFrame.width();
        var renderFrameHeight = scope.renderFrame.height();

        // Setup THREE.js variables with scope
        var camera;
            scope.camera = camera;
        var scene;
            scope.scene = scene;
        var renderer;
            scope.renderer = renderer;
        var previous;
            scope.previous = previous;

        // initialize scene
        init();

        // load default model on scope -- jeep model -- via AssimpJSONLoader
        var loader1 = new THREE.AssimpJSONLoader();

        // Watch for changes to scope
        scope.$watch('modelUrl', function (newValue, oldValue){
          // console.log(newValue);
          // console.log(scope.renderFrame[0]);
          // console.log(element);
          if (newValue != oldValue) {
            loadModel(newValue); 
          }
        });

        //!! Handle removing object and adding new object
        function loadModel(modUrl) {
            loader1.load(modUrl, function (object) {
              object.scale.x = object.scale.y = object.scale.z = 0.2;
              object.updateMatrix();
              if (previous) scene.remove(previous);
              scene.add(object);

              previous = object;
            });
          }

        // run load model on current modelUrl
        loadModel(scope.modelUrl);
        animate();

        // Setup THREE.js cameras, scene, renderer, lighting
        function init(){

          // Camera
          camera = new THREE.PerspectiveCamera(50, renderFrameWidth / renderFrameHeight, 1, 2000);
          camera.position.set(2,4,5);

          // Scene
          scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0x000000, 0.035);

          // Lights
          scene.add(new THREE.AmbientLight(0xcccccc));

          var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
          directionalLight.position.x = Math.random() - 0.5;
          directionalLight.position.y = Math.random() - 0.5;
          directionalLight.position.z = Math.random() - 0.5;
          directionalLight.position.normalize();
          scene.add(directionalLight);

          //!!!! Renderer
          renderer = new THREE.WebGLRenderer({ antialias: true });
          renderer.setSize(renderFrameWidth, renderFrameHeight);
          renderer.setClearColor( 0xfafafa );
          element[0].appendChild(renderer.domElement);

          // Check for Resize Event
          window.addEventListener('resize', onWindowResize, false);

          console.log(scene);
        }

        // Handle Resize
        function onWindowResize(event){
          renderer.setSize(renderFrameWidth, renderFrameHeight);
          camera.aspect = renderFrameWidth / renderFrameHeight;
          camera.updateProjectionMatrix();
        }

        // Animate
        var t = 0; // ?
        function animate() {          
          render();
          requestAnimationFrame(animate);
        }

        // Handle re-Rendering of scene for spinning
        function render(){ 
          var timer = Date.now() * 0.0005;
            camera.position.x = Math.cos(timer) * 10;
            camera.position.y = 4;
            camera.position.z = Math.sin(timer) * 10;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        }
      }
    }
});