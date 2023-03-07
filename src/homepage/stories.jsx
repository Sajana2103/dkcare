import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

const Stories = () => {
  const reviewRef = useRef()
  const reviewCards = gsap.utils.toArray('.review-box-wrapper')
  console.log(reviewCards)
  let cardWidth
  useEffect(() => {
    if(reviewRef.current){
      cardWidth = document.querySelector('.review-box-wrapper').offsetWidth+30

    }
  },[reviewRef.current])
  let xPerCard = 100 /reviewCards.length-1
  let xProgress= 0
  const slideBtns = gsap.timeline({defaults:{duration:1,ease:'Power2.in',stagger:0.1}})
  const leftBtn = () => {
    if(xProgress > (-cardWidth * reviewCards.length-1)){

      xProgress-=cardWidth
      console.log('left',xProgress)
      slideBtns.to(reviewCards,{translateX:xProgress})
    }

  }
  const rightBtn = () => {
    if(xProgress < 0){
      xProgress+=cardWidth
      console.log('right',xProgress)
      slideBtns.to(reviewCards,{translateX:xProgress})
    }
    

  }
  return (
    <div id="customers">
      <a id="customers-anchor"></a>

      <div className="customers-wrapper con-pd" >
        <div>
          <h1 className="title blue bold tc" id="customer-title">Customer Stories</h1>
          <hr />
          <br />
        </div>
        <div ref={reviewRef} id="review-wrapper">
          <div className="arrow-btn-wrapper">
            <div className="black arrow-btn "  onClick={leftBtn}><img style={{transform:'rotate(180deg)'}} src="/right-arrow.svg"/></div>
            <div className="black arrow-btn " onClick={rightBtn}><img  src="/right-arrow.svg"/></div>
          </div>

          <div className="flex-container " style={{gap:'30px'}} id="review-con" >
            <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div>
            <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  )
}

export default Stories