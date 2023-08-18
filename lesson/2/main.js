import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 75 );

const scene = new THREE.Scene();

const material = new THREE.LineDashedMaterial( { color: 0xffffff } );
const material2 = new THREE.LineBasicMaterial( { color: 'red' } );


const points = [];
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const points2 = [];
points2.push( new THREE.Vector3( 10, 0, 0 ) );
points2.push( new THREE.Vector3( 0, -10, 0 ) );
points2.push( new THREE.Vector3( -10, 0, 0 ) );


const geometry = new THREE.BufferGeometry().setFromPoints( points );
const geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );

const line = new THREE.Line( geometry, material );
const line2 = new THREE.Line( geometry2, material2 );

scene.add( line ,line2 );
renderer.render( scene, camera );

