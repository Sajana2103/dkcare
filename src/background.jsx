import * as THREE from 'three'
import vertexShader from './shaders/vertexShader.glsl'
import fragmentShader from './shaders/fragmentShader.glsl'

// GROUND

const groundGeo = new THREE.PlaneGeometry(10000, 10000);
const groundMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
groundMat.color.setHSL(0.095, 1, 0.75);

export const ground = new THREE.Mesh(groundGeo, groundMat);
ground.position.y = - 33;
ground.rotation.x = - Math.PI / 2;
ground.receiveShadow = true;


// SKYDOME


export const uniforms = {
  topColor: { value: new THREE.Color(0xD7F3FF) },
  bottomColor: { value: new THREE.Color(0xffffff) },
  offset: { value: 33 },
  exponent: { value: 0.6 }
};

const skyGeo = new THREE.SphereGeometry(4000, 32, 15);
const skyMat = new THREE.ShaderMaterial({
  uniforms: uniforms,
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  side: THREE.BackSide
});

export const sky = new THREE.Mesh(skyGeo, skyMat);

