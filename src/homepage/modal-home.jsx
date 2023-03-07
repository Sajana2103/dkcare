import React, { useEffect, useState } from "react";
import  ReactDOM from "react-dom";
import Contact from "../pages/contact";
const ModalHome = ({modalOpen,pageName,setModalOpen}) => {
if(!modalOpen) return null

let page 
switch (pageName){
 
  case 'contact':
    page = <Contact />
    break;
    default : <div>Nothing to view</div>
}
console.log(page,modalOpen)
  return ReactDOM.createPortal(
    <div className="modal-wrapper-homepage" onClick={() => setModalOpen(!modalOpen)}>
      <div className="modal ">

      {page}
      </div>
    </div>
  ,document.getElementById('portal'))
}
export default ModalHome