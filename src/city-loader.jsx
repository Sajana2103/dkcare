import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import {  useEffect, useRef, useState, } from "react";
import Modal from './modal.jsx';
import Contact from "./pages/contact.jsx";
import App from "./App";


const manager = new THREE.LoadingManager()
const camAndCar = new THREE.Group()
let animation = {
  mixer:'',
  clips:''
}
const objects = [
  { path: '/poughkeepsie.gltf', name: 'city', group: new THREE.Group() },
  // { path: '/car1.gltf', name: 'car', group: new THREE.Group() }

]
const models = []
export const scene = new THREE.Scene()
const loader = new GLTFLoader(manager)
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
loader.setDRACOLoader(dracoLoader);
objects.forEach((object, idx) => {
  loader.load(object.path, gltf => {
    // console.log(gltf)
    gltf.scene.castShadow = true;
    animation.mixer = new THREE.AnimationMixer(gltf.scene)
    animation.clips = gltf.animations
    console.log(gltf.animations)
    
   
    animation.mixer.clipAction(animation.clips[0]).play()


    gltf.scene.traverse((child) => {
      // console.log(child)
    
      if (child instanceof THREE.Mesh) {
        const m = child
        m.receiveShadow = true
        m.castShadow = true
        // console.log(m)
      }
      if ((child instanceof THREE.DirectionalLight).isLight) {
        const l = child
        l.castShadow = true
        l.shadow.bias = -0.5
        l.shadow.mapSize.width = 1024
        l.shadow.mapSize.height = 1024
        // console.log(l)
      }
      
    }, (load) => console.log(load))
    objects[idx].group.add(gltf.scene)

    models.push(new THREE.Group())
    models[idx].add(gltf.scene)
  })
  // scene.add(objects[idx].group)
})


const Loading = () => {


  const loadingRef = useRef()
  const progressRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)
 
  camAndCar.add(models[1])


  useEffect(() => {
    if (loadingRef.current ) {
      const progressBar = document.querySelector('#progress-bar')
      manager.onStart = (url, itemsLoaded, itemsTotal) => {
        console.log('Started Loading File : ' + url + 'Loaded ' + itemsLoaded + ' of '
          + itemsTotal + ' files.')

      }
      manager.onLoad = function () {
        // console.log( 'Loading complete!');
        document.querySelector('#loading-text').innerHTML = "Welcome"
        progressBar.style.display = 'none'

        setTimeout(() => {
          loadingRef.current.style.display = 'none'

        }, 1500)

        // models[1].rotation.set(0, -1.6, 0)
        // models[1].position.set(-45, 1, 0)
        // models[1].scale.set(0.7, 0.7, 0.7)
        
        setIsLoaded(true)

        // const car = city.getObjectByName('Car')
        // objects[1].group.scale.set(0.2,0.2,0.2)
      };
      manager.onProgress = function (url, itemsLoaded, itemsTotal) {
        // console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        progressBar.value = (itemsLoaded / itemsTotal) * 100
      };
      manager.onError = function (url, error) {
        progressRef.innerText = 'Error Loading.'
        loadingRef.current.style.display = 'none'

        // console.log( 'There was an error loading ' + url, error );
      };

    }
  }, [])

  return (
    <>
 
      <div id="loading-container" ref={loadingRef}>
        <h2 id="loading-text" >Loading..</h2>
        <progress value="0" max="100" id="progress-bar" ref={progressRef}>LOADING</progress>
      </div>
      {
        isLoaded && models.length ?
          <App isLoaded={isLoaded} objects={objects}
            models={models}  animation={animation} />
          : <div style={{backgroundColor:"red"}}><h1>NOTHING</h1>NOTHING</div>
      }
    </>
  )
}

export default Loading