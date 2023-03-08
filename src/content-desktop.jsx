import React, { useState } from "react";
import Modal from './modal.jsx';
import Contact from './pages/contact.jsx';


const DesktopContent = ({ setPageName, setModalOpen }) => {
  // const [modalOpen,setModalOpen] = useState(false)

  console.log('content desktop')


  return (
    <>
      <div id="desktop-hero-content" className="content-desktop con-pd " >
        <div className="desktop-page " id="desktop-first"
          style={{ paddingTop: '10rem', textAlign: 'right', }}>
          <div className="" >
            <div className="section flex f-end" >
              <h1 className="title blue  " >
                Providing Reliable and Safe Transportation Since 2019
              </h1>
            </div>
            <div className="section flex f-end  pd-title">
              <p className="blue text-med " >DK Care has offered a range of NEMT services for
                individuals who need to travel to medical appointments,
                pharmacies, and other essential locations.</p>
            </div>
            <div className="section flex f-end  pd-title">
              <p style={{ paddingBottom: '1rem' }} className="black text-small">DK Care has offered a range of services for individuals who need to travel to medical appointments,
                pharmacies, and other essential locations.</p>
            </div>
            {/* <p className="black text-small">2022-08-23</p> */}
          </div>
          <div className="section">
            <button className="btn-orange" style={{ float: 'right' }}
              name="press-release" onClick={(e) => {
                setPageName({ pageName: 'press-release', location: 'hero' })
                setModalOpen(true)
              }}>Press Release</button>
          </div>
        </div>

        <div className='desktop-page ' id='desktop-second'>
          <div className="flex-container wrap fg"  >
            <div id="desktop-transport" >
              <h1 className='title section blue'  >Dk care Transportation</h1>
              <div className="section desktop-sections " id="comfort">
                <div className="title-bd-container hero-titles">
                  <h4 className="blue ">Comfort</h4>
                  <div className="title-bd-blue"></div>
                </div>
                <p className="blue text-xlarge">We prioritize comfort for our
                  patients. Our vehicles are
                  designed for a peaceful and comfortable journey.
                </p>
                <br />
              </div>

            </div>
            <div className="section desktop-sections">
              <div className="title-bd-container hero-titles">
                <h4 className="blue">Security</h4>
                <div className="title-bd-blue"></div>
              </div>
              <p className="blue text-large">We ensure the safety of our
                patients with trained drivers and secure transport.</p>
              <br />
            </div>
            <div className="section desktop-sections" >
              <div className="title-bd-container hero-titles">
                <h4 className="blue">Professional Aid</h4>
                <div className="title-bd-blue"></div>
              </div>
              <p className="blue text-large">Experienced staff assist
                patients during transport,
                ensuring a smooth and easy journey.</p>
              <br />
            </div>
            <div className="section desktop-sections" >
              <div className="title-bd-container hero-titles">
                <h4 className="blue">Accessibility</h4>
                <div className="title-bd-blue"></div>
              </div>
              <p className="blue text-large">Our vehicles accommodate
                patients with disabilities, making transport accessible
                for all.</p>
              <br />
            </div>

          </div>
          <div id="nemt-wrapper">
            <div className="nemt-empty"></div><div className="nemt-empty"></div>

            <div className="section" id="nemt-desktop">

              <div className="title-bd-container">

                <h4 className="white">NEMT</h4>
                <div className="title-bd-white"></div>
              </div>
              <div id="nemt-content">

                <h1 className=" white" >NEMT</h1>
                <p className="text-small white ">Non Emergency transportation services provide a vital service for individuals who may have
                  difficulty getting to appointments or running errands due to physical limitations, disability, or lack of access to a personal vehicle. </p>
              </div>
            </div>
          </div>
        </div>

        <div className='desktop-page ' id='desktop-third'>

          <div className="flex-container wrap fg"  >
            <div id="desktop-transport-2">

              <h1 className='section title blue'>Transportation
                Services</h1>

              <div className="section desktop-sections" id="convenience" >
                <div className="title-bd-container hero-titles" >
                  <h4 className="blue ">Convenience</h4>
                  <div className="title-bd-blue"></div>
                </div>

                <p className="text-xlarge blue">When you're rushing to and from a medical
                  appointment in a busy city, convenient travel makes all the difference.
                </p>
                <br />
              </div>
            </div>
            <div className="desktop-transport-grid2 ">
              <div className="desktop-sections" id="list-third">
                <div >
                  <div className="title-bd-container hero-titles" >
                    <h4 className="blue ">Transportation Services</h4>
                    <div className="title-bd-blue"></div>
                  </div>
                </div>
                <div className="flex blue text-xlarge " >
                  <div className="section flex" style={{ flexWrap: 'wrap', }}>
                    <div className="tab2 list-items"><span >01</span><h4>Doctors Appointments</h4></div>
                    <div className="tab2 list-items"><span >02</span><h4 >Physical Therapy</h4></div>
                    <div className="tab2 list-items"><span >03</span><h4 >Dialysis Treatment</h4></div>
                    <div className="tab2 list-items"><span >04</span><h4 >Outpatient Surgery</h4></div>
                    <div className="tab2 list-items"><span >05</span><h4 >Outpatient Programs</h4></div>
                  </div>
                  <div className="section flex" style={{ flexWrap: 'wrap' }}>
                    <div className="tab2 list-items"><span >06</span><h4 >Dental Appointments</h4></div>
                    <div className="tab2 list-items"><span >07</span><h4 >Treatment Centers</h4></div>
                    <div className="tab2 list-items"><span >08</span><h4 >Optometrist Visits</h4></div>
                    <div className="tab2 list-items"><span >09</span><h4 >Hospital Checkout</h4></div>
                    <div className="tab2 list-items"><span >10</span><h4 >Emergency Room Pick Up</h4></div>
                  </div>
                </div>
              </div>
              <div className="section " id="our-drivers">
                <div className=" title-bd-container" >
                  <h4 className=" white" >Read more abut our Drivers and Fleet</h4>
                  <div className="title-bd-white"></div>
                </div>
                <div>
                  <h2 className="section white bd-btm" >Our Drivers</h2>
                  <h2 className="section white bd-btm" >Vehicle Fleet</h2>
                  <h2 className="section white bd-btm" >DK Care Safety Guides</h2>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopContent