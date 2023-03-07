import React, { useState } from "react";
import { useDebouncedCallback } from 'use-debounce'
import * as d3 from 'd3'

export const chart = () => {


  let width = 0
  let height = 0
  let margin = 10



  let dataset1 = [2, 5, 8, 2, 5, 9, 10]
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  let miles1a = [100, 250, 300, 400, 200, 100, 400, 500, 700, 200, 500, 900]
  let miles2a = [400, 124, 600, 100, 260, 700, 350, 200, 500, 789, 751, 484]
  let miles3a = [500, 934, 153, 432, 834, 432, 364, 200, 175, 753, 534, 267]

  let miles1b = [1222, 2530, 1957, 1419, 3295, 2100, 1400, 1395, 1700, 2200, 1352, 3500]
  let miles2b = [1395, 1124, 1500, 1300, 2260, 1352, 1350, 1395, 700, 2789, 1957, 2484]
  let miles3b = [1010, 934, 1395, 2100, 2324, 1432, 1957, 1200, 1194, 2222, 2395, 3267]

  let miles1c = [2222, 2530, 2957, 3419, 3295, 3400, 3400, 4395, 4700, 5200, 6352, 7500]
  let miles2c = [2395, 2124, 2500, 3300, 3260, 3452, 3350, 4395, 4500, 5789, 6957, 7484]
  let miles3c = [2010, 1934, 2395, 3100, 3324, 3432, 3957, 4200, 4194, 5222, 6395, 7267]

  let miles1d = [7352, 7623, 7957, 7419, 8295, 8400, 8400, 9395, 9700, 9200, 9352, 12500]
  let miles2d = [6326, 7984, 7500, 7300, 8260, 8452, 8350, 9395, 9500, 9789, 9957, 11484]
  let miles3d = [7215, 7247, 7395, 7100, 8324, 8432, 8957, 9200, 9194, 9222, 9395, 10267]


  let arr1 = [miles1a, miles2a, miles3a]
  let arr2 = [miles1b, miles2b, miles3b]
  let arr3 = [miles1c, miles2c, miles3c]
  let arr4 = [miles1d, miles2d, miles3d]

  let chartDiv = document.querySelector('#chart-div')
  console.log(chartDiv)
  let svg = document.querySelector('.svg-content')

  console.log(svg)
  if (svg) svg.remove()
  if (chartDiv) {
    width = chartDiv.offsetWidth,
    height = chartDiv.offsetHeight


    let path
    let chartArrays = [arr1, arr2, arr3, arr4]
    let yVals = [1000, 5000, 10000, 12000]
    let yAxesVals = [200, 1000, 2000, 2500]

    const createChart = (i) => {
      const chart = d3.select(chartDiv)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr("id",`svg-content-${i + 1}`, true)
        .classed('svg-items',true)

        .style('overflow', 'visible')


      const xScale = d3.scaleLinear()
        .domain([0, months.length - 1])
        .range([margin, width])

      const xAxis = d3.axisBottom(xScale)
      // .ticks(months.length)
      // .tickFormat(i => i + 1)
      // chart.append('g')
      //   .call(xAxis)
      //   .attr('transform', `translate(0,${height})`)

      const yScale = d3.scaleLinear()
        .domain([0, yVals[i]])
        .range([height, 0])
      const yAxis = d3.axisLeft(yScale)
        .ticks(miles1a.length / 2)
        .tickSize(-width)
        .tickFormat((d, c) => c * yAxesVals[i])

      chart.append('g')
        .call(yAxis)

      const line = d3.line()
        .x((d, i) => xScale(i))
        .y(d => yScale(d))
      // color palette
      const color = d3.scaleOrdinal()
        .range(['#ed7036', '#689f38', '#1c98cb'])

      // Draw the line
      path = chart.selectAll(".line")
        .data(chartArrays[i])
        .join("path")
        .attr("d", d => {
          return line(d)
        }
        )
        .attr("fill", "none")
        .attr("stroke", d => color(d))
        .attr("stroke-width", 2.5)
      console.log('chart created', chart)

    }
    const repeat = () => {

      path.nodes().map((node) => {
        let length = node.getTotalLength()
        path.attr("stroke-dasharray", length + " " + length)
          .attr("stroke-dashoffset", length)
          .transition()
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0)
          .duration(2000)
          .on("end", () => setTimeout(repeat, 5000));
      })

    }

    for (let i = 0; i < 4; i++) {
      createChart(i)
      repeat()
    }
  }


}
