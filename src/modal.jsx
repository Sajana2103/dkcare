import React, { useEffect, useRef, useState } from "react";
import  ReactDOM from "react-dom";
import PressRelease from "./moda-content/press-release";
import Contact from "./pages/contact";


const Modal = ({modalOpen,pageName,openModal,setModalOpen}) => {
if(!modalOpen) return null

const modalRef = useRef()

let page 
switch (pageName.pageName){
  case 'press-release':
    page = <PressRelease/>
    break;
  case 'contact':
    page = <Contact />
    break;
    default : <div>Nothing to view</div>
}
console.log(page,modalOpen)
  return ReactDOM.createPortal(
    <div className="modal-wrapper" id="modal-black-area" onClick={(e) => {
      console.log('Modal component pagename: ',e)
      if(e.target.id==='modal-black-area'){

        if(pageName.location==='home')openModal()
        else setModalOpen(false)
      }
    }}>
      <div  ref={modalRef} className="modal ">

      {page}
      </div>
    </div>
  ,document.getElementById('portal'))
}
export default Modal