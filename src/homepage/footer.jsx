import React from "react";
import Button from "./Button";

const Footer = ({setPageName,openModal}) => {
  return (
    <footer id="#footer"
      className="main-section blue-gr con-pd" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <a id="footer-anchor"></a>

      <div className="flex-container wrap">
        <div className="footer-title wPer3">
          <h2 className="white semi-bold" >
            We are here to support you.
          </h2>
         
        </div>
        <div name="contact" className="wPer3" onClick={() => {
            setPageName({ pageName: 'contact', location: 'home' })
            openModal('home')
          }}>
            <Button name={'Contact us'} />
          </div>
          <p className="white bold wPer3">A member of our team will contact
            you shortly.</p>

        <div className="links flex-container wrap ">

          <div className="semi-bold link-box wPer20" >
            <p className="white text-med">
              Expertise
            </p>
            <br />
            <p className="link">
              Available Locations
            </p>
            <p className="link">
              NEMT Services
            </p>
            <p className="link">
              Type of Non-Emergencies
            </p>
            <p className="link">
              Passenger Safety
            </p>
            <p className="link">
              Dk Care Vehicles
            </p>
            <p className="link">
              Dk Care Staff
            </p>
          </div>
          <div className="semi-bold  link-box wPer20" >
            <p className="white text-med">
              Services
            </p>
            <br />

            <p className="link">
              Patient Comfort And Care
            </p>
            <p className="link">
              Safety Protocols & Equipment
            </p>
            <p className="link">
              Patient Privacy & Confidentiality
            </p>
            <p className="link">
              Collaborations With Healthcare
            </p>
            <p className="link">
              Serving To A Diverse Community
            </p>
            <p className="link">
              Covid19 Prevention Guidelines
            </p>
          </div>
          <div className="semi-bold  link-box wPer20" >
            <p className="white text-med">
              Technologies
            </p>
            <br />
            <p className="link">
              GPS Location Tracking
            </p>
            <p className="link">
              Scheduling and  Monitoring
            </p>
            <p className="link">
              AI-powered Dash Camera
            </p>
            <p className="link">
              Serving To A Diverse Community
            </p>
          </div>
          <div className="semi-bold  link-box wPer20" >
            <p className="white text-med">
              How it works
            </p>
            <br />
            <p className="link">
              Who is Eligible
            </p>
            <p className="link">
              How can I get a ride
            </p>
            <p className="link">
              FAQ
            </p>
            <p className="link">
              Helpful Resources
            </p>
          </div>
          <div className="semi-bold link-box wPer20" >
            <p className="white text-med">
              Company
            </p>
            <br />
            <p className="link">
              About
            </p>
            <p className="link">
              History
            </p>
            <p className="link">
              Culture
            </p>
            <p className="link">
              Mission
            </p>
            <p className="link">
              Careers
            </p>
          </div>

        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex-container wrap" >

        <p className="text-med white" style={{ width: '90%' }}>2023 C DK CARE LLC</p>
        <p className="text-med white" style={{ textAlign: 'right' }}>Made by XYZ</p>
      </div>
      <br />
      <hr />
    </footer>
  )
}

export default Footer