import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 'blue' );
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.SphereGeometry(10, 64, 32);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const material = new THREE.MeshPhysicalMaterial({ color: 0x0000ff, clearcoat: 1.0, clearcoatRoughness: 0.1,
	metalness: 0.9,
	roughness: 0.5, });

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 100;

let velocityY = 1;
const gravity = 0.1;

function animate() {
  requestAnimationFrame(animate);

  // Update sphere position based on gravity
  velocityY -= gravity;
  sphere.position.y += velocityY;

  // Collision with the ground
  if (sphere.position.y < -50) {
    sphere.position.y = -50;
    velocityY *= -0.8; // Bounce back with some dampening
  }


  renderer.render(scene, camera);
}

animate();