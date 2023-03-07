import React from "react";

const Content = () => {
  console.log('content mobile')

  return (
    <div id="mobile-hero-content">
      <div style={{ top: '3rem', position: 'relative' }}>

        <div className='sections-wrapper' id='first' style={{ float: 'right' }}>
          <div className="sections" >
            <section style={{ textAlign: 'right' }} >
              <h1 className='title blue'>Providing Reliable and Safe Transportation Since 2019</h1>

              <p className="blue text-med ">DK Care has offered a range of NEMT services for
                individuals who need to travel to medical appointments,
                pharmacies, and other essential locations.</p>
              <div >
                <br />
                <br />
                <div style={{ textAlign: 'right' }} className="">
                  <p style={{ paddingBottom: '1rem' }} className="black text-small">DK Care has offered a range of services for individuals who need to travel to medical appointments,
                    pharmacies, and other essential locations.</p>
                  {/* <p className="black text-small">2022-08-23</p> */}
                  <button className="btn-orange">Press Release</button>
                </div>

              </div>
            </section>


          </div>
        </div>

        <div className='sections-wrapper' id='second'>
          <div className="sections" >
            <section >
              <h1 className='title blue'>Dk care Transportation</h1>
              <h2 className="blue">Comfort<hr /></h2>
              <p className="blue text-med">We prioritize comfort for our
                patients. Our vehicles are
                designed for a peaceful and comfortable journey.
              </p>
              <br />
              <h3 className="blue">Security<hr /></h3>
              <p className="blue text-small">We ensure the safety of our
                patients with trained drivers and secure transport.</p>
              <br />
              <h3 className="blue">Professional Aid<hr /></h3>
              <p className="blue text-small">Experienced staff assist
                patients during transport,
                ensuring a smooth and easy journey.</p>
              <br />
              <h3 className="blue">Accessibility<hr /></h3>
              <p className="blue text-small">Our vehicles accommodate
                patients with disabilities, making transport accessible
                for all.</p>
            </section>
          </div>
          <div className="sections flex f-align-c"  >
            <section id="nemt" >

              <div className="title-bd-container">

                <h4 className="white">NEMT</h4>
                <div className="title-bd-white"></div>
              </div>
              <div>

                <h1 className="title white">NEMT</h1>
                <p className="text-med white">Non Emergency transportation services provide a vital service for individuals who may have difficulty getting to appointments or running errands due to physical limitations, disability, or lack of access to a personal vehicle.
                  These services offer a safe and reliable way for individuals to get where
                  they need to go, and can provide numerous benefits for both the customers
                  who use them and the organizations that provide them.</p>
              </div>
            </section>
          </div>
        </div>

        <div className='sections-wrapper' id='third'>

          <div className="sections" >
            <section >
              <h1 className='title blue'>Transportation
                Services</h1>
              <br />
              <h2 className="blue">Convenience<hr /></h2>

              <p className="text-med blue">When you're rushing to and from a medical
                appointment in a busy city, convenient travel makes all the difference.
              </p>
              <br />
              <div className="blue text-small">

                <span> Doctors Appointments</span>
                <span> Physical Therapy</span>

                <span> Dialysis Treatment</span>
                <span> Outpatient Surgery</span>
                <span> Outpatient Programs </span>

                <span>Dental Appointments </span>
                <span>Treatment Centers </span>
                <span>Optometrist Visits </span>
                <span>Hospital Checkout </span>
                <span>Emergency Room Pick Up </span>

              </div>
            </section>
          </div>
          <div className="sections" >
            <section id="nemt">

              <div className=" title-bd-container" style={{ paddingBottom: '2rem' }}>

                <h4 className=" white" >Read more abut our Drivers and Fleet</h4>
                <div className="title-bd-white"></div>
              </div>
              <div>
                <h2 className="section white bd-btm" style={{ marginBottom: '2rem' }}>Our Drivers</h2>

                <h2 className="section white bd-btm" style={{ marginBottom: '2rem' }}>Vehicle Fleet</h2>

                <h2 className="section white bd-btm" style={{ marginBottom: '2rem' }}>DK Care Safety Guides</h2>




                <p className="text-med white"></p>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Content