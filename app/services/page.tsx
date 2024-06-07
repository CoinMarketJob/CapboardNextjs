import Link from 'next/link'
import React from 'react'
import "./services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const services = () => {
  return (
    <div><ul className="navbar">
    <Link className="link" href="/subscription">Subscription</Link>
    <Link className="link" href="/services">Services</Link>
    <Link className="link" href="/subscription">Invoices</Link>
  </ul>
  <div className='card-1' >
    <h2 className='title' >Services</h2>
    <div className='plan-1' >
      <ul style={{margin: "0%", padding: "0%", flexDirection: "column"}} >
      <h2 className='title-2' >Premium Onboarding</h2>
      <span style={{marginLeft: "1.5rem"}} >From 100 Stakeholders</span>
      <h1 style={{marginLeft: "6vw", marginTop: "3vh", marginBottom: "3vh"}} >€500</h1>
      <button className='purchase-button' >Purchase</button>
      </ul>
      <ul className='plans-right-section' >
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Company Setup: We will set up your company in Capboard, including administrator permissions and individual collaborator permissions.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Stakeholder Integration: We will add all your company stakeholders into Capboard.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Transaction Incorporation: We will incorporate all company transactions from its inception to the present date, including issues, secondaries, convertible loans/SAFES.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Equity Incentive Plans: We will integrate all equity incentive plans, pools, and their allocations to employees and stakeholders.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Document Integration: We will upload corporate documents related to any specific transactions into Capboard.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Quick Turnaround: The setup duration will be a maximum of 14 days from when we receive the necessary company and equity incentive plan details.</span> </ul>
        </ul>
    </div>
    <div className='plan-2' >
      <ul style={{margin: "0%", padding: "0%", flexDirection: "column"}} >
      <h2 className='title-2' >Basic Onboarding</h2>
      <span style={{marginLeft: "1.5rem"}} >Up to 100 Stakeholders</span>
      <h1 style={{marginLeft: "6vw", marginTop: "3vh", marginBottom: "3vh"}} >€500</h1>
      <button className='purchase-button' >Purchase</button>
      </ul>
      <ul className='plans-right-section' >
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Company Setup: We will set up your company in Capboard, including administrator permissions and individual collaborator permissions.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Stakeholder Integration: We will add all your company stakeholders into Capboard.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Transaction Incorporation: We will incorporate all company transactions from its inception to the present date, including issues, secondaries, convertible loans/SAFES.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Equity Incentive Plans: We will integrate all equity incentive plans, pools, and their allocations to employees and stakeholders.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Document Integration: We will upload corporate documents related to any specific transactions into Capboard.</span> </ul>
        <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Quick Turnaround: The setup duration will be a maximum of 14 days from when we receive the necessary company and equity incentive plan details.</span> </ul>
        </ul>
    </div>
    <div className='card-2' >
      <h2 className='title-2' >How to get started</h2>
      <ul style={{marginLeft: "2vw"}} >
      <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Choose Your Package: Select the Basic or Premium onboarding package based on your companys number of stakeholders.</span> </ul>
      <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Provide Details: Submit the required company and equity incentive plan details to our team.</span> </ul>
      <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Our team will handle the rest, ensuring your Capboard setup is completed within 14 days.</span> </ul>
      </ul>
      </div>
  </div>
  <ul style={{display: "flex", flexDirection: "column"}} >
        <span style={{marginLeft: "36.5vw", marginBottom: "2rem", marginTop: "0.5rem"}} >*VAT not included</span>
        <span style={{marginLeft: "31vw", fontSize: "13px"}} >© Copyright 2024 Capboard Tech S.L. All rights reserved.</span>
        </ul>
</div>
  )
}

export default services
