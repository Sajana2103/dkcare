import React from "react";
import Button from "./Button";

const Services = () => {
  return (
    <div className="main-section" id="services" >
              <a id="services-anchor"></a>

      <div className="blue-gr services-grid-1 " >
        <div className="services-left-img flex wrap f-align-cen" >
          <div style={{ width: '100%', padding: '2ch' }}>
            <img className="serv-left-img" src="/Dk-Care-LLC-customers-3.jpg" />

          </div>
          <div style={{ width: '100%', padding: '2ch' }}>
            <img className="serv-left-img" src="/Dk-Care-LLC-customers-5.jpg" />

          </div>

        </div>
        <div className="services-wrapper " style={{ padding: '10rem 0 10rem 2rem' }}>
          <h2 className="title white " id="services-title" >Services
</h2>

          <div className="flex-container wrap ">
            <div className="">
              <article className=" ">
                <p className=" white" id="services-main-line" >Our services can provide a vital
                  lifeline for individuals and ensure that everyone has access to healthcare and other essential services they need.
                </p>
                <img className="serv-right-top-img mobile " src="/Dk-Care-LLC-customers-main.jpg" />

              </article>
              <br />

              <br />

              <article className="wPer3" style={{ paddingRight: '1ch' }}>
                <br />

                <div className="title-bd-container hero-titles">
                  <h4 className="white text-med" style={{ paddingRight: '5px' }}>
                    Patient & Healthcare Services</h4>
                  <div className="title-bd-white" style={{ width: '90%' }}></div>
                </div>

                <div className="tab2 patient-health"><span >01</span><h4 className=" semi-bold">Patient comfort and care</h4></div>
                <div className="tab2 patient-health"><span >02</span><h4 className=" semi-bold">Safety protocols and equipment</h4></div>
                <div className="tab2 patient-health"><span >03</span><h4 className=" semi-bold">Patient privacy and confidentiality</h4></div>
                <div className="tab2 patient-health"><span >04</span><h4 className=" semi-bold">Collaborations with healthcare</h4></div>
                <div className="tab2 patient-health"><span >05</span><h4 className=" semi-bold">Serving to a diverse community</h4></div>

              </article>
              <br />
              <p className="semi-bold wPer3">We understand that working with multiple transportation providers can be 
frustrating, which is why we strive to provide a seamless and high-quality experience from start to finish. Our team is experienced i</p>
              <br />
              <div className="flex-container wrap" style={{ alignItems: 'center' }}>
                <Button name="Services" />
                <p style={{ paddingRight: '1rem' }}>Read more on our services page.</p>
              </div>
              <div className=" mobile flex " style={{ flexWrap: 'nowrap' }} >
                <div>
                  <img className="serv-right-btm-img mobile" src="/Dk-Care-LLC-customers-5.jpg" />

                </div>
                <div >
                  <img className="serv-right-btm-img mobile" src="/Dk-Care-LLC-customers-1.jpg" />

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="" id="services-img" style={{ padding: '10rem 0 10rem 2rem', }}>
          <div >
            <img className="serv-right-top-img " src="/Dk-Care-LLC-customers-main.jpg" />
          </div>
          <div className="flex" style={{ height: "30%" }}>
            <div >
              <img className="serv-right-btm-img " src="/Dk-Care-LLC-customers-5.jpg" />

            </div>
            <div >
              <img className="serv-right-btm-img " src="/Dk-Care-LLC-customers-1.jpg" />

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services