import React, { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from 'use-debounce'
import { chart } from "./chart-component";
import * as d3 from 'd3'

const LineChart = ({year,yearsArr}) => {
  let index = yearsArr.indexOf(year)
  const [sizes, setSizes] = useState({
    width: document.body.clientWidth,
    height: window.innerHeight
  })
  let trips = [
    [1948,22558,1120],
    [2555,30000,2000],
    [3000,40000,3000],
    [4000,50000,4000],

  ]
  const debounced = useDebouncedCallback((value) => {
    setSizes(value)
  }, 1000)
  console.log(sizes)
 
  const svgCon = useRef()
  useEffect(() => {
    if(svgCon.current){
      chart(year,yearsArr)
    }
  },[year,svgCon.current])
  return (
    <>
      <div id="chart-div" ref={svgCon} className="chart-vh" >

      </div>
      <div className="flex" id="evo-color-boxes" >

    {
      trips.map((trip,idx) => {
        if(idx === index){
          return(
            <div id="chart-details" className="trips-2019">
            <div className="chart-box ">
              <div className="trips evo-box " >
              <p >
              Trips Completed</p>
              <h3>{trip[0]}</h3> 
              </div>
            </div>
            <div className="chart-box ">
            <div className="miles evo-box" >
              <p>Total Miles Driven</p>
              <h3>{trip[1]}</h3>
              </div>
            </div>
            <div className="chart-box ">
            <div className="evo-box clients">
              <p>Total Clients Served</p>
              <h3>{trip[2]}</h3>
              </div>
            </div>
          </div>
          )
        }
      })
    }
     

     
      
      </div>
      
    </>
  )
}

// const LineChart = () => {

//   const [sizes, setSizes] = useState({
//     width: document.body.clientWidth,
//     height: window.innerHeight
//   })
//   const debounced = useDebouncedCallback((value) => {
//     setSizes(value)
//   }, 1000)
//   console.log(sizes)
 
//   const svgCon = useRef()

//   return (
//     <>
//       <div id="chart-div" ref={svgCon} className="chart-vh" >

//       </div>
//       <div className="flex" id="evo-color-boxes" style={{width:'150%'}}>

//       <div id="chart-details" className="trips-2019">
//         <div className="chart-box ">
//           <div className="trips evo-box " >
//           <p >
//           Trips Completed</p>
//           <h3>1948</h3> 
//           </div>
//         </div>
//         <div className="chart-box ">
//         <div className="miles evo-box" >
//           <p>Total Miles Driven</p>
//           <h3>22558</h3>
//           </div>
//         </div>
//         <div className="chart-box ">
//         <div className="evo-box clients">
//           <p>Total Clients Served</p>
//           <h3>1120</h3>
//           </div>
//         </div>
//       </div>

//       <div id="chart-details" className="trips-2020">
//         <div className="chart-box ">
//           <div className="trips evo-box " >
//           <p >
//           Trips Completed</p>
//           <h3>2555</h3> 
//           </div>
//         </div>
//         <div className="chart-box ">
//         <div className="miles evo-box" >
//           <p>Total Miles Driven</p>
//           <h3>22558</h3>
//           </div>
//         </div>
//         <div className="chart-box ">
//         <div className="evo-box clients">
//           <p>Total Clients Served</p>
//           <h3>1120</h3>
//           </div>
//         </div>
//       </div>

//       <div id="chart-details" className="trips-2021">
//         <div className="chart-box ">
//           <div className="trips evo-box " >
//           <p >
//           Trips Completed</p>
//           <h3>3555</h3> 
//           </div>
//         </div>
//         <div className="chart-box ">
//         <div className="miles evo-box" >
//           <p>Total Miles Driven</p>
//           <h3>22558</h3>
//           </div>
//         </div>
//         <div className="chart-box ">
//         <div className="evo-box clients">
//           <p>Total Clients Served</p>
//           <h3>1120</h3>
//           </div>
//         </div>
//       </div>

//       <div id="chart-details" className="trips-2022">
//         <div className="chart-box ">
//           <div className="trips evo-box " >
//           <p >
//           Trips Completed</p>
//           <h3>4555</h3> 
//           </div>
//         </div>
//         <div className="chart-box ">
//         <div className="miles evo-box" >
//           <p>Total Miles Driven</p>
//           <h3>22558</h3>
//           </div>
//         </div>
//         <div className="chart-box ">
//         <div className="evo-box clients">
//           <p>Total Clients Served</p>
//           <h3>1120</h3>
//           </div>
//         </div>
//       </div>
      
//       </div>
      
//     </>
//   )
// }

export default LineChart