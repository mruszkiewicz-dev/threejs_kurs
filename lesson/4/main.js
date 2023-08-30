import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const material = new THREE.MeshBasicMaterial({
   map: new THREE.TextureLoader().load('./textures/gltf_embedded_0.png'), // Ścieżka do pliku tekstury
});

let gltf;

const loader = new GLTFLoader();
loader.load('./source/Cow.glb', function ( loadedGltf ) {
   gltf = loadedGltf;

   gltf.scene.traverse((child) => {
      if (child.isMesh) {
          child.material = material;
      }
  });

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 5;


function animate() {
   requestAnimationFrame(animate);

   // Odniesienie do wczytanego modelu
   if (gltf) {
       gltf.scene.rotation.y += 0.01;
   }

   renderer.render(scene, camera);
}
animate();
