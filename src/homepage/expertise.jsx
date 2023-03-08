import React from "react";
import Button from "./Button";

const Expertise = ({setPageName,openModal}) => {
  return (
    <div className="main-section" id="expertise" style={{ paddingBottom: '10rem', paddingTop: '10rem' }}>
<a id="expertise-anchor"></a>
      <div className="expertise-wrapper grey-gr con-pd " >


        <h2 id="expertise-title" className="title blue">Our Expertise
</h2>

        <div className="flex-container wrap exp-text">

          <div className="wPer2 " >
            <article className="wPer3 ">
              <p className="text-med blue bold" >Working with multiple transportation providers can be frustrating, which is why we strive to provide a seamless and high-quality experience from start to finish.

                Our team is experienced in handling common challenges that arise in the transportation industry, and we have a track record of successfully solving problems and delivering
                exceptional service to our customers.</p>
              <br />
            </article>

            <article className="orange-bg curve-bd-top wPer3"
            >
              <div style={{ padding: '1ch 1ch 0.5ch 1rem' }}>

                <div className="title-bd-container">
                  <h2 className="white" style={{ paddingRight: '5px' }}>We're here to help</h2>
                  <div className="title-bd-white" style={{ width: '90%' }}></div>
                </div>

              </div>
              <div className="flex fw" style={{ padding: '0 1rem 0 1rem' }}>
                <div className="wPer3">
                  <p className=""  >If you are uncertain about obtaining
                    transportation, please contact us. We are happy to assist you in finding the most suitable
                    options for your needs.</p>

                </div>
                <div name="contact" onClick={() => {
                  setPageName({pageName:'contact',location:'home'})
                  openModal('home')
                }}>
                <Button name={'Contact us'} />
                </div>
              </div>
            </article>
          </div>
          <div className="flex-container wPer2 exp-img-con" style={{ height: '100%', }} >
            <img className="exp-img " src="/Dk-Care-LLC-about-us-1.jpg" />
            <img className="exp-img  " src="/Dk-Care-LLC-about-us-2.jpg" />
          </div>
        </div>

      </div>
      <div className="expertise-wrapper-2 con-pd" >

        <div className="flex-container wrap " style={{ paddingTop: '4rem' }} >

          <div className="wPer1 blue exp-text-boxes"  >
          
            <div className="title-bd-container hero-titles">
              <h2 className="blue">Reliable, Safe & Convenient</h2>
              <div className="title-bd-blue"></div>
            </div>
            <p className="text-med" style={{ paddingRight: '1rem' }}>Provide door-to-door service, ensuring our clients get to their appointments with ease.
            </p>
            <br />
            <p className="text-small">Medical appointments and other
              essential medical locations.</p>
          </div>
          <br />
          <div className="wPer1 blue exp-text-boxes">
            
            <div className="title-bd-container hero-titles">
              <h2 className="blue">Independence & Autonomy</h2>
              <div className="title-bd-blue"></div>
            </div>

            <p className="text-med">
              Rather than relying on friends and family members or public transportation to get to appointments.
            </p>
            <br />
            <p className="text-small">Let our drivers take you where you need to go.
              Help individuals maintain their independence and autonomy. </p>
          </div>
          <br />
          <div className="wPer1 blue exp-text-boxes">
            <div className="title-bd-container hero-titles">
              <h2 className="blue">Reliable, Safe & Convenient</h2>
              <div className="title-bd-blue"></div>
            </div>
            <p className="text-med">Timely pickup and drop-off,
              providing assistance with boarding and exiting the
              vehicle.
            </p>
            <br />
            <p className="text-small">Ensuring a comfortable and safe
              journey.</p>
          </div>
          <br />
          <div className="wPer1 blue exp-text-boxes">
         
            <div className="title-bd-container hero-titles">
              <h2 className="blue">DK Care</h2>
              <div className="title-bd-blue"></div>
            </div>

            <p className="text-med">We strive to provide a
              positive experience for our customers.
            </p>
            <br />
            <p className="text-small">Friendly and professional drivers.</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Expertise