import React, { useState } from "react";
import DesktopContent from "./content-desktop";
import Content from "./content";
import Modal from "./modal";
import HomePage from "./homepage/homepage";
import Navigation from './navigation'
import gsap from "gsap";

const ContentContainer = ({ size ,backToHero,backToHeroDesktop}) => {
  const [pageName, setPageName] = useState({
    location:'hero',
    pageName:'hero-section'
  })
  const [modalOpen, setModalOpen] = useState(false)
  const modalTL = gsap.timeline({defaults:{duration:0.5,ease:'Power1.in'}})
const openModal = (page) => {
  if(page === 'home' || pageName.location === 'home'){
    
    
    if(modalOpen === true ){
      console.log('close modal',modalOpen)
      modalTL.to('body', {overflow:'scroll',overflowX:'hidden',overflowY:"scroll"})
      // .fromTo('.modal-wrapper',{opacity:0,xPercent:100},{opacity:1,xPercent:0})
      
      setModalOpen(false)
      
    } else {
      console.log('open modal',modalOpen)
      modalTL.to('body', {overflow:'hidden',overflowX:'hidden',overflowY:"hidden"})
      
      setModalOpen(true)
    }
  }
  else {
    setModalOpen(!modalOpen)
  }
}

  console.log(pageName)
  return (
    <>
      <Modal pageName={pageName} openModal={openModal} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <Navigation/>
      {
        size.width > 800 ?
          <DesktopContent setPageName={setPageName} setModalOpen={setModalOpen} />
          :
          <Content setPageName={setPageName} setModalOpen={setModalOpen} />

      }
      <div id="home-content" >
      {
        size.width > 800 ? 
        <div className="main-section" id="back-hero" onClick={backToHeroDesktop}>
          <h2 className='cen' >
            Click to get back or scroll down for more.
          </h2>
        </div>
        : 
        <div className="main-section"  id="back-hero" onClick={backToHero}>
          <h2 className='cen' >
          Click to get back or scroll down for more.
          </h2>
        </div>
      }
        <HomePage  size={size} setPageName={setPageName} openModal={openModal}/>
      </div>
    </>
  )
}

export default ContentContainer