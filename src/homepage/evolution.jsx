import React from "react";
import LineChart from "./linechart.jsx";

const Evolution = () => {


  return(
    <div id="evolution">
                <a id="evolution-anchor"></a>

        <div className="evolution-wrapper blue-gr con-pd" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
          <h1 className="title white " id="evo-title" >The evolution of our company</h1>
          <p className="text-med white evo-tagline max1080">DK Care LLC formed in September 2019 with a
                couple of fleet and drivers with the mission of providing exceptional NEMT services.</p>

          <div className="flex-container wrap years-wrapper " >
            <div id="years-wrapper" className="wPer1" >
              <div className="chart-vh" id="year">
                <p className="year-css  white year-large" id="y2019" >2019</p>
                <p className="year-css  white year-small" id="y2020" >2020</p>

                <p className="year-css  white year-small" id="y2021" >2021</p>
                <p className="year-css  white year-small" id="y2022" >2022</p>


                </div>
              <p className="text-med white evo-tagline">DK Care LLC formed in September 2019 with a
                couple of fleet and drivers with the mission of providing exceptional NEMT services.</p>
            </div>
            <div id="chart-container " className="wPer3">
              <div id="line-chart" >
                <LineChart  />
              </div>
              
            </div>
          </div>

        </div>
      </div>
  )
}

export default Evolution