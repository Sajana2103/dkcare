import React from "react";

const Covid = () => {
  return (
    <div className="main-section" id="covid">
      <div className="final-wrapper blue-gr2 con-pd" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <a id="covid-anchor"></a>

        <h2 className="title white text-large" >COVID-19 Guidelines and Preventive Measures</h2>
        <br />

        <div className="flex-container wrap ">
          <p className="white  " id="covid-para1">We understands the severity of the current global COVID-19 pandemic and assures all prospective customers that our
            drivers and staff will be observing all recommended
            precautions and social-distancing rules.</p>
          <div className="" style={{ padding: '0 0 0 1rem',width:'30%' }}>

            <p className="white semi-bold covid-para2" >Due to the current situation of the COVID-19
              pandemic, we have made several changes to
              our services in order to meet new guidelines.
            </p>
            <br />
            <p className="white semi-bold covid-para2">
              Wash your hands often and well to avoid
              contamination. Avoid touching eyes, nose or
              mouth with unwashed hands. Clean frequently touched objects and surfaces with disinfectant wipes.
            </p>
          </div>
        </div>
        <div id="covid-aboutus">
        <button><img src="/right-arrow.svg"/></button>
        <h1 className="title white">About us</h1>
        </div>
      </div>
      <hr />


    </div>
  )
}

export default Covid