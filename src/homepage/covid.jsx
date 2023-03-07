import React from "react";

const Covid = () => {
  return (
    <div if="final">
      <a id="covid-anchor"></a>
      <div className="final-wrapper blue-gr con-pd" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
        <h2 className="title white text-large">COVID-19 Guidelines and Preventive Measures</h2>
        <br />
        <div className="flex-container wrap ">
          <h3 className="white wPer2">We understands the severity of the current global COVID-19 pandemic and assures all prospective customers that our
            drivers and staff will be observing all recommended
            precautions and social-distancing rules.</h3>
          <div className="" style={{ padding: '0 0 0 1rem',width:'30%' }}>

            <p className="white semi-bold ">Due to the current situation of the COVID-19
              pandemic, we have made several changes to
              our services in order to meet new guidelines.
            </p>
            <br />
            <p className="white semi-bold ">
              Wash your hands often and well to avoid
              contamination. Avoid touching eyes, nose or
              mouth with unwashed hands. Clean frequently touched objects and surfaces with disinfectant wipes.
            </p>
          </div>
        </div>
        <h1 className="title white" style={{ paddingTop: '10rem', textAlign: 'center' }}>About us</h1>
      </div>
      <hr />


    </div>
  )
}

export default Covid