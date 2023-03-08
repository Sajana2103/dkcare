import { useContext, useRef, useEffect,useState } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as THREE from "three";
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { useDebouncedCallback } from 'use-debounce'
import { useThrottledCallback } from 'use-debounce';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Stats from 'stats.js'

import { sky } from './background.jsx';

import HomePage from './homepage/homepage.jsx';
import { chart } from './homepage/chart'
import Content from './content.jsx';
import DesktopContent from './content-desktop.jsx';
import ContentContainer from './content-container.jsx';

function App({ isLoaded, objects, models, animation }) {

  let size800 = document.body.clientWidth > 800
  const debounced = useDebouncedCallback((value) => {
    setSizes(value)
  }, 1000)
  const checkPosition = () => {
    if (scrollY === 0) {
      console.log('position 0')
      if(size800) backToHeroDesktop()
      else backToHero()

    }
  }
  const posHandler = useThrottledCallback(checkPosition, 1000)
  window.addEventListener('scroll', posHandler)
  let clip = 0
  let timeScale = 0.5
  let rotationSpeed = -0.4
  let reqAnimId
  const clock = new THREE.Clock();
  let stats = new Stats()
  const { mixer, clips } = animation

  stats.showPanel(2)
  // document.body.appendChild(stats.dom)

  gsap.registerPlugin(ScrollTrigger)


  const mainRef = useRef()
  const container = useRef()
  // const mobileRef = useRef()
  const contentRef = useRef()

  let sectionHT = 0
  let sectionH,
    sections = '',
    sectionChildren = '',
    listening = false,
    direction = "down",
    current,
    next = 0,
    titles = '',
    showScene = true,
    sectionHeights = [0],
    contentHeight = 0

  let desktopPages
let mobileHeroContent
  const touch = {
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    startTime: 0,
    dt: 0
  };
  let size = { width: document.body.clientWidth, height: window.clientHeight }

  const camera = models[0].getObjectByName('camera-main')

  // const light = models[0].getObjectByName('Sun')
  const body = models[0].getObjectByName('body')
  const frontWheels = models[0].getObjectByName('wheels_front')
  const backWheels = models[0].getObjectByName('wheels_back')
  const plane = models[0].getObjectByName('Plane')
  const orangeTrack = models[0].getObjectByName('Plane003')

  const sun = models[0].getObjectByName('Sun')
  const emptyObj = new THREE.Object3D()
  emptyObj.position.set(5000, 5000, 300)
  const rootNode = models[0].getObjectByName('RootNode')
  const pos = new THREE.Vector3()
  const position = models[0].getObjectByName('position')
  const carLight = models[0].getObjectByName('Point')

  let renderer
  let renderTarget 
  let renderPass
  let composer 

  const sceneAnimation = () => {
    // --- CAMERA

  renderer = new THREE.WebGLRenderer({
    antialias: true
  })
  // scene.add(city)
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap


  
  // const rover = models[0].getObjectByName('rover_pos')

  carLight.intensity = 10
  carLight.castShadow = true
  carLight.target = body
  carLight.shadow.mapSize.width = 1024
  carLight.shadow.mapSize.height = 1024
  carLight.shadow.bias = -0.001

  sun.shadow.camera.right = -50;
  sun.shadow.camera.top = -50
  sun.shadow.camera.left = 50;
  sun.shadow.camera.bottom = 50;

  const light = new THREE.DirectionalLight(0xffffff, 1);
  sun.target = plane
  const camArea = 500
  let mapSize = 1024 * 4
  sun.castShadow = true
  sun.intensity = 10
  sun.shadow.bias = -0.01
  sun.shadow.mapSize.width = mapSize
  sun.shadow.mapSize.height = mapSize
  sun.shadow.camera.right = -camArea;
  sun.shadow.camera.top = -camArea
  sun.shadow.camera.left = camArea;
  sun.shadow.camera.bottom = camArea;
  sun.shadow.blurSamples = 1
  light.shadow.camera.far = 5000
  light.shadow.camera.near = 1000


  const helper = new THREE.CameraHelper(sun.shadow.camera);
  let d = 100;
  let r = 2;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x5B7DC2, 0.0025);
  // scene.add( new THREE.CameraHelper( sun.shadow.camera ) )
  const hemiLight = new THREE.HemisphereLight(0xE5F0FF, 0xffffff, 10);
  hemiLight.position.set(0, 1000, 0)
  const hemiHelper = new THREE.HemisphereLightHelper(hemiLight, 5);
  scene.add(hemiLight)
  // scene.add(hemiHelper)

  plane.receiveShadow = true

  camera.lookAt(body.position.x)

  new RGBELoader()
    .load('venice_sunrise_1k.hdr', function (texture) {

      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    })

  // --- RENDERER

  // CONTORLS ---------------------------------------------------
  // const camera = models[0].getObjectByName('Camera2')
  // camera.near= 10
  // camera.far = 10000
  // console.log(camera)
  // camera.far = 5000


  // const controls = new OrbitControls(camera,renderer.domElement);
  // controls.listenToKeyEvents(window); // optional

  // // controls.addEventListener('change', render); // call this only in static scenes (i.e., if there is no animation loop)
  // controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  // controls.dampingFactor = 0.05;

  // controls.screenSpacePanning = false;

  // controls.minDistance = 0.1;
  // controls.maxDistance = 10000;

  // controls.maxPolarAngle = Math.PI / 2;

  // scene.add(hemiLight);
  // scene.add(light);

  // scene.add(ground);
  scene.add(sky)
  scene.add(models[0])
  renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, { samples: 4 });

  renderPass = new RenderPass(scene, camera);
  composer = new EffectComposer(renderer, renderTarget);
  composer.addPass(renderPass);
  
  }
  sceneAnimation()

  const onResize = () => {
    
    size.height = window.innerHeight;
    size.width = document.body.clientWidth;
    size800 = size.width > 800
    // if (navRef.current) navRef.current.style.width = `${document.body.clientWidth}px`;
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()
    
    renderer.setSize(size.width, size.height)
    composer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    
  }
  onResize();
  window.addEventListener('resize', onResize)

  // --- TICK
  let mouse = { x: camera.position.x, y: camera.position.y }
  // window.addEventListener('mousemove',(e) => {
    //   e.preventDefault()
    //   mouse.x = (e.clientX/window.innerWidth) * 2 -1
    //   mouse.y = (e.clientY/window.innerHeight) * 2 -1
    //   // camera.position.set(camera.position.x + 1)
    //   camera.position.y -= mouse.y
    //   camera.position.x += -mouse.x
    //   // gsap.to(camera.position,{x:camera.position.x+(-mouse.x*3),y:camera.position.y+(mouse.y)})
    // })


  // console.log(camAndCar)
  // mixer.clipAction(animations[0]).play()
  // mixer.clipAction(animations[1]).play()
  // console.log(animations)
  // const changeAnimation = () => {


  //   mixer.clipAction(animations[clip]).play()
  //   mixer.clipAction(animations[clip]).loop = THREE.LoopOnce
  //    console.log('change animation',clip)
  //   mixer.addEventListener('finished', (e) => {
  //     // console.log('finished',e)
  //     mixer.clipAction(animations[clip]).fadeIn(0.3)
  //     mixer.clipAction(animations[clip]).reset()


  //     mixer.removeEventListener()
  // })
  // }
  // changeAnimation(clip)
  let rotation = 0
  const wheelsRotation = (z) => {
    frontWheels.rotation.z = z
    backWheels.rotation.z = z
  }


  const tick = () => {
    rotation -= rotationSpeed
    stats.begin()
    const delta = clock.getDelta();
    mixer.update(delta * timeScale)
    wheelsRotation(rotation)
    // controls.update()
    position.getWorldPosition(pos)
    camera.lookAt(pos)
    // console.log(pos)
    composer.render();
    // renderer.render(scene,camera)

    stats.end()
    reqAnimId = requestAnimationFrame(tick)


  }
  tick();
  // mixer.clipAction(clips[2]).play()
  // console.log(position.position)
  const changeAnimation = () => {
    // console.log(camera.rotation)
    const camTl = gsap.timeline({ defaults: { ease: `Power1.easeOut`, duration: 2 } })
    if (next === 0) {
      camTl.to(camera.position, { y: 100, x: -300, duration: 2 })
      camTl.to(position.position, { x: 200 }, '<')
      // camTl.to(camera.rotation, {  x: -3, duration: 2 },'<')
      mixer.clipAction(clips[0]).play()

    }

    // console.log(next)
    if (next === 2) {
      // console.log('clip', next)

      camTl.to(camera.position, { y: 3000, x: 3000, duration: 2 })
      camTl.to(position.position, { x: 200 }, '<')



    }
    else if (next === 3) {
      // console.log('clip', next)
      camTl.to(camera.position, { y: 200, x: -400, duration: 2 })


    }
    else if (next === 4) {
      camTl.to(camera.position, { y: 50, duration: 2 })


      console.log('clip', next)
      // mixer.clipAction(clips[0]).timeScale = 0
      gsap.to(mixer.clipAction(clips[0]), { timeScale: 0, duration: 2 })
      let interval = setInterval(function () {
        console.log(rotationSpeed)
        if (rotationSpeed >= 0) {
          clearInterval(interval)
          rotationSpeed = 0
          // console.log('clear slow down', rotationSpeed)
        }
        else rotationSpeed = rotationSpeed + 0.02;
      }, 100);

      // mixer.clipAction(clips[0]).stop()
    }
    else {
      // console.log('reset', clip)

      // camTl.to(camera.position,{y:50,duration:3})
      let interval = setInterval(function () {
        console.log(rotationSpeed)
        if (rotationSpeed <= -0.4) {

          clearInterval(interval)
          rotationSpeed = -0.4
          // console.log('clear speed up', rotationSpeed)
        }
        else rotationSpeed = rotationSpeed - 0.02;
      }, 100);

      gsap.to(mixer.clipAction(clips[0]), { timeScale: 1, duration: 2 })
      // mixer.clipAction(clips[0]).startAt(clipTime*timeScale)
      // mixer.clipAction(clips[0]).play()
    }

  }
  const changeAnimationDesktop = () => {
    console.log(camera.rotation)
    const camTl = gsap.timeline({ defaults: { ease: `Power1.easeOut`, duration: 2 } })
    if (next === 0) {
      camTl.to(camera.position, { y: 100, x: -300, duration: 2 })
      camTl.to(position.position,{ x: 200,y:50 }, '<')
      // camTl.to(camera.rotation, {  x: -3, duration: 2 },'<')
      mixer.clipAction(clips[0]).play()

    }

    console.log(next)
    if(next === 1){
      camTl.to(camera.position, { y: 20,x:-1000, duration: 2 })

      camTl.to(position.position, { x: 400,y:300 }, '<')

    }
    else if (next === 2) {
      console.log('clip', next)
      camTl.to(camera.position, { y: 3000, x: 3000, duration: 2 })
      camTl.to(position.position, { x: 200 }, '<')
    }
    else if (next === 3) {
      console.log('clip', next)
      camTl.to(camera.position, { y: 200, x: -400, duration: 2 })


    }
    else if (next === 4) {
      camTl.to(camera.position, { y: 50, duration: 2 })


      console.log('clip', next)
      // mixer.clipAction(clips[0]).timeScale = 0
      gsap.to(mixer.clipAction(clips[0]), { timeScale: 0, duration: 2 })
      let interval = setInterval(function () {
        console.log(rotationSpeed)
        if (rotationSpeed >= 0) {
          clearInterval(interval)
          rotationSpeed = 0
          console.log('clear slow down', rotationSpeed)
        }
        else rotationSpeed = rotationSpeed + 0.02;
      }, 100);

      // mixer.clipAction(clips[0]).stop()
    }
    else {
      console.log('reset', clip)

      // camTl.to(camera.position,{y:50,duration:3})
      let interval = setInterval(function () {
        console.log(rotationSpeed)
        if (rotationSpeed <= -0.4) {

          clearInterval(interval)
          rotationSpeed = -0.4
          console.log('clear speed up', rotationSpeed)
        }
        else rotationSpeed = rotationSpeed - 0.02;
      }, 100);

      gsap.to(mixer.clipAction(clips[0]), { timeScale: 1, duration: 2 })
      // mixer.clipAction(clips[0]).startAt(clipTime*timeScale)
      // mixer.clipAction(clips[0]).play()
    }

  }
 
  // const touch = {
  //   startX: 0,
  //   startY: 0,
  //   dx: 0,
  //   dy: 0,
  //   startTime: 0,
  //   dt: 0
  // };
  let sectionDuration = 1
  const tlDefaults = {
    ease: "slow.inOut",
    duration: 0.1
  };

  useEffect(() => {
    if (mainRef.current && container.current && contentRef.current && isLoaded ) {
      if (size800) {
        changeAnimationDesktop()
      } else changeAnimation()
      console.log('size',size)
      container.current.appendChild(renderer.domElement)
      document.addEventListener("wheel", handleWheel);
            document.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
      if(contentRef.current && size800) {
        desktopPages = document.querySelectorAll('.desktop-page')
      }
      console.log('desktop pages',desktopPages)
      
      if(contentRef.current && size.width < 800) {
        mobileHeroContent = document.querySelector('#mobile-hero-content')
        sections = mobileHeroContent.querySelectorAll('section')
      }
      
      sectionChildren = document.querySelectorAll('.sections')
      titles = document.querySelectorAll('.title')
      console.log(sectionChildren)
      const tl = gsap.timeline({
        ...tlDefaults,
        scrollTrigger: {
          trigger: '#App',
          start: 'top top',
          end: 'bottom bottom',
          ease: 'Power4.in',
          toggleActions: 'play complete reverse reverse',
          // markers: true
        }
      })
      tl.to('.title', { opacity: 1 })
      if (size800) {
        slideInDesktop()
      } else slideInMobile();
      for (let i = 0; i < sections.length; i++) {
        sectionHeights.push(sections[i].offsetHeight + sectionHeights[i])
        contentHeight += sections[i].offsetHeight
        // console.log(sections[i].offsetHeight)
      }
    }
  }, [isLoaded])

  const backToHero = () => {
    console.log('reverse End of SCENE')
    const backHero = gsap.timeline({
      defaults: tlDefaults,
      onComplete: () => {
        listening = true;
        showScene = true
      }
    })
    gsapTimelines('desktop', 'hero')
    backHero.to('body', { overflow: 'hidden', overflowY: 'hidden' },)

    tick()
    backHero.fromTo('#homepage', { display: 'block', opacity: 0 }, { opacity: 1, duration: 1 })
      // .fromTo('#homepage', { display: 'none', duration: 0 })
      .to('#App', { position: 'fixed' }, '<')
      .to('#scene', { display: 'block', yPercent: 0, position: 'fixed' }, '<')
      .to('#scene', { opacity: 1, duration: 1 }, '<')
      .to('#mobile-hero-content', { display: 'block', opacity: 1 }, '<')
      .to('#scroll-skip', { opacity: 1 }, '<')
  }
  const backToHeroDesktop = () => {
    console.log('reverse End of SCENE')
    const backHero = gsap.timeline({
      defaults: tlDefaults,
      onComplete: () => {
        listening = true;
        showScene = true
      }
    })
    gsapTimelines('desktop', 'hero')
    backHero.to('body', { overflow: 'hidden', overflowY: 'hidden' },)

    tick()
    backHero
    .to('#anchors',{display:'none',opacity:0,duration:0.3})
    .fromTo('#homepage', { display: 'block', opacity: 0 }, { opacity: 1, duration: 1 })
      // .fromTo('#homepage', { display: 'none', duration: 0 })
      .to('#App', { position: 'fixed' }, '<')
      .to('#scene', { display: 'block', yPercent: 0, position: 'fixed' }, '<')
      .to('#scene', { opacity: 1, duration: 1 }, '<')
      .to('#desktop-hero-content', { display: 'block', opacity: 1 }, '<')
      .to('#scroll-skip', { opacity: 1 }, '<')
      window.scrollTo(0,0)

  }
  const gsapTimelines = (screen, action) => {
    let ctx = gsap.context(() => {

      const expTl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: '#expertise',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#services',
          ease: 'Power4.in',
          toggleActions: 'play complete none none',
          pin: size800? true : false,
          scrub: true,
          // markers: true,
          id: 'Expertise',
        }
      })
      const servicesTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#services',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#technologies',
          ease: 'Power4.in',
          toggleActions: 'play complete none none',
          pin: size800? true : false,
          scrub: true,
          // markers: true,
          id: 'Services',
        }
      })
      const techTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#technologies',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#evolution',
          ease: 'Power4.in',
          toggleActions: 'play complete none none',
          pin: size800? true : false,
          scrub: true,
          // markers: true,
          id: 'technologies',
        }
      })
      const evoTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#evolution',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#customers',
          ease: 'Power0',
          toggleActions: 'play complete reverse reverse',
          pin: size800? true : false,
          // pinSpacing: true,
          scrub: 1,
          // onEnter: chart(),
          // markers: true,
          id: 'evolution',
        }
      })

      const customerTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#customers',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '.final-wrapper',
          ease: 'Power0',
          toggleActions: 'play complete reverse reverse',
          pin: size800? true : false,
          pinSpacing: true,
          scrub: 3,
          // markers: true,
          id: 'customers',
        }
      })

      evoTl.timeScale(0.5)

      if (screen === 'desktop' && action === 'hero') {
        expTl.revert()
        servicesTl.revert()
        techTl.revert()
        evoTl.revert()
        customerTL.revert()
        return
      }
      if (screen === 'desktop' && action === 'homepage') {
        expTl.fromTo('#expertise-title', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
          .fromTo('.exp-img', { xPercent: 100 }, { xPercent: 0, stagger: 1 }, '<')
          .fromTo('.exp-text-boxes', { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, stagger: 1 })

        servicesTl.fromTo('#services-title', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
          .fromTo('.serv-right-top-img', { objectPosition:'0 20%'},  { objectPosition:'0 40%'}, '<')
          .fromTo('.serv-right-btm-img', {opacity: 0, objectPosition:'0 20%'},  {opacity: 1, objectPosition:'0 40%',stagger:1}, '<')
          .fromTo('.patient-health', { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, stagger: 1 })


        techTl.fromTo('#tech-title-main', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
          .fromTo('#tech-img-box-1', { opacity: 0 }, { opacity: 1, stagger: 1 })
          .fromTo('#tech-bd-left', { opacity: 0, height: '0%' }, { opacity: 1, height: '100%' })
          .fromTo('#tech-bd-left', { opacity: 0, width: '0%' }, { opacity: 1, width: '100%' }, '<+=25%')
          .fromTo('#tech-img-box-2', { opacity: 0 }, { opacity: 1, }, '<+=25%')
          .fromTo('#tech-bd-straight', { opacity: 0, width: '0%' }, { opacity: 1, width: '100%' })
          .fromTo('#tech-img-box-3', { opacity: 0 }, { opacity: 1, stagger: 1 })
          // .fromTo('#tech-bd-right',{opacity:0,height:'0%'},{opacity:1,height:'100%'},)
          .fromTo('#tech-bd-right', { opacity: 0, width: '0%', translateY: '50%' }, { opacity: 1, width: '100%', translateY: '0%' })
          .fromTo('#tech-bd-right', { height: '0%' }, { height: '100%' }, '<+=50%')
          .fromTo('#tech-img-box-4', { opacity: 0 }, { opacity: 1 }, '<')

        const svgItems = document.getElementsByClassName('svg-items')

        evoTl.fromTo('#evo-title', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
        //   .fromTo(`.trips-${2019}`, { opacity: 0 }, { opacity: 1 },)

        // let xPer = 100
        // for (let i = 0; i < svgItems.length - 1; i++) {
        //   console.log(xPer)
        //   evoTl

        //     .to(`#y${2020 + i}`, { translateX: '0vw', fontSize: '8rem', stagger: 1, opacity: 1 })
        //     .to(`#y${2019 + i}`, { xPercent: -100, fontSize: '4rem', stagger: 1, opacity: 0.5 }, '<+=50%')

        //     .to(`.trips-${2019 + i}`, { xPercent: -xPer, opacity: 0 },'<')
        //     .fromTo(`.trips-${2020 + i}`, { opacity: 0 }, { xPercent: -xPer, opacity: 1 }, '<')

        //     .to('#chart-div', { xPercent: -xPer },'<')
        //     .to(`#svg-content-${1 + i}`, { opacity: 0 }, '<')
        //     .fromTo(`#svg-content-${2 + i}`,{display:'none'}, { display: 'block' }, '<+=25%')

        //     .to(`.svg-content-${2 + i}`, { opacity: 1 }, '<+=50%')

        //     .to(`#y${2021 + i}`, { translateX: '50vw' }, '<+=50%')
        //     .to(`#y${2022 + i}`, { translateX: '60vw' }, '<+=50%')
        //     .to(`#y${2019 + i}`, { opacity: 0 }, '<+=50%')
        //   xPer += 100
        // }
        const reviewBox = document.querySelectorAll('.review-box')
        console.log(reviewBox)

        let xPerReview = 100 * reviewBox.length
        customerTL.set(reviewBox, { translateX: size.width / 2 })
          .fromTo('#customer-title', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
          // .fromTo(reviewBox, {display:'block', xPercent: -(xPerReview) },)


        // for(let i = 0 ;  i < reviewBox.length-1; i++){

        //   customerTL.fromTo(reviewBox[i],{scale:0.5},{scale:1})
        //   .to(reviewBox[i],{xPercent:-100})
        //   .to( reviewBox[i] ,{scale:0.5})
        // }
      }
    //   else if(screen==='mobile' && action==='homepage'){
    //     const expMob = gsap.timeline({defaults:{duration:1,ease:'Power2.in'},
    //   scrollTrigger:{
    //     trigger: '#expertise',
    //       start: 'top 30%',
    //       end: 'bottom bottom',
    //       endTrigger: '.expertise-wrapper-2',
    //       ease: 'Power4.in',
    //       toggleActions: 'play complete reverse reverse',
    //       // pin: true,
    //       // scrub: true,
    //       // markers: true,
    //       id: 'Expertise-Mob'
    //   }})
    //   expMob.fromTo('#expertise-title',{yPercent:10,opacity:0},{yPercent:0,opacity:1})
    //   .fromTo('.exp-img', { scale:0}, { scale: 1, stagger: 1 }, '<')
    // }
    })
    return () => ctx.revert(); // cleanup! 
  }

  let funcRan = 0
  const skipHero = () => {

    showScene = false
    cancelAnimationFrame(reqAnimId)
    const sceneTl = gsap.timeline({
      defaults: { duration: 0.5 },
      onComplete: () => {
        listening = true;
      }
    })
      .to('#scene', { opacity: 0, duration: 0 })
      .to('#mobile-hero-content', { display: 'none', opacity: 0 }, '<')
      .to('#scroll-skip', { opacity: 0 }, '<')
      .to('#scene', { display: 'none', yPercent: -100, duration: 0.1, position: 'relative' })
      .to('#App', { position: 'relative' }, '<')
      .to('#homepage', { display: 'block', }, '<')
      .fromTo('#homepage', { opacity: 0 }, { opacity: 1, duration: 1 })
    console.log('duration', sceneTl.duration())
    // .to('.sections', { translateY: sectionHeights[sectionHeights.length-1] },'<')
    console.log('sceneTl End of SCENE', listening)
    console.log(size)

    setTimeout(() => {
      if (size.width < 800 && funcRan === 0) {
        console.log('mobile homepage ran : ', funcRan)
        gsapTimelines('mobile', 'homepage')
        
        //end of set time out
      } 
    },!funcRan?  sceneTl.duration() * 1000 : 0)
    setTimeout(() => {
      sceneTl.to('body', { overflow: 'scroll', overflowY: 'scroll' },)
      
    },!funcRan? sceneTl.duration() * 1500 : 0)
    funcRan++
  }
  const skipHeroDesktop = () => {

    showScene = false
    cancelAnimationFrame(reqAnimId)
    const sceneTl = gsap.timeline({
      defaults: { duration: 0.5 },
      onComplete: () => {
        listening = true;
      }
    })
      .to('#scene', { opacity: 0, duration: 0 })
      .to('#desktop-hero-content', { display: 'none', opacity:0}, '<')
      .to('#scroll-skip', { opacity: 0 }, '<')
      .to('#scene', { display: 'none', yPercent: -100, duration: 0.1, position: 'relative' })
      .to('#App', { position: 'relative' }, '<')
      .to('#homepage', { display: 'block', }, '<')
      .fromTo('#homepage', { opacity: 0 }, { opacity: 1, duration: 1 })
      .to('#anchors',{display:'flex',opacity:1,duration:2})
    console.log('duration', sceneTl.duration())
    // .to('.sections', { translateY: sectionHeights[sectionHeights.length-1] },'<')
    console.log('sceneTl End of SCENE', listening)
    console.log(size)

    setTimeout(() => {
      if (size.width > 400 && funcRan === 0) {
        funcRan++
        console.log('homepage ran : ', funcRan)
        gsapTimelines('desktop', 'homepage')

        //end of set time out
      }
    }, sceneTl.duration() * 1000)
    setTimeout(() => {
      console.log('setTimeout body',funcRan)
      sceneTl.to('body', { overflow: 'scroll', overflowY: 'scroll' },)

    }, sceneTl.duration() * 1000 )
  }
  // Slides a section in on scroll down
 
  let sectionCountMobile
  const slideInMobile = () => {
    if (current !== undefined) gsap.set(sectionChildren[current], { zIndex: 0 });
    sectionCountMobile = sectionChildren[next] ? sectionChildren[next].getElementsByTagName('section') : 'end'
    console.log(sectionCountMobile.length)
    changeAnimation()
    // gsap.set(sections[next], { zIndex: 1 });
    if(sectionCountMobile === 'end'){
      const tl = gsap
      .timeline({
        paused: true,
        defaults: tlDefaults,
        onComplete: () => {
          console.log('tl runs')
            listening = true;
            current = next;
        }
      })
      .to(sectionChildren[current], { opacity: 0 },)
      .to(sectionChildren[current], { display: 'none' },)
  
    tl.play(0);
    } else {

      const tl = gsap
        .timeline({
          paused: true,
          defaults: tlDefaults,
          onComplete: () => {
            console.log('tl runs')
              listening = true;
              current = next;
          }
        })
        .to(sectionChildren[current], { opacity: 0 },)
        .to(sectionChildren[current], { display: 'none' },)
        .fromTo(sectionChildren[next], { display: 'none' }, { display: 'block' }, '<')
        .fromTo(sectionChildren[next], { opacity: 0 }, { opacity: 1 })
        .fromTo(sectionCountMobile, { opacity: 0 ,yPercent:-10}, { yPercent:0,opacity: 1 ,stagger:1})
      tl.play(0);
    }
  }

  // Slides a section out on scroll up
 
  function slideOutMobile() {
    desktopSlide--
    changeAnimationDesktop()
    console.log('slide out desktop', desktopSlide)
    // gsap.set(sections[current], { zIndex: 1, opacity: 1 });
    // gsap.set(sections[next], { zIndex: 0 });
    gsap
      .timeline({
        defaults: tlDefaults,
        onComplete: () => {
          listening = true;
          current = next;
        }
      })
      .to(sectionChildren[current], { opacity: 0 },)
      .to(sectionChildren[current], { display: 'none' },)
      .fromTo(sectionChildren[next], { display: 'none' }, { display: 'block' }, '<')
      .fromTo(sectionChildren[next], { opacity: 0 }, { opacity: 1 })
    // camTl.to(camera.position, camTrack[next])
  }
  function handleDirectionMobile() {
    listening = false;

    if (next === sectionChildren.length-1 && direction === 'down' && showScene) {

      skipHero()
    }

 
    if (direction === "down" && next < sectionChildren.length && showScene) {
      next = current + 1;

      slideInMobile();

    } else if (direction === "up" && next > 0 && showScene) {
      next = current - 1;

      slideOutMobile();
    } else if (showScene) listening = true
  }
 
  //DESKTOP SLIDE-IN
  let desktopSlide = 0
  let sectionCount 
 
  function slideInDesktop() {
    desktopSlide++
    console.log('slide in', desktopSlide)
    if (current !== undefined) gsap.set(desktopPages[current], { zIndex: 0 });
    sectionCount = desktopPages[next] ? desktopPages[next].getElementsByClassName('section') : 'end'
    console.log(sectionCount.length)
    changeAnimationDesktop()
    // gsap.set(sections[next], { zIndex: 1 });
    if(sectionCount === 'end'){
      const tl = gsap
      .timeline({
        paused: true,
        defaults: tlDefaults,
        onComplete: () => {
          console.log('tl runs')
            listening = true;
            current = next;
        }
      })
      .to(desktopPages[current], { opacity: 0 },)
      .to(desktopPages[current], { display: 'none' },)
  
    tl.play(0);
    } else {

      const tl = gsap
        .timeline({
          paused: true,
          defaults: tlDefaults,
          onComplete: () => {
            console.log('tl runs')
              listening = true;
              current = next;
          }
        })
        .to(desktopPages[current], { opacity: 0 },)
        .to(desktopPages[current], { display: 'none' },)
        .fromTo(desktopPages[next], { display: 'none' }, { display: 'block' }, '<')
        .fromTo(desktopPages[next], { opacity: 0 }, { opacity: 1 })
        .fromTo(sectionCount, { opacity: 0 ,yPercent:-10}, { yPercent:0,opacity: 1 ,stagger:1})
      tl.play(0);
    }
    // camTl.to(camera.position, camTrack[next])
  }
  function slideOutDesktop() {
    desktopSlide--
    changeAnimationDesktop()
    console.log('slide out desktop', desktopSlide)
    // gsap.set(sections[current], { zIndex: 1, opacity: 1 });
    // gsap.set(sections[next], { zIndex: 0 });
    gsap
      .timeline({
        defaults: tlDefaults,
        onComplete: () => {
          listening = true;
          current = next;
        }
      })
      .to(desktopPages[current], { opacity: 0 },)
      .to(desktopPages[current], { display: 'none' },)
      .fromTo(desktopPages[next], { display: 'none' }, { display: 'block' }, '<')
      .fromTo(desktopPages[next], { opacity: 0 }, { opacity: 1 })
    // camTl.to(camera.position, camTrack[next])
  }

  function handleDirectionDesktop() {
    listening = false;

    if (next === desktopPages.length-1 && direction === 'down' && showScene) {

      skipHeroDesktop()
    }

    console.log(next)
    if (direction === "down" && next < desktopPages.length && showScene) {
      next = current + 1;

      slideInDesktop();

    } else if (direction === "up" && next > 0 && showScene) {
      next = current - 1;

      slideOutDesktop();
    } else if (showScene) listening = true
  }

  function handleWheel(e) {
    if (!listening) return;
    direction = e.wheelDeltaY < 0 ? "down" : "up";
    if (size800) {
      handleDirectionDesktop();

    } else handleDirectionMobile();

  }

  function handleTouchStart(e) {
    if (!listening) return;
    const t = e.changedTouches[0];
    touch.startX = t.pageX;
    touch.startY = t.pageY;
  }

  function handleTouchMove(e) {
    if (!listening) return;
    // e.preventDefault();
  }

  function handleTouchEnd(e) {
    if (!listening) return;
    const t = e.changedTouches[0];
    touch.dx = t.pageX - touch.startX;
    touch.dy = t.pageY - touch.startY;
    if (touch.dy > 10) direction = "up";
    if (touch.dy < -10) direction = "down";
    if (size800) {
      handleDirectionDesktop();

    } else handleDirectionMobile();
  }



  return (
    <div id="App" ref={mainRef}>
      <div>
        
        <div id="scene" ref={container} >
        </div>
        <div className='cen' id="scroll-skip" style={{ display: 'flex', position: 'absolute', bottom: '4rem', right: '4rem' }}>
          <h3 className='text-large blue'>Scroll Down or </h3><h3 style={{ paddingLeft: '0.5ch' }} className="orange text-large skip"
            onClick={() => {
              if(size.width>800) skipHeroDesktop()
              else skipHero()
              }}> Skip</h3>
        </div>
      </div>
          <div ref={contentRef}><ContentContainer backToHero={backToHero} backToHeroDesktop={backToHeroDesktop} size={size}/></div> 
    </div>
  )
}

export default App
