import React, { useEffect, useRef, useState } from "react";
import Evolution from "./evolution.jsx";
import Expertise from "./expertise.jsx";
import Covid from "./covid.jsx";
import Services from "./services.jsx";
import Stories from "./stories.jsx";
import Technologies from "./technologies.jsx";
import Footer from "./footer.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useThrottledCallback } from "use-debounce";
import EvolutionCom from "./evolution-component.jsx";

const HomePage = ({ size,setPageName,openModal }) => {

  const [homeLoaded, setHomeLoaded] = useState(false)
  const homeRef = useRef()
  let footer
  let atags
  let scrollPositions = []
  let scrollNames = []
  let scrollItems = [{ name: 'top', position: 0 }]
  let bodyHeight = document.body.scrollHeight
  let homepageH = 0
  let mainSections = []
  let mainSectionsPositions = []

  const checkPosition = () => {
    if (homepageH !== 0 && !homeLoaded) {
      setTimeout(() => {
        setHomeLoaded(true)
        // console.log('homeloaded')
      }, 1000);
    } 
    
    let previous
    let next
    let current
    let name
    let hash
    for (let p = 1; p < scrollItems.length - 1; p++) {
      previous = scrollItems[p - 1].position
      next = scrollItems[p + 1].position
      current = scrollItems[p].position
      if (p > 0 && p < scrollItems.length - 1) hash = atags[p - 1].hash

      if (scrollY > current && scrollY < next && scrollY > previous) {
        name = scrollItems[p].name
        // console.log(name, hash)
      }
      // console.log(atags[p].hash)
      if (name === hash) {
        atags[p - 1].style.color = '#ed7036'
        // console.log(atags[p].style.color)
      } else atags[p - 1].style.color = '#1e4d8c'



    }
    // for(let i = 0; i< mainSectionsPositions.length-1; i++){
    //   if(scrollY < mainSectionsPositions[i] && scrollY > mainSectionsPositions[i+1]){
    //     atags[i].style.color = '#ed7036'
    //     console.log(mainSectionsPositions[i])
    //   } else { 
    //     atags[i].style.color = '#1e4d8c'
    //     console.log(mainSectionsPositions[i],scrollY)

    //   }
    // }
  }
  const posHandler = useThrottledCallback(checkPosition, 1000)
  useEffect(() => {
    if (homeRef.current) {
      // mainSections = document.querySelectorAll('.main-section')
      // console.log('main sections',mainSections)
      // for(let i = 0; i < mainSections.length-1;i++){
      //   if(i>0){
      //     mainSectionsPositions[i] = mainSections[i].offsetHeight + mainSectionsPositions[i-1]
      //   } else {
      //     mainSectionsPositions[i] = mainSections[i].offsetHeight
      //   }
      // }
      // console.log(mainSectionsPositions)
      homepageH = document.querySelector('#homepage')
      let expertiseA = document.querySelector('#expertise-anchor')
      atags = document.querySelectorAll('.a-tags')
      console.log(atags)
      for (let a = 0; a < atags.length; a++) {
        let hash = atags[a].hash
        scrollNames.push(hash)
        let ele = document.querySelector(hash).getBoundingClientRect().top
        scrollPositions.push(ele)
        let item = { name: hash, position: ele }
        scrollItems.push(item)
      }
      scrollItems.push({ name: 'bottom', bodyHeight })


      // console.log('a hash', scrollItems)

      window.addEventListener('scroll', posHandler)
    }
  }, [homeLoaded])

// console.log(desktop)
  return (
    <div ref={homeRef} id="homepage" >
      {
       size.width > 400 ?
      <div id="anchors">
        <div className="flex wrap  bold blue" style={{ gap: '0.2rem' }} >

          <a className="a-tags" href="#expertise-anchor" >Expertise</a>
          <a className="a-tags" href="#services-anchor">Services</a>
          <a className="a-tags" href="#technologies-anchor" >Technologies</a>
          <a className="a-tags" href="#evolution-anchor">Evolution</a>
          <a className="a-tags" href="#customers-anchor">Customers</a>
          <a className="a-tags" href="#covid-anchor">Covid</a>
          <a className="a-tags" href="#footer-anchor">Footer</a>
        </div>
      </div> : <></>
      }
      <Expertise setPageName={setPageName} openModal={openModal} />
      <Services />
      <Technologies />
      <EvolutionCom size={size} home={homeRef} />
      <Stories />
      <Covid />
      <Footer setPageName={setPageName} openModal={openModal}/>
    </div>
  )
}
export default HomePage